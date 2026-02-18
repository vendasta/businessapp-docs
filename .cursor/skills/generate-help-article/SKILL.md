---
name: generate-help-article
description: Generate a complete, production-ready help article for Business App users following established standards and structure
---

# Generate Help Article

## Purpose

Generate a single, complete help article for Business App users that follows all documentation standards and includes required sections.

## When to Use

Use this skill when:
- Creating a new feature documentation page
- User requests "write a help article about [feature]"
- Documenting a new product capability
- Creating getting started guides

## Output Requirements

### Format Rules
- **Output format**: Markdown only (`.md` or `.mdx`)
- **Complete document**: Generate the entire article in one response
- **No meta commentary**: Do not include explanations, confirmations, or apologies
- **No hedging language**: Never say "I will try" or "I'll do my best"
- **Production-ready**: Output should be ready to commit without edits

### File Structure
```
feature-name/
├── _category_.json
├── index.md (or index.mdx if video embeds needed)
└── img/
    ├── feature-screenshot-1.png
    └── feature-screenshot-2.png
```

## Required Document Structure

Articles must follow this exact section order:

### 1. YAML Front Matter (Required)
```markdown
---
title: [Feature Name]
sidebar_label: [Short Label]
description: [One sentence description for SEO]
tags: [tag1, tag2]
keywords: [keyword1, keyword2, keyword3]
---
```

### 2. What is [Feature Name]? (Required)
- 1-2 paragraphs explaining what the feature is
- Focus on the core purpose and value
- Use clear, jargon-free language
- No marketing language

### 3. Why is [Feature Name] important? (Required)
- 2-4 bullet points explaining the benefits
- Focus on business outcomes, not technical details
- Connect to user goals (save time, increase customers, etc.)

### 4. What's included with [Feature Name]? (Required)
- Bullet list of key capabilities or components
- Brief description (1 sentence) for each item
- Only include live, available features

### 5. How to use or set up [Feature Name] (Required)
- Step-by-step instructions using numbered lists
- Include prerequisites if needed
- Use inline code for UI elements (buttons, tabs, fields)
- Add screenshots to support complex steps

### 6. Additional feature details (Conditional)
Include only if relevant:
- Settings and configuration options
- Integration details
- Advanced usage tips
- Limitations or requirements

### 7. Frequently Asked Questions (Required)
- 8–15 FAQs in collapsible `<details>` format
- Cover common issues, terminology, limitations
- Keep answers concise (1-3 sentences)

### 8. Screenshots or Videos (Required)
- At least 2-3 screenshots showing key UI elements
- Store in `./img/` folder
- Use descriptive kebab-case names
- Include alt text describing what's shown

## Content Guidelines

### Source Material Policy
- Use **only** information explicitly provided in source material
- Never infer, assume, or speculate about functionality
- If information is missing, note what you need rather than guessing

### Writing Standards
- **Tense**: Present tense only
- **Perspective**: Second person ("you")
- **Tone**: Clear, helpful, neutral
- **No historical references**: Don't mention what changed, what used to be, or deprecated features

### What to Avoid
- Brand/company names (except the product name itself)
- Marketing or sales language
- Future features or roadmap items
- Internal team references
- Partner/agency terminology
- Hypothetical scenarios

## Example Template

