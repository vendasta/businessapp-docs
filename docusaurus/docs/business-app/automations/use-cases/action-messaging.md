---
title: Send automated notifications with SMS and email
sidebar_position: 2
sidebar_label: Automated notifications
description: Automatically notify your team or contacts via SMS and email when leads come in, forms are submitted, or CRM events occur.
tags: [automation, messaging, sms, email]
keywords: [automated SMS, automated email, messaging steps, workflow alerts, customer notifications]
brand: business-app
product: automations
audience: smb
---

When a new lead comes in from chat, a quote request lands, or a VIP contact is tagged, the faster you respond, the better your chances of closing the deal. You can build automations that send SMS or email notifications the moment these events happen, with no manual follow-up needed.

:::note
SMS notifications require Conversations AI | Pro or Premium. SMS is available only for businesses in the US and Canada.
:::

## When to use this

| Trigger | Notification | Benefit |
|---------|--------------|---------|
| Web Chat captures a lead | SMS to the assigned sales rep | Immediate follow-up on hot leads |
| "Request a Quote" form submitted | SMS to the sales manager with project details | Faster response for high-intent leads |
| Contact tagged as VIP | SMS alert to the business owner | Timely personal outreach |
| Newsletter signup form submitted | Welcome email to the new subscriber | Instant engagement while interest is high |

## Example: Alert your team when Web Chat captures a lead

When Web Chat captures a lead, the person handling that lead gets an SMS right away with a personalized greeting and details about the new lead.

1. **Trigger:** Set the trigger to `Web Chat captures a lead`.
2. **Action:** Add the `Send an SMS message to a phone number` step. Enter the phone number of the person handling leads (for example, a sales rep or the owner).
3. **Message:** Use the dynamic field inserter to greet the recipient by name and include lead details. For example: "Hi Sarah, you have a new lead! A task was created in the CRM and a link was emailed."

When the automation runs, the SMS is sent immediately to the configured number with personalized content pulled from the CRM.

<div style={{textAlign: 'center'}}>

<img src={require('../img/automation-SMS.png').default} alt="SMS step panel with a new lead alert in SMS content that uses dynamic content, the Insert dynamic content button, and a 264 / 1000 character counter" width="45%" />

</div>

## Example: Send a welcome email on form submission

When a contact submits a signup form, send them a plain-text email to acknowledge their submission and set expectations.

1. **Trigger:** Set the trigger to `A form is submitted for a contact`.
2. **Action:** Add the `Send a plain text email via Conversations` step.
3. **Message:** Set the subject line and body. Use dynamic fields to personalize with the contact's name and relevant form details.

## SMS options: contact vs. phone number

| Step | Sends to | When to use |
|------|----------|-------------|
| `Send an SMS message via Conversations` | The contact who triggered the automation | Notifying the lead or customer directly |
| `Send an SMS message to a phone number` | Any phone number you specify | Alerting team members or numbers not in your CRM |

## Tips

- Keep SMS messages short and actionable. Include your business name the first time you text a contact
- Use clear email subjects with one primary call-to-action
- Add conditions to limit when notifications fire (for example, only for new leads or only during business hours). In the trigger, select `Add conditions for starting this automation`, or add an `If/else branch` step.
- Personalize messages with the contact's name and relevant details using [dynamic content](../dynamic-content-in-automations.mdx)
- If messages fail to send, check the `Activity` tab and make sure required fields (phone for SMS, email for plain-text email) are present on the contact

