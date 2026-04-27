---
title: "Build a landing page"
description: A case study and walkthrough for building a landing page with Vibe, based on a cat-run pizza restaurant example.
sidebar_position: 1
unlisted: true
---

# Build a landing page

Vibe is a strong fit for a landing page or small marketing site. You describe what the page should contain, iterate with focused follow-ups, and end up with a styled, responsive page with real images and working features.
This page walks through the full flow using a real example: a multi-page site for a cat-run pizza restaurant, built from a single starting prompt. See the Credits section for attribution.

## The starting point

Every Vibe project starts from a blank editor. You land in the chat panel with an empty preview and decide what to build.

<figure>
  <img src="/img/vibe/vibe-blank.png" alt="Blank Vibe editor before any prompt is sent" />
  <figcaption>The Vibe editor at the start of a new project</figcaption>
</figure>

## Step 1: Write the starting prompt

Start broad and let Vibe scaffold the full page in one pass. Follow the [Prompting Guide](../guides/prompting.md) principle of describing what you want, not how to build it. A good starting prompt names the business concept, identifies the key visuals, and lists the sections you expect.

The starting prompt:

> make a website for my pizza restaurant that is run by cats. show images of cats making pizzas please along with a menu, about us section, and a food ordering page

The prompt is short but specific: it names the business (pizza restaurant run by cats), calls out the hero visual (cats making pizzas), and lists the sections (menu, about us, ordering).

## Step 2: Let Vibe plan and generate

After you send a starting prompt, Vibe generates a plan, executes it, and shows the files it creates in real time. You see the architecture decisions before any code is written and watch the file tree populate as components are generated. See [Plan Mode](../guides/plan-mode.md) for how to review and edit the plan before generation.

<figure>
  <img src="/img/vibe/vibe-plan-and-files.png" alt="Vibe's plan and generated files for the cat pizzeria project" />
  <figcaption>Vibe shows its plan and the files it creates as it builds the site</figcaption>
</figure>

The prompt triggered a plan covering:

- A multi-page architecture with React Router for Home, Menu and Order, and About pages
- Shared layout components: Navbar (with a mini Cart button), Footer, and a Layout wrapper
- Page-specific content: hero with a bold ordering CTA on Home, a pizza grid with "Add to cart" buttons on Menu and Order, and an origin story with "Staff" cards (Chef Whiskers, Manager Mittens) on About
- Unsplash placeholder images of cats and pizzas to bring the concept to life
- A playful, warm visual direction using semantic color tokens

## Step 3: The result

From that single prompt, Vibe produced a full multi-page site with navigation, a menu grid, an ordering flow, staff profiles, and themed imagery.

<figure>
  <img src="/img/vibe/vibe-cat-pizza-landing-page.png" alt="The finished cat-run pizzeria site with hero, menu grid, and about section" />
  <figcaption>The finished site after the starting prompt: home, menu, and about pages with navigation and themed content</figcaption>
</figure>

## Step 4: Visual editing in the Design tab

Once the site is built, visual editing speeds up targeted refinements. Open Design mode, switch to the **Design** tab, and click any element in the live preview, such as a heading, a button, an image, or a card. Vibe highlights the selection with a blue outline and maps it back to the exact file and line in the source code.

<figure>
  <img src="/img/vibe/vibe-design-tab.png" alt="Vibe visual editing with an element selected in the cat pizzeria site" />
  <figcaption>Visual editing with an element selected: Vibe tracks the exact file and line for the selection</figcaption>
</figure>

With an element selected, any prompt you write is scoped to that element automatically. Vibe already knows which button or heading you mean because it sends the file, line, and element details along with your request. That makes refinements feel closer to "point and say what you want" than writing instructions for an AI.

Examples of prompts that work well with an element selected:

- "Make this heading larger and bolder"
- "Change this button to a warmer orange and add a subtle shadow"
- "Add a hover animation to this card"

After a few targeted edits of this kind, the site reflects the changes exactly where you pointed:

<figure>
  <img src="/img/vibe/vibe-design-tab-result.png" alt="The cat pizzeria site after targeted edits made through visual editing" />
  <figcaption>The site after targeted edits made through visual editing</figcaption>
</figure>

For the full reference on visual editing, including themes, light and dark toggle, and in-panel style controls, see [Visual Editor & Themes](../guides/visual-editor.md).

## Iteration path from here

This example shows how much a single well-formed prompt can produce. To polish or extend a similar site, use focused follow-up prompts rather than broad rewrites.

Common next steps for a landing page:

1. Apply a theme in Design mode to match the brand. See [Visual Editor & Themes](../guides/visual-editor.md).
2. Replace placeholder images with AI-generated ones, for example: "Regenerate the hero image with a 16:9 aspect ratio and warmer lighting." See [Image Generation](../guides/image-generation.md).
3. Wire a real contact or order form through the Forms connector: "Replace the placeholder order form with a real form that collects name, email, and pizza selection." See [Forms](../guides/connectors/forms.md).
4. Add targeted sections through prompts: "Add a testimonials section before the footer with three customer quotes."
5. Use the Visual Editor for small adjustments such as padding, font size, or icon swaps.

## When to pick this use case

Choose Vibe for a landing page when you need:

- A one-page or small multi-page marketing site for a business, product, or campaign
- Lead capture through a contact form that feeds the CRM
- A polished visual result without spending time in a traditional website builder
- A page you can iterate on in minutes rather than hours

Skip this pattern if you need heavy e-commerce, a CMS with editorial workflows, or marketing automation beyond a form submission.

## Common pitfalls

Watch for these patterns that slow a landing-page build down:

- **Overly vague starting prompts.** "Build a landing page for a restaurant" leads to generic output. Name the business, the hook, and the sections in the first prompt, the way the cat-pizzeria example does.
- **Large rewrites mid-flow.** Asking Vibe to "redo the entire page with a new layout" risks introducing errors. Use [Plan Mode](../guides/plan-mode.md) for structural rewrites so you can approve the approach before code is generated.
- **Expecting to upload your own images.** Vibe does not currently support uploading custom images into the generated app. Use Vibe's AI image generation instead to create hosted images that embed directly in your project. See [Image Generation](../guides/image-generation.md).

## Related

Pair this example with these guides as you build:

- [Getting Started with Vibe](../getting-started.md): create your first project and learn the editor
- [Prompting Guide](../guides/prompting.md): write prompts that produce strong first results
- [Plan Mode](../guides/plan-mode.md): review and approve Vibe's implementation plan before code is generated
- [Visual Editor & Themes](../guides/visual-editor.md): branding and element-level edits
- [Image Generation](../guides/image-generation.md): Generate hosted images in your app
- [Forms](../guides/connectors/forms.md): Wire your app into the Forms connector
- [Troubleshooting](../guides/troubleshooting.md): recover from errors and stuck generations
