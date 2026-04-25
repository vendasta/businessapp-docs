---
title: Integrations
sidebar_position: 4
unlisted: true
---

# Integrations

Vibe connects to platform features, allowing your generated applications to include real functionality like contact forms and AI-generated images.

## Available Integrations

| Integration | What It Does |
|------------|-------------|
| **Forms** | Embed Forms for lead capture, contact forms, and surveys |
| **Image Generation** | Generate custom images with AI (Gemini) and embed them in your app |

## Forms

The Forms integration lets you embed Forms directly into your application. This is useful for contact pages, lead capture, signup flows, and surveys.

### Building an App with a Form

To add a form to your application, describe what you need in your prompt:

> Add a contact form at the bottom of the landing page. It should collect the visitor's name, email, and message.

> Create a lead capture popup form that asks for name, email, and company size.

Vibe will use the Forms connector to generate a form that's styled to match your application's theme. The form connects to the platform, so submissions are captured automatically.

### Editing a Form

To modify an existing form in your application:

> Change the contact form to also ask for a phone number and make the message field optional.

> Move the form into a modal dialog that opens when the user clicks "Get in Touch".

### Form Styling

Forms automatically inherit your application's theme colors. If you want custom styling on a form, you can ask Vibe to adjust it:

> Style the contact form with a dark background and light text. Add rounded corners and more padding.

Forms use structured style fields (background color, border, primary color, etc.) that are automatically populated from your application's theme, ensuring visual consistency.

## Image Generation

Vibe can generate custom images using Gemini's image generation capabilities and embed them directly in your application.

### How It Works

When you ask Vibe to include an image, it uses the `Images_GenerateImage` tool to:

1. Generate an image from a text description using Gemini
2. Upload the image to the media service
3. Embed the serving URL in your application

The generated images are real assets hosted on Google's infrastructure — they're not placeholders.

### Example Prompts

> Add a hero image of a modern office workspace with warm lighting.

> Generate a logo for the company — a minimalist mountain peak icon in blue.

> Add an image of a sharply dressed robot at the bottom of the page.

### Supported Options

- **Aspect ratios**: 1:1, 16:9, 9:16, 4:3, 3:4
- **Image types**: Logo, primary (hero/feature images), or general

### Tips for Image Generation

- **Be descriptive** — More detail produces better results. Include style, mood, colors, and composition.
- **Specify the use** — Tell Vibe where the image will go (hero banner, card thumbnail, logo) so it picks the right aspect ratio.
- **Iterate** — If the first image isn't right, ask Vibe to regenerate with adjusted descriptions.

## Building with Integrations

When using integrations, Vibe's supervisor agent automatically detects which integrations are relevant to your request and activates the appropriate connectors. You don't need to explicitly "enable" an integration — just describe what you want and Vibe handles the wiring.

### Example: Complete Business Page

> Build a business landing page with a hero section, a services section, a generated image of a modern office, and a contact form at the bottom that captures name, email, and phone number.

This single prompt activates two integrations:
- **Forms** — for the contact form
- **Image Generation** — for the office image

## Next Steps

- [Prompting Guide](./prompting.md) — Write effective prompts for integration features
- [Visual Editor & Themes](./visual-editor.md) — Style your integrated components visually
- [Troubleshooting](./troubleshooting.md) — Handle common integration issues
