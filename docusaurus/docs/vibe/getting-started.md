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

## Step 4: Watch Vibe Build

After submitting your prompt, Vibe streams the generation process in real-time:

1. **Analysis** — Vibe interprets your request and may show its understanding
2. **Generation** — You'll see files being created and modified in the chat
3. **Build** — The application is compiled and the preview updates

<figure>
  <img src="/img/vibe/generation-in-progress.png" alt="Generation in progress" />
  <figcaption>Vibe generating code with the implementation plan and progress visible in the chat</figcaption>
</figure>

Each generation shows a summary of what was done, including the number of tasks completed and files changed. You can expand these to see the details.

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

- **Your message** — What you asked for
- **Vibe's response** — A summary of what was understood and done, with expandable details for tasks completed and files changed
- **Feedback buttons** — Thumbs up/down to rate each generation

### Chat Input

At the bottom of the chat panel, you'll find:

| Control | Description |
|---------|-------------|
| **Text input** | Type your prompt here. Press Enter to send, Shift+Enter for a new line. |
| **Plan toggle** | Enable Plan mode to review changes before they're made. See [Plan Mode](./guides/plan-mode.md). |
| **Microphone** | Record voice input — Vibe transcribes your speech into a prompt. |
| **Image upload** | Attach screenshots or mockups to show Vibe what you want. |

<figure>
  <img src="/img/vibe/chat-input.png" alt="Chat input controls" />
  <figcaption>The chat input with Plan toggle, microphone, and image upload buttons</figcaption>
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

- **Refresh** — Reload the preview
- **Fullscreen** — Expand the preview to full screen
- **Download** — Download your project as a ZIP file
- **Checkpoints** — Browse and restore previous versions of your project

## Tips for New Users

- **Start simple** — Begin with a clear, focused prompt. You can always add complexity in later iterations.
- **Be specific** — Instead of "make it look better", try "increase the padding around cards to 24px and add a subtle shadow".
- **Iterate in small steps** — Make one or two changes per prompt rather than rewriting the whole application.
- **Use images** — If you have a design mockup or a website you like, attach a screenshot to show Vibe what you're going for.
- **Try Plan mode** — For big changes, enable Plan mode to see what Vibe intends to do before it starts.

## Next Steps

- [Prompting Guide](./guides/prompting.md) — Learn how to write effective prompts
- [Visual Editor & Themes](./guides/visual-editor.md) — Customize colors and styles visually
- [Plan Mode](./guides/plan-mode.md) — Review and approve changes before they're made
