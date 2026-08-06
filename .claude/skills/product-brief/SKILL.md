---
name: product-brief
description: Ingests a weekly CPO product brief and updates all relevant Business App documentation. Filters for client-facing, released features only. Asks before documenting anything with unclear release status.
---

# Product Brief Ingestion

Reads a weekly product brief and translates shipped features into documentation updates — new articles, edits to existing pages, or both — while strictly filtering out internal, partner-only, and unreleased content.

## When to Use

Use this skill when:
- The weekly CPO product brief has been shared and needs to be reflected in docs
- A user says "update docs from the product brief" or "ingest the brief"

## Step-by-Step Workflow

### Step 1: Parse the brief

Read the full brief. For every feature or update mentioned, extract:

- **Name**: What the feature is called
- **Section**: Which product area or team owns it (AI Experience, Platform, Vibe, Ads, etc.)
- **Release status**: What label or language signals its state (see Status Reference below)
- **Audience**: Who it's for (SMB users, partners/admins only, internal teams, infrastructure)
- **Description**: What it does from a user's perspective

### Step 2: Filter ruthlessly

Discard anything that matches **any** of the following. Do NOT include these in docs — not even a mention:

**Internal / infrastructure (always discard):**
- Backend services, databases, API layers, Kubernetes, observability/monitoring, CI/CD
- SOC2, security audits, compliance certifications
- SDK changes, gRPC, developer portal, internal tooling
- Anything described as "internal-only", "behind a feature flag", or "for engineers"
- Migration work (data migrations, archival syncs, infrastructure upgrades) unless it changes something visible to users
- Analytics tools the user cannot see (Posthog, Datadog, etc.)

**Partner/reseller-only (always discard):**
- Features that only exist in Partner Center
- Account template creation and management (partners build templates; SMBs receive the results — do not document the creation side)
- Anything requiring admin console or partner-level access
- Whitelabel, reseller, or agency framing
- References to "partners", "resellers", "agencies", "white-label"

**Unreleased (hold for confirmation — see Step 3):**
- `TESTING`, `TRUSTED TESTER`, `IN PROGRESS`, `DISCOVERY`, `NEXT`, `COMING SOON`
- Lowercase `in progress`, `next`, `discovery` status indicators
- Language like "in trusted testing", "launching next sprint", "currently in testing", "we're working on", "will be released", "expected by end of month", "estimated to start", "kicking off"
- Features the brief says are "planned" or "in the roadmap"

**Keep (proceed to document):**
- Explicitly `RELEASED` or `released`/`complete` (lowercase) features
- Features described as live, shipped, or in production with no caveats
- Features where the brief says "now available", "shipped this sprint", "now live", or equivalent

### Step 3: Confirm unclear items before writing

Before making any changes, present the user with a categorized summary:

```
## Product Brief Analysis

### Ready to document (released, client-facing)
- [Feature name]: [one-line description of what changed] → [target doc path or "new article needed"]
- ...

### Needs your input — release status unclear
- [Feature name]: [quote the exact language from the brief that is ambiguous]
  → Is this released and available to all Business App users? (y/n)
- ...

### Skipped (not client-facing or not released)
- [Feature name]: [reason — internal / partner-only / unreleased]
- ...
```

Wait for the user to respond to the "Needs your input" section before writing anything. Do not assume or guess. If the user says something is released, proceed. If they say it is not, add it to the skipped list.

### Step 4: Map confirmed items to docs

For each confirmed item, determine whether it:

**A) Adds to or modifies an existing article** — use the doc map below to find the right file, then make a targeted edit. Do not rewrite the whole article; add or update only what changed.

**B) Describes a feature with no existing article** — create a new article using the `generate-help-article` skill.

**C) Adds a new section to an existing article** — insert it in the right location without restructuring surrounding content.

#### Doc map — feature area to file

