---
title: Messaging actions
sidebar_position: 3
description: Send automated SMS and email messages as actions within your workflows.
tags: [automation, messaging, sms, email]
keywords: [automated SMS, automated email, messaging actions, workflow alerts, customer notifications]
---

# Messaging actions

Automate outbound messages from your workflows using SMS, email, or WhatsApp. Great for confirmations, reminders, follow-ups, and team notifications.

## Send SMS to contact

Send an SMS message to the contact who triggered the automation.

:::note
Sending SMS via automations requires Conversations Pro.
:::

**How to set it up:**

1. Go to Business App > Administration > Automations
2. Create a new automation (or open an existing one)
3. Choose a Trigger (for example, When a contact is created)
4. Add Action > Send SMS
5. Write your message and include dynamic fields as needed
6. Save and toggle the automation On

**Tips:**
- Keep messages short and actionable
- Include your business name the first time you text a contact
- Respect consent preferences and opt-out rules
- Use Conditions to limit frequency (for example, only for new leads)

## Send SMS to any phone number

Send an SMS alert to any phone number, including team members or external stakeholders not in your CRM. Perfect for internal notifications.

:::info Requirement
To use this action, **Conversations AI | Pro** must be enabled.
:::

**What makes this different:**

| Action | Behavior |
|--------|----------|
| **Send SMS to contact** | Sends only to the contact who triggered the automation |
| **Send SMS to any phone number** | Sends to any number you manually specify (team alerts) |

**Example use cases:**

| Trigger | Action | Benefit |
|---------|--------|---------|
| New visitor chats without booking | You receive SMS with visitor's name and message | Restart outreach quickly |
| "Request a Quote" form submitted | Sales manager receives SMS with project details | Faster response for high-intent leads |
| Contact tagged as VIP | Business owner receives SMS alert | Ensures timely personal follow-up |

**How to set it up:**

1. Go to Automations
2. Open the Automation Builder
3. Create a new automation or edit an existing one
4. Add a trigger (Form Submitted, WebChat Captures a lead, Contact Created, etc.)
5. Click the **+** symbol to add a step
6. Select the action **Send an SMS message to a phone number**
7. Configure the **Phone Number** field with one or more destination numbers
8. Enter the SMS message content
9. Insert variables using the dynamic field inserter if needed
10. Save the action and turn on the automation

:::tip
Use the Phone Number field to send alerts to internal or external recipients whose numbers are not stored in your CRM.
:::

## Send plain-text email

Send a plain-text email to the contact who triggered the automation.

:::note
Sending plain-text emails via automations requires Conversations Pro.
:::

**How to set it up:**

1. Go to Business App > Administration > Automations
2. Create a new automation (or open an existing one)
3. Choose a Trigger (for example, When a contact is created)
4. Add Action > Send a plain text email
5. Set Subject and Body; include dynamic fields if needed
6. Save and toggle the automation On

**Tips:**
- Use clear subjects and one primary call-to-action
- Personalize with the contact's name and relevant details
- Combine with Conditions to target the right audience

## Send WhatsApp template

Send a WhatsApp template message to the contact who triggered the automation.

:::note
Sending a WhatsApp message requires Conversations AI | Standard | Pro | Premium
:::

**How to set it up:**

1. Go to Business App > Administration > Automations
2. Create a new automation (or open an existing one)
3. Choose a Trigger (for example, When a contact is created)
4. Add Action > Send a WhatsApp template to a contact
5. Choose an approved template from the dropdown
6. Populate template variables if needed
7. Save and toggle the automation On

**Tips:** 
- A connected WhatsApp Business Account is required to send WhatsApp messages
- Only approved WhatsApp templates can be used for outbound messages
- A payment method must be added to the WhatsApp Business Account before messages can be delivered
- Templates must be approved before they appear in the dropdown
- WhatsApp requires templates for outbound messages sent outside an active conversation window

## Frequently asked questions

<details>
<summary>What if messages fail to send?</summary>

Check the Activity tab for the run. Make sure required fields (for example, phone for SMS or email for plain-text email) are present. If you see frequent failures, consider switching Error handling to "Skip the step and continue" in Settings so other steps can still complete.

</details>

<details>
<summary>What is the difference between SMS and WhatsApp templates?</summary>

SMS allows for free-form text but has character limits and costs per segment. WhatsApp templates allow for rich formatting and media but require pre-approval from Meta and must be used for initiating conversations.

</details>

<details>
<summary>Can I send SMS messages to numbers not in my CRM?</summary>

Yes. Use the "Send SMS to any phone number" action. You can manually enter any phone number.

</details>

<details>
<summary>When should I use "Send SMS to any phone number" instead of "Send SMS to contact"?</summary>

Use **Send SMS to contact** to message the person who triggered the automation. Use **Send SMS to any phone number** to notify team members, owners, or external stakeholders about the event.

</details>

<details>
<summary>Can I include dynamic information in messages?</summary>

Yes. Use the dynamic field inserter when writing the message to include contact details, form responses, or other automation data.

</details>

<details>
<summary>Is it possible to send a WhatsApp message when a new contact is created?</summary>

At this time, direct WhatsApp messaging through automations is not supported. Automations cannot trigger messages through a connected business WhatsApp account.

</details>
