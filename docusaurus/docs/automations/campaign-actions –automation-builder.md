---
title: Pause Campaign Actions – Automation Builder
sidebar_label: Pause Campaign Actions
description: Use automation to pause campaigns for contacts or companies when lead conditions change.
tags: [automations, campaigns, crm, contact-level, company-level]
keywords: [pause campaign, automation builder, meeting booked, email bounce, lead score, crm updates]
---

## What is Pause Campaign?

The **Pause Campaign** actions in the automation builder allow you to automatically stop campaigns for a contact or an entire company when specific conditions are met. These actions ensure your outreach stays relevant and reduces manual intervention.

## Why is Pause Campaign Important?

Campaigns should align with the real-time status of leads. Previously, campaigns would continue running regardless of changes such as:

- A contact booking a meeting
- An email bouncing
- A lead becoming unqualified or disengaged

This caused:

- **Overcommunication**: Leads received outdated or irrelevant messaging.
- **Manual work**: Campaigns had to be paused manually.

The new **Pause Campaign** actions allow you to automatically pause campaigns based on dynamic lead conditions, keeping communication timely and relevant.

## What You Can Do with Pause Campaign

You can insert these actions into any automation to pause ongoing campaigns:

| Action                    | Description                                                  |
|---------------------------|--------------------------------------------------------------|
| Pause campaign for contact | Stops campaigns for a specific contact                       |
| Pause campaign for company | Stops campaigns for all contacts within a specific company   |

These actions are especially useful when used with conditional triggers such as:

- `Wait until meeting is booked`
- `Check if email bounced`
- `Evaluate lead score or CRM field`

## How to Set Up

### How to Set Up Pause Campaign for Contact

1. Open the Automation Builder.
2. Choose or create a workflow.
3. Add a trigger (e.g., meeting booked).
4. Insert the **Pause campaign for contact** action.
5. Configure the rest of your workflow.

### How to Set Up Pause Campaign for Company

1. Open the Automation Builder.
2. Choose or create a workflow.
3. Add a condition that applies at the company level (e.g., lead score).
4. Insert the **Pause campaign for company** action.
5. Complete the workflow as needed.

:::tip
Use these actions after a `Wait` step or condition check to respond intelligently to lead behavior.
:::

## FAQs

<details>
<summary>When should I use Pause campaign for contact?</summary>

Use it when a specific lead takes action, such as booking a meeting or bouncing an email.

</details>

<details>
<summary>When should I use Pause campaign for company?</summary>

Use it when a business as a whole goes cold or becomes unqualified, and you want to pause outreach to all associated contacts.

</details>

<details>
<summary>Can I use both actions in the same automation?</summary>

Yes. You can combine contact and company-level logic in a single workflow.

</details>

## Demo
https://www.loom.com/share/2683a1f29b7e4502ba71f751d671c6d0?sid=bdbaebd4-a229-4196-99d4-67da433774ad
