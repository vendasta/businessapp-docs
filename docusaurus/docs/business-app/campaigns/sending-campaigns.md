---
title: Send a Campaign
sidebar_label: Send a Campaign
description: Add contacts or lists as recipients to send a published campaign in Business App.
tags: [campaigns, email marketing, crm, contacts, lists]
keywords: [send campaign, add recipients, campaign contacts, campaign list, start campaign, email campaign send]
brand: business-app
product: campaigns
audience: smb
---

Publishing a campaign does not send it automatically. After you publish, you need to add contacts or a list as recipients to begin sending. You can do this directly from the Contacts table, through an automation from Contacts, or by starting an automation from a list.

## Prerequisites

Before you can send a campaign, make sure you have:

- A published campaign (see [Campaigns](index.mdx))
- Contacts added to your CRM (see [Contacts](../crm/contacts/index.md))
- Optionally, a static or smart list created in CRM (see [Lists](../crm/lists.md))

## How to send a campaign

### Add contacts directly to a campaign

Use this method to send a campaign to one or more specific contacts immediately or on a schedule.

1. Go to `CRM` → `Contacts`
2. Select one or more contacts using the checkboxes
3. Click `Actions` in the bulk action bar

![Contacts table with Actions menu open showing Add to campaign option](./img/sending-campaigns/contacts-actions-menu.png)

4. Select `Add to campaign`
5. On the Send campaign page:
   - Choose your campaign in the `Campaign` field
   - Review or adjust the contacts in `Select recipients`
   - Select a `Send from` address
   - For email campaigns, preview the email using the `Desktop`, `Tablet`, or `Mobile` view
![Send campaign page with the menu beside the Send button open to show the Schedule option, next to the Campaign, Select recipients, Send from, and Email settings fields](./img/sending-campaigns/send-campaign-page.png)

6. To send immediately, click `Send`
7. To schedule for a later time, click the arrow beside `Send` and select `Schedule`. In the `Schedule` window, set your date and time, review the estimated delivery, then click `Schedule`

:::note
Contacts without a valid email address appear as "contacts with issues" and are excluded from sending. The `Estimated recipients` count reflects only contacts who will actually receive the email.
:::

### Start an automation from Contacts

Use this method to enroll selected contacts into a campaign-based automation workflow.

1. Go to `CRM` → `Contacts`
2. Select one or more contacts using the checkboxes
3. Click `Actions` → `Start automation`
4. In the `Select automation` window, search for and select the automation. Only automations with a manual trigger that are turned on appear in the list.
5. Click `Start`

The automation runs immediately for the selected contacts and enrolls them according to the automation's configured steps and delays.

### Start an automation from a list

Use this method to enroll all current members of a list into a campaign at once.

1. Go to `CRM` → `Lists`
2. Find your list and click the three-dot menu (`...`)

![Lists page with three-dot menu open](./img/sending-campaigns/lists-three-dot-menu.png)

3. Select `More actions`

![Choose an action panel showing Campaigns and Emails options](./img/sending-campaigns/lists-choose-an-action.png)

4. In the `Choose an action` panel, select `Start a campaign for the contact` under `Campaigns and Emails`

![Campaign action configuration panel with step name and campaign dropdown](./img/sending-campaigns/lists-campaign-action.png)

5. Enter a step name
6. Choose your campaign from the `Campaign` dropdown
7. Click `Run` to start the campaign

The campaign starts immediately for all current members of the list. Contacts added to the list after this point are not enrolled unless you repeat the action or configure a membership trigger.

## Send campaign page

When you add contacts directly to a campaign, the Send campaign page gives you a full overview before you confirm.

- `Campaign`: Choose which published campaign to send
- `Select recipients`: Add or remove individual contacts before sending
- `Estimated recipients`: The total number of contacts that have the required information for each step in the campaign: email addresses for email steps and phone numbers for SMS steps
- `Send from`: Select which sender address to use for this send
- `Email settings`: Review the sender name, sender address, and reply address
- Day pager: Use the arrows on either side of the day (for example, `Day 1 (1/1)`) to browse through each step in a multi-step campaign
- Preview views: For email campaigns, switch between `Desktop`, `Tablet`, and `Mobile` views to see how the email renders

## Frequently asked questions

<details>
<summary>Why doesn't my campaign send after I publish it?</summary>

Publishing a campaign makes it available to send, but does not trigger sending automatically. You need to add recipients using one of the three methods above.
</details>

<details>
<summary>What are "contacts with issues"?</summary>

Contacts with issues are contacts that are missing the required information for a campaign step: an email address for email steps, or a phone number for SMS steps. They appear in the Send campaign page but are excluded from the estimated recipient count and will not receive that step.
</details>

<details>
<summary>Can I schedule a campaign send for a future date?</summary>

Yes. On the Send campaign page, click the arrow beside `Send` and select `Schedule` instead of sending immediately. Choose the date and time for delivery, then click `Schedule`.
</details>

<details>
<summary>Can I add recipients to a campaign that is already sending?</summary>

Yes. You can add eligible contacts or lists to an active campaign at any time. New recipients start from the beginning of the sequence.
</details>

<details>
<summary>What is the difference between sending directly and using an automation?</summary>

Sending directly (via `Add to campaign`) gives you a real-time preview and lets you confirm or schedule the send immediately. Using `Start automation` enrolls contacts into a workflow that may include delays, conditions, and other steps beyond just sending an email.
</details>

<details>
<summary>Does starting an automation from a list add future list members automatically?</summary>

No. Starting an automation from a list enrolls only the current members at the time you run it. To automatically enroll future members, set up a membership trigger automation instead. See [Lists](../crm/lists.md).
</details>

<details>
<summary>Can I preview a multi-step campaign before sending?</summary>

Yes. On the Send campaign page, use the arrows on the Day pager to move through each step in the sequence and preview how each email looks.
</details>

<details>
<summary>Can I change the sender address when sending a campaign?</summary>

Yes. The Send campaign page includes a `Send from` dropdown where you can select which sender address to use for that send.
</details>

<details>
<summary>How do I create a list to use when sending a campaign?</summary>

Go to `CRM` → `Lists` and click `Create list` to set up a static or smart list. Once your list has members, you can use it to start a campaign automation. See [Lists](../crm/lists.md).
</details>

<details>
<summary>Where can I see campaign performance and delivery stats?</summary>

Go to `Marketing` → `Campaigns` and click the campaign you want to review. The Campaign Details page shows recipient counts, in-progress, stopped, and completed statuses, and email performance metrics including engaged recipients, delivery rate, open rate, click-to-open rate, dropped, and bounced. Each email step also shows its individual delivered, pending, open rate, and click rate.
</details>

<details>
<summary>What happens if I select contacts who are already enrolled in the campaign?</summary>

Contacts already enrolled in a campaign will not receive duplicate emails. Only new eligible recipients are added to the send.
</details>
