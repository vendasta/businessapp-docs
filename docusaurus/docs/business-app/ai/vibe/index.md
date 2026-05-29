---
title: Introduction to Vibe
sidebar_position: 1
---

# Introduction to Vibe

Vibe is an AI-powered app builder built into Business App. Describe what you want in plain English, and Vibe builds it — a working web application with real design, live preview, and direct connections to the Business App tools you already use.

You don't need to know how to code. You describe what you want; Vibe handles everything else.

![The Vibe editor with a generated app: chat panel on the left showing the COMPLETED summary, live preview of the generated marketing site on the right, and Preview/Design/Code mode tabs at the top.](./img/editor-overview.png)

## Who is Vibe for?

**Service business owners** — Build customer-facing tools that do real work: a quote estimator where visitors enter their details and get an instant price range, a booking request page, or a seasonal promotion landing page with a lead capture form that routes submissions directly to your CRM.

**Multi-location owners and managers** — Build a custom dashboard that shows performance across all your locations in exactly the layout your team needs — leads, bookings, revenue, and review ratings in one place, gated behind a sign-in screen.

**Any business running a campaign or promotion** — Build a polished landing page for a seasonal sale, a new service launch, or a limited-time offer. Start from a prompt, get a fully designed page with a working lead capture form in one generation.

**Anyone with an idea and no developer** — If you have something in mind — a client portal, a pricing calculator, a company presentation — Vibe is where you start. No technical setup, no waiting on anyone else.

## What You Can Build

Here are examples of real builds to give you a sense of what Vibe produces:

- **A service quote estimator** — Visitors enter their details and get an instant price range. A contact intake form at the bottom routes leads directly to your CRM.
- **A campaign landing page** — A hero, a highlights section, and a lead capture form, built from a single prompt using your real business name, hours, and contact details.
- **A multi-location performance dashboard** — Leads, bookings, revenue, and review ratings across all your locations. Gated behind a sign-in screen so only your team can access it.
- **A business website** — A multi-page marketing site with navigation, service descriptions, team bios, and a contact form, refined through follow-up prompts.
- **A slide deck** — A web-based presentation for a pitch or internal meeting, navigable with arrow keys and shareable as a link.

See [Use Cases](./use-cases/index.md) for step-by-step walkthroughs of these and more.

## Key Features

### Chat-Based Development
Describe what you want in the chat panel. Vibe interprets the request and generates or modifies the application. Send follow-up messages to refine the result. Vibe's chat supports multiple languages, including French, Spanish, German, Italian, Czech, Chinese, Japanese, and Korean.

### Business Knowledge
Every project has a built-in knowledge base pre-loaded with the location's Business Profile — name, services, hours, contact info, brand voice, and FAQs. When you ask Vibe to build a Contact page or add an About section, it fills in real details about the business instead of placeholder text. You can extend the knowledge base from the project settings page by adding URLs, files, or notes. See [Business Knowledge](./guides/business-knowledge.md).

### Connectors
Vibe wires your generated app into the Business App tools you already use — so what you build isn't a standalone tool, it's connected to your business. The Forms connector captures submissions and routes them directly to your CRM. The Analytics connector pulls live performance data into custom dashboards. The Single sign-on connector gates a members area behind your customers' existing Business App accounts. See [Connectors](./guides/connectors/index.md).

### Planning
Every generation produces a structured plan that drives the run. The plan, the architecture, and the file list are captured in the `COMPLETED` block at the end of each run so you can verify what was built. See [Planning](./guides/plan-mode.md).

### Cloning a reference site
Paste a URL and Vibe captures the screenshot, branding, layout, and content of that page, then scaffolds a faithful clone you can refine. The captured colors become a custom theme automatically. See [Cloning a reference site](./guides/clone-from-url.md).

### Visual Editor & Themes
Switch to Design mode to browse pre-built color themes, toggle between light and dark mode, and make targeted edits by clicking elements in the preview. When you click an element, Vibe gets exact source context (file, line, JSX tag, classes), so any change you ask for lands precisely on the element you selected. See [Visual editor and themes](./guides/visual-editor.md).

### Clarifying Questions
When your request is ambiguous, Vibe pauses and asks before going further. Questions arrive as structured prompts — pick a chip, confirm yes or no, or type a one-line answer. The conversation resumes the moment you respond.