| Feature area | Primary doc(s) |
|---|---|
| Users / team management | `docusaurus/docs/business-app/administration/users.md` |
| Connections / integrations | `docusaurus/docs/business-app/administration/connections/index.md` |
| Automations | `docusaurus/docs/business-app/automations/` |
| Automation steps / actions | `docusaurus/docs/business-app/automations/automation-steps.mdx` |
| Automation triggers | `docusaurus/docs/business-app/automations/automation-triggers.md` |
| Campaigns (email/SMS) | `docusaurus/docs/business-app/campaigns/` |
| SMS campaigns | `docusaurus/docs/business-app/campaigns/sms-campaigns.mdx` |
| Conversations AI / AI receptionist | `docusaurus/docs/business-app/conversations/conversations-ai/` |
| AI Sales Assistant / CRM AI | `docusaurus/docs/business-app/ai/ai-workforce/ai-sales-assistant.mdx` |
| AI Reputation Specialist | `docusaurus/docs/business-app/ai/ai-workforce/ai-reputation-specialist.md` |
| AI Voice Receptionist | `docusaurus/docs/business-app/ai/ai-workforce/ai-voice-receptionist.md` |
| AI Chat Receptionist | `docusaurus/docs/business-app/ai/ai-workforce/ai-chat-receptionist/` |
| AI workforce overview | `docusaurus/docs/business-app/ai/ai-workforce/ai_workforce_overview.md` |
| Vibe (website builder) | `docusaurus/docs/business-app/ai/vibe/` |
| Vibe visual editor | `docusaurus/docs/business-app/ai/vibe/guides/visual-editor.md` |
| Vibe cloning | `docusaurus/docs/business-app/ai/vibe/guides/clone-from-url.md` |
| CRM companies | `docusaurus/docs/business-app/crm/companies.md` |
| CRM contacts | `docusaurus/docs/business-app/crm/contacts/index.md` |
| CRM forms | `docusaurus/docs/business-app/crm/forms/index.md` |
| Executive Report | `docusaurus/docs/business-app/executivereport/` |
| Knowledge base | `docusaurus/docs/business-app/ai/knowledge-base.md` |
| Administration overview | `docusaurus/docs/business-app/administration/index.mdx` |

If a feature does not map to any existing doc, create a new article. Use `generate-help-article` for the full structure.

### Step 5: Write the updates

For each item:

1. **Read the target file** before editing (never edit without reading first)
2. **Make the minimum necessary change**: add a new section, update a paragraph, or add to an existing list
3. **Apply all content rules** (see Rules section below)
4. **Do not restructure existing content** unless it is broken
5. **Do not add screenshots** unless you have the actual image path — use a placeholder comment `<!-- screenshot needed: [description] -->` instead
6. For **new articles**, follow the `generate-help-article` skill exactly

After all edits are complete, tell the user:
- Which files were changed
- What was added or updated in each file
- Which items still need screenshots

### Step 6: Run pre-push validation

After all edits, invoke the `pre-push-validation` skill on every modified file. Fix any errors before reporting completion.

---

## Content Rules (apply to every word written)

### Audience
Write for **small and medium-sized business owners**. They use Business App to run their business. They do not manage partners, configure systems for other businesses, or see Partner Center.

### Gray-label (zero tolerance)
- Never write "Vendasta", "Partner Center", "partner", "reseller", "agency", "white-label"
- Use "Business App" or the specific product name
- If a feature exists in Partner Center but also in Business App, document only the Business App side

### Evergreen content
- Write only about the current, live state of the product
- Never write "previously", "formerly", "used to", "before this update", "now supports", "we've added", "you can now", "recently added", "new feature"
- If a change must be described, describe the current state only: "The Users page displays..." not "We've updated the Users page to display..."

### Voice and tense
- Present tense only: "The Users page displays..." not "The Users page will display..."
- Second person: "you", "your business" — never "users", "the user", "businesses"
- Neutral, helpful, calm — no marketing language (no "powerful", "seamless", "game-changing", "innovative", "amazing")

