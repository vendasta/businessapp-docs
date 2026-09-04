---
title: "Download & Host Your Project Elsewhere"
sidebar_label: "Download & Self-Host"
description: Vibe projects are built on open frameworks. On the Pro plan, download the complete source code and run or host it anywhere that supports Node.js.
tags: [vibe, ai, download, hosting, portability, open-source]
keywords: [vibe download project, vibe source code, vibe self host, vibe portable, vibe react tanstack, move vibe site, vibe export]
sidebar_position: 13
unlisted: false
---

# Download & Host Your Project Elsewhere

## What this covers

Every project you build in Vibe is a standard web application written in open, widely-used frameworks — React, TanStack Start, Vite, and Tailwind CSS. None of it is a proprietary format, and none of it is locked to Business App.

On the Pro plan you can download the complete source code of a project, run it on your own computer, and host it on any provider that supports Node.js. Publishing with Vibe stays the simplest and least expensive option, but it is not the only one.

:::warning
Downloading a project requires the Pro plan. On the Free and Standard plans, the `Download` button is not available. See [Credits](../credits.md).
:::

## Why this matters

- **The download is complete**: Every file, every asset, and the full history of every checkpoint.
- **Nothing proprietary**: The app is built on frameworks maintained by the open-source community and used by companies of every size. Any web developer can read, change, and extend it.
- **No dead end**: If your needs change, you can move the project to another host without rebuilding it.
- **Standard tooling**: A developer needs `npm` and Node.js and nothing else. There is no special client, license, or account required to build and run the code.

## What's in the download

Click `Download` in the editor toolbar to get a `.vibe.tar.gz` archive containing:

| Contents | Description |
| --- | --- |
| Source code | All application code under `src/` — pages, components, styling, and server functions |
| Configuration | `package.json`, `vite.config.ts`, `tailwind.config.ts`, and the TypeScript config |
| Checkpoint history | A `.git` folder holding a commit for every checkpoint in the project |
| Project metadata | A `.vibe-meta/` folder describing the project name, template, and connectors |

:::info
Database credentials are replaced with placeholders in the download. If your app uses the Supabase connector, you supply your own database connection details when you host the project yourself. See [Supabase](../connectors/supabase.md).
:::

## What travels with the code, and what doesn't

The pages, layout, styling, images, forms UI, and any logic Vibe wrote for you are all in the download and run anywhere.

Features backed by Business App services are wired to Business App and stop working once the app is hosted elsewhere. These are the connector-based features: Forms submissions routing to your CRM, Analytics data, Reviews content, Webchat, CRM records, and single sign-on. The screens still render — a developer replaces the data source behind them with whatever you want to use instead. See [Connectors](../connectors/index.md).

Generated images are served from a hosted image URL. To make a self-hosted copy fully independent, save those images into a `public/` folder in the project and point the code at the local paths instead.

## Run a downloaded project on your computer