### Multi-Modal Input
Attach images to your prompts to show Vibe what you want. Use the microphone button to dictate your changes using voice — Vibe transcribes your speech into a prompt.

### Images
Vibe gives you two ways to add images to your app: generate them from a text description, or import your own. Generated images are hosted and embedded automatically — no setup required. See [Images](./guides/image-generation.md).

### Code Editor
Switch to Code mode to view and edit the generated source code directly. Browse the file tree, open files in tabs, and make manual edits that sync with the preview.

### Checkpoints
Vibe automatically creates checkpoints as you iterate. You can view diffs between versions and restore previous states if needed.

### Credits
Vibe uses credits to measure AI activity. Your subscription includes a credit allowance, and you can purchase additional credit packs when you need more. See [Credits](./credits.md).

### Custom Domains (Professional)
On the Professional plan, you can publish your app to a domain you own. Vibe automatically provisions an SSL certificate after DNS verification is complete. See [Custom Domains](./guides/custom-domain.mdx).

## How It Works

When you send a prompt, Vibe's orchestrator coordinates multiple AI agents:

1. **You describe** what you want in the chat panel.
2. **Clarification** — If the request is ambiguous, Vibe asks structured questions before continuing.
3. **Planning** — A planning agent produces a structured plan describing the architecture, navigation, and which files will be touched. The plan also commits to a named design system — palette, fonts, and UI primitives — before any code is written.
4. **Generation** — A generation agent writes the code file by file, applying the theme, generating images, and editing components in real time. Type-check and build verification run continuously to catch and fix issues.
5. **Validation** — Vibe takes a screenshot of the rendered preview and runs a build check. Before declaring the task complete, Vibe runs a final type check and self-corrects any remaining issues — up to three rounds. If they can't be resolved, the run finishes with a "verified with issues" status instead of a silent claim of success.
6. **Preview** — The live preview updates as soon as the build is clean.
7. **Iteration** — You review the result and send follow-up prompts to refine it. Runtime errors in the preview trigger an auto-fix banner.

All of this happens through a streaming interface — status updates, file changes, screenshots, and the live preview update in real time.

## Frequently Asked Questions

<details>
<summary>Do I need coding experience to use Vibe?</summary>

No. You describe what you want in plain English and Vibe handles the code. If you want to make manual edits, Code mode gives you direct access to the source files.

</details>


<details>
<summary>Can I start from an existing website?</summary>

Yes. Paste any URL into the chat input and Vibe captures the page's screenshot, branding, layout, and content, then scaffolds a clone you can refine. See [Cloning a reference site](./guides/clone-from-url.md).

</details>

<details>
<summary>What if Vibe misunderstands my request?</summary>

When a prompt is ambiguous, Vibe pauses and asks clarifying questions before generating. If the result isn't what you wanted, send a follow-up prompt to correct it or restore a previous checkpoint.

</details>

<details>
<summary>How do I undo a change I don't like?</summary>

Vibe creates checkpoints automatically as you iterate. Open the Checkpoints panel from the toolbar to view diffs and restore any previous version.

</details>

<details>
<summary>What languages can I use in the chat?</summary>

Vibe's chat supports multiple languages, including French, Spanish, German, Italian, Czech, Chinese, Japanese, and Korean.

</details>

## Next Steps

- [Getting Started](./getting-started.md) — Create your first app and learn the basics
- [Business Knowledge](./guides/business-knowledge.md) — Use real business details in your generated apps
- [Prompting Guide](./guides/prompting.md) — Write prompts that get better results
- [Cloning a Reference Site](./guides/clone-from-url.md) — Scaffold an app from any URL
- [Visual Editor & Themes](./guides/visual-editor.md) — Apply themes and edit elements visually
- [Planning](./guides/plan-mode.md) — Understand how Vibe plans before it builds
- [Images](./guides/image-generation.md) — Generate images from a prompt or import your own
- [Connectors](./guides/connectors/index.md) — Wire your app into forms, analytics, and sign-on
- [Prompting Library](./guides/prompting-library.md) — Ready-made prompts for common use cases
- [Troubleshooting](./guides/troubleshooting.md) — Fix common errors and unexpected behavior
- [Use Cases](./use-cases/index.md) — See real examples of what you can build with Vibe
- [Credits](./credits.md) — Understand how credits work and how to purchase more
- [Custom Domains](./guides/custom-domain.mdx) — Publish your app to a domain you own (Professional)
