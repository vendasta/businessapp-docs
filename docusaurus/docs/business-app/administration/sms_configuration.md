---
title: SMS Registration for US Businesses
sidebar_label: SMS Registration (US)
description: Everything you need to register your US business for SMS messaging — requirements, compliance checklist, and common rejection reasons.
tags: [business-app, sms, a2p, registration, conversations]
keywords: [A2P registration, 10DLC, SMS registration, US business SMS, carrier compliance]
---

US phone carriers require businesses to register before sending SMS messages to customers. This process is called A2P 10DLC (Application-to-Person 10-Digit Long Code) registration. It verifies your business identity and confirms that your website meets carrier compliance standards. Without an approved registration, your business cannot send or receive SMS messages through US phone numbers.

For a **working example** of a compliant website, see the [sample website](https://a2p-example-site-f0f4efd9.vendasta.ai/) which includes a privacy policy, terms of service, and web form that meet all carrier requirements.

:::info Canadian businesses
This registration is only required for businesses located in the United States. Canadian businesses can use SMS messaging immediately without registration.
:::

## Requirements checklist

Before you start the registration form, confirm that every item below is in place. Each item links to the detailed section further down this page.

1. Your **legal business name** and **EIN** exactly match your IRS records ([details](#brand-information))
2. Your website has a **privacy policy** page with the required SMS data-handling language ([details](#privacy-policy))
3. Your website has a **terms and conditions** page describing your SMS program ([details](#terms-and-conditions))
4. Every web form that collects phone numbers has **separate opt-in checkboxes** for transactional and marketing messaging ([details](#consent-on-your-web-form))
5. Your opt-in checkboxes link to your privacy policy and terms and conditions ([details](#consent-on-your-web-form))
6. Your business does **not** fall into a [prohibited or high-scrutiny category](#prohibited-and-high-scrutiny-content)

:::tip Check before you submit
On the review step of the registration form, click **Check with AI** to have the AI Verification assistant check your entry. It reviews your campaign details together with the pages you linked — your privacy policy, terms of service, and any opt-in or contact forms — and flags issues by severity with the specific fix for each one. This check is optional and does not prevent you from submitting.
:::

## Brand information

The registration form collects two types of information: **Brand** and **Campaign**.

**Brand** represents your business identity — your legal business name, EIN/Tax ID, address, industry, and an authorized representative. Brand information is verified against government databases, so it must exactly match the information the IRS has on file. Your brand only needs to be registered once.

**Campaign** describes how your business uses SMS messaging. Every campaign covers both transactional and marketing messages, and includes how you collect customer consent along with links to your privacy policy and terms and conditions.

### EIN requirements

An Employer Identification Number (EIN) is a nine-digit number the IRS assigns to your business. You can find your EIN on:

- Your IRS CP 575 EIN Confirmation Letter
- Previous tax returns
- Bank account documents

If you do not have an EIN, you can apply for one by submitting [IRS Form SS-4](https://www.irs.gov/forms-pubs/about-form-ss-4) online.

:::warning New EINs
If your EIN was issued within the last 90 days, it may not appear in verification databases yet. Check the date on your CP 575 letter — if fewer than 90 days have passed, wait before submitting your registration.
:::

## Privacy policy

Your registration requires a link to a privacy policy that is publicly accessible on your website. The privacy policy must describe how your business handles customer data in the context of SMS messaging.

### Required language

Your privacy policy must include all of the following:

| Requirement | Language to include |
|---|---|
| No sharing of SMS data | Text messaging originator opt-in data and consent will not be shared with any third parties, excluding aggregators and providers of the text message services. |
| Opt-in disclosure | By providing your number, you consent to receive automated informational and promotional messages. |
| Opt-out instructions | You can cancel the SMS service at any time. Just text "STOP" to our number. We will send a confirmation message to acknowledge your request. |
| Help instructions | Reply HELP for assistance. |
| Rates | Message and data rates may apply. Message frequency varies. |

Your privacy policy must also state:

- What types of messages customers may receive (e.g., appointment reminders, promotional offers)
- How customer data is stored and protected
- How customers can request their data be deleted

### What to avoid

Do not include any of the following in your privacy policy:

- References to SMS messaging from a different business or brand
- Language that grants blanket permission to share customer phone numbers with unrelated third parties
- Outdated or placeholder text that does not reflect your actual data practices

The URL you provide must link directly to the privacy policy page — not to a homepage or a general legal page.

**Example:** The following screenshot shows a [compliant privacy policy](https://a2p-example-site-f0f4efd9.vendasta.ai/privacy) with the required SMS language.

<img src={require('./img/us-business-privacy-policy.png').default} alt="Privacy policy page with SMS consent and data sharing language" width="85%" />

## Terms and conditions

Your registration requires a link to terms and conditions that are publicly accessible on your website. The terms must cover your SMS messaging program.

### Required language

Your terms and conditions must include all of the following:

| Requirement | Language to include |
|---|---|
| Program description | By opting in, you agree to receive [Your Business Name] notifications and alerts. |
| Standard phrases | Message and data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. |
| SMS instructions | Text HELP for help or STOP to cancel. |

Your terms must also include:

- A description of what messages customers will receive
- Your business contact information

### What to avoid

Do not include any of the following in your terms and conditions:

- Language that prevents customers from opting out of messages
- Terms that contradict standard carrier opt-out mechanisms (STOP/HELP keywords)
- Outdated terms referencing a messaging program your business no longer operates

The URL must link directly to the terms and conditions page.

**Example:** The following screenshot shows [compliant terms of service](https://a2p-example-site-f0f4efd9.vendasta.ai/terms) with the required SMS program section.

<img src={require('./img/us-business-terms-of-service.png').default} alt="Terms of service page with SMS Communications Program section" width="85%" />

## Consent and opt-in

Phone carriers require proof that your business collects consent from customers before sending them SMS messages.

### Consent on your web form

If your business collects customer information through a web form on your website, the form must include **separate consent checkboxes** for transactional and marketing messaging:

:::info Forms builder default
Forms you build with the Forms builder (**CRM > Forms**) show the header "Choose how you'd like to hear from us (optional)" above the consent checkboxes by default, on both new forms and forms you already created. This wording introduces the checkboxes without implying that submitting the form grants consent, so you don't need to add or edit it yourself.
:::

- **Transactional consent**: Confirms the customer agrees to receive service-related messages such as appointment reminders and support updates.
- **Marketing consent**: Confirms the customer agrees to receive promotional messages such as sales and special offers.

:::warning
Neither consent checkbox must be required to complete the form. Customers must be able to submit the form without opting into any SMS messaging.
:::

**Checkbox requirements:**

- Place a checkbox next to the phone field on every website form
- The checkbox must be **unchecked by default**
- Both checkboxes must state that message and data rates may apply, message frequency varies, and that the customer can reply STOP to unsubscribe or HELP for assistance
- Both checkboxes must include links to your privacy policy and terms and conditions

**Common mistakes that cause rejections:**

Carriers reject registrations when the form implies that consent is granted automatically or required to submit, even when both checkboxes are present and correctly worded. Watch for:

- A statement near the checkboxes or the submit button such as "By clicking Submit, you agree to receive marketing communications." This tells carriers that consent comes from submitting the form rather than from the customer's own choice, which contradicts the checkboxes.
- Consent language placed in the form's introduction or fine print instead of in the checkbox labels
- A single checkbox covering both transactional and marketing messaging
- Wording that suggests the customer has to opt in to continue, such as marking a checkbox "required"

The checkboxes must be the only place a customer gives consent. A customer who leaves both unchecked must still be able to submit the form, and must not receive any SMS messages.

**Example checkbox text:**

> **Transactional:** "I agree to receive text messages from [Your Business Name] regarding appointment reminders, quotes, or service updates. Message frequency varies. Message and data rates may apply. Reply STOP to cancel, HELP for help. See our [Privacy Policy] and [Terms of Service]."

> **Marketing:** "I agree to receive occasional promotional messages from [Your Business Name]. Message frequency varies. Message and data rates may apply. Reply STOP to cancel, HELP for help. See our [Privacy Policy] and [Terms of Service]."

**Example:** The following screenshot shows a [compliant web form](https://a2p-example-site-f0f4efd9.vendasta.ai/contact) with separate consent checkboxes for transactional and promotional SMS.

<img src={require('./img/us-business-web-form.png').default} alt="Compliant web form with separate transactional and promotional SMS consent checkboxes" width="70%" />

### Call-to-action placement

Every page on your website where a customer can provide a phone number is a call-to-action (CTA) for SMS consent. Carriers check that each CTA includes:

- Clear language explaining what happens when a customer provides their phone number
- A visible, unchecked checkbox for SMS consent
- Links to your privacy policy and terms and conditions near the checkbox

If your website has multiple forms that collect phone numbers (contact forms, booking forms, newsletter signups), every one of them must meet these requirements.

### AI chat consent

If you use the AI Chat Receptionist, the **Obtain SMS Consent** capability is automatically enabled for accounts submitting A2P registration. When a customer provides their phone number for the first time in a chat conversation, the AI asks two separate questions, one after the other:

> **Transactional:** "Do you agree to receive text messages from [Your Business Name] regarding appointments, service updates, and customer support? Message and data rates may apply. Message frequency varies. Reply STOP to unsubscribe or HELP for help, to any received messages. See our [Privacy Policy] and [Terms of Service] for more info. Reply Yes if you agree or No to decline."

> **Marketing:** "Would you also like to receive marketing/promotional text messages including sales, promotions, and special offers? Message and data rates may apply. Message frequency varies. Reply STOP to unsubscribe or HELP for help, to any received messages. See our [Privacy Policy] and [Terms of Service] for more info. Reply Yes if you agree or No to decline."

The customer can accept or decline each type of messaging independently.

## Prohibited and high-scrutiny content

Certain industries are blocked from SMS registration by US phone carriers, regardless of whether the business is legal in your state. If your business sells or promotes any of the following, it is **not eligible** to register:

- Cannabis, CBD, hemp, or kratom products
- Tobacco, e-cigarettes, or vaping products
- Firearms or ammunition
- Alcohol (direct consumer marketing)
- Payday loans, high-interest lending, or debt settlement services
- Gambling (unless specifically licensed and pre-approved by carriers)
- Multi-level marketing (MLM) programs

These categories are commonly referred to as **SHAFT** (Sex, Hate, Alcohol, Firearms, Tobacco) plus additional restricted industries. If your business falls into one of these categories, SMS registration is not available.

:::warning Check before you apply
If your business is in a prohibited category, the registration will be rejected regardless of how compliant your website is. Confirm your eligibility before investing time in the registration process.
:::

## Common rejection reasons

If your registration is rejected, the registration status shows the specific reason for the failure. These are the most common causes.

### Website compliance issues

| Issue | What to fix |
|---|---|
| Privacy policy does not mention SMS | Add the [required privacy policy language](#required-language) |
| Missing STOP/HELP instructions in privacy policy | Include opt-out and help instructions |
| Terms of service missing SMS program description | Add the [required terms of service language](#required-language-1) |
| Web forms missing consent checkbox | Add [opt-in checkboxes](#consent-on-your-web-form) to all forms with phone fields |
| Consent checkbox is pre-checked | Change the default state to unchecked |
| Form states that submitting grants consent | Remove wording such as "By clicking Submit, you agree to receive marketing communications" so consent comes only from the checkboxes |
| One checkbox covers both message types | Split it into separate transactional and marketing checkboxes |
| Consent checkbox missing privacy policy and terms of service links | Add links to your privacy policy and terms and conditions next to each checkbox |
| Privacy policy URL links to homepage | Update the URL to point directly to the privacy policy page |

### Business information mismatches

| Issue | What to fix |
|---|---|
| Business name does not match IRS records | Use the exact name on your IRS CP 575 letter, including punctuation and abbreviations |
| Address does not match IRS records | Use the registered address from your CP 575 letter |
| EIN belongs to a different entity | Verify you are using the correct EIN for the business being registered |
| EIN not found in verification databases | Wait 30–90 days after EIN issuance for data to propagate, then resubmit |

Once you identify the cause, correct the issue and resubmit when the form shows a failed status.

## FAQs

<details>
<summary><strong>How long does registration take?</strong></summary>

Registration typically takes 1–4 weeks. A third-party verification agency reviews your business information against government databases and checks your website for compliance. You receive a notification when your registration is approved.
</details>

<details>
<summary><strong>Can sole proprietors without an EIN register for SMS?</strong></summary>

Not at this time. A2P 10DLC registration requires an EIN.
</details>

<details>
<summary><strong>Do I need to register again if I already registered through another product?</strong></summary>

No. Your business only needs to register once. The registration applies to all SMS-enabled products including Conversations, Automations, Campaigns, and Reputation.
</details>

<details>
<summary><strong>Can I send SMS to US numbers from a business outside the United States?</strong></summary>

No. A2P registration is only available for US-based businesses. Sending SMS to US numbers from a non-US business is not supported.
</details>

<details>
<summary><strong>I don't see the registration option. Where is it?</strong></summary>

Registration is only available for US-based businesses with the Conversations AI Pro product active. Confirm that your account has a US address, then go to **Administration > Conversations Settings > Phone & SMS**.
</details>

<details>
<summary><strong>I submitted the form with incorrect information. Can I cancel it?</strong></summary>

No. The form cannot be edited or canceled once submitted. If information was missing or incorrect, the registration will move to a failed status. Once it fails, you can correct the information and resubmit.
</details>

<details>
<summary><strong>What phone number will my messages come from?</strong></summary>

Your business is assigned a local phone number based on your business address. If no local numbers are available, you receive a number from a nearby area code. You can view your assigned number in **Administration > Conversations Settings > Phone & SMS**.
</details>

<details>
<summary><strong>Is there an example of a compliant website I can reference?</strong></summary>

Yes. The [sample website](https://a2p-example-site-f0f4efd9.vendasta.ai/) shows a fully compliant setup including a [privacy policy](https://a2p-example-site-f0f4efd9.vendasta.ai/privacy), [terms of service](https://a2p-example-site-f0f4efd9.vendasta.ai/terms), and [contact form](https://a2p-example-site-f0f4efd9.vendasta.ai/contact) with proper consent checkboxes.
</details>
