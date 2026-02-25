---
name: getting-started-guide
description: Creates or edits a Getting Started guide. Use when the user asks to create, write, or fill in a Getting Started guide for a platform topic (e.g. "create a Getting Started guide for accounts", "write the Your Team guide", "fill in the payments stub").
---

# Getting Started guide

Create or edit a Getting Started guide for a beginner audience. Follow the consistent structure, style, and linking pattern defined in this skill.

## When to apply

- User asks to "create a Getting Started guide for [topic]"
- User asks to "write" or "fill in" a Getting Started guide stub
- User asks to "edit" or "update" an existing Getting Started guide

---

## Workflow

### 1. Read the source docs

Before writing anything, read the existing documentation for the topic in the repo. Read the index and key child docs to understand the feature. Do not duplicate full procedures from source docs. Summarize and link instead.

### 2. Check the stub

If a stub file already exists for this guide:
- **Do not change the frontmatter or sidebar_position**, leave them exactly as they are
- Only replace the placeholder body content (e.g. `*Content coming soon.*`)

If no file exists, create one at the appropriate path using lowercase kebab-case prefixed with `getting-started-with-`:
```
getting-started-with-[topic].mdx
```

### 3. Verify all links before writing

For every internal link you plan to include:
- Confirm the target file actually exists in the repo before including it
- Never link to a Getting Started guide that does not yet exist, use plain text instead
- To link to a specific section, append the anchor (e.g. `/page/#section-heading`)

### 4. Write the guide

Follow the document structure and style rules below exactly.

### 5. Check for linting errors

After writing, run the linter on the file and fix any errors introduced.

---

## Document structure

Every guide must follow this structure in order:

### H1 title
If creating a new file, use: `# Getting Started: [Topic Name]`
If editing a stub, keep the H1 that already exists.

### Intro paragraph
1-3 sentences. Explain what the topic is, why it matters to a beginner, and what the guide covers. Write for someone brand new to Business App.

### Getting started checklist
A numbered list linking to each major step. Use colons, not em dashes, to separate the step name from its description:

```mdx
## Getting started checklist

1. [Step one title](#step-1-step-one-title): brief description
2. [Step two title](#step-2-step-two-title): brief description
3. [Step three title](#step-3-step-three-title): brief description
```

### Steps (H2 sections)
Each step is a `##` section. Open with 1-2 sentences of context, a navigation path if relevant, then H3 sub-sections for each sub-task.

Where a step relates to a topic covered in more depth elsewhere in the docs, link to that article inline within the step content. Do not save links for a closing "What's next" section.

End every step section with:
```mdx
[Back to checklist](#getting-started-checklist)

---
```

---

## Style rules

### Em dashes: never use them
Em dashes (`—`) are not allowed anywhere, including the frontmatter description. Replace with:
- A colon (`:`) when introducing a list or expansion
- A comma (`,`) when used as a parenthetical
- A period (`.`) to start a new sentence
- Parentheses `( )` for asides

**Wrong:** `You can connect your Google account — this lets Business App pull in your reviews automatically.`
**Right:** `You can connect your Google account. This lets Business App pull in your reviews automatically.`

### Heading casing
Use sentence case for all headings at every level (H1 through H4). Only capitalize the first word and proper nouns or specific product names. Do not title-case every word.

**Wrong:** `### Add Your Company Name And Logo`
**Right:** `### Add your company name and logo`

### Tone
- Write for a beginner who is brand new to Business App
- Use "you" and "your business", not "the user"
- Be direct and instructional
- Numbered lists for sequential steps, bullet lists for non-sequential info

### Step instructions
Bold all UI element names (buttons, field labels, menu items, tab names):

```mdx
1. Go to **[Product]** > **Administration** > **My team**.
2. Click **Invite team member**.
3. Enter a name and email address.
4. Click **Send**.
```

### Inline links
Link to related articles from within the step or section where the topic is mentioned. Do not group links at the end of the guide. Only link to pages that actually exist in the repo.

### Tables
Use tables for comparison or decision-making content. Use "N/A" instead of em dashes in table cells.

### Admonitions

| Type | Use for |
|---|---|
| `:::note` | Plan restrictions, behavior caveats, things that may vary |
| `:::tip` | Best practices, recommendations, time-saving advice |
| `:::warning` | File format requirements, things that will cause errors if wrong |
| `:::info` | Prerequisites, related settings the reader should know about |
