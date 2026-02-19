---
title: Pause campaign actions
sidebar_position: 1
sidebar_label: Pause campaign actions
description: Use automation to pause campaigns for contacts or companies when lead conditions change.
tags: [automations, campaigns, crm, contact-level, company-level]
keywords: [pause campaign, automation builder, meeting booked, email bounce, lead score, crm updates]
---



The **Pause campaign** action in the automation builder allows you to automatically stop campaigns for a contact or an entire company when specific conditions are met. These actions ensure your outreach stays relevant and reduces manual intervention.

Campaigns should align with the real-time status of leads. The Pause campaign actions allow you to automatically pause campaigns based on dynamic lead conditions, keeping communication timely and relevant.



## How to set up

To use the Pause campaign action, add it to any automation in your workflow. The setup process is the same for both contact-level and company-level campaign pausing.


1. Open the Automation Builder.
2. Choose or create a workflow.
3. Add a trigger (e.g., meeting booked).
4. Insert the **Pause campaign for contact** or **Pause campaign for company** action.
5. Configure the rest of your workflow as needed.


:::tip
Use these actions after a `Delay` step or condition check to respond intelligently to lead behavior.
:::

## Example

**Scenario:** You're running a "Cruise in winter" campaign for Tier A companies. When a company is removed from List B, and that list is tagged as Tier A, you want to automatically pause the campaign for that company.

**Trigger:** When a company is removed from a list: **List B**

**Conditions:** list_id contains **Tier A**

**Action:** Pause the **Cruise in winter** campaign for company

**How it works:** When a company is removed from List B, the automation checks if the list ID contains "Tier A". If true, it pauses the "Cruise in winter" campaign for the entire company, stopping all campaign messages to every contact in that organization.

**Use case:** This is useful when companies graduate from your target list (became customers, unsubscribed, or no longer qualify) and you want to immediately stop ongoing campaign outreach.

<div style={{textAlign: 'center'}}>

![Pause campaign automation workflow: trigger (company removed from List B, list_id contains Tier A), action (Pause Cruise in winter campaign), then End.](../img/pause-campaign.png)

</div>

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
