---
name: pre-push-validation
description: Automatically validates documentation files before pushes. Checks frontmatter, unclosed tags, _category_.json files, video embeds, and internal/external links for all modified .md/.mdx files. Use before committing or pushing changes to prevent Cloud Build failures.
---

# Pre-Push Validation for Business App Docs

## When to Run

This validation skill runs automatically when:
1. After completing final edits on a newly created branch
2. Before pushing changes to the remote repository
3. User explicitly requests validation

**Always run validation after final edits and before pushing** to catch errors that will cause Cloud Build failures.

## Validation Process

### Step 1: Identify Files to Validate

1. **For pre-push validation**: Check ALL files in the branch compared to base branch (e.g., `git diff --name-only origin/main...HEAD`)
2. **For session validation**: Use `git status` or `git diff --name-only` to find modified files
3. Filter for `.md` and `.mdx` files in `docusaurus/docs/` directory
4. Check any modified `_category_.json` files
5. **Important**: When validating before PR creation, check ALL files in the branch, not just newly modified ones, to catch issues in files that were already in the branch

### Step 2: Run Validation Checks

For each modified markdown file, validate:
- Frontmatter (required fields, YAML syntax)
- Unclosed tags/brackets (HTML, code blocks, callouts)
- Internal links (relative paths point to existing files)
- External links (proper format, HTTPS preferred)
- Video embeds (Wistia and YouTube structure)

For `_category_.json` files, validate:
- Valid JSON syntax
- Required fields present
- WordPress hosting slug patterns (if applicable)

### Step 3: Report Results

- If errors found: List all errors with specific file paths and line numbers
- If no errors: Confirm validation passed
- Provide actionable fix suggestions for each error type

## Validation Checks

### 1. Frontmatter Validation

**Target**: All modified `.md` and `.mdx` files in `docusaurus/docs/`

**Required Checks**:

1. **Frontmatter exists**: File starts with `---` delimiter
2. **Required field present**:
   - `title` (string) - **REQUIRED**
3. **Optional fields** (validated if present):
   - `description` (string)
   - `sidebar_position` (number, not string)
   - `sidebar_label` (string)
   - `keywords` (array)
   - `tags` (array)
4. **Valid YAML syntax**:
   - Proper indentation (2 spaces, no tabs)
   - No unclosed quotes
   - Colons after keys (`title:`, not `title`)
   - Values with special characters (colons, `#`, `@`, etc.) are properly quoted
   - Proper closing `---` delimiter

**Minimum valid frontmatter**:
```markdown
---
title: Page Title
---
```

**Recommended frontmatter**:
```markdown
---
title: Page Title
description: Brief description for SEO
sidebar_position: 1
---
```

**Error Detection**:
- Missing `---` at start or end
- Missing required field (`title`)
- Invalid YAML (missing colons, wrong indentation, unclosed quotes)
- **Unquoted colons in values**: Values containing colons (`:`) must be quoted (e.g., `title: "Something: With Colon"` not `title: Something: With Colon`)
- `sidebar_position` as string instead of number (if present)
- Content before closing `---`

### 2. Unclosed Tags/Brackets Validation

**Target**: All modified `.md` and `.mdx` files

**Required Checks**:

1. **HTML tags properly closed**:
   - `<details>` has matching `</details>`
   - `<summary>` has matching `</summary>`
   - `<iframe>` has matching `</iframe>`
   - `<div>` has matching `</div>`
   - Any other HTML tags are properly closed

2. **Code blocks properly closed**:
   - Triple backticks (```) appear in pairs
   - No unclosed code blocks

3. **Docusaurus callouts properly closed**:
   - `:::tip`, `:::warning`, `:::caution`, `:::note`, `:::info` have matching closing `:::`

4. **JSX/MDX expressions balanced**:
   - Curly braces `{}` are balanced (for JSX expressions)
   - Angle brackets `<>` are balanced (excluding HTML tags checked separately)

**Error Detection Methods**:

- **Stack-based tag matching**: Track opening tags and match with closing tags
- **Count backticks**: Odd number of triple backticks indicates unclosed code block
- **Count callouts**: Track `:::` markers and ensure pairs match
- **Bracket counting**: Count `{` and `}` to ensure balance (excluding code blocks and strings)

**Common Issues**:
- `<details>` without `</details>` (most common in FAQs)
- Unclosed code blocks (missing closing ```)
- Unclosed callouts (missing closing `:::`)
- Unbalanced JSX expressions

