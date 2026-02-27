---
name: style-review
description: Reviews Business App documentation files for style, voice, tone, and content quality. Checks for gray-label violations (Vendasta branding), evergreen compliance, prohibited language, formatting conventions, and image standards. Use when asked to review, audit, or check the style of documentation files, or before opening a PR.
---

# Style Review

Reviews documentation files against Business App style guidelines and outputs a structured report with specific findings and suggested fixes.

## Workflow

### Step 1: Identify scope

Determine which files to review:

- **PR review**: Run `bash .claude/skills/style-review/scripts/find-modified-docs.sh` to get changed files
- **Single file**: Use the path provided by the user
- **Directory**: Use the path provided, or default to `docusaurus/docs/`

### Step 2: Run the automated scan

Run the scan script on the target files:

```bash
bash .claude/skills/style-review/scripts/scan-style.sh [path-or-nothing-for-modified-files]
```

The script checks for:
- Gray-label violations (Vendasta mentions, Partner Center, partner/reseller/agency terms)
- Evergreen violations (historical references, future-state language)
- Voice issues (third-person, passive voice)
- Marketing language
- Formatting issues (em dashes, UI elements not in inline code)
- Image issues (missing alt text, non-kebab-case filenames)

### Step 3: Qualitative review

For each file flagged by the scan (or all files if doing a full review), read the file and apply the full criteria below. The script catches pattern-matchable issues; this step catches judgment calls.

### Step 4: Report findings

Output a structured report in this format:

```
## Style Review Report

### Summary
- Files reviewed: N
- Errors: N (must fix before publishing)
- Warnings: N (should fix)

### Findings by file

#### path/to/file.md

**Errors**
- Line 12: Vendasta mention — replace with "Business App"
- Line 34: Historical reference ("previously supported") — rewrite in present tense

**Warnings**
- Line 8: Marketing language ("seamless") — use neutral phrasing
- Line 55: Third-person ("users can") — rewrite as "you can"

**Suggested rewrites**
> Original: "Previously, Vendasta's WordPress Hosting required manual DNS setup."
> Fixed: "WordPress Hosting manages DNS setup automatically."
```

---

## Complete Style Criteria

### Gray-Label Rules (CRITICAL — zero tolerance)

This is a gray-label product. Business owners read these docs — they have no relationship with Vendasta.

**Never write:**
- "Vendasta" anywhere in user-facing content
- "Partner Center" or any reference to its features
- "partner", "reseller", "agency", or "white-label"
- "your provider" or any framing that implies a third party manages their account

**Use instead:**
- "Business App" or the specific product name (WordPress Hosting, Local SEO, Reputation Management, etc.)
- Product-focused language: "WordPress Hosting includes..." not "Vendasta's WordPress Hosting..."

| Avoid | Use Instead |
|-------|-------------|
| "Vendasta's WordPress Hosting product" | "WordPress Hosting" |
| "Vendasta has made it easier..." | "You can now easily..." |
| "one of Vendasta's templates" | "one of the pre-built templates" |
| "your partner provides..." | "this feature allows you to..." |
| "In Partner Center, you can..." | *(omit entirely)* |

---

### Evergreen Content (CRITICAL)

Write only about the current, live state of the product. If a detail cannot be written without referencing the past, omit it entirely.

**Never include:**
- Previously, Formerly, Used to
- Before this update, Earlier versions
- Legacy, Deprecated, Renamed
- Has since changed
- Coming soon, On the roadmap, Will be available, Planned feature
- Historical comparisons of any kind

---

### Voice and Style

- **Tense**: Present tense only
- **Perspective**: Second person — "you", "your business", never "the user" or "users"
- **Tone**: Calm, clear, neutral — no marketing or promotional language
- **Audience**: Small to medium-sized business owners accomplishing a task

**Prohibited:**
- Marketing language: powerful, robust, seamless, cutting-edge, best-in-class, revolutionary, game-changing, innovative, amazing, incredible, awesome, unlock
- Speculation: might, may be able to, could potentially, it is possible that
- Hypothetical personas or scenarios
- References to internal teams, partners, or the platform architecture

---

### Heading Structure

- **H1**: Page title only (set in frontmatter, rarely used in body)
- **H2 (`##`)**: Main sections only
- **H3 (`###`)**: Subsections only
- Use sentence case for all headings — capitalize only the first word and proper nouns
- No promotional or marketing language in headings

**Wrong:** `### Powerful Features for Your Business`
**Right:** `### Features included`

---

### Formatting Conventions

**Lists:**
- Bullet points for items, features, or options (non-sequential)
- Numbered lists for sequential steps only

**Inline code (backticks):**
Use for all UI elements:
- Button names: Click `Save`
- Tab names: Go to the `Settings` tab
- Field names: Enter your email in the `Email Address` field
- Menu paths: Navigate to `Tools` > `Integrations`

