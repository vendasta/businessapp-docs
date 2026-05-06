---
title: "Vibe Use Cases"
sidebar_label: "Overview"
sidebar_position: 0
draft: true
description: "Practical guidance for building real tools with Vibe for your clients — what to build, how to approach it, and what to expect."
---

# Vibe Use Cases

This section covers practical, real-world builds you can create for your clients using Vibe. Each use case includes the prompt used, what Vibe produced, and tips for refining the result.

Before diving into individual use cases, this page covers the approach and expectations that apply across all of them.

## What You Can Build for Your Clients

Vibe lets you build custom tools for a client's business using plain language prompts — no coding required. Here are the types of things you can build:

- **Service estimators and quote calculators** — Let their customers input details and get an instant price estimate
- **Lead capture tools** — Collect contact information and feed it into their CRM
- **Custom dashboards** — Pull information from different sources into one view
- **Landing pages and websites** — Public-facing pages for their business or a specific campaign
- **Scheduling tools** — Manage bookings, team schedules, or appointment flows

## Setting Client Expectations: Think in Versions

The most common mistake when starting with Vibe is trying to build something complete in one shot. Set this expectation with your clients upfront.

The right approach is to think in versions. The first prompt produces a working starting point. From there, you refine with follow-up prompts, test the result, note what needs to change, and prompt again.

- **The first version will not be perfect.** That's normal and expected.
- **Each prompt should focus on one or two things.** Trying to add many features at once leads to worse results.
- **Testing is part of building.** After each version, click through what was built and identify what to adjust next.

What gets built with Vibe is also a living thing. As a client's business changes — their pricing, their services, their processes — the tool will need to be updated. Help them understand that ongoing maintenance is part of the value, not a sign that something went wrong.

## Prompting Tips

### Give it source material

If the build involves pricing, services, or specific content, point Vibe at a real source rather than expecting it to guess.

> Here is our services page: [URL]. Use the pricing from that page to build the calculator.

:::note[To do before publishing]
Clarify what database options are available for clients who need Vibe to pull from structured data rather than a URL. What formats are supported? Does the client need to set anything up first?
:::

### Use "contact intake" for CRM lead capture

When you want a form to send leads to the client's CRM, use the phrase **contact intake** in your prompt. Using "contact form" may produce a form that doesn't connect to the CRM.

**Use this:**
> Add a contact intake form that captures the customer's name, email, and quote details.

**Instead of:**
> Add a contact form.

### Be patient during generation

Building a complex application takes time. Vibe works through the build step by step — writing files, applying design, validating the result. A detailed project can take a few minutes. If the progress indicator looks frozen, give it more time before assuming something went wrong.

### Let it ask questions

If a prompt involves something complex — like connecting to an external service or building a specific workflow — Vibe may ask clarifying questions before it builds. Answer those questions specifically. The more detail you provide upfront, the better the result.

## Connecting to the Client's Other Tools

Vibe can connect to other products and services through APIs. Some connections work out of the box with the right prompt. Others require additional setup.

**What tends to work well:**
- Lead capture that saves to the CRM (use "contact intake")
- Pulling in content from a URL
- Building forms with multiple fields and logic

**What may require extra steps:**
- Connecting to third-party platforms not built into the system
- Complex multi-step workflows between different products
- Real-time data from external databases

If Vibe asks for an API endpoint or webhook URL, that's a sign the connection needs some technical setup. You can still build the front-end of the tool and connect the back-end later.

## What to Expect

About 90% of most projects can be built through prompting alone. The last 10% — usually specific integrations or complex logic — may need additional technical help to finish.

The goal is to get as far as possible through prompting, then clearly identify what's left so the right support can be lined up for those final pieces.

---

*This article is based on internal testing and is being reviewed for accuracy before publication.*