### 3. _category_.json Validation

**Target**: All `_category_.json` files in `docusaurus/docs/`

**Required Checks**:

1. **Valid JSON syntax**: File parses without errors
2. **Required fields present**:
   - `label` (string) - category display name
3. **Optional fields validated if present**:
   - `position` (number)
   - `collapsed` (boolean)
   - `collapsible` (boolean)
   - `link` (object with `type` and additional fields)

4. **WordPress Hosting slug pattern** (CRITICAL):
   - For files in `docusaurus/docs/wordpress-hosting/*/` subdirectories
   - If `link.type` is `"generated-index"`, the `slug` MUST follow pattern: `/wordpress-hosting/category/{dirname}`
   - Example: `wordpress-hosting/domains/_category_.json` must have `slug: "/wordpress-hosting/category/domains"`

5. **Doc link validation**:
   - If `link.type` is `"doc"`, verify the `id` points to an existing file
   - Example: `"id": "business-app/store/index"` must resolve to `docusaurus/docs/business-app/store/index.md` or `.mdx`

**Error Detection**:

```bash
# Find all _category_.json files
find docusaurus/docs -name "_category_.json"

# Check WordPress hosting files for correct slug pattern
```

**Common Issues**:
- Invalid JSON syntax (missing commas, trailing commas, unquoted keys)
- Missing `label` field
- WordPress hosting category missing required `slug` field
- WordPress hosting slug not matching `/wordpress-hosting/category/{dirname}` pattern
- Doc link pointing to non-existent file

### 4. Internal Link Validation

**Target**: All modified `.md` and `.mdx` files

**Required Checks**:

1. **Relative links point to existing files**:
   - `[text](./file.md)` - file exists relative to source
   - `[text](../file.md)` - file exists relative to source
   - `[text](./folder/file.md)` - path resolves correctly

2. **Image paths point to existing files**:
   - `![alt](./img/image.png)` - image file exists
   - `![alt](../img/folder/image.png)` - image file exists
   - **CRITICAL**: Missing images cause Docusaurus build failures, so treat as errors, not warnings

3. **Anchor links point to valid headings** (optional enhancement):
   - `[text](#section-heading)` - heading exists in same file
   - `[text](./file.md#section)` - heading exists in target file

4. **Absolute internal links**:
   - `[text](/business-app/ai/index)` - resolve from docs root

**Link Patterns to Validate**:
- `[text](./relative-path.md)`
- `[text](../relative-path.md)`
- `[text](./folder/file.md)`
- `![alt](./img/image.png)`
- `![alt](../img/folder/image.png)`

**Error Detection Methods**:

1. **Extract markdown links**: Use regex to find:
   - `[text](path)` - standard markdown links
   - `![alt](path)` - image links

2. **Resolve relative paths**:
   - Start from source file's directory
   - Resolve `./` and `../` relative to source
   - Handle both `.md` and `.mdx` extensions (check both)

3. **Check file existence**: Verify resolved path exists in filesystem

4. **Report broken links**: Include file path and line number

**Common Issues**:
- File was moved or renamed but links weren't updated
- Typo in file path or filename
- Wrong relative path (too many `../` or wrong direction)
- Missing file extension in link
- **Missing images**: Docusaurus treats missing images as build failures - always report as errors

### 5. External Link Validation

**Target**: All modified `.md` and `.mdx` files

**Required Checks**:

1. **URL format validation**:
   - Starts with `http://` or `https://`
   - No spaces or invalid characters in URL
   - Properly encoded special characters

2. **HTTPS preference** (warning, not error):
   - Flag `http://` links as warnings - prefer `https://` for security
   - Exception: localhost URLs (`http://localhost`)

3. **Common URL issues**:
   - Missing protocol (`www.example.com` instead of `https://www.example.com`)
   - Broken URL encoding
   - Trailing spaces in URLs

**Link Patterns to Check**:
- `[text](https://example.com)`
- `[text](http://example.com)` - warn about non-HTTPS

**Optional - Reachability Check** (slow, use sparingly):
- HEAD request to check if URL returns 200
- Report 404s as warnings (not errors - external sites change)
- Skip for known stable domains (github.com, docs.google.com, etc.)

