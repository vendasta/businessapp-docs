---
title: Clio Integration
description: Configure custom fields in Clio to control which customers sync to Business App when a Matter is closed.
sidebar_position: 4
tags: [integrations, clio, crm, legal]
keywords: [clio, clio integration, closed matter trigger, opt out, opt in, custom field, BroadlyOptOut, SendBroadlyThankYou]
---

The Clio integration syncs customer data to Business App when a Matter is marked as closed. You can configure a custom field in Clio to control which customers are included or excluded from each sync.

Two configurations are available — choose the one that matches how you prefer to manage syncing:

- **Opt-Out**: All customers sync by default. Check a box on a contact to exclude them.
- **Opt-In**: No customers sync by default. Check a box on a Matter to include them.

---

## Set up the Opt-Out trigger (Closed Matter)

This configuration syncs all customers when a Matter closes, unless a contact is explicitly marked to be excluded.

### Configure the custom field in Clio

1. Log in to your Clio dashboard.
2. Go to **Settings** → **Custom Fields**.
3. Make sure you are in the **Contact Custom Fields** section.
4. Select **Individual Fields**.
5. Click the green **Add** button.
6. Fill in the field details:
   - **Field Name**: `BroadlyOptOut`
   - **Type**: Checkbox
   - **Default**: Checked
   - **Required**: Leave unchecked
7. Click **Save**.

### How it works

When a Matter is marked as closed, Clio checks the `BroadlyOptOut` field on the associated contact:

- **Checkbox checked** → contact data is **not** synced to Business App
- **Checkbox unchecked** (default) → contact data **syncs** to Business App

:::note
The field name `BroadlyOptOut` is case-sensitive. Enter it exactly as shown.
:::

---

## Set up the Opt-In trigger (Closed Matter)

This configuration only syncs a customer when a Matter is explicitly marked for syncing. No data syncs by default.

### Configure the custom field in Clio

1. Log in to your Clio dashboard.
2. Go to **Settings** → **Custom Fields**.
3. Make sure you are in the **Matter Custom Fields** section.
4. Select **Individual Fields**.
5. Click the green **Add** button.
6. Fill in the field details:
   - **Field Name**: `SendBroadlyThankYou`
   - **Type**: Checkbox
   - **Default**: Checked
   - **Required**: Leave unchecked
7. Click **Save**.

### How it works

When a Matter is marked as closed, Clio checks the `SendBroadlyThankYou` field on the Matter:

- **Checkbox checked** → contact data **syncs** to Business App
- **Checkbox unchecked** → contact data is **not** synced

:::note
The field name `SendBroadlyThankYou` is case-sensitive and must have no extra spaces. Enter it exactly as shown.
:::

---

## Frequently Asked Questions (FAQs)

<details>
<summary>Which trigger should I use — Opt-Out or Opt-In?</summary>

Use **Opt-Out** if you want most customers to sync automatically and only need to exclude specific contacts. Use **Opt-In** if you want to control syncing on a Matter-by-Matter basis and only send data for specific cases.

</details>

<details>
<summary>Can I use both configurations at the same time?</summary>

No. Set up one configuration — either the Contact-level Opt-Out field or the Matter-level Opt-In field — based on how you want to manage syncing.

</details>

<details>
<summary>What happens if neither custom field is configured?</summary>

Without a custom field configured, the integration uses its default syncing behavior. Contact your support team if you are unsure which configuration applies to your account.

</details>

<details>
<summary>Does the field name need to match exactly?</summary>

Yes. Both `BroadlyOptOut` and `SendBroadlyThankYou` are case-sensitive and must be entered exactly as shown, with no extra spaces or characters.

</details>
