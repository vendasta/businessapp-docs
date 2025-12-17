---
title: Send automated SMS alerts to any phone number
sidebar_label: Automated SMS to any phone number
description: Use the Send an SMS message to a phone number action in Automations to send text alerts to any destination phone number.
tags:
  - automations
  - sms
  - conversations-ai-pro
keywords:
  - send-sms
  - automation-builder
  - phone-number-alerts
---

# Send automated SMS alerts to any phone number

This article explains how to use the **Send an SMS message to a phone number** action in Automations to send SMS alerts to any destination phone number, including numbers that are not stored in your CRM.

## What is this action?

The **Send an SMS message to a phone number** action is an automation step that sends an SMS when a trigger event occurs in your account. Unlike standard SMS actions that only send messages to the contact associated with the trigger, this action sends SMS messages to any phone number you enter.

:::info Requirement
To use this action, **Conversations AI | Pro** must be enabled.
:::

## Why is this important?

You can notify internal team members or external stakeholders as soon as key events occur. This allows fast responses to new leads, form submissions, or high-priority contact updates.

## Example use cases

| Trigger | Action | Benefit |
|---------|--------|---------|
| A new visitor chats on your website without booking | You receive an SMS with the visitor's name and message | You can restart outreach quickly |
| A "Request a Quote" form is submitted | A sales manager receives an SMS with project details | Faster response for high-intent leads |
| A contact is tagged as VIP | A business owner receives an SMS alert | Ensures timely personal follow-up |

## Feature overview

| Element | Description | Notes |
|---------|-------------|-------|
| Action name | Send an SMS message to a phone number | Available in the Automation Builder |
| Destination | Phone Number field | Can use numbers not in CRM |
| Message body | Message field | Enter SMS text |
| Variables | Dynamic field inserter | Insert contact or event information |
| Triggers | Examples: Form Submitted, WebChat Captures a lead, Contact Created | Use any supported trigger |

## How to set it up

1. Go to **Automations**.
2. Open the **Automation Builder**.
3. Create a new automation or edit an existing one.
4. Add a trigger such as **Form Submitted**, **WebChat Captures a lead**, or **Contact Created**.
5. Click the **+** symbol to add a step.
6. Select the action **Send an SMS message to a phone number**.
7. Configure the **Phone Number** field with one or more destination numbers.
8. Enter the SMS message content.
9. Insert variables using the dynamic field inserter if needed.
10. Save the action.
11. Turn on the automation.

:::tip
Use the Phone Number field to send alerts to internal or external recipients whose numbers are not stored in your CRM.
:::

## Difference from other SMS actions

| Action | Behavior |
|--------|----------|
| **Send an SMS message via Conversations** | Sends only to the contact who triggered the automation |
| **Send an SMS message to a phone number** | Sends to any number you manually specify, such as a team member or owner |

## FAQs

<details>
<summary>Do I need a specific product to use this action?</summary>

Yes. **Conversations AI | Pro** must be enabled.
</details>

<details>
<summary>Can I send SMS messages to numbers not in my CRM?</summary>

Yes. You can manually enter any phone number.
</details>

<details>
<summary>When should I use this instead of Send an SMS message via Conversations?</summary>

Use **Send an SMS message via Conversations** to message the triggering contact. Use **Send an SMS message to a phone number** to notify any other recipient.
</details>

<details>
<summary>Can I include dynamic information?</summary>

Yes. Use the dynamic field inserter when writing the message.
</details>

<details>
<summary>Is it possible to set up an automation in Vendasta to send a WhatsApp message when a new contact is created in the CRM?</summary>

No. At this time, direct WhatsApp messaging through Vendasta automations is not supported. Automations cannot trigger messages through a connected business WhatsApp account.
</details>

