---
title: Introduction to Vibe
sidebar_position: 1
unlisted: true
---

# Introduction to Vibe

Vibe is an AI-powered application builder. Describe what you want in plain English, and Vibe generates a fully functional React application — complete with components, routing, styling, and a live preview.

## What is Vibe?

Vibe turns natural language prompts into real, deployable web applications. Instead of writing code from scratch, you describe what you want to build and Vibe's multi-agent AI system handles the rest:

- **Planning** — Understands your request and creates an implementation plan
- **Generation** — Writes React components, pages, and styling
- **Building** — Compiles the application and surfaces any build errors for you to address
- **Preview** — Shows you the result in a live preview as changes are made

The entire process streams in real-time, so you can watch your application take shape as the AI works.

<figure>
  <img src="/img/vibe/editor-overview.png" alt="Vibe editor overview" />
  <figcaption>The Vibe editor showing chat panel, live preview, and mode tabs</figcaption>
</figure>

## Key Features

### Chat-Based Development
Describe what you want in the chat panel. Vibe interprets your request and generates or modifies your application. You can iterate by sending follow-up messages to refine the result.

### Visual Editor & Themes
Switch to Design mode to browse pre-built color themes, toggle between light and dark mode, and make visual edits to elements directly — no code required.

### Plan Mode
For complex changes, enable Plan mode to have Vibe show you its implementation plan before it starts coding. You can review, edit, and approve the plan before any code is written.

### Clarifying Questions
When your request is ambiguous, Vibe asks clarifying questions before proceeding. This ensures the generated output matches your intent rather than making assumptions.

### Multi-Modal Input
Attach images to your prompts to show Vibe what you want. Use the microphone button to dictate your changes using voice — Vibe transcribes your speech into a prompt.

### Integrations
Vibe connects to platform features like Forms. You can build applications that embed contact forms for lead capture, feedback, and more.

### AI Image Generation
Generate custom images directly within your application using Gemini. Describe the image you want, and Vibe creates and embeds it in your project.

### Code Editor
Switch to Code mode to view and edit the generated source code directly. Browse the file tree, open files in tabs, and make manual edits that sync with the preview.

### Checkpoints
Vibe automatically creates checkpoints as you iterate. You can view diffs between versions and restore previous states if needed.

## How It Works

When you send a prompt, Vibe's orchestrator coordinates multiple AI agents:

1. **You describe** what you want in the chat panel
2. **Analysis** — The AI understands your intent and may ask clarifying questions
3. **Planning** — For complex changes, a planning agent analyzes the codebase and creates a step-by-step plan
4. **Generation** — A generation agent writes the code, creating and editing files
5. **Building** — Vibe builds the React application and shows you a live preview
6. **Iteration** — You review the result and send follow-up prompts to refine it

All of this happens through a streaming interface — you see status updates, file changes, and the live preview updating in real-time.

## Tech Stack

Applications built with Vibe use:

- **React 18+** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **shadcn/ui** component library (50+ pre-built components)
- **Lucide** icons

## Next Steps

- [Getting Started](./getting-started.md) — Create your first project
- [Prompting Guide](./guides/prompting.md) — Write effective prompts
- [Visual Editor & Themes](./guides/visual-editor.md) — Customize your application's look
- [Plan Mode](./guides/plan-mode.md) — Control how Vibe approaches complex changes
- [Connectors](./guides/connectors.md) — Wire your app into Forms, SSO, Analytics, and AI image generation
