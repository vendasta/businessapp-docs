---
title: AI Blogger
sidebar_label: AI Blogger
description: The AI Blogger autonomously generates, schedules, and publishes SEO-optimized blog posts to WordPress on a schedule you define.
tags: [ai-workforce, blogging, social-ai-premium]
keywords: [ai blogger, blog calendar, wordpress, seo blog posts, ai workforce, social ai premium, blog automation]
---

The AI Blogger is a new AI employee in AI Workforce. It runs your blogging program autonomously — generating a complete blog calendar on a schedule, writing long-form SEO-optimized posts, sourcing or generating featured images, and drafting, scheduling, or publishing directly to WordPress.

You can also work with it conversationally at any time: draft new posts, refine existing content, reschedule, or delete posts through a natural language chat interface inside Business App.

:::note
The AI Blogger is available in the **Social AI Premium** edition for single-location businesses. Blog publishing requires a connected **WordPress** site.
:::

---

## What's new

- A new AI employee in AI Workforce designed specifically for blogging
- A built-in **Blog Calendar Generation trigger** that runs your blog program automatically on a schedule you define
- Seven pre-configured capabilities covering the full content lifecycle — from topic research and writing to image generation and WordPress publishing
- Long-form posts (up to 1,450–1,550 words) optimized for SEO, Google Snippets, and AI Overviews by default
- Conversational post management — edit, reschedule, and delete drafts and scheduled posts without leaving Business App
- Email and in-app notifications when the AI drafts or schedules posts

---

## Default capabilities

| Capability | What it does |
| --- | --- |
| **Generate Blog Calendar** | Controls what the AI publishes — goal, total posts, blog length, image source, networks, cadence, posting time, and save behavior |
| **Customize Blog Post Instructions** | Controls how each post is written — structure, SEO/AEO optimization, brand guardrails, localization, and a hard stop on invented promotions |
| **AI Image Generation** | Generates WordPress-optimized featured images using your chosen AI model (Nano Banana 2 or GPT Image 1.5) |
| **Web Search** | Searches for trending customer questions, industry data, and current news to ground each post in fresh, factual content |
| **Find Royalty-Free Images** | Sources royalty-free images from Pexels and Pixabay when AI image generation is not selected or has reached its limit |
| **List Integration Connections** | Fetches your active blog platform connections so the AI publishes only to connected WordPress sites |
| **Manage Blog Posts** | Publishes posts to WordPress and lets you list, edit, reschedule, and delete drafts and scheduled posts conversationally |

All seven capabilities are fully editable. You can also add custom capabilities using **+ Add Capability**.

---

## Blog Calendar Generation trigger

The trigger controls when the AI runs autonomously.

| Setting | Options | Default |
| --- | --- | --- |
| **Frequency** | Every day, a specific day of the week, or a specific day of the month | — |
| **Time** | Any time of day | 9:00 AM |
| **Time zone** | Any time zone | Business configured time zone (falls back to Chicago if not set) |
| **Start date** | Date the trigger begins | — |
| **End date** | Date the trigger stops | — |

---

## Generate Blog Calendar capability settings

When the trigger fires, the AI reads these settings to build and publish the calendar.

| Setting | Description | Default |
| --- | --- | --- |
| **Goal** | What each post should achieve | Rank #1 for Google Snippets/AI Overviews while reading like a deeply researched, human-written blog |
| **Total posts** | Number of blog posts to generate per run | 1 |
| **Blog length** | Short (500–600 words), Medium (1,000–1,100 words), or Long (1,450–1,550 words) | Long |
| **Images** | Image source — AI-generated or Stock | AI-generated |
| **Networks** | Which WordPress connection to publish to | Active Networks (first active WordPress connection found) |
| **Cadence** | How far out posts are scheduled — accepts natural language (e.g., "next week", "the next 30 days") | Next week |
| **Posting time** | What time posts go live — accepts a specific time or a preference (e.g., "9 AM", "best time") | Best time |
| **Save as** | Draft, Scheduled, or Published | Schedule |

