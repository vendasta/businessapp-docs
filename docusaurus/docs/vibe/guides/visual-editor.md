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
  <img src="/img/vibe/design-mode-themes.png" alt="Design mode theme picker" />
  <figcaption>The Design mode panel showing the theme picker with Light/Dark toggle and color palettes</figcaption>
</figure>

### Applying a Theme

- **Hover** over a theme to preview it temporarily — the live preview updates instantly so you can see how it looks.
- **Click** a theme to apply it permanently to your project.

Theme changes update the `theme.css` file in your project, which defines the CSS custom properties used by all components. This means your entire application updates at once — buttons, cards, backgrounds, text, and all other elements.

### Light and Dark Mode

Every theme supports both light and dark appearances. Use the toggle at the top of the Themes panel to switch between them. The mode is saved per-project, so different projects can have different appearance settings.

## Visual Edits

Click the **Visual edits** tab in Design mode to make element-level changes. This lets you click on elements in the preview and modify their properties directly.

### Selecting Elements

Click any element in the live preview to select it. A blue outline indicates the selected element. You can also click **Select parent** to move the selection up to the containing element.

<figure>
  <img src="/img/vibe/visual-editor-selected.png" alt="Visual editor with element selected" />
  <figcaption>The Visual edits panel showing text, color, spacing, and typography controls for a selected heading element</figcaption>
</figure>

### What You Can Edit

Depending on the type of element selected, different editing options appear:

#### Text Elements
- Edit the text content directly
- Changes are synced back to the source code

#### Image Elements
- Change the image source URL
- Set alt text
- Adjust object-fit and object-position
- Configure loading behavior (lazy/eager)

#### Icon Elements (Lucide Icons)
- Browse and pick from 900+ Lucide icons
- Adjust icon size
- Change icon color

#### Link Elements
- Edit the href URL
- Set the target (new tab, same tab)
- Configure title and rel attributes

### Style Properties

For any selected element, you can modify:

| Category | Properties |
|----------|-----------|
| **Colors** | Text color, background color |
| **Spacing** | Padding, margin |
| **Typography** | Font size, family, weight, style, alignment, line height, letter spacing |
| **Effects** | Box shadow (none, sm, md, lg, xl), opacity, border radius |
| **Layout** | Display (flex/grid), direction, justify, align, gap, wrap |

All changes made in the visual editor update the source code, so they persist and can be seen in the Code view.

## When to Use the Visual Editor vs. Prompts

| Task | Use Visual Editor | Use a Prompt |
|------|:---:|:---:|
| Change theme colors across the app | Yes | |
| Toggle light/dark mode | Yes | |
| Tweak padding on a specific card | Yes | |
| Swap an icon | Yes | |
| Add a new section to the page | | Yes |
| Restructure the navigation | | Yes |
| Change the font on a specific heading | Yes | |
| Build a new page from scratch | | Yes |
| Adjust a single image's alt text | Yes | |
| Add responsive behavior | | Yes |

The visual editor is best for **small, targeted adjustments** to individual elements. For structural changes, adding new features, or making broad changes across multiple components, use the chat prompt.

## Returning to Chat

Click **Back to chat** at the bottom of the Design panel to return to the chat interface. Your visual edits are preserved.

## Next Steps

- [Prompting Guide](./prompting.md) — Write effective prompts for larger changes
- [Plan Mode](./plan-mode.md) — Review complex changes before they're applied
