# Project Rules & Context

## Documentation URL Structure
- **General Rule**:
  - Rely on Docusaurus's default file-system routing whenever possible.
  - Avoid manually defining `slug` in `_category_.json` unless strictly necessary (e.g., for legacy redirects or special marketing URLs).
  - Use **relative links** (e.g., `to="./overview"`) in markdown files. This ensures links remain valid even if the parent directory is moved, provided the relative structure stays the same.

## WordPress Hosting Specifics
- The `wordpress-hosting` section follows a specific URL pattern for category indices.
- Pages are located in `docs/wordpress-hosting/`.
- **Category Index Pages**: You MUST manually define a `slug` in `_category_.json` for all subdirectories.
  - Pattern: `/wordpress-hosting/category/{dirname}` (e.g., `/wordpress-hosting/category/overview`).
  - This ensures a consistent URL structure for category landing pages.

## YAML Frontmatter
- **Keywords and Tags**: When adding `keywords` or `tags` in YAML frontmatter, they MUST be arrays, not strings.
  - ✅ Correct: `keywords: ["keyword1", "keyword2"]` or `tags: ["tag1", "tag2"]`
  - ❌ Incorrect: `keywords: "keyword1, keyword2"` or `tags: "tag1, tag2"`