### Source fidelity
- Write only what is explicitly described in the brief or existing documentation
- Never infer, assume, or add detail not present in source material
- If you are unsure what a feature does from the user's perspective, ask rather than guess

---

## Status Reference — Reading the Brief

Briefs use inconsistent formatting for release status. Use this lookup table:

| If the brief says... | Treat as... |
|---|---|
| `RELEASED` | Released — document |
| `released` (lowercase) | Released — document |
| `complete` / `Complete` (on a checklist) | Released — document |
| "now live", "shipped", "launched", "went live", "in production" | Released — document |
| "shipped this sprint" with no qualification | Released — document |
| `TESTING` | Not released — ask |
| `TRUSTED TESTER` / `trusted tester` | Not released — ask |
| `IN PROGRESS` / `in progress` | Not released — skip |
| `NEXT` / `next` | Not released — skip |
| `DISCOVERY` / `discovery` | Not released — skip |
| `coming soon`, `on the roadmap`, `planned` | Not released — skip |
| "we expect", "estimated", "will be", "about to", "upcoming" | Not released — skip |
| "end of the month", "next sprint", "launching May 7" | Not released — ask (confirm date has passed) |
| `in progress` on a capability checklist | Not released — skip that specific capability |

When in doubt, ask. Never document something as released unless you are certain.

---

## What to Never Document

Regardless of release status, never write about:

- Internal metrics: ARR, MRR, WAB counts, churn data, revenue figures
- Competitor comparisons or benchmarks
- Launch events, press releases, or external campaigns
- Named enterprise customers or partner deployments (e.g., do not name "Italiaonline" or "MARiO")
- Vendor or supplier names (Twilio, Vertex AI, Recall AI, etc.) unless they are directly relevant to a user-facing integration the user must configure
- AI model names or infrastructure details (GPT, Gemini, Claude, gVisor, etc.)
- Internal team names (Psychobillers, Meerkats, NP-easy, etc.)
- Internal codenames or project names (DALE, MCQL, CASA, BMO, etc.) unless they appear as user-facing labels
- Staff names or @mentions
- Self-signup or migration context ("Broadly users transitioning to Business App", etc.)

---

## Example — Applying the Skill

Given this excerpt from a brief:

> **User Management improvements** `RELEASED`: Renamed "Users" permission to "User Management" and placed it at the top of the permissions list. Cleaned up the table: left-aligned columns, merged first/last name into a single column, added user profile images. SMB users can now edit another team member's info via a new "Edit User" dropdown option, including an automatic email verification flow when an email is changed.

**Parse:**
- Feature: User management table and permission updates
- Status: RELEASED
- Audience: SMB users (they manage their team in Business App)
- Target doc: `docusaurus/docs/business-app/administration/users.md`

**What to update in users.md:**
- The "View users" section describes columns as Email, First Name, Last Name, Phone — update to reflect the merged Name column and profile images
- The actions menu description should include "Edit User" (or confirm it matches the existing "Edit Profile" option)
- If "User Management" permission is now the name and appears at the top of the list, update any reference to "Users" permission in the permissions section

**What NOT to write:**
- Do not say "previously called 'Users'", "renamed", or "we've updated"
- Do not mention that the change was made this sprint
- Do not mention the motivation (Broadly migration)
- Write only the current state: "The Users page displays a table with each team member's profile image, name, email, and phone."

---

## Checklist Before Closing

- [ ] Brief fully parsed — no section skipped
- [ ] Unclear items confirmed with user before writing
- [ ] Only released, client-facing content documented
- [ ] No Vendasta branding, no partner language, no internal references
- [ ] No evergreen violations (no "previously", "new", "now", "recently", "updated")
- [ ] All target files read before editing
- [ ] New articles follow `generate-help-article` structure
- [ ] Screenshot placeholders added where images are needed
- [ ] Pre-push validation passed on all modified files
