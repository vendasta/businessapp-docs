---
title: "Download & Host Your Project Elsewhere"
sidebar_label: "Download & Self-Host"
description: On the Pro plan, download a project's source code and run or host it anywhere that supports Node.js.
tags: [vibe, ai, download, hosting, portability, open-source]
keywords: [vibe download project, vibe source code, vibe self host, vibe portable, vibe react tanstack, move vibe site, vibe export]
sidebar_position: 13
unlisted: false
---

# Download & Host Your Project Elsewhere

## What this covers

Every project you build in Vibe is a standard web application written in open, widely-used frameworks: React, TanStack Start, Vite, and Tailwind CSS. None of it is a proprietary format, and none of it is locked to Business App.

On the Pro plan you can download the source code of a project, run it on your own computer, and host it on any provider that supports Node.js. Publishing with Vibe keeps the servers, certificates, and connectors managed for you; hosting it elsewhere puts all of that in your hands.

:::warning
Downloading a project requires the Pro plan. On the Free and Standard plans, `Download` shows a lock and opens an upgrade prompt instead. See [Credits](../credits.md).
:::

## Why this matters

- **The application code is all there**: Every source file, along with the full history of every checkpoint.
- **Nothing proprietary**: The app is built on frameworks maintained by the open-source community and used by companies of every size. Any web developer can read, change, and extend it.
- **No dead end**: If your needs change, you can move the project to another host without rebuilding it.
- **Standard tooling**: A developer needs `npm` and Node.js and nothing else. There is no special client, license, or account required to build and run the code.

## What's in the download

Click `Download` in the editor toolbar to get a `.vibe.tar.gz` archive named after your project. It contains:

| Contents | Description |
| --- | --- |
| Source code | All application code under `src/`: pages, components, styling, and server functions |
| Configuration | `package.json`, `vite.config.ts`, `tailwind.config.ts`, and the TypeScript config |
| Checkpoint history | A `.git` folder holding a commit for every checkpoint in the project |
| Project metadata | A `.vibe-meta/` folder describing the project name, template, and connectors |

Three things are **not** in the archive:

- **Generated images**. Images Vibe created for you are served from a hosted image URL that the code points at. They keep loading after a move, but they are not files in your project. To hold a full copy, save each one into a `public/` folder and update the code to use the local path.
- **Discovery files**. `robots.txt`, `sitemap.xml`, and `llms.txt` are generated each time you publish with Vibe. A build you run yourself does not produce them. See [SEO & LLM Indexing](./seo-and-indexing.md).
- **Database credentials**. If your app uses the Supabase connector, the connection values are replaced with placeholders such as `YOUR_SUPABASE_PROJECT`. Search the project for that text and fill in your own project's values before the app can reach a database. See [Supabase](../connectors/supabase.md).

:::warning
The checkpoint history in the `.git` folder is a record of earlier versions of your files. If a real credential was ever written into the project, it can remain readable in that history even when the current files show a placeholder. Treat a downloaded archive as sensitive, and share it only with people you would trust with the project's keys.
:::

## What travels with the code, and what doesn't

The pages, layout, styling, form interfaces, and any logic Vibe wrote for you are all in the download and run anywhere.

Features backed by Business App services are wired to Business App and stop working once the app is hosted elsewhere. These are the connector-based features: Forms submissions routing to your CRM, Analytics data, Reviews content, Webchat, CRM records, and single sign-on. The screens still render, and a developer replaces the data source behind them with whatever you want to use instead. See [Connectors](../connectors/index.md).

## Run a downloaded project on your computer