**Error Detection**:
- Malformed URLs → Error
- HTTP instead of HTTPS → Warning
- 404 responses → Warning (optional check)

### 6. Video Embed Validation

**Target**: All modified `.md` and `.mdx` files containing video embeds

#### Wistia Embeds

**Required structure** (per `.cursor/rules/wistia-video-embedding.mdc`):

```html
<div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
  <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
    <iframe
      src="https://fast.wistia.net/embed/iframe/{VIDEO_ID}?web_component=true&seo=true"
      title="{Descriptive Title}"
      allow="autoplay; fullscreen"
      className="wistia_embed"
      name="wistia_embed"
      ...
    ></iframe>
  </div>
</div>
<script src="https://fast.wistia.net/player.js" async></script>
```

**Validation checks**:
- Outer div has `className="wistia_responsive_padding"`
- Inner div has `className="wistia_responsive_wrapper"`
- iframe has `className="wistia_embed"` and `name="wistia_embed"`
- iframe `src` starts with `https://fast.wistia.net/embed/iframe/`
- Script tag `https://fast.wistia.net/player.js` is present after the embed
- File is `.mdx` (not `.md`) - Wistia embeds require MDX for JSX syntax

#### YouTube Embeds

**Expected structure**:

```html
<iframe 
  src="https://www.youtube.com/embed/{VIDEO_ID}" 
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

**Validation checks**:
- iframe `src` starts with `https://www.youtube.com/embed/`
- Has closing `</iframe>` tag
- VIDEO_ID is present (not empty)

**Common Issues**:
- Missing Wistia script tag
- Wrong Wistia class names
- YouTube embed using `watch?v=` URL instead of `/embed/` URL
- Unclosed iframe tags
- Wistia embed in `.md` file instead of `.mdx`

## Error Reporting Format

When validation errors are found, report them in this format:

```markdown
## Pre-Push Validation Results

### ❌ Errors Found

**File**: `docusaurus/docs/business-app/ai/index.md`
- Line 45: Missing closing `</details>` tag (opened at line 42)
- Line 67: Broken link: `./nonexistent.md` (file not found)
- Line 12: Missing required frontmatter field: `title`

**File**: `docusaurus/docs/wordpress-hosting/overview/getting-started.md`
- Line 89: Unclosed code block (missing closing ```)
- Line 134: Broken image path: `../img/missing.png` (file not found)

**File**: `docusaurus/docs/social-marketing/posts/scheduling.md`
- Line 2: Unquoted colon in frontmatter value: `title: Scheduling Posts: Best Practices` (should be quoted: `title: "Scheduling Posts: Best Practices"`)

**File**: `docusaurus/docs/wordpress-hosting/domains/_category_.json`
- Missing required slug for WordPress hosting category
- Expected: `"slug": "/wordpress-hosting/category/domains"`

**File**: `docusaurus/docs/business-app/ai/ai-capabilities/index.mdx`
- Line 40: Wistia embed missing script tag `https://fast.wistia.net/player.js`

### ⚠️ Warnings

**File**: `docusaurus/docs/yesware/general/overview.md`
- Line 56: HTTP link detected, prefer HTTPS: `http://example.com`

### Fix Required
Please fix the above errors before pushing. These issues will cause Cloud Build to fail.

### Common Fixes
- **Missing closing tags**: Add the closing tag (`</details>`, `:::`, etc.)
- **Broken links**: Update the path to point to the correct file
- **Missing frontmatter**: Add required `title` field to the frontmatter block
- **Unquoted colons**: Quote values containing colons: `title: "Text: With Colon"` instead of `title: Text: With Colon`
- **WordPress hosting slugs**: Add `"slug": "/wordpress-hosting/category/{dirname}"` to _category_.json
- **Wistia embeds**: Ensure script tag follows the embed, use .mdx file extension
- **YouTube embeds**: Use `/embed/` URL format, not `watch?v=`
```

When validation passes:

```markdown
## Pre-Push Validation Results

### ✅ All Checks Passed

- Frontmatter validation: All files have required `title` field
- Tag validation: All tags properly closed
- Category validation: All _category_.json files valid
- Link validation: All internal links are valid
- External links: All properly formatted
- Video embeds: All Wistia and YouTube embeds valid

