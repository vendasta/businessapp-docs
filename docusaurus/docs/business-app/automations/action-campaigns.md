---
title: Pause Campaign actions – Automation Builder
sidebar_position: 2
sidebar_label: Pause Campaign actions
description: Use automation to pause campaigns for contacts or companies when lead conditions change.
tags: [automations, campaigns, crm, contact-level, company-level]
keywords: [pause campaign, automation builder, meeting booked, email bounce, lead score, crm updates]
---

## What is the Pause Campaign action?

The **Pause Campaign** action in the automation builder allows you to automatically stop campaigns for a contact or an entire company when specific conditions are met. These actions ensure your outreach stays relevant and reduces manual intervention.

## Why is the Pause Campaign action important?

Campaigns should align with the real-time status of leads. The **Pause Campaign** actions allow you to automatically pause campaigns based on dynamic lead conditions, keeping communication timely and relevant.

## How you can use the Pause Campaign action

You can insert these actions into any automation to pause ongoing campaigns:

| Action                    | Description                                                  |
|---------------------------|--------------------------------------------------------------|
| Pause campaign for contact | Stops campaigns for a specific contact                       |
| Pause campaign for company | Stops campaigns for all contacts within a specific company   |

These actions are especially useful when used with conditional triggers such as:

- `Wait until meeting is booked`
- `Check if email bounced`
- `Evaluate lead score or CRM field`

## How to set up

### How to set up the Pause Campaign action for contacts

1. Open the Automation Builder.
2. Choose or create a workflow.
3. Add a trigger (e.g., meeting booked).
4. Insert the **Pause campaign for contact** action.
5. Configure the rest of your workflow.

### How to set up the Pause Campaign action for companies

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
<summary>When should I use the Pause campaign action for contacts?</summary>

Use it when a specific lead takes action, such as booking a meeting or bouncing an email.

</details>

<details>
<summary>When should I use the Pause campaign action for companies?</summary>

Use it when a business as a whole goes cold or becomes unqualified, and you want to pause outreach to all associated contacts.

</details>

<details>
<summary>Can I use both actions in the same automation?</summary>

Yes. You can combine contact and company-level logic in a single workflow.

</details>
