---
title: Messaging actions
sidebar_position: 3
description: Send automated SMS and email messages as actions within your workflows.
tags: [automation, messaging, sms, email]
keywords: [automated SMS, automated email, messaging actions, workflow alerts, customer notifications]
---

Automate outbound messages from your workflows using SMS or plain-text email. Great for confirmations, reminders, and follow-ups.

## Send SMS

:::note
Sending SMS via automations requires Conversations Pro.
:::

1. Go to Business App > Administration > Automations
2. Create a new automation (or open an existing one)
3. Choose a Trigger (for example, When a contact is created)
4. Add Action > Send SMS
5. Write your message and include dynamic fields as needed
6. Save and toggle the automation On

Tips:
- Keep messages short and actionable
- Include your business name the first time you text a contact
- Respect consent preferences and opt-out rules
- Use Conditions to limit frequency (for example, only for new leads)

## Send plain-text email

:::note
Sending plain-text emails via automations requires Conversations Pro.
:::

1. Go to Business App > Administration > Automations
2. Create a new automation (or open an existing one)
3. Choose a Trigger (for example, When a contact is created)
4. Add Action > Send a plain text email
5. Set Subject and Body; include dynamic fields if needed
6. Save and toggle the automation On

Tips:
- Use clear subjects and one primary call-to-action
- Personalize with the contact’s name and relevant details
- Combine with Conditions to target the right audience

## Send WhatsApp template

:::note
Sending a WhatsApp message requires Conversations AI | Standard | Pro | Premium
:::

1. Go to Business App > Administration > Automations
2. Create a new automation (or open an existing one)
3. Choose a Trigger (for example, When a contact is created)
4. Add Action > Send a WhatsApp template to a contact
5. Choose an approved template from the dropdown
6. Populate template variables if needed
7. Save and toggle the automation On

Tips: 
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

