# Pass B Report — Factual Fixes (2026-10-01)

## Summary

Pass B applied factual nav label corrections based on live platform validation (Cory's Cut and Shave AG-LJ7H8C22GH / login.custom-abc.com, 2026-10-01).

**Ground truth:** The left nav item under `AI` is labeled `Workforce`, not `AI Workforce`.

## Files Touched

21 files modified:

| File | Lines Changed |
|------|---------------|
| `business-app/ai/ai-capabilities/configuring-capabilities.md` | 1 |
| `business-app/ai/ai-capabilities/creating-custom-capabilities.md` | 1 |
| `business-app/ai/ai-workforce/ai-blogger.mdx` | 1 |
| `business-app/ai/ai-workforce/ai-chat-receptionist/connect-the-ai-receptionist-with-servicetitan.md` | 3 |
| `business-app/ai/ai-workforce/ai-chat-receptionist/connect-the-ai-receptionist-with-shopify.md` | 1 |
| `business-app/ai/ai-workforce/ai-chat-receptionist/index.mdx` | 6 |
| `business-app/ai/ai-workforce/ai-reputation-specialist.mdx` | 1 |
| `business-app/ai/ai-workforce/ai-sales-assistant.mdx` | 2 |
| `business-app/ai/ai-workforce/ai-search-specialist.md` | 1 |
| `business-app/ai/ai-workforce/ai-social-media-manager.mdx` | 1 |
| `business-app/ai/ai-workforce/ai-voice-receptionist.md` | 8 |
| `business-app/ai/ai-workforce/custom-ai-employees/ai-data-analyst.mdx` | 1 |
| `business-app/ai/ai-workforce/custom-ai-employees/ai-human-resources-coordinator.md` | 1 |
| `business-app/ai/ai-workforce/custom-ai-employees/ai-support-employee.mdx` | 1 |
| `business-app/ai/ai-workforce/custom-ai-employees/inside-sales-representative.mdx` | 1 |
| `business-app/ai/ai-workforce/on-call-dispatch.md` | 1 |
| `business-app/ai/index.mdx` | 1 |
| `business-app/conversations/email/index.md` | 1 |
| `business-app/conversations/phone-calls.mdx` | 1 |
| `business-app/getting-started/getting-started-with-business-app.md` | 2 |
| `social-marketing/tools/customer-comments.mdx` | 1 |

## Factual Fix Count

**37 lines** changed (nav label corrections)

## Patterns Fixed

1. `` `AI` → `AI Workforce` `` → `` `AI` → `Workforce` `` (31 instances)
2. `` `AI > AI Workforce` `` → `` `AI` → `Workforce` `` (2 instances, also fixed separator)
3. `Go to `AI Workforce` → ...` → `Go to `AI` → `Workforce` → ...` (1 instance, added missing parent)
4. `answer_snippet` nav references in frontmatter (2 instances)
5. Prose nav instruction "go to `AI Workforce` in the `AI` menu" → "go to `AI` → `Workforce`" (1 instance)

## Remaining "AI Workforce" Hits (Deliberately Left)

These instances are NOT nav click labels and were deliberately preserved:

| Location | Context | Reason |
|----------|---------|--------|
| `_category_.json` | Sidebar label | Meta config for doc section |
| `ai_workforce_overview.md` frontmatter | title/sidebar_label | Page title, not nav click |
| Various `.mdx/.md` | `<h3>AI Workforce</h3>` card headers | Product area name in JSX |
| Various `.mdx/.md` | "within your AI Workforce" | Concept reference in prose |
| Various `.mdx/.md` | `[AI Workforce Overview](...)` | Link text to doc section |
| Various `.mdx/.md` | "AI Workforce features", "AI Workforce settings" | Feature/product references |
| Image alt text | "AI Workforce page showing..." | Describes screenshot content |

## Needs Verification

The following screenshots may show the old "AI Workforce" nav label in the left sidebar chrome. These need visual review and potential recapture:

| Image | Referenced In | Alt Text |
|-------|---------------|----------|
| `ai-reputation-specialist-1.png` | `ai-reputation-specialist.mdx` | "AI Workforce page showing the Reputation Specialist card" |
| `ai-reputation-specialist-15.png` | `ai-reputation-specialist.mdx` | "AI Workforce page with the Chat button highlighted" |
| `AI-SMM-configure.png` | `ai-social-media-manager.mdx` | Configuration screen (may show nav) |
| `AI-Blogger-configure.jpg` | `ai-blogger.mdx` | Configuration screen (may show nav) |

**Note:** Screenshots not recaptured in this pass. Visual verification required to confirm if nav chrome is visible in these images.

## Not In Scope

- Folder paths (`ai-workforce/`) — not renamed per instructions
- Page titles and headings mentioning "AI Workforce" as a product concept
- Link text to the AI Workforce section
- Yesware Inbox preferences paths
- Task Manager paths
- Any other nav renames not validated live
