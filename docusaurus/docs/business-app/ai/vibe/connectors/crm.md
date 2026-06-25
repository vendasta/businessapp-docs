---
title: CRM
sidebar_position: 6
unlisted: false
---

# CRM

The CRM connector gives your Vibe-built app access to your contacts, accounts, and pipeline data. It surfaces real customer and sales information from Business App's CRM — without you writing any data-fetching code. Vibe builds the UI; the connector provides the data.

## What it layers on

The CRM connector layers on Business App's CRM. It exposes four core datasets:

- **Contacts** — your full contact list, including names, emails, and phone numbers.
- **Contact details** — individual contact records with activity and relationship data.
- **Pipeline deals** — your open, won, and lost deals with stage and value information.
- **Accounts** — the business accounts linked to your contacts and deals.

When the connector is enabled, Vibe routes prompts about customers, leads, and sales data through these datasets instead of generating placeholder values. The data shown in your app is live from your CRM on every load.

## Enabling the connector

From the projects list click **Configure**, or inside the project click **+** in the chat box and select **Connectors**. Toggle **CRM** on.

With the connector enabled, prompts about contacts, deals, and accounts are wired to live CRM data automatically.

## When to use it

Reach for the CRM connector when:

- You want a dashboard showing pipeline deals grouped by stage or value.
- You want a contact directory your team can search and browse from a custom app.
- You want an account management view showing companies and their related contacts.
- You want a deal tracker that surfaces open opportunities with their current stage and expected close date.

## Be specific about what you want to see

The CRM connector gives Vibe access to contacts, deals, and accounts. Specific prompts produce better results than vague ones.

**Good:**
> Build a pipeline dashboard showing all open deals grouped by stage. Include deal name, value, and expected close date.

> Create a contact directory with search. Each contact card shows name, email, phone, and company.

> Add an accounts page listing all companies with their associated deal count and total pipeline value.

> Build a deal detail view showing the contact, stage, value, notes, and next step for a selected deal.

**Less effective:**
> Show me my CRM data.

When your prompt mentions contacts, deals, pipeline, or accounts, Vibe's supervisor agent recognizes the intent and routes the request through the CRM connector. The generated views are wired to your live data.

You don't need to reference the connector in your prompt — turning it on once in Project Settings is enough.

## Next Steps

- [Connectors](./index.md) — Overview of all connectors and how to combine them
- [Single sign-on](./single-sign-on.md) — Gate your CRM views behind a sign-in screen
- [Prompting Library](../prompting-library.md) — Ready-made prompts for data-driven apps
