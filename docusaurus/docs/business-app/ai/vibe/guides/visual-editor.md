---
title: Visual Editor & Themes
sidebar_position: 2
unlisted: true
---

# Visual Editor & Themes

Vibe includes a visual editor that lets you customize your application's appearance without writing prompts or code. Switch to **Design** mode using the tab at the top of the editor.

## Theme System

Vibe uses a theme system based on HSL color variables, similar to shadcn/ui. Every generated application comes with a set of CSS variables that control colors across the entire UI — background, foreground, primary, secondary, accent, and more.

### Browsing Themes

In Design mode, the left panel shows the **Themes** tab with:

1. **Appearance toggle** — Switch between **Light** and **Dark** mode. This applies globally to your application.
2. **Current Theme** — Shows which theme is currently active.
3. **Color Palette** — A list of all available themes. Each theme shows color swatches for its primary, secondary, and accent colors.

Available themes include:
- Default, Glacier, Harvest, Lavender, Emerald, Coral, Midnight, Sand, Rose, Sunflower, Crimson, Slate, Ocean, and more.

<figure>
  <img src="/img/vibe/design-mode-themes.png" alt="Design mode Themes tab with Light selected, Default theme active, and the color palette list (Default, Glacier, Harvest, Lavender, Emerald) on the left next to the live application preview." />
  <figcaption>The Design mode Themes tab pairs the Light/Dark toggle and color palette picker with a live preview of the changes.</figcaption>
</figure>

### Applying a Theme

- **Hover** over a theme to preview it temporarily — the live preview updates instantly so you can see how it looks.
- **Click** a theme to apply it permanently to your project.

Theme changes update the `theme.css` file in your project, which defines the CSS custom properties used by all components. This means your entire application updates at once — buttons, cards, backgrounds, text, and all other elements.

### Light and Dark Mode

Every theme supports both light and dark appearances. Use the toggle at the top of the Themes panel to switch between them. The mode is saved per-project, so different projects can have different appearance settings.

## Editing a specific element

Click any element in the live preview to select it. A blue outline marks the selection. You can also click **Select parent** to walk the selection up to the containing element.

When you select an element, Vibe gets exact context about what you clicked: the source file, the line and column in that file, the JSX tag, the CSS classes, and the text content. That context travels with any prompt you send while the element is selected, so when you ask for a change Vibe edits the right element directly — no guesswork from prose descriptions.

You can select up to ten elements at once. Vibe handles each one in the same prompt.

<figure>
  <img src="/img/vibe/visual-editor-selected.png" alt="Hero headline selected in Design mode: a blue outline marks the element, an inline 'Ask Vibe' chat appears next to it, and the left Visual edits panel shows the element's tag, text content, layout, and color controls." />
  <figcaption>Selecting a hero headline opens a small inline 'Ask Vibe' chat near the element and a full Visual edits panel on the left with text, layout, and color controls.</figcaption>
</figure>

### Two ways to ask for a change

Once an element is selected, you have two paths:

- **Inline quick-edit** — A small chat input appears near the selection. Type a one-line change ("make this bigger and bolder," "change the color to navy") and press enter. Best for fast tweaks where you don't need to leave the canvas.
- **Main Design panel chat** — Open the Design panel chat for longer changes that need more context, more steps, or a follow-up question from Vibe. The selection still travels with the prompt, so Vibe knows what you're talking about.

Both paths produce the same result. Pick whichever fits the change you have in mind.

### Direct edits without the chat

For some properties you can edit the value directly in the Visual edits panel without sending a prompt.

#### Text elements
- Edit the text content directly.
- Changes are synced back to the source code.

#### Image elements
- Change the image source URL.
- Set alt text.
- Adjust object-fit and object-position.
- Configure loading behavior (lazy/eager).

#### Icon elements (Lucide icons)
- Browse and pick from 900+ Lucide icons.
- Adjust icon size.
- Change icon color.

#### Link elements
- Edit the href URL.
- Set the target (new tab, same tab).
- Configure title and rel attributes.

### Style properties

For any selected element, you can modify:

| Category | Properties |
|----------|-----------|
| **Colors** | Text color, background color |
| **Spacing** | Padding, margin |
| **Typography** | Font size, family, weight, style, alignment, line height, letter spacing |
| **Effects** | Box shadow (none, sm, md, lg, xl), opacity, border radius |
| **Layout** | Display (flex/grid), direction, justify, align, gap, wrap |

All changes update the source code, so they persist and you can see them in Code mode.

## Visual editor vs. main chat

Both the visual editor and the main chat reach the same generation engine. The difference is what context travels with the prompt and how scoped the change is.

| Best for the visual editor | Best for the main chat |
|---|---|
| Targeted edits to a specific element you can see | New sections, pages, or features |
| Theme changes across the whole app | Restructuring navigation or layout |
| Swapping icons, images, or alt text | Adding responsive behavior |
| Style tweaks: padding, color, font size on one element | Multi-component changes that aren't about a single element |

The visual editor is best for *small, targeted adjustments anchored to something on screen*. For structural changes or anything that doesn't start from "this thing right here," the main chat is the right entry point.

## Returning to Chat

Click **Back to chat** at the bottom of the Design panel to return to the chat interface. Your visual edits are preserved.

## Next Steps

- [Prompting Guide](./prompting.md) — Write effective prompts for larger changes.
- [Prompting library](./prompting-library.md) — Concrete prompts you can paste, including ones that pair well with element selection.
- [Planning](./plan-mode.md) — Review the plan Vibe produces for any non-trivial change before it's applied.
