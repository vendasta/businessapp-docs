---
title: Business Knowledge
sidebar_position: 7
unlisted: false
---

# Business Knowledge

Every Vibe project has a built-in knowledge base. When you create a project for a location, Vibe automatically pulls in that location's Business Profile — name, services, hours, contact information, brand voice, and FAQs — and makes it available to the AI from the first prompt.

## How it works

When you ask Vibe to build something that involves real business details — "build a Contact page" or "add an About section" — Vibe draws from the knowledge base to fill in accurate information instead of placeholder text. The business name, hours, services, and contact info appear correctly in the generated app without you having to supply them in the prompt.

This happens automatically. There's no toggle to enable and no setup required.

### Phrases that trigger business knowledge

Certain phrases reliably tell Vibe to pull from the Business Profile:

- **"my business information"** — pulls contact details, hours, and location data
- **"business profile"** — explicitly references the Business Profile record
- **"my hours of operation"** — pulls the location's hours directly

For example:

> Create a contact page that shows my business information and hours of operation.

Using these phrases produces more accurate results than leaving Vibe to infer that business details are needed.

## Adding your own knowledge

You can extend the knowledge base from the Project Settings page. Click **Configure** for the project to open the Project Settings page, then find the **Knowledge** section. You can add:

- **URLs** — Vibe fetches and indexes the page content
- **Files** — Upload documents such as PDFs, specs, or brand guides
- **Notes** — Paste in text directly: pricing tables, FAQs, product descriptions, or anything else the AI should know

Everything you add goes into the same knowledge base Vibe already uses for the Business Profile. Once it's there, Vibe can reference it in any future prompt for that project.

## What to add

Good candidates for the knowledge base:

- Pricing lists and service packages
- Staff bios and team information
- Brand voice guidelines or tone notes
- FAQs you want to appear in the generated app
- Any content the AI might otherwise get wrong or leave as placeholder text

## Next Steps

- [Getting Started](../getting-started.md) — Create your first project
- [Prompting Guide](./prompting.md) — Write prompts that make the most of your business context
- [Connectors](./connectors/index.md) — Wire your app into forms, analytics, and sign-on
