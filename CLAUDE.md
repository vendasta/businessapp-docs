# CLAUDE.md

Agent guidance for the Business App documentation repository.
This file is the first thing you should read. It tells you what this repo is, how it's structured, and how to work in it safely.

For content and formatting standards, see the skills in `.cursor/skills/`.

---

## What This Repo Is

This is a Docusaurus-based documentation site for Business App — a customer acquisition and engagement platform used by small and medium-sized businesses. The docs are written for **end users (business owners)**, not developers or internal Vendasta staff.

The site is built and deployed via Google Cloud Run. A failed build blocks the entire site. **Do not push broken files.**

---

## Repo Layout

```
/
├── CLAUDE.md                        ← You are here
├── CONTRIBUTING.md                  ← Authoring conventions, icon usage
├── README.md                        ← Setup and build commands
├── .cursor/
│   ├── rules/                       ← Content standards (apply these always)
│   │   ├── article-standards.mdc    ← Voice, tense, evergreen content rules
│   │   ├── gray-label-business-owner-docs.mdc ← No Vendasta branding — CRITICAL
│   │   └── wistia-video-embedding.mdc ← Video embed format
│   └── skills/                      ← How-to guides for specific tasks
│       ├── generate-help-article/SKILL.md     ← Full article generation workflow
│       ├── getting-started-guide/SKILL.md     ← Getting Started guide format
│       ├── pre-push-validation/SKILL.md       ← Run this before every commit
│       ├── training-video-teleprompter/SKILL.md
│       └── what-did-i-get-done/SKILL.md
├── .github/
│   └── workflows/                   ← CI/CD — do not edit unless asked
├── docusaurus/
│   ├── docs/                        ← ALL documentation lives here
│   │   ├── business-app/            ← Main product docs
│   │   ├── ad-intel/
│   │   ├── local-seo/
│   │   ├── reputation/
│   │   ├── social-marketing/
│   │   ├── wordpress-hosting/
│   │   └── yesware/
│   └── src/
│       ├── components/              ← React components (do not edit unless asked)
│       ├── config/products.ts       ← Product definitions
│       └── css/custom.css           ← Global styles
```

---

## How Docs Are Structured

Every feature section follows this folder pattern:

```
docusaurus/docs/[product]/[feature-name]/
├── _category_.json     ← Sidebar label and position for this section
├── index.md            ← Main article (use .mdx if it needs video embeds)
└── img/
    └── feature-screenshot.png   ← All images go here, kebab-case names
```

### `_category_.json` format

```json
{
  "label": "Feature Name",
  "position": 3,
  "collapsed": true
}
```

For WordPress Hosting sections, the slug pattern is required:

```json
{
  "label": "Feature Name",
  "position": 3,
  "link": {
    "type": "generated-index",
    "slug": "/wordpress-hosting/category/[dirname]"
  }
}
```

### `.md` vs `.mdx`

- Use `.md` for all standard articles
- Use `.mdx` only when the article needs a Wistia video embed (JSX required)
- Never embed videos in `.md` files — the build will fail

---

## How to Add a New Article (Step by Step)

1. **Identify the product and feature** — determine which product folder the article belongs in (e.g. `docusaurus/docs/business-app/`)
2. **Create the feature folder** — use lowercase kebab-case: `my-feature-name/`
3. **Create `_category_.json`** — set the label and position
4. **Create `index.md`** — follow the generate-help-article skill exactly
5. **Add images to `./img/`** — kebab-case filenames, PNG preferred
6. **Run pre-push validation** — follow `.cursor/skills/pre-push-validation/SKILL.md`
7. **Fix any errors** — do not skip this step; broken files fail the Cloud Build
8. **Commit with a clear message** — e.g. `docs: add AI Employee help article`

---

## Non-Negotiable Content Rules

These apply to every file you create or edit. Read the full rules in `.cursor/rules/`.

**No Vendasta branding.** Never write "Vendasta" in any user-facing doc. Use "Business App" or the specific product name instead. This is a gray-label product.

**Evergreen only.** Never reference what a feature "used to do", "previously", "formerly", or "before this update". Write only about the current state.

**Present tense, second person.** "You can connect your account" not "Users were able to connect their accounts."

**Source-based only.** Do not infer or assume functionality. If you don't have explicit source material for a claim, do not write it.

**No internal references.** Never mention partners, resellers, agencies, or internal teams.

---

## Skills Available to You

Read the full SKILL.md file before using each skill.

| Skill | When to Use |
|-------|-------------|
| `generate-help-article` | Creating any new feature documentation page |
| `getting-started-guide` | Creating or editing a Getting Started guide |
| `pre-push-validation` | Before every commit — catches errors that break the build |
| `training-video-teleprompter` | Turning a doc into a teleprompter script for video |
| `what-did-i-get-done` | Summarizing recent commits for a status update |

---

## Frontmatter Requirements

Every `.md` and `.mdx` file must have a `title` field. Without it, the build fails.

Minimum valid frontmatter:
```markdown
---
title: Feature Name
---
```

Recommended:
```markdown
---
title: Feature Name
sidebar_label: Short Label
description: One sentence for SEO
tags: [tag1, tag2]
keywords: [keyword1, keyword2]
---
```

**Values containing colons must be quoted:**
```markdown
title: "Scheduling Posts: A Guide"   ✓
title: Scheduling Posts: A Guide     ✗ (breaks YAML)
```

---

## What Will Break the Build

- Missing `title` in frontmatter
- Unquoted colons in frontmatter values
- Unclosed `<details>`, `<summary>`, `:::`, or code blocks
- Broken internal links or missing image files
- Wistia video embeds in `.md` files (must be `.mdx`)
- Invalid `_category_.json` (bad JSON, missing `label`)
- WordPress Hosting categories missing the required `slug`

Run pre-push validation before every commit to catch all of these.

---

## Commit Message Format

```
docs: add [feature name] help article
docs: update [feature name] — [what changed]
fix: repair broken link in [file path]
```

---

## What You Should NOT Do

- Do not edit files in `docusaurus/src/` unless explicitly asked
- Do not modify `.github/workflows/` unless explicitly asked
- Do not create files outside `docusaurus/docs/` for documentation
- Do not commit without running pre-push validation first
- Do not invent features, UI labels, or functionality not in your source material
- Do not write "Vendasta" anywhere in a user-facing doc