These steps need a terminal and [Node.js](https://nodejs.org) version 22 or newer. If you aren't comfortable with a command line, hand this section to a developer. It takes them a few minutes.

1. Extract the archive. The file name below is an example; use the name of the file in your Downloads folder. The archive has no folder of its own inside it, so extract it into one you create:

   ```bash
   mkdir my-project
   tar -xzf my-project.vibe.tar.gz -C my-project
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

- `dist/client`: the static files a browser downloads (JavaScript, CSS, images)
- `dist/server`: the server bundle that renders each page as complete HTML

`dist/` does not need `node_modules`, so along with the server file in the next section it's all you copy to a server.

## Host it yourself

Because pages are rendered on the server, the app needs a host that runs Node.js: a virtual server, a container platform, or any managed Node hosting service. Static-only hosting is not enough on its own.

The server bundle exports a standard web request handler rather than starting a server of its own. Save this file as `server.mjs` next to the `dist/` folder to serve the app:

```javascript
// Serves dist/client as static files; everything else goes to the page renderer.
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import path from "node:path";

const PORT = process.env.PORT || 3000;
// The address the site is reached at, e.g. https://example.com. Set this whenever
// the app runs behind a proxy: the scheme and host a client sends can be anything.
const PUBLIC_ORIGIN = process.env.PUBLIC_ORIGIN;
// Resolved against this file, not the working directory: a service unit that
// starts the app from elsewhere would otherwise find no static files.
const CLIENT_DIR = path.resolve(import.meta.dirname, "dist/client");
const app = await import("./dist/server/server.js");
const render = app.default.fetch.bind(app.default);

const MIME = {
  ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".json": "application/json",
  ".html": "text/html; charset=utf-8", ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml", ".webmanifest": "application/manifest+json",
};

const server = createServer(async (req, res) => {
  try {
    // A public address receives malformed paths constantly. Decoding "/%" throws,
    // so this has to be caught before anything else touches the path.
    let pathname;
    try {
      pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    } catch {
      res.writeHead(400, { "content-type": "text/plain" });
      res.end("Bad request");
      return;
    }

    const file = path.join(CLIENT_DIR, path.normalize(pathname));
    if (file.startsWith(CLIENT_DIR + path.sep) && existsSync(file) && statSync(file).isFile()) {
      res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" });
      await pipeline(createReadStream(file), res);
      return;
    }

    // Without PUBLIC_ORIGIN the app falls back to the request's own host, which is
    // fine locally and produces http:// links once a proxy terminates HTTPS.
    const origin = PUBLIC_ORIGIN || `http://${(req.headers.host || "localhost").split(",")[0].trim()}`;
    const body = ["GET", "HEAD"].includes(req.method) ? undefined : Readable.toWeb(req);
    const response = await render(new Request(`${origin}${req.url}`, {
      method: req.method, headers: req.headers, body, duplex: "half",
    }));

    // Set-Cookie repeats, and collapsing it to a single value breaks sign-in.
    for (const [key, value] of response.headers) {
      if (key.toLowerCase() !== "set-cookie") res.setHeader(key, value);
    }
    const cookies = response.headers.getSetCookie?.() ?? [];
    if (cookies.length) res.setHeader("set-cookie", cookies);

    res.writeHead(response.status);
    if (response.body) await pipeline(Readable.fromWeb(response.body), res);
    else res.end();
  } catch (error) {
    // A stream that fails mid-response has already sent headers, so the only
    // thing left is to close the connection.
    console.error("request failed:", error);
    if (res.headersSent) { res.destroy(); return; }
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Internal server error");
  }
});

// Container hosts send SIGTERM on every deploy; without this, in-flight requests are cut.
process.on("SIGTERM", () => server.close(() => process.exit(0)));

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
```

Then start it:

```bash
node server.mjs
```

The app is served at `http://localhost:3000`, or at whatever port you set in the `PORT` environment variable.

Two things to set up on a real server:

- **HTTPS**: put the app behind a reverse proxy or load balancer that terminates HTTPS, and set `PUBLIC_ORIGIN` to the address the site is reached at, such as `https://example.com`. Your pages then produce `https://` links. Most managed Node hosting services terminate HTTPS for you.
- **Restarts**: run the process under a process manager or a container restart policy, so the site comes back if the process stops or the machine reboots. `node server.mjs` on its own does not restart.

Most Node.js hosting services need only the build command (`npm run build`), the start command (`node server.mjs`), and `PUBLIC_ORIGIN` set to your address.

## What you take on by hosting it yourself

Publishing from Vibe is one click, and everything below is handled for you. Running the project on your own infrastructure means taking these on:

| Handled for you when you publish with Vibe | Your responsibility when you self-host |
| --- | --- |
| Servers, scaling, and uptime | Provisioning, monitoring, and paying for infrastructure |
| A failed process is restarted for you | Monitoring the process and restarting it after a crash or reboot |
| HTTPS certificates, issued and renewed | Obtaining and renewing certificates |
| Custom domain setup and DNS verification | DNS and certificate configuration by hand |
| A new version live in seconds after each publish | Rebuilding and redeploying after every change |
| `robots.txt`, `sitemap.xml`, and `llms.txt` on every publish | Producing and maintaining those files yourself |
| Connectors already wired to your business data | Replacing forms, analytics, reviews, chat, CRM, and sign-on with other services |
| Security updates to the hosting platform | Patching the server and its dependencies |
| Editing the app by describing a change in chat | Editing source code directly, or paying a developer to |

Most businesses publish with Vibe because it's faster and costs less than running a server. The point of the download is that you never have to.

## Frequently Asked Questions

<details>
<summary>Which plan do I need to download a project?</summary>

The Pro plan. On the Free and Standard plans, `Download` shows a lock and opens an upgrade prompt instead. See [Credits](../credits.md).

</details>

<details>
<summary>Is the code Vibe generates proprietary?</summary>

No. Projects are built on React, TanStack Start, Vite, and Tailwind CSS, open-source frameworks used across the industry. Any developer familiar with modern web development can work on the code.

</details>

<details>
<summary>Do I need to keep my subscription to keep the code I downloaded?</summary>

A downloaded archive runs on its own. Download a copy before deactivating a subscription, because projects are removed from Business App when a base subscription is deactivated. Note that generated images are served from a hosted URL rather than stored in the archive, so save any you want to keep into the project's `public/` folder first. See [Credits](../credits.md).

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

Forms, Reviews, Analytics, Webchat, CRM, and single sign-on are powered by Business App services and only work while your app is hosted with Vibe. The form UI still renders once you move the site, and a developer connects it to whichever service you want to use instead.

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
