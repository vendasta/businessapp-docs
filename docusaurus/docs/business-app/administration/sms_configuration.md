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

To protect consumers from spam, US telephone carriers now manually review business websites before approving SMS messaging. If specific elements are missing, a registration may be rejected. Follow this guide to ensure your business's website meets the requirements before proceeding.

Complete these website updates before submitting your registration:

1. [Update your privacy policy](#step-1-update-your-privacy-policy)
2. [Update your terms of service](#step-2-update-your-terms-of-service)
3. [Add opt-in checkboxes to web forms](#step-3-add-opt-in-checkboxes-to-web-forms)
4. [Enable AI chat consent](#step-4-enable-ai-chat-consent) (if you use AI Chat Receptionist)

## Website requirements for approval

### Step 1: Update your privacy policy

The privacy policy on your business's website must explicitly state the following about how you handle SMS data:

| Requirement | Language to include |
|-------------|---------------------|
| No sharing of SMS data | Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. |
| Opt-in disclosure | By providing your number, you consent to receive automated informational and promotional messages. |
| Opt-out instructions | You can cancel the SMS service at any time. Just text "STOP" to our number. We will send a confirmation message to acknowledge your request. |
| Help instructions | Reply HELP for assistance. |
| Rates | Message and data rates may apply. Message frequency varies. |

### Step 2: Update your terms of service

Carriers require your business's public terms of service document to describe your SMS program. Ensure your terms covers these topics:

| Requirement | Language to include |
|-------------|---------------------|
| Program description | By opting in, you agree to receive [Your Business Name] notifications and alerts. |
| Standard phrases | Message and data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. |
| SMS instructions | Text HELP for help or STOP to cancel. |

### Step 3: Add opt-in checkboxes to web forms

If you collect phone numbers on your website (such as a "Contact Us" form), you must provide a clear checkbox next to the phone field.

**Checkbox requirements:**

- **Add a checkbox**: Place a checkbox next to the phone field on every website form, with the text: "I agree to receive automated messages from [Your Business Name]. Message & data rates may apply. Reply STOP to opt out."
- **Default setting**: The checkbox must be **unchecked by default**.
- **Data logging**: Ensure your system records the phone number and the consent status at the moment the form is submitted.

### Step 4: Enable AI chat consent

Carriers require express written consent for automated outbound campaigns to phone numbers. Web chat must also get express consent to send messages via SMS.

**Automated consent:** If you use our AI Chat Receptionist, an additional question is automatically enabled on the Lead Capture capability for accounts submitting A2P registration. The AI will ask:

> "Do you agree to receive text messages from us regarding appointments, service updates, and occasional promotional offers? Message and data rates may apply. Message frequency varies. Reply STOP to unsubscribe or HELP for help to any received SMS messages. Reply 'Yes' if you agree."

**Proactive verification:** If express written consent has not been collected for a phone number, a single initial SMS may be sent that says:

> "[Your Business Name] would like to send you text messages at this number. Message and data rates may apply. View our SMS policy at [Link]. Reply 'Yes' to opt-in."

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
| Missing STOP/HELP instructions | Include opt-out and help instructions in your privacy policy |
| Terms of service missing SMS program | Add the [required terms of service language](#step-2-update-your-terms-of-service) |
| Web forms missing consent checkbox | Add [opt-in checkboxes](#step-3-add-opt-in-checkboxes-to-web-forms) to all forms with phone fields |
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
