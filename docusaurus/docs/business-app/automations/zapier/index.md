---
title: Zapier Integration
sidebar_label: Overview
description: Connect Business App to thousands of other apps using Zapier — automate workflows in both directions without any coding.
tags: [zapier, automations, integrations]
keywords: [zapier, automation, integration, workflow, webhook, connect apps]
---

Zapier is an automation platform that connects thousands of apps and services. In Zapier, automated workflows are called **Zaps**. Each Zap has a trigger (something that happens in one app) and one or more actions (things that happen in other apps as a result). With Business App's Zapier integration, you can link your Business App automations to the other external tools you already use without writing any code.

The integration works in two directions:




| Direction | What it does | Example |
|---|---|---|
| **Business App → Zapier** | Use the **Send a webhook** step in your _Business App_ automation to push data out to Zapier | Opportunity marked as won in Business App → create a new customer in QuickBooks Online |
| **Zapier → Business App** | Use the **Run Automation** action in _Zapier_ to fire any of your automations | New QuickBooks payment → send a review request to the customer |



## Connecting Business App to Zapier

You'll need a [Zapier](https://zapier.com) account to use this integration. A free Zapier account is enough to get started — more complex multi-step Zaps may require a paid plan.

1. In Business App, go to **Administration** > **Integrations**

![Integrations option in App settings](./img/zapier-integration-path.png)

2. Locate the Zapier tile

![Zapier tile in the Integrations page](./img/zapier_admin_integrations.jpg)

3. Click **Connect** to be directed to Zapier

![Connect button on the Zapier integration tile](./img/zapier_connect_button.jpg)

4. On the Zapier page for Business App, you can browse existing Zap templates or start building your own

![Business App on Zapier showing available integrations](./img/zapier-connecting-to-business-app.png)

Once connected, your Business App account is linked to Zapier. You only need to do this once — the same connection is used across all your Zaps.

## How to get started

Choose the direction that fits your use case:

- [Zapier → Business App](./zapier-triggers-business-app) — an event in another app fires one of your automations
- [Business App → Zapier](./business-app-triggers-zapier) — an automation step pushes data out to Zapier

## Frequently Asked Questions

<details>
<summary>Do I need a paid Zapier plan?</summary>

Basic Zaps can be created on a free Zapier account. More complex multi-step Zaps may require a paid Zapier plan. Check Zapier's pricing for details on plan limits.
</details>

<details>
<summary>Can I use the same Zapier account for multiple automations?</summary>

Yes. Once you connect your Business App account to Zapier, you can use it across as many Zaps as you need. You only go through the sign-in and permissions step once.
</details>


<details>
<summary>What happens if a Zap fails?</summary>

Zapier logs all Zap runs and failures in your Zapier account under **Zap History**. You can review errors there and re-run failed tasks. Setting up error notifications in Zapier is recommended so you're alerted if something goes wrong.
</details>

<details>
<summary>Can I test a Zap before turning it on?</summary>

Yes. Both Zapier and the Business App automation builder have test options. Always test before publishing to make sure data is being passed correctly between systems.
</details>

<details>
<summary>Is there a limit to how many Zaps I can create?</summary>

Zapier's own plan limits apply to the number of Zaps and tasks you can run. Business App does not impose a separate limit on Zapier connections.
</details>
