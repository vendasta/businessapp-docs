---
title: Planning
sidebar_position: 3
unlisted: true
---

# Planning

Every Vibe generation starts with a plan. The plan describes which files will be created or modified, what changes will be made, and how the parts fit together. Once the plan is set, Vibe streams its work into the chat — preparing the environment, applying the theme, generating images, editing files, and validating the result — and finishes with a `COMPLETED` block summarizing what shipped.

## How a generation flows

A typical run progresses through these stages, visible inline in the chat:

1. **Preparing environment** — the sandbox spins up.
2. **Thinking** — Vibe internalizes your request and works out the architecture.
3. **Applying theme** — the visual style you described is set.
4. **Generating images** — any imagery the design needs is created.
5. **Editing files** — each component, page, and configuration file appears as Vibe writes it.
6. **Taking screenshot of preview** and **Validating design** — Vibe captures its own output and reviews it.
7. **Checking for errors** — Vibe runs a build and resolves anything broken before declaring the run finished. See [Error handling and troubleshooting](./troubleshooting.md) for how the auto-fix layers work.
8. **`COMPLETED`** — a green-checked block appears at the bottom with collapsible "Architecture & Navigation" details (the plan that ran) and a files list (everything that changed).

For a small change — tweaking text, recoloring a button, swapping a single image — the run is short. For a large change, expect more file-edit rows and a longer validation pass.

## Reading the COMPLETED block

When the run finishes, expand the `COMPLETED` block to see:

- **Architecture & Navigation** — the plan that ran, including the routes, components, and data flow Vibe set up.
- **Files** — a count and list of every file Vibe created or modified.

Read this after a big change to confirm Vibe interpreted your prompt the way you meant it. If the architecture isn't what you expected, your next prompt should correct it explicitly.

## Clarifying questions

When a prompt has more than one reasonable interpretation, Vibe pauses and asks before producing a plan. Questions arrive in three shapes:

- **Choice** — pick one option from a short list of chips.
- **Confirmation** — yes / no.
- **Free text** — a one-line answer for things that don't fit a small option set.

You answer in the chat, and Vibe resumes the same conversation. There's no new run, no refresh, no reconnect — it's the same exchange paused and continued.

### Example

For the prompt "Add a contact section," Vibe might ask:

- **Where should the contact section go?** → *Before footer* · *After hero* · *New page*
- **What fields should the form include?** → *Name + email* · *Name + email + phone + message* · *Custom*

Answer those and Vibe proceeds straight to a plan that reflects your choices.

### When Vibe asks questions vs. proposes a plan straight away

Vibe asks questions when the prompt has genuine ambiguity. Specific prompts get a plan immediately; vague prompts get questions first.

A few patterns that produce fewer questions:

- **Be specific about content.** "Add a team page with these four members…" beats "Add a team page."
- **Name the layout.** "Sticky top nav with hamburger on mobile" beats "navigation."
- **Describe the audience.** "For small business owners who aren't tech-savvy" gives Vibe enough context to choose tone, density, and copy without asking.

If Vibe is confident it understands the request, it skips the questions and shows you a plan directly. You can still edit or cancel from there.

