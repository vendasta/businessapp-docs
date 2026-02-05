---
title: SMS Registration for US Businesses
sidebar_label: SMS Registration (US)
description: Complete guide to A2P 10DLC registration for US businesses, including website requirements for carrier approval.
---

Register your US-based business to send SMS messages to customers. This guide covers the A2P 10DLC registration process, website requirements for carrier approval, and common reasons for rejection.

:::info Canadian businesses
This registration is only required for businesses located in the United States. Canadian businesses can use SMS messaging immediately without registration.
:::

## Before you begin

US telephone carriers now manually review business websites before approving SMS registration. Your registration will remain pending or be rejected if your website doesn't meet their compliance requirements.

Before submitting your registration, complete these website updates:

1. [Update your privacy policy](#step-1-update-your-privacy-policy)
2. [Add opt-in checkboxes to web forms](#step-2-add-opt-in-checkboxes-to-web-forms)
3. [Verify AI chat consent is enabled](#step-3-verify-ai-chat-consent-is-enabled) (if you use AI Chat Receptionist)

## Website requirements for approval

### Step 1: Update your privacy policy

Your website's privacy policy must explicitly address how you handle SMS communications. Add the following statements to your privacy policy:

**Required privacy policy language:**

> **SMS/Text Messaging**
>
> By providing your phone number, you consent to receive automated informational and promotional text messages from [Your Business Name]. Message and data rates may apply. Message frequency varies.
>
> Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.
>
> You can cancel the SMS service at any time by texting "STOP" to our number. After you send the STOP message, we will send a confirmation text to acknowledge your request.
>
> For assistance, reply "HELP" to any message.

### Step 2: Add opt-in checkboxes to web forms

If your website has forms that collect phone numbers (such as "Contact Us" or appointment request forms), you must add a consent checkbox.

**Checkbox requirements:**

- Place a checkbox next to every phone number field
- The checkbox must be **unchecked by default**
- Include this text next to the checkbox:

> "I agree to receive automated text messages from [Your Business Name]. Message and data rates may apply. Reply STOP to opt out."

**Data logging requirement:**

Your system must record consent status when forms are submitted. This means logging:
- The phone number provided
- Whether the consent checkbox was checked
- The date and time of submission

### Step 3: Verify AI chat consent is enabled

If you use the AI Chat Receptionist, an additional consent question is automatically enabled when you submit A2P registration. The AI will ask website visitors:

> "Do you agree to receive text messages from us regarding appointments, service updates, and occasional promotional offers? Message and data rates may apply. Message frequency varies. Reply STOP to unsubscribe or HELP for help. Reply 'Yes' if you agree."

This consent collection is required because carriers require express written consent before sending automated messages to phone numbers collected through chat.

## Submit your registration

Once your website meets the requirements above, you can submit your A2P 10DLC registration.

1. Go to **Administration > Conversations Settings > Phone & SMS**
2. Click **Register now**
3. Complete the registration form with your business information
4. Enter your EIN (Employer Identification Number)
5. Click **Submit information**

:::tip Save your progress
You can save your progress and return to complete the registration later if you need to look up any information.
:::

### About your EIN

An Employer Identification Number (EIN) is a nine-digit number the IRS assigns to your business for tax purposes. You'll find your EIN on:

- Your IRS CP 575 EIN Confirmation Letter
- Previous tax returns
- Bank account documents

If you don't have an EIN, you can apply for one by submitting [IRS Form SS-4](https://www.irs.gov/forms-pubs/about-form-ss-4) online.

## After you submit

Registration approval typically takes **1-4 weeks**. A third-party verification agency reviews your business information against government databases and checks your website for compliance.

You'll receive a notification when your registration is approved. Once approved, you can send SMS messages from:

- Conversations
- Automations
- Campaigns
- Reputation (review requests)

## Why registrations are rejected

### Website compliance issues

The most common reason for rejection is missing or incomplete website requirements:

| Issue | Solution |
|-------|----------|
| Privacy policy doesn't mention SMS | Add the [required privacy policy language](#step-1-update-your-privacy-policy) |
| Missing STOP/HELP instructions in privacy policy | Include opt-out and help instructions |
| Web forms missing consent checkbox | Add [opt-in checkboxes](#step-2-add-opt-in-checkboxes-to-web-forms) to all forms with phone fields |
| Consent checkbox is pre-checked | Change the default state to unchecked |

### Business information mismatches

Your registration information must exactly match your IRS records. Common mismatches include:

- Business name spelled differently than on IRS documents
- Address doesn't match IRS records
- EIN belongs to a different business entity

## FAQs

<details>
<summary>How long does registration take?</summary>

Registration typically takes 1-4 weeks. The timeline depends on carrier review queues and whether your application requires additional verification. You'll receive a notification when your registration is approved.

</details>

<details>
<summary>Can sole proprietors without an EIN register for SMS?</summary>

Not at this time. A2P 10DLC registration requires an EIN. We're investigating support for sole proprietors in the future.

</details>

<details>
<summary>Do I need to register again if I already registered for another product?</summary>

No. Once you complete A2P registration, it applies to all SMS-enabled products including Conversations, Automations, Campaigns, and Reputation.

</details>

<details>
<summary>What if my registration is rejected?</summary>

Review the [rejection reasons](#why-registrations-are-rejected) above and make the necessary updates to your website or business information. Then resubmit your registration.

</details>

<details>
<summary>Can I send SMS to US numbers from a Canadian business?</summary>

No. Sending SMS to US numbers requires A2P registration, which is only available for US-based businesses. Canadian businesses can only send SMS to Canadian numbers.

</details>

<details>
<summary>What phone number will my messages come from?</summary>

Your business is assigned a local phone number based on your business address. If no local numbers are available, you'll receive a number from a nearby area code. You can view your assigned number in **Administration > Conversations Settings > Phone & SMS**.

</details>