Ready to push!
```

## Implementation Details

### File Detection

Use these commands to identify files to validate:

```bash
# For pre-PR validation: Check ALL files in branch vs base branch
git diff --name-only --diff-filter=AM origin/main...HEAD | grep -E '\.(md|mdx)$' | grep '^docusaurus/docs/'

# For session validation: Check only modified files
git diff --name-only --diff-filter=AM | grep -E '\.(md|mdx)$' | grep '^docusaurus/docs/'

# Get modified _category_.json files
git diff --name-only --diff-filter=AM origin/main...HEAD | grep '_category_\.json$'
```

**Important**: Before creating a PR, always validate ALL files in the branch (using `origin/main...HEAD`) to catch issues in files that were already in the branch from previous commits.

### Frontmatter Parsing

1. Read file content
2. Check if starts with `---`
3. Extract YAML between first `---` and second `---`
4. **Check for unquoted colons in values**:
   - Scan frontmatter text for patterns like `title: Value: With Colon` (colon in value without quotes)
   - Look for `: ` followed by text containing `:` that isn't quoted
   - Common pattern: `title: Text: More Text` should be `title: "Text: More Text"`
5. Parse YAML to check:
   - Required key exists (`title`)
   - Values are correct types (if optional fields present)
   - No syntax errors
   - If YAML parsing fails, check if it's due to unquoted colons

### Tag/Bracket Matching

Use a stack-based approach:

1. **HTML tags**: Track opening tags (`<details>`, `<summary>`, `<div>`, `<iframe>`) and match with closing tags
2. **Code blocks**: Count triple backticks (```) - must be even number
3. **Callouts**: Track `:::` markers - opening callout must have closing `:::`
4. **JSX expressions**: Count `{` and `}` - must be balanced (ignore within code blocks and strings)

### Link Resolution

1. Extract all markdown links using regex: `\[([^\]]+)\]\(([^)]+)\)`
2. Separate internal links (relative paths) from external links (`http://`, `https://`)
3. For each internal link:
   - Get source file's directory
   - Resolve relative path (`./` or `../`)
   - Check if file exists (try both `.md` and `.mdx` extensions)
   - **For images**: Missing images cause build failures - always report as errors
4. For each external link:
   - Validate URL format
   - Warn if using HTTP instead of HTTPS
5. Report issues with file path and line number

### _category_.json Validation

1. Find all `_category_.json` files in modified directories
2. Parse JSON and check for syntax errors
3. Verify `label` field exists
4. For files in `wordpress-hosting/*/`:
   - Check if `link.type` is `"generated-index"`
   - Verify `slug` matches `/wordpress-hosting/category/{dirname}`
   - Extract dirname from file path and compare
5. For files with `link.type: "doc"`:
   - Resolve the `id` to a file path
   - Verify file exists

### Video Embed Detection

1. Search for Wistia patterns:
   - `className="wistia_` or `class="wistia_`
   - `fast.wistia.net/embed`
2. Search for YouTube patterns:
   - `youtube.com/embed/`
   - `youtu.be/`
3. Validate structure matches expected format
4. Check for common issues (missing script, wrong URL format)

## Common Cloud Build Failures Prevented

This validation prevents these common Cloud Build failures:

- **Missing title**: Markdown file missing `title:` in frontmatter
- **YAMLException**: Invalid indentation or quotes in metadata
- **YAMLException: incomplete explicit mapping pair**: Unquoted colons in frontmatter values
- **Broken link**: Internal link points to deleted file
- **Missing images**: Image file not found (causes MDX compilation failure)
- **Syntax error**: Unclosed tags or brackets causing parse errors
- **Invalid _category_.json**: JSON syntax errors or missing required fields
- **Video embed errors**: Malformed iframe or missing Wistia script

## Quick Reference

**Before pushing, always validate**:
1. ✅ All modified `.md`/`.mdx` files have `title` in frontmatter
2. ✅ Frontmatter values with colons are properly quoted
3. ✅ All HTML tags are properly closed
4. ✅ All code blocks are properly closed
5. ✅ All callouts are properly closed
6. ✅ All internal links point to existing files
7. ✅ All external links are properly formatted (HTTPS preferred)
8. ✅ All `_category_.json` files have valid JSON and required fields
9. ✅ WordPress hosting categories have correct slug pattern
10. ✅ Video embeds (Wistia/YouTube) follow correct structure

**If validation fails**: Fix all errors before pushing to prevent Cloud Build failures.
