---
title: Getting Started
sidebar_position: 2
unlisted: true
---

# Getting Started

This guide walks you through creating your first application with Vibe.

## Prerequisites

Before you begin, you need an access link from the trusted-tester program. Your program contact provides a Vibe URL configured for your business.

## Step 1: Open Vibe

Open the access link your trusted-tester program contact gave you. The link looks like:

```
https://vibe-prod.apigateway.co/account/location/<your-id>
```

If you don't have an access link, contact your program coordinator.

## Step 2: Create a New Project

Once you're in Vibe, you'll see a project list. Click **+ Create a new app** to create your first application.

<figure>
  <img src="/img/vibe/project-list.png" alt="Vibe project list" />
  <figcaption>The Vibe project list showing your applications</figcaption>
</figure>

Give your project a name and an optional description, then click **Create**.

<figure>
  <img src="/img/vibe/create-project.png" alt="Create a new app dialog" />
  <figcaption>The create project dialog with name and description fields</figcaption>
</figure>

## Step 3: Write Your First Prompt

After creating your project, you'll land in the Vibe editor. This is where you build your application through conversation.

The editor has three main areas:

- **Chat Panel** (left) — Where you describe what you want
- **Preview** (center) — A live preview of your application
- **Mode Tabs** (top) — Switch between Preview, Design, and Code views

<figure>
  <img src="/img/vibe/empty-project.png" alt="Empty Vibe editor" />
  <figcaption>A new project with the empty editor and example prompts</figcaption>
</figure>

Type your first prompt in the chat input at the bottom of the chat panel. Here are some good starting prompts:

### Example First Prompts

**A landing page:**
> Build a modern landing page for a coffee shop called "Bean & Brew". Include a hero section with a tagline, a menu section with coffee drinks and prices, an about section, and a contact form at the bottom.

**A multi-page site:**
> Create a website for a yoga studio called "Still Point Yoga". Include a home page with class schedule, an instructors page with bios and photos, a pricing page with membership tiers, and a contact page with a form.

**A portfolio site:**
> Build a personal portfolio website for a photographer. Include a full-screen hero image, a gallery grid with hover effects, an about page, and a contact page with a form.

Press **Enter** or click the send button to submit your prompt.

## Step 4: Plan, approve, build

After submitting your prompt, Vibe runs through a consistent flow you can follow in the chat:

1. **Plan** — Vibe analyzes your request and produces a structured plan in a `PLAN` container. The plan describes what will be built and which files it will touch.
2. **Approve** — The chat enters an "Awaiting approval" state. Approve the plan to start code generation, edit it to adjust the approach first, or cancel to discard and try a different prompt.
3. **Generate** — Vibe writes the code, with status events streaming inline as it works. Type errors and build problems are caught and fixed automatically as it goes.
4. **Complete** — A `COMPLETED` block appears at the bottom of the conversation. Expand it to see the plan that ran and the files that changed.

<figure>
  <img src="/img/vibe/generation-in-progress.png" alt="Generation in progress" />
  <figcaption>Vibe generating code with the implementation plan and progress visible in the chat</figcaption>
</figure>

The chat auto-scrolls to follow new events as they arrive. If you scroll up to read older context, follow-tail pauses; scroll back near the bottom and it resumes.

<figure>
  <img src="/img/vibe/generation-complete.png" alt="Completed generation with preview" />
  <figcaption>A completed generation showing the chat summary and live preview</figcaption>
</figure>

## Step 5: Iterate and Refine

Your first generation is just the starting point. Use follow-up prompts to refine your application:

> Change the hero background to a dark gradient and make the tagline larger

> Add a testimonials section between the menu and contact sections

> Make the navigation sticky and add a mobile hamburger menu

Each prompt builds on the current state of your application. Vibe understands the context of what's already been built and makes targeted changes.

## Understanding the Interface

### Chat Panel

The chat panel shows your conversation history with Vibe. Each exchange shows:

- **Your message** — What you asked for.
- **Vibe's response** — Streamed inline as the work happens: clarifying questions (when needed), the `PLAN` container with approve/edit/cancel actions, status events as files are written, and a `COMPLETED` block at the end with collapsible details for the plan that ran and the files that changed.
- **Inline screenshots** — When Vibe captures a reference site or runs a visual check, the screenshot appears inline in the status row.
- **Feedback buttons** — Thumbs up/down to rate each generation.

### Chat Input

At the bottom of the chat panel, you'll find:

| Control | Description |
|---------|-------------|
| **Text input** | Type your prompt here. Press Enter to send, Shift+Enter for a new line. Paste a URL in the input to clone a reference site (see [Cloning a reference site](./clone-from-url.md)). |
| **Microphone** | Record voice input. Vibe transcribes your speech into a prompt. |
| **Image upload** | Attach screenshots or mockups to show Vibe what you want. |

<figure>
  <img src="/img/vibe/chat-input.png" alt="Chat input controls" />
  <figcaption>The chat input with microphone and image upload buttons</figcaption>
</figure>

### Preview, Design, and Code Modes

Use the tabs at the top to switch between views:

- **Preview** — Live preview of your built application
- **Design** — Visual editor for themes, colors, and element-level edits. See [Visual Editor](./guides/visual-editor.md).
- **Code** — File explorer and code editor to view or manually edit source files

<figure>
  <img src="/img/vibe/code-view.png" alt="Code view with file explorer" />
  <figcaption>Code mode showing the file explorer and editor</figcaption>
</figure>

### Toolbar

The top-right toolbar provides:

- **Refresh** — Reload the preview.
- **Fullscreen** — Expand the preview to full screen.
- **Download** — Download a complete archive of your project: full source, all assets, and the git history of every checkpoint.
- **Checkpoints** — Browse and restore previous versions of your project.

## Tips for New Users

- **Start simple** — Begin with a clear, focused prompt. You can always add complexity in later iterations.
- **Be specific** — Instead of "make it look better," try "increase the padding around cards to 24px and add a subtle shadow."
- **Iterate in small steps** — Make one or two changes per prompt rather than rewriting the whole application.
- **Use images** — If you have a design mockup, attach a screenshot to show Vibe what you're going for.
- **Paste a URL** — If a website you like is closer to your target than words can describe, paste its URL and Vibe will clone the look and structure as a starting point.
- **Read the plan** — Every generation produces a plan you can approve, edit, or cancel. For big changes, the plan is the right moment to catch a misalignment before any code is written.

## Next Steps

- [Prompting Guide](./guides/prompting.md) — The principles behind effective prompts.
- [Prompting library](./guides/prompting-library.md) — Concrete prompts you can paste, organized by intent.
- [Cloning a reference site](./clone-from-url.md) — Start from an existing site by pasting its URL.
- [Visual Editor & Themes](./guides/visual-editor.md) — Customize colors and styles, and click elements in design mode to edit them precisely.
- [Planning](./guides/plan-mode.md) — How every generation flows through plan, approve, generate, complete.
- [Connectors](./guides/connectors.md) — Wire your app into Forms, SSO, Analytics, and AI image generation.
- [Error handling and troubleshooting](./guides/troubleshooting.md) — How auto-fix works and what to do when it doesn't.
