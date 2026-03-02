# Contributing to Business App Docs

Thanks for helping improve our documentation! This short guide covers general authoring conventions and how to embed Material Design icons from **react-icons** in MDX files.

## Writing with MDX

- All pages live under `docusaurus/docs/` and must use either the `.mdx` or `.md` extension.  
  Docusaurus treats **both** as MDX, but using `.mdx` is clearer whenever you embed React components.
- Add a front-matter block at the top:

  ```md
  ---
  title: My Page Title
  sidebar_position: 3
  ---
  ```

- Start content with `##` (the H1 is provided by the `title` in front-matter).

## Using Material Icons from `react-icons`

We ship the [`react-icons`](https://react-icons.github.io/react-icons/) package so writers can drop SVG icons inline without hunting for asset files.

### 1. Import the icon at the top of the page

```mdx
import { MdNotifications, MdSettings } from 'react-icons/md';
```

> **Tip:** All Material Design icons share the `Md` prefix.  Browse the catalog at <https://react-icons.github.io/react-icons/icons/md/>.

### 2. Use the icon inline with the recommended props

```mdx
<MdNotifications
  size="1em"                      // match surrounding text size
  style={{ verticalAlign: 'text-bottom' }} // align with text baseline
  aria-label="Notifications icon"  // accessibility label
/>
```

- `size="1em"` keeps the icon in sync with the local font size.
- `verticalAlign: 'text-bottom'` nudges the SVG down so it aligns with the text baseline (visually centering the glyph).
- Always include `aria-label` (or `title`) so screen-reader users get a meaningful description.

### Common Icons Cheat-Sheet

| Component | Glyph | Import Example |
|-----------|-------|----------------|
| `MdNotifications` | bell | `import { MdNotifications } from 'react-icons/md';` |
| `MdSettings` | gear | `import { MdSettings } from 'react-icons/md';` |
| `MdEmail` | envelope | `import { MdEmail } from 'react-icons/md';` |
| `MdChat` | chat bubble | `import { MdChat } from 'react-icons/md';` |

Feel free to use **any** icon from the Material collection—just remember to follow the size, alignment, and accessibility guidelines above.

---

## Automated Style Review on Pull Requests

When you open a PR that changes files under `docusaurus/docs/`, a **Gemini-powered style review** runs automatically. It checks your changes against the Business App style guidelines and posts inline comments with suggested fixes directly on the PR diff.

What it checks:

- **Gray-label compliance** -- no Vendasta branding, Partner Center, or partner/reseller/agency terms
- **Evergreen content** -- no historical or future-state language
- **Voice and tone** -- second-person, present tense, no marketing language
- **Formatting** -- em dashes, UI elements in backticks, heading sentence case
- **Build safety** -- missing frontmatter title, unquoted colons, JSX in `.md` files

If blockers (gray-label violations) are found, the review requests changes. Otherwise, findings are posted as comments.

The full style rules are documented in `.claude/skills/style-review/SKILL.md`.

---

Happy writing!
