---
title: "SEO & LLM Indexing"
sidebar_label: "SEO & Indexing"
description: How Vibe apps stay visible to search engines and AI assistants — server-rendered pages, automatic discovery files, and indexing controls in project settings.
tags: [vibe, ai, seo, indexing, llms]
keywords: [vibe seo, vibe llms.txt, vibe robots.txt, vibe sitemap, vibe indexing controls, vibe ai search]
sidebar_position: 9
unlisted: false
---

# SEO & LLM Indexing

## What is SEO & LLM Indexing in Vibe?

Apps built with Vibe are delivered as fully rendered HTML straight from the server. Search engine crawlers and AI answer engines — ChatGPT, Perplexity, Google AI Overviews — read the actual content of your pages rather than an empty JavaScript shell, and crawlers see exactly the same content your visitors do. Your app can rank in search results, be cited by AI assistants, and be found.

Every publish also generates the discovery files that search engines and AI assistants look for, with no configuration required.

## Why is it important?

- **Search engines read real content**: Because pages arrive as fully rendered HTML, crawlers index what's actually on the page — not a blank shell waiting for JavaScript.
- **AI assistants can cite you**: Answer engines like ChatGPT, Perplexity, and Google AI Overviews read the same content your visitors see, so your app can appear in their answers.
- **Nothing to set up**: Discovery files are generated automatically on every publish. They're on by default, and you can override any of them.
- **You stay in control**: The SEO section in project settings gives you simple toggles for how your app presents itself to search engines and AI assistants.

## What's included?

Every publish generates three discovery files automatically:

| File | What it's for |
|---|---|
| `robots.txt` | Tells search engine crawlers which parts of your app they can visit |
| `sitemap.xml` | Lists your app's pages so crawlers can find and index all of them |
| `llms.txt` | The file AI assistants read to understand what your site offers |

Each file is on by default and individually overridable — if your project ships its own version of one, yours is used instead.

You also get:

- **Indexing controls**: The SEO section in [project settings](./project-settings.md) puts indexing under your control, with simple toggles for how the app presents itself to search engines and AI assistants.
- **Identical content for everyone**: Crawlers and visitors receive the same fully rendered pages.

## How to use it

### Control how your app is indexed

1. Open your project's settings.
2. Select the **SEO** section.
3. Use the toggles to control how your app presents itself to search engines and AI assistants.

See [project settings](./project-settings.md) for the full settings page.

### Use your own discovery files

The generated `robots.txt`, `sitemap.xml`, and `llms.txt` are each individually overridable. If your project ships its own version of any of these files, Vibe uses yours instead of the generated one — you can override one file and keep the automatic versions of the others.

### Bring an existing project up to date

Ask Vibe to upgrade your project and it converts it to the server-rendered runtime for you — pages, styling, and behavior stay intact. You don't have to rebuild anything to benefit.

## Frequently Asked Questions

<details>
<summary>What is llms.txt?</summary>

`llms.txt` is the file AI assistants read to understand what a site offers. Vibe generates it automatically on every publish, so AI answer engines can understand and reference your app without any setup on your part.
</details>

<details>
<summary>Do I need to configure anything for my app to be indexed?</summary>

No. Pages are delivered as fully rendered HTML, and `robots.txt`, `sitemap.xml`, and `llms.txt` are generated automatically on every publish. If you want to adjust how your app presents itself to search engines and AI assistants, use the toggles in the SEO section of [project settings](./project-settings.md).
</details>

<details>
<summary>Can I use my own robots.txt, sitemap.xml, or llms.txt?</summary>

Yes. Each generated file is individually overridable — if your project ships its own version, Vibe uses yours instead. You can override one file and keep the automatic versions of the others.
</details>

<details>
<summary>How do I control whether search engines and AI assistants index my app?</summary>

Open your project's settings and select the **SEO** section. Simple toggles control how the app presents itself to search engines and AI assistants.
</details>

<details>
<summary>Do search engines see different content than my visitors?</summary>

No. Crawlers and visitors receive identical content — the same fully rendered HTML pages.
</details>

<details>
<summary>How do I get server-rendered pages on a project I built earlier?</summary>

Ask Vibe to upgrade your project. It converts the project to the server-rendered runtime for you, with pages, styling, and behavior intact — no rebuild required.
</details>

## Next Steps

- [Project Settings](./project-settings.md) — Configure your project's SEO, knowledge, connectors, and more
- [Getting Started](../getting-started.md) — Walk through a full generation end to end
- [Custom Domains](./custom-domain.mdx) — Publish your app to a domain you own (Professional)