**Em dashes:** Never use `—`. Replace with:
- A colon (`:`) when introducing a list or expansion
- A comma (`,`) for a parenthetical
- A period (`.`) to start a new sentence

**Callout blocks:**
- `:::info` — optional tips or helpful context
- `:::warning` — limitations or requirements
- `:::note` — plan restrictions, behavior caveats
- `:::tip` — best practices, time-saving advice

---

### Images

- Stored in `./img/` inside the feature folder — no subfolders
- Kebab-case filenames: `connect-facebook-button.png` not `ConnectFacebook.png` or `image1.png`
- Alt text required for every image
- Supported formats: PNG, JPG, GIF

---

### Links

**Internal links:** Relative paths with file extensions
```markdown
[Connect your account](../accounts/connect-profile.md)
```

**External links:** Full HTTPS URLs
```markdown
[Google setup guide](https://support.google.com/business/answer/2911778)
```

---

### FAQs

- 3–10 FAQs per article using collapsible `<details>` format
- Answers: 1–3 sentences, no speculation, no "it depends" answers
- Same voice and style as main content

```markdown
<details>
<summary>How do I reset my password?</summary>

Click the `Forgot Password` link on the login page and follow the instructions sent to your email.
</details>
```

---

### Frontmatter

Required field: `title`
Recommended: `sidebar_label`, `description`, `tags`, `keywords`

Values containing colons must be quoted:
```markdown
title: "Scheduling Posts: A Guide"   ✓
title: Scheduling Posts: A Guide     ✗
```

---

## Rule Examples

Use these as few-shot reference when reviewing. Each example shows the violation, the corrected version, and the expected severity.

### Gray-label (blocker)

| Violation | Correction |
|-----------|------------|
| `Vendasta's Business App makes it easy to manage reviews.` | `Business App makes it easy to manage reviews.` |
| `Contact your reseller for billing questions.` | `Contact support for billing questions.` |
| `This feature is provided by your partner.` | `This feature is included with your account.` |
| `In Partner Center, you can configure white-label settings.` | *(omit entirely — Partner Center is not part of Business App)* |

JSON output example:
```json
{"file": "docusaurus/docs/reputation/index.md", "line": 4, "issue": "Vendasta mention", "severity": "blocker", "original": "Vendasta's Business App makes it easy to manage reviews.", "replacement": "Business App makes it easy to manage reviews."}
```

### Evergreen (warning)

| Violation | Correction |
|-----------|------------|
| `Previously, this feature required manual configuration.` | `This feature is configured automatically.` |
| `This integration was formerly called Social Marketing Pro.` | `This integration connects your social accounts.` |
| `Multi-location support is coming soon.` | *(omit — only document currently available features)* |

JSON output example:
```json
{"file": "docusaurus/docs/social-marketing/index.md", "line": 12, "issue": "historical language", "severity": "warning", "original": "Previously, this feature required manual configuration.", "replacement": "This feature is configured automatically."}
```

### Voice and tone (warning)

| Violation | Correction |
|-----------|------------|
| `Users can connect their Google account from the Settings tab.` | `You can connect your Google account from the \`Settings\` tab.` |
| `The user must verify their email before proceeding.` | `You must verify your email before proceeding.` |
| `Business App provides a seamless, powerful dashboard.` | `Business App provides a dashboard for managing your business.` |

JSON output example:
```json
{"file": "docusaurus/docs/business-app/overview/index.md", "line": 7, "issue": "third-person", "severity": "warning", "original": "Users can connect their Google account from the Settings tab.", "replacement": "You can connect your Google account from the `Settings` tab."}
```

### Formatting (suggestion)

| Violation | Correction |
|-----------|------------|
| `Click Save to apply your changes.` | `Click \`Save\` to apply your changes.` |
| `Go to Settings — Advanced to configure this option.` | `Go to \`Settings\` > \`Advanced\` to configure this option.` |
| `The Notifications tab — located in your account settings — controls alerts.` | `The \`Notifications\` tab, located in your account settings, controls alerts.` |

JSON output example:
```json
{"file": "docusaurus/docs/business-app/notifications/index.md", "line": 22, "issue": "UI element not in backticks", "severity": "suggestion", "original": "Click Save to apply your changes.", "replacement": "Click `Save` to apply your changes."}
```

---

## Scripts Reference

| Script | Purpose |
|--------|---------|
| `scripts/scan-style.sh [path]` | Automated scan for pattern-matchable violations. Exits 1 if errors found. |
| `scripts/find-modified-docs.sh [base-branch]` | Lists modified `.md`/`.mdx` files in the current branch vs base. |

Both scripts can be run with `bash <script-path>` from the repo root.
