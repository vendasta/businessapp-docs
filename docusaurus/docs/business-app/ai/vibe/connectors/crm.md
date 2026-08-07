---
title: CRM
sidebar_position: 4
unlisted: false
---

:::info Trusted tester
The CRM connector is available to trusted testers. Availability and behavior may change before general release.
:::

The CRM connector gives your Vibe app access to your account's contacts, companies, and opportunities. Instead of mocking up a contact list or a deals table, Vibe wires the generated UI directly to the same records you manage in [CRM](/business-app/crm).

## What it layers on

CRM layers on Business App's CRM product. When the connector is enabled, Vibe can pull:

- **Contacts** — the people in your CRM, along with their contact details.
- **Companies** — the businesses and organizations linked to your contacts.
- **Opportunities** — deals tracked across your sales pipeline, including stage.
- **Custom objects** — any custom object types configured in your CRM.
- **Activities** — logged activity records, including tasks.

A contacts table, company directory, or pipeline view built in Vibe reflects the same records you manage elsewhere in [CRM](/business-app/crm) — there's no separate data set to keep in sync. The connector is two-way: changes you make to a record in your Vibe app sync back to CRM, and updates in CRM appear in your Vibe app.

## Enabling the connector

From the projects list click **Configure**, or inside the project click **+** in the chat box and select **Connectors**. Toggle **CRM** on to make your contacts, companies, and opportunities available to the supervisor agent for that project.

## When to use it

Reach for CRM when:

- You want a contacts directory or company list inside your Vibe app.
- You want a pipeline view showing opportunities by stage.
- You want a dashboard that references real customer or real records instead of placeholder data.

## Building with CRM data

Describe what you want to see, and name the CRM entity so Vibe knows which data to wire in:

> Add a contacts page listing every contact with their name, email, and phone number.

> Build a pipeline view showing opportunities grouped by stage.

> Add a companies directory page with each company's name and its linked contacts.

> Add a task list showing overdue tasks assigned to me.

The supervisor agent recognizes terms like "contacts," "companies," "opportunities" or "pipeline," and "tasks" or "activities," and wires the generated UI through the CRM connector when it's enabled for the project.

## Next steps

- [Connectors](./index.md) — Overview of all connectors and how to combine them
- [Analytics](./analytics.md) — Surface performance metrics alongside your CRM data
- [Prompting Library](../guides/prompting-library.md) — Ready-made CRM prompts for contacts, companies, and pipelines
