# GEMINI.md

Agent guidance for the Business App documentation repository.

Skills are in `.agents/skills/` (auto-discovered). Read the relevant SKILL.md before executing any skill task.

---

## What This Repo Is

A Docusaurus-based documentation site for Business App — a customer acquisition and engagement platform for small and medium-sized businesses. Docs are written for **end users (business owners)**, not developers or internal staff.

The site deploys via Google Cloud Run. A failed build blocks the entire site. **Do not push broken files.**

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

## Skills Available

| Skill | When to Use |
|-------|-------------|
| `generate-help-article` | Creating any new feature documentation page |
| `getting-started-guide` | Creating or editing a Getting Started guide |
| `pre-push-validation` | Before every commit — catches errors that break the build |
| `training-video-teleprompter` | Turning a doc into a teleprompter script for video |
| `what-did-i-get-done` | Summarizing recent commits for a status update |

---

## Commit Message Format

```
docs: add [feature name] help article
docs: update [feature name] — [what changed]
fix: repair broken link in [file path]
```
