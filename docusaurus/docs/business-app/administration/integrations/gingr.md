---
title: Gingr Integration
description: Connect Gingr to Business App to automatically sync customer data into your CRM when a reservation is checked out.
sidebar_position: 3
tags: [integrations, gingr, crm, pet]
keywords: [gingr, gingr integration, pet care, kennel, grooming, CRM sync, API key]
---

Gingr is a dog daycare, kennel, and grooming software that modernizes and streamlines pet care business operations. Connecting Gingr to Business App automatically syncs customer data into your CRM so you can follow up after every reservation without manual data entry.

**Requirements:** A Gingr account with Admin-level access.

## What this integration does

- **Sync customer data** — When a reservation is checked out in Gingr, the associated customer data syncs automatically to your CRM.
- **Automate review requests** — Automatically request reviews from customers after a checked-out reservation to build your online reputation.
- **Customer communication** — Follow up with customers using campaigns and messaging, all from within Business App.

## How the integration works

**Trigger:** When a reservation is checked out in Gingr, the customer is automatically created as a contact in your CRM.

**Opt-out behavior:**
- If a customer is opted out of marketing emails in Gingr, they will **not** be uploaded to your CRM.
- If a customer is opted out of marketing SMS in Gingr, they will be uploaded to your CRM but their phone number will not be synced.

## Set up the Gingr integration

### Step 1: Get your API key from Business App

1. Go to **Administration** → **Integrations** in Business App.
2. Find the **Gingr** card and click **Connect**.
3. Click **Add Connection** on the pre-connect form.
4. Copy the API key shown in the setup instructions.

<!-- screenshot needed: Gingr Connection Settings page showing the API key and Copy button -->

### Step 2: Add the API key in Gingr

1. Open a new browser tab and go to [https://my.gingrapp.com/](https://my.gingrapp.com/). Log in with Admin credentials.
2. From the left menu, select **Admin** (gear icon).
3. In the **Search Admin Items** box, search for **Broadly** and click the **Broadly** settings link.
4. Set the **Broadly request positive survey only** field to **No/Off**.
5. In the **Location Settings** drop-down, select the location you want to connect.
6. Paste the API key you copied from Business App into the **Broadly Location ID** field.

<!-- screenshot needed: Gingr Admin settings showing the Broadly Location ID field -->

Your connection status shows as **Connection pending** until data syncs. The status updates to **Connected** the first time a reservation is checked out and customer data successfully syncs.

## Multiple locations

Each business location requires its own setup:

- Each location needs its own Business App account.
- Generate a unique API key from each location's Gingr connection in Business App.
- In Gingr's Admin settings, use the **Location Settings** drop-down to select the correct location, then paste the corresponding API key into the **Broadly Location ID** field for that location.

## Troubleshooting

**Clients are not uploading after checkout**

Check that the **Broadly request positive survey only** field in Gingr is set to **No/Off**. When set to **Yes/On**, the integration only triggers if the customer replied to the Gingr survey with positive feedback, which significantly reduces the number of contacts synced to your CRM.

## Frequently Asked Questions (FAQs)

<details>
<summary>When does a contact appear in my CRM?</summary>

A contact is created in your CRM when a reservation is checked out in Gingr. There is no manual step required — the sync happens automatically.

</details>

<details>
<summary>What if a customer is opted out of marketing in Gingr?</summary>

If the customer is opted out of marketing emails, they will not be uploaded to your CRM at all. If they are opted out of marketing SMS only, they will be uploaded but without a phone number.

</details>

<details>
<summary>Why does my connection show "Connection pending"?</summary>

The connection status updates to **Connected** only after a reservation has been checked out in Gingr and customer data has synced at least once. Complete a test checkout in Gingr to confirm the connection is working.

</details>

<details>
<summary>Do I need Reputation Management to use this integration?</summary>

Syncing customer data to your CRM works with any account. Automated review requests require a Reputation Management subscription.

</details>