```markdown
---
title: Social Media Post Scheduler
sidebar_label: Post Scheduler
description: Schedule and publish social media posts across multiple platforms from one dashboard
tags: [social-marketing, scheduling]
keywords: [social media, schedule posts, content calendar]
---

## What is the Post Scheduler?

The Post Scheduler lets you plan, schedule, and automatically publish social media content across Facebook, Instagram, Twitter, and LinkedIn. Instead of logging into each platform separately, you can manage all your social posts from one centralized dashboard.

The scheduler includes a visual calendar view, post preview tools, and automatic timezone conversion to ensure your content goes live at the optimal time for your audience.

## Why is the Post Scheduler important?

- **Save time**: Create and schedule multiple posts at once instead of posting manually throughout the day
- **Stay consistent**: Maintain a regular posting schedule even when you're busy or away from your desk
- **Reach more customers**: Schedule posts to go live when your audience is most active
- **Plan ahead**: Build your content strategy weeks or months in advance

## What's included with the Post Scheduler?

- **Visual calendar**: Drag-and-drop interface to organize posts by date and time
- **Multi-platform posting**: Publish to Facebook, Instagram, Twitter, and LinkedIn simultaneously
- **Post preview**: See how your content will look on each platform before it goes live
- **Media library**: Upload and store images, videos, and GIFs for future posts
- **Timezone conversion**: Automatically adjusts post times based on your target audience location
- **Queue management**: Set up recurring post slots to maintain consistent publishing

## How to schedule a social media post

1. Navigate to **Social Marketing** > **Post Scheduler**
2. Click the `Create Post` button
3. Select which platforms you want to post to (Facebook, Instagram, Twitter, LinkedIn)
4. Enter your post text in the content field
5. (Optional) Click `Add Media` to upload images or videos
6. Choose your scheduling option:
   - **Post Now**: Publishes immediately
   - **Schedule**: Select a specific date and time
   - **Add to Queue**: Adds to your recurring post schedule
7. Click `Preview` to see how your post will appear on each platform
8. Click `Schedule Post` to confirm

Your post will automatically publish at the scheduled time. You'll receive a notification once it's live.

## Additional settings and options

### Queue settings

The queue lets you set up recurring time slots for posts. For example, you might schedule posts to go out every Monday, Wednesday, and Friday at 9 AM.

To configure your queue:
1. Go to **Settings** > **Queue Settings**
2. Click `Add Time Slot`
3. Select the days and times you want posts to publish
4. Click `Save Queue Settings`

### Timezone preferences

By default, all post times use your account's timezone. To change this:
1. Go to **Settings** > **Account Settings**
2. Find the `Timezone` field
3. Select your preferred timezone from the dropdown
4. Click `Save Changes`

## Frequently Asked Questions

<details>
<summary>Can I edit a post after scheduling it?</summary>

Yes. Find the post in your calendar, click on it, and select `Edit Post`. Make your changes and click `Update Schedule`.
</details>

<details>
<summary>What happens if a platform's API is down when my post is scheduled?</summary>

The system will automatically retry posting every 15 minutes for up to 2 hours. If the post still fails, you'll receive an email notification.
</details>

<details>
<summary>Can I schedule the same post to multiple accounts?</summary>

Yes. When creating a post, you can select multiple connected accounts for each platform.
</details>

<details>
<summary>How far in advance can I schedule posts?</summary>

You can schedule posts up to 12 months in advance.
</details>

<details>
<summary>Do scheduled posts count against my monthly posting limit?</summary>

No. Scheduled posts only count toward your limit when they're actually published.
</details>

<details>
<summary>Can I schedule video posts to Instagram?</summary>

Yes. Videos up to 60 seconds are supported for Instagram feed posts. Instagram Stories support videos up to 15 seconds.
</details>

<details>
<summary>What image sizes work best for each platform?</summary>

The scheduler automatically resizes images for each platform, but for best results: Facebook (1200x630px), Instagram (1080x1080px), Twitter (1200x675px), LinkedIn (1200x627px).
</details>

<details>
<summary>Can I duplicate an existing post?</summary>

Yes. Click on any scheduled or published post and select `Duplicate`. The post content and media will copy, and you can adjust the schedule and platforms.
</details>

## Screenshots

![The Post Scheduler calendar view showing scheduled posts](./img/post-scheduler-calendar.png)

![Creating a new post with platform selection](./img/create-new-post.png)

![Post preview showing how content appears on different platforms](./img/post-preview-multi-platform.png)
```

## Pre-Generation Checklist

Before generating an article, confirm:

- [ ] You have source material that explicitly describes the feature
- [ ] You understand what the feature does and who it's for
- [ ] You know which sections require custom content vs. standard structure
- [ ] You have screenshot descriptions or can note what screenshots are needed
- [ ] The feature is currently live (not beta, deprecated, or planned)

## Post-Generation Validation

After generating the article:

1. **Frontmatter check**: Valid YAML, required fields present
2. **Structure check**: All required sections included in correct order
3. **Voice check**: Second person, present tense, no historical references
4. **Link check**: Internal links use relative paths, external use full URLs
5. **Image check**: Paths use `./img/` format, alt text present
6. **FAQ check**: 8–15 questions, proper details/summary format
7. **Evergreen check**: No "previously", "formerly", "deprecated", etc.

## Error Handling

**If source material is incomplete:**
- Generate what you can with available information
- Add a comment noting what additional information is needed
- Do not fabricate details or functionality

**If unsure about structure:**
- Default to the required section order
- When in doubt, include a section rather than omit it
- Use the example template as a reference

## Integration with Other Standards

This skill follows and enforces:
- Gray-label documentation standards (no Vendasta branding)
- Article standards rule (evergreen content, voice, formatting)
- Wistia video embedding format (`.cursor/rules/wistia-video-embedding.mdc`) — files must use `.mdx` extension
- WordPress hosting slug patterns (if applicable to the feature)

Always cross-reference these rules when generating content.

