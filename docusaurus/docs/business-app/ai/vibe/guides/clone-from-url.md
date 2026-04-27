---
title: Cloning a Reference Site
sidebar_position: 3
unlisted: true
---

# Cloning a reference site

Paste a URL into Vibe and it scaffolds a faithful clone of that site. This is the fastest way to get from "I like how this looks" to a working starting point you can refine.

## How it works

When your prompt includes a URL, Vibe captures four things from the page:

- **A full-page screenshot** for visual reference. Vibe uses this for layout, composition, and visual verification of what it builds.
- **The page's branding** — colors, fonts, spacing, padding patterns. The brand colors get extracted directly from the screenshot and turned into a custom theme for your project.
- **The HTML structure** as a layout specification. Vibe reads the section ordering, the grid layouts, the component patterns.
- **The text content as markdown.** Headlines, body copy, link text, button labels.

The screenshot is what Vibe *sees*; the HTML is what it *reads*; the branding is what it *applies*; the markdown is what it *writes back*. Together those four channels are enough to reconstruct a faithful version of the page.

## A simple clone

> Build me a similar site to https://example.com

Vibe captures the page, extracts the colors, sets a custom theme from them, and scaffolds the layout. The plan that drives the run is captured in the `COMPLETED` block at the end so you can confirm what Vibe pulled from the source page.

## Steering the clone

You can blend the reference with your own constraints. The more specific you are, the more the result diverges from the source in the directions you care about.

### Keep the layout, change the brand

> Build me a similar site to https://example.com but use my own brand: navy and copper accent colors, sans-serif headings.

Vibe keeps the structure of the reference but applies your brand. Useful when you like a competitor's layout and want a clearly different look.

### Keep the visual style, change the content

> Build me a similar site to https://example.com but with content for a coffee shop chain called "Bean & Brew" with three locations.

Vibe keeps the visual design and replaces the copy with content for your business. Useful when the reference has the right *aesthetic* but wrong *subject*.

### Keep some sections, drop others

> Build me a similar site to https://example.com but skip the testimonials and pricing sections. Add a "Locations" section instead with three location cards.

Vibe replaces sections rather than rebuilding everything. Useful when only part of the reference is what you want.

## What clone is good for

- A starting point for a site that doesn't exist yet, when describing the aesthetic in words is harder than just pointing.
- Reproducing a layout pattern (a hero structure, a pricing grid, a testimonial carousel) that you've seen and liked.
- Producing a custom theme from a real-world color palette without picking the colors yourself.

## What clone isn't

- A pixel-perfect production copy. Clone is a starting point, not a forgery.
- A way to circumvent the original site's content, branding, or trademarks. The captured branding gets turned into a *theme* you can edit, and the captured content is editable copy you should replace with your own. Use the clone for structure and inspiration; supply your own brand and content for anything you ship.
- A guarantee of fidelity for complex interactions (animations, custom JavaScript behavior, dynamic data loads). Clone reproduces the static layout and content; you'll add interactivity in follow-up prompts.

## Tips for better results

- **Use a clean reference.** A page with a clear, focused layout produces a better clone than a busy page with many unrelated sections.
- **Single-page references work best.** Most clones target one page. If you want a multi-page site, scaffold the first page from a URL, then use follow-up prompts to add additional pages.
- **Iterate after the first clone.** The first generation gets you 70% of the way. Use the prompting library's [refining recipes](./prompting-library.md#refining-an-existing-app) to push it the rest of the way.

## Next steps

- [Prompting library](./prompting-library.md) — more URL-based recipes (URL-only, URL with brand override, URL with content override).
- [Visual editor and themes](./visual-editor.md) — refine the cloned theme after generation.
- [Connectors](./connectors/index.md) — wire your cloned site into Forms, Analytics, or Single sign-on.
