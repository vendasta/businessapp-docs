---
name: support-capture
description: Rules for adding a small piece of Support-verified knowledge (an FAQ entry or troubleshooting step) to an existing Business App help article. Used by the capture-knowledge skill in support-on-demand-docs, or directly when a Support agent wants to add what they learned on a ticket to docs.businessapp.io. Additions to existing articles only; never creates new pages.
---

# Support capture: Business App docs

These docs are **public** (docs.businessapp.io), **gray-label**, and written for **business owners**. Everything merged here is published. Support agents add small, verified pieces of knowledge learned on tickets to existing articles. The docs team reviews every PR, and the Stylosaurus style review runs automatically.

Follow `CLAUDE.md` and `.claude/skills/style-review/SKILL.md` for all style rules. This file only covers what is specific to Support captures.

## What belongs here

Add knowledge a business owner could act on themselves in Business App:

- Why something behaves the way it does, when that is the product working as designed.
- Steps the business owner can take to fix or avoid a problem.
- A limit, requirement, or prerequisite the article doesn't mention.

It does **not** belong here if it needs internal tools, a Vendasta-side or partner-side action they can't take themselves (other than "contact your service provider"), an unreleased or unconfirmed behavior, or details about a specific business or account. Partner-facing knowledge goes to partnercenter-docs; internal knowledge goes to support-on-demand-docs.

## Where to put it

**Additions only. Never create a new article, folder, `_category_.json`, or `img/` file.** If no existing article fits, stop and report it as a doc gap.

1. Search `docusaurus/docs/<product>/` (business-app, ad-intel, calendarhero, local-seo, reputation, social-marketing, wordpress-hosting, yesware) by title, `description`, `keywords`, and body text.
2. Pick the one article a business owner would read when hitting this problem. Prefer an existing `## Troubleshooting` section for the feature, otherwise the feature's main article.
3. Add the knowledge in the form the article already uses:
   - **FAQ entry** (most common): a new `<details>` block at the end of the existing FAQ section. The heading varies (`## Frequently asked questions`, `## FAQs`, …); use whatever the article has. If there is no FAQ section, add `## Frequently asked questions` before the "Screenshots or videos" section, or at the end.
   - **Troubleshooting section**: follow its existing pattern.
   - **Missing fact in a how-to**: one sentence in the relevant step.
4. Before adding, check whether the article already answers the question. If it does but is wrong or unclear, correct that text instead of adding a duplicate.

## FAQ entry format

```markdown
<details>
<summary>Why don't I see a Send message button?</summary>

The option to start a conversation from the Contact us window is set by your service provider. If it's off, you can still reply after your provider starts a conversation with you.

</details>
```

- The summary is the question a business owner would actually ask.
- The first sentence answers it; keep the entry to 1–4 sentences or a short numbered list.
- `<details>`/`</details>` on their own lines, blank line after `<summary>…</summary>`.
- UI labels in backticks, e.g. `CRM` > `Companies`, matching the article's existing style.

## Gray-label rules (blockers in review)

- Never write "Vendasta".
- Never mention partners, resellers, agencies, or internal teams. The partner is **"your service provider"**.
- Present tense, second person. No "now", "new", "previously", "no longer", "coming soon".
- No business names, account names, IDs, ticket numbers, emails, or real-account screenshots.
- Only write what was confirmed on the ticket.
- Don't embed video; the capture must not change a `.md` file to `.mdx`.

## Frontmatter

Don't edit the frontmatter, except to add a `keywords` entry when the new FAQ introduces a search term the article lacks. Quote any value containing a colon.

## Check before committing

From the repository root:

```bash
python3 .claude/skills/support-capture/scripts/check_capture.py --profile businessapp "<changed file>"
bash .claude/skills/style-review/scripts/scan-style.sh "<changed file>"
```

The first reports only problems the change introduces. The style scan may also report issues that were already in the article; fix only the ones in the lines you added. Then follow the `pre-push-validation` skill for the changed file. Fix every error before committing.

## Commit and PR

- Branch: `support-capture/<yyyy-mm-dd>-<short-topic>` from `origin/master`.
- Commit: `docs: update <feature> — add support FAQ` (or `— add troubleshooting step`).
- Open the PR as ready for review (not draft) so the Stylosaurus review runs.
- The PR description records the source ticket and the routing decision; the doc itself never mentions the ticket.
