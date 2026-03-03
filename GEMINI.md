# GEMINI.md

Agent guidance for the Business App documentation repository.

Skills are in `.gemini/skills/` (auto-discovered). Read the relevant SKILL.md before executing any skill task.

@.cursor/rules/article-standards.mdc
@.cursor/rules/gray-label-business-owner-docs.mdc

---

## What This Repo Is

A Docusaurus-based documentation site for Business App -- a customer acquisition and engagement platform for small and medium-sized businesses. Docs are written for **end users (business owners)**, not developers or internal staff.

The site deploys via Google Cloud Run. A failed build blocks the entire site. **Do not push broken files.**

---

## Repo Layout

```
/
├── GEMINI.md                        <- You are here
├── CONTRIBUTING.md                  <- Authoring conventions, icon usage
├── .gemini/
│   ├── settings.json                <- Agent mode config
│   ├── agents/                      <- Sub-agent definitions
│   │   └── style-reviewer.md        <- CI style review agent
│   └── skills/                      <- Symlink to .claude/skills/
├── .claude/
│   └── skills/                      <- Skill definitions (auto-discovered)
│       ├── ci-style-review/SKILL.md <- CI JSON output workflow
│       ├── style-review/SKILL.md    <- Full style rules and criteria
│       ├── generate-help-article/   <- Article generation workflow
│       └── pre-push-validation/     <- Build validation checks
├── .cursor/
│   └── rules/                       <- Content standards (always apply)
│       ├── article-standards.mdc    <- Voice, tense, evergreen content rules
│       └── gray-label-business-owner-docs.mdc <- No Vendasta branding
├── docusaurus/
│   ├── docs/                        <- ALL documentation lives here
│   │   ├── business-app/            <- Main product docs
│   │   ├── ad-intel/
│   │   ├── local-seo/
│   │   ├── reputation/
│   │   ├── social-marketing/
│   │   ├── wordpress-hosting/
│   │   └── yesware/
│   └── src/
│       ├── components/              <- React components
│       └── css/custom.css           <- Global styles
```

---

## How Docs Are Structured

Every feature section follows this folder pattern:

```
docusaurus/docs/[product]/[feature-name]/
├── _category_.json     <- Sidebar label and position
├── index.md            <- Main article (.mdx if it needs video embeds)
└── img/
    └── feature-screenshot.png
```

### `_category_.json` format

```json
{
  "label": "Feature Name",
  "position": 3,
  "collapsed": true
}
```

### `.md` vs `.mdx`

- Use `.md` for all standard articles
- Use `.mdx` only when the article needs a Wistia video embed (JSX required)
- Never embed videos in `.md` files -- the build will fail

---

## Non-Negotiable Content Rules

**No Vendasta branding.** Never write "Vendasta" in any user-facing doc. Use "Business App" or the specific product name. This is a gray-label product.

**Evergreen only.** Never reference what a feature "used to do", "previously", "formerly", or "before this update". Write only about the current state.

**Present tense, second person.** "You can connect your account" not "Users were able to connect."

**Source-based only.** Do not infer or assume functionality. If you don't have explicit source material for a claim, do not write it.

**No internal references.** Never mention partners, resellers, agencies, or internal teams.

---

## Frontmatter Requirements

Every `.md` and `.mdx` file must have a `title` field. Without it, the build fails.

```markdown
---
title: Feature Name
sidebar_label: Short Label
description: One sentence for SEO
tags: [tag1, tag2]
keywords: [keyword1, keyword2]
---
```

Values containing colons must be quoted: `title: "Scheduling: A Guide"` not `title: Scheduling: A Guide`.

---

## What Will Break the Build

- Missing `title` in frontmatter
- Unquoted colons in frontmatter values
- Unclosed `<details>`, `<summary>`, `:::`, or code blocks
- Broken internal links or missing image files
- Wistia video embeds in `.md` files (must be `.mdx`)
- Invalid `_category_.json` (bad JSON, missing `label`)
- WordPress Hosting categories missing the required slug pattern

Run the `pre-push-validation` skill before every commit.

---

## CI Review Mode

When running in a CI pipeline (GitHub Actions, automated review):

- **Output JSON only.** No markdown, no prose, no code fences.
- **Do not modify files.** Read-only review.
- **Follow the ci-style-review skill** at `.gemini/skills/ci-style-review/SKILL.md` for the exact workflow and output schema.
- **Run scan-style.sh as a tool call** rather than embedding file contents in the prompt.

---

## Skills Available

| Skill | When to Use |
|-------|-------------|
| `ci-style-review` | CI pipeline review -- JSON output for automated processing |
| `style-review` | Interactive style review -- markdown report for humans |
| `generate-help-article` | Creating any new feature documentation page |
| `getting-started-guide` | Creating or editing a Getting Started guide |
| `pre-push-validation` | Before every commit -- catches errors that break the build |
| `training-video-teleprompter` | Turning a doc into a teleprompter script for video |
| `what-did-i-get-done` | Summarizing recent commits for a status update |

---

## Agents

| Agent | Purpose |
|-------|---------|
| `style-reviewer` | CI style review sub-agent. Runs scan-style.sh, reads files, applies qualitative review, outputs JSON findings. |

---

## Commit Message Format

```
docs: add [feature name] help article
docs: update [feature name] -- [what changed]
fix: repair broken link in [file path]
```
