---
name: ci-style-review
description: CI-specific style review that outputs machine-readable JSON. Used by the Gemini style review workflow and the style-reviewer sub-agent. For the complete style rules, see style-review/SKILL.md.
---

# CI Style Review

Machine-readable output format for automated style review in CI pipelines. This skill wraps the interactive `style-review` skill with a strict JSON contract.

## Rules Reference

All style rules, criteria, severity definitions, and examples are defined in the interactive skill:

**Read `.claude/skills/style-review/SKILL.md` before proceeding.** Do not skip this step. That file is the single source of truth for what constitutes a violation.

## Workflow

### Step 1: Load the style rules

Read `.claude/skills/style-review/SKILL.md` in full. Internalize every rule, severity level, and example.

### Step 2: Run the automated scan

Execute the scan script on each file:

```bash
bash .claude/skills/style-review/scripts/scan-style.sh <file-path>
```

Record any findings from the script output.

### Step 3: Read each file

Use your file-reading tool to load the full content of every file under review. Do not rely solely on the scan script; it only catches pattern-matchable violations.

### Step 4: Qualitative review

The scan script handles pattern-matchable violations. Your job in this step is to find issues that require reading comprehension. These are documented in the "Qualitative Checks" section of `style-review/SKILL.md`. Focus on:

- **Subtle evergreen language** (warning): phrases that imply change without using banned keywords
- **Alt text quality** (suggestion): generic or non-descriptive image alt text
- **Link text quality** (suggestion): "click here", bare URLs, or other non-descriptive anchors
- **Wall-of-text paragraphs** (suggestion): paragraphs exceeding ~5 sentences or ~150 words
- **FAQ answer quality** (warning): vague hedging, overly long answers, voice/tone shifts
- **Callout block misuse** (suggestion): block type doesn't match content (e.g. `:::warning` for a tip)
- **Heading-content mismatch** (suggestion): heading promises one thing but body discusses another, or heading is too vague

**Multiple violations on the same line:** If a single line has multiple distinct violations (e.g., a Vendasta mention AND historical language), emit separate findings for each. The post-processing pipeline handles multiple findings per line. Do not merge different violation types into a single finding.

### Step 5: Verify every finding

Before including a finding in output, re-read the file and confirm:

1. The `original` text appears **exactly** on the claimed `line` number
2. The `line` number is correct (1-indexed, matching the file on disk)
3. The `replacement` is a valid, complete fix for that line

Drop any finding where the original text does not match. This prevents false positives that break the post-processing pipeline.

### Step 6: Output JSON

Print ONLY a valid JSON array. Nothing else.

- No markdown code fences
- No prose before or after the array
- No trailing commas
- No comments

If no issues are found, output exactly: `[]`

## Output Schema

Each finding is an object with exactly these fields:

```json
{
  "file": "docusaurus/docs/product/feature/index.md",
  "line": 12,
  "issue": "Vendasta mention",
  "severity": "blocker",
  "reason": "Gray-label product: business owners have no relationship with Vendasta.",
  "original": "Vendasta's Business App makes it easy to manage reviews.",
  "replacement": "Business App makes it easy to manage reviews."
}
```

### Field definitions

| Field | Type | Description |
|-------|------|-------------|
| `file` | string | File path relative to repo root |
| `line` | integer | 1-indexed line number |
| `issue` | string | Brief label (e.g. "Vendasta mention", "em dash", "third-person") |
| `severity` | string | One of: `blocker`, `warning`, `suggestion` |
| `reason` | string | A brief, conversational sentence explaining *why* this matters. Write as if you're a helpful colleague leaving a code review comment. Don't repeat the issue label -- explain the impact. Good: "Business owners reading these docs don't know about Vendasta, so we use the product name directly." Bad: "Vendasta is not allowed in documentation." Good: "We only document features that are live today." Bad: "Future-state language violates evergreen content rules." |
| `original` | string | The full content of that line, exactly as it appears in the file |
| `replacement` | string | The full corrected line content |

### Severity levels

- **`blocker`**: Gray-label violations. Vendasta mentions, Partner Center references, partner/reseller/agency/white-label terminology. These expose internal branding to end users.
- **`warning`**: Evergreen violations, future-state language, voice or tense issues (third-person, passive voice, marketing language). These degrade content quality.
- **`suggestion`**: Formatting issues (em dashes, UI elements not in backticks). These affect consistency but not correctness.

## Constraints

- Do not modify any files. This is a read-only review.
- Do not output markdown, prose, or explanation. JSON array only.
- Do not invent findings. Every finding must be verifiable against the actual file content.