:::note
**Save as = Published** publishes immediately on every run and is not recommended for a future calendar — use **Schedule** instead.
:::

---

## How to get started

1. Go to `AI > AI Workforce` and open the **AI Blogger**
2. *(Optional)* Rename the employee and update the profile photo
3. Connect a **WordPress** site under integrations if not already connected
4. Open the **Blog Calendar Generation** trigger and set your frequency, time, time zone, start date, and end date
5. Open the **Generate Blog Calendar** capability and configure your goal, post count, blog length, image source, networks, cadence, posting time, and save behavior
6. Review and adjust any other default capabilities as needed (e.g., refine the blog instructions, select your preferred image generation model)
7. Save — the AI will run automatically on your defined schedule

Once active, each run generates the calendar, writes the blog post, attaches the featured image, and drafts, schedules, or publishes it per your settings.

---

## Managing posts after generation

### Editing post text

- **Conversationally** — chat with the AI Blogger to update any draft or scheduled post (e.g., "Update Tuesday's draft to mention our new spring promotion")
- **Manually** — click the **kebab menu (⋮)** on any post to open the post editor, then use the **AI Assist panel** for AI-powered rewrites

### Editing the featured image

Click the **kebab menu (⋮)** on any post, select **Edit**, and use the **AI Image Assist panel** to regenerate or refine the featured image.

### Deleting posts

- **Conversationally** — ask the AI Blogger to delete the post in chat
- **Manually** — click the **kebab menu (⋮)** on the post and select **Delete**

### Scheduling drafts

Drafts can be moved directly to the schedule from the Business App post list — no need to log into WordPress.

---

## Recommended models

| Use case | Recommended model |
| --- | --- |
| Written content generation | Gemini Flash Latest |
| Image generation | Nano Banana 2 |

---

## Notifications

When the AI Blogger drafts or schedules posts, you receive an **email notification** and an **in-app notification** in Business App. To disable either, click the **bell icon** inside the AI Blogger and turn off the relevant notification type.

---

## Frequently asked questions

<details>
<summary>Which edition includes the AI Blogger?</summary>

The AI Blogger is available in the Social AI Premium edition.

</details>

<details>
<summary>Which blog platforms are supported?</summary>

WordPress is supported at launch. Connect your WordPress site under integrations before running the AI Blogger.

</details>

<details>
<summary>What happens if I have multiple WordPress connections?</summary>

The AI Blogger uses the first active WordPress connection found. Posts are not duplicated across multiple WordPress sites.

</details>

<details>
<summary>What is the difference between Save As Draft, Schedule, and Published?</summary>

- **Draft** — posts are saved for your review before anything goes live. Use this for full editorial control.
- **Schedule** — posts are queued to publish automatically on the planned calendar date. Recommended for autonomous publishing.
- **Published** — posts go live immediately when the AI run completes. Not recommended for a future calendar.

</details>

<details>
<summary>How long are the blog posts?</summary>

Blog length is configurable: Short (500–600 words), Medium (1,000–1,100 words), or Long (1,450–1,550 words). Long is the default — optimized for ranking in Google Snippets and AI Overviews.

</details>

<details>
<summary>What happens if the AI image generation limit is reached?</summary>

The AI Blogger automatically falls back to Find Royalty-Free Images (Pexels and Pixabay) when the AI image generation limit is reached.

</details>

<details>
<summary>Will the AI Blogger ever invent promotions or pricing I haven't shared?</summary>

No. The Customize Blog Post Instructions capability includes a built-in hard stop that prevents the AI from fabricating discounts, offers, or pricing the business has not communicated.

</details>

<details>
<summary>Does the AI Blogger check for duplicate content?</summary>

Yes. The AI Blogger automatically checks for content duplication against previous months to avoid repeating topics.

</details>

<details>
<summary>Can I run the AI Blogger manually outside of the schedule?</summary>

Yes. You can chat with the AI Blogger at any time to generate a new post or calendar on demand, independent of the trigger schedule.

</details>