These steps need a terminal and [Node.js](https://nodejs.org) version 22 or newer. If you aren't comfortable with a command line, hand this section to a developer — it takes them a few minutes.

1. Extract the archive:

   ```bash
   tar -xzf my-project.vibe.tar.gz
   cd my-project
   ```

2. Install the dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The terminal prints a local address, such as `http://localhost:8080`. Open it in a browser and you'll see your app, with changes reloading as files are edited.

:::info
The `--legacy-peer-deps` flag is needed because the project includes a development-only plugin that supports the visual editor. It has no effect on the site you build and serve.
:::

## Build the app for production

```bash
npm run build
```

This produces a `dist/` folder with two parts:

- `dist/client` — the static files a browser downloads (JavaScript, CSS, images)
- `dist/server` — the server bundle that renders each page as complete HTML

The `dist/` folder is self-contained. It does not need `node_modules`, so it's the only thing you copy to a server.

## Host it yourself

Because pages are rendered on the server, the app needs a host that runs Node.js — a virtual server, a container platform, or any managed Node hosting service. Static-only hosting is not enough on its own.

The server bundle exports a standard web request handler. Save this file as `server.mjs` next to the `dist/` folder to serve the app:

```javascript
// Serves dist/client as static files; everything else goes to the page renderer.
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { Readable } from "node:stream";
import path from "node:path";

const PORT = process.env.PORT || 3000;
const CLIENT_DIR = path.resolve("dist/client");
const app = await import("./dist/server/server.js");
const render = app.default.fetch.bind(app.default);

const MIME = {
  ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".json": "application/json",
};

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const file = path.join(CLIENT_DIR, path.normalize(decodeURIComponent(url.pathname)));
  if (file.startsWith(CLIENT_DIR + path.sep) && existsSync(file) && statSync(file).isFile()) {
    res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" });
    createReadStream(file).pipe(res);
    return;
  }
  const body = ["GET", "HEAD"].includes(req.method) ? undefined : Readable.toWeb(req);
  const response = await render(new Request(url, {
    method: req.method, headers: req.headers, body, duplex: "half",
  }));
  res.writeHead(response.status, Object.fromEntries(response.headers));
  if (response.body) Readable.fromWeb(response.body).pipe(res);
  else res.end();
}).listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
```

Then start it:

```bash
node server.mjs
```

The app is served at `http://localhost:3000`, or at whatever port you set in the `PORT` environment variable. On a real server, put it behind a reverse proxy or load balancer that handles HTTPS. Most Node.js hosting services do this for you and simply need the build command (`npm run build`) and the start command (`node server.mjs`).

## What you take on by hosting it yourself

Publishing from Vibe is one click, and everything below is handled for you. Running the project on your own infrastructure means taking these on:

| Handled for you when you publish with Vibe | Your responsibility when you self-host |
| --- | --- |
| Servers, scaling, and uptime | Provisioning, monitoring, and paying for infrastructure |
| HTTPS certificates, issued and renewed | Obtaining and renewing certificates |
| Custom domain setup and DNS verification | DNS and certificate configuration by hand |
| A new version live in seconds after each publish | Rebuilding and redeploying after every change |
| Connectors already wired to your business data | Replacing forms, analytics, reviews, chat, CRM, and sign-on with other services |
| Security updates to the hosting platform | Patching the server and its dependencies |
| Editing the app by describing a change in chat | Editing source code directly, or paying a developer to |

Most businesses publish with Vibe because it's faster and costs less than running a server. The point of the download is that you never have to.

## Frequently Asked Questions

<details>
<summary>Which plan do I need to download a project?</summary>

The Pro plan. The `Download` button is not available on the Free or Standard plans. See [Credits](../credits.md).

</details>

<details>
<summary>Is the code Vibe generates proprietary?</summary>

No. Projects are built on React, TanStack Start, Vite, and Tailwind CSS — open-source frameworks used across the industry. Any developer familiar with modern web development can work on the code.

</details>

<details>
<summary>Do I need to keep my subscription to keep the code I downloaded?</summary>

No. A downloaded archive is yours to keep and run. Download a copy before deactivating a subscription, because projects are removed from Business App when a base subscription is deactivated. See [Credits](../credits.md).

</details>

<details>
<summary>Can a developer keep building on a downloaded project?</summary>

Yes. It's a standard project with standard tooling. A developer edits files, runs `npm run dev` to preview, and `npm run build` to produce a release.

</details>

<details>
<summary>Can I move a project back into Vibe after editing it elsewhere?</summary>

Changes made outside Vibe do not sync back into your Vibe project automatically. Keep editing in one place at a time, and treat a download as a snapshot of that moment.

</details>

<details>
<summary>Why doesn't my contact form work after I move the site?</summary>

Forms, Reviews, Analytics, Webchat, CRM, and single sign-on are powered by Business App services and only work while your app is hosted with Vibe. The form UI still renders once you move the site — a developer connects it to whichever service you want to use instead.

</details>

<details>
<summary>Can I host it as plain static files with no server?</summary>

Not without changes. Pages are rendered on the server so search engines and AI assistants receive complete HTML, which is why the app needs a Node.js host. See [SEO & LLM Indexing](./seo-and-indexing.md).

</details>

## Next Steps

- [Getting Started](../getting-started.md) — Where the `Download` button lives in the toolbar
- [Connectors](../connectors/index.md) — What each connector adds to your app
- [Custom Domains](./custom-domain.mdx) — Publish to a domain you own without leaving Vibe
- [Credits](../credits.md) — How credits and subscriptions work
