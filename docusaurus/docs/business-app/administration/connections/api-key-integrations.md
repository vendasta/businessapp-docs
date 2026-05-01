---
title: API Key-Based Integrations
sidebar_label: API Key Integrations
description: Connect third-party applications to Business App using an API key to sync customer data and automate review requests.
sidebar_position: 3
tags: [integrations, api-key, connections, fieldedge, jobnimbus, shopboss]
keywords: [API key, integrations, FieldEdge, JobNimbus, RB Control Systems, ShopBoss, Pet Resort Pro, Protractor, Mitchell Enterprise, API key setup]
---

API key integrations connect third-party applications to Business App by exchanging a unique key. Once connected, customer data syncs automatically into your CRM and you can trigger automated review requests.

Integrations that use this method include **FieldEdge**, **JobNimbus**, **RB Control Systems**, **ShopBoss**, **Pet Resort Pro**, and **Protractor/Mitchell Enterprise**.

## Set up an API key integration

### Step 1: Find the integration

1. Go to **Administration** → **Connections** in Business App.
2. Click the **Browse** tab.
3. Find the integration card for your application and click it.

### Step 2: Review the marketing page and connect

The marketing page describes what the integration does and the data it syncs. Click **Connect** to start setup.

### Step 3: Complete the pre-connect form

The pre-connect form outlines the next steps and lets you configure your data sync preferences before the connection is established:

- **Sync customer data** — Enable or disable automatic contact syncing to your CRM.
- **Automated review requests** — Enable to send review requests automatically when customer data syncs. Requires a Reputation Management Premium subscription. If you do not have this subscription, this option is locked and can be unlocked by upgrading.

Click **Add Connection** to continue.

### Step 4: Copy your API key and complete setup in the third-party application

After submitting the form, you are taken to the Connection Settings page. Follow the setup instructions shown there — these vary by integration. For example, for Gingr you copy the API key and paste it into the **Broadly Location ID** field in your Gingr Admin settings.

Refer to the instructions on the Connection Settings page for the exact steps for your integration.

### Step 5: Confirm the connection

The connection status shows as **Pending** until data syncs for the first time. The integration becomes **Connected** after the first qualifying event in the third-party application triggers a sync — for example, when a customer checks out a reservation or a job is completed.

When the connection is successfully established, you receive both an email notification and an in-app notification.

## Manage your connection

After setup, your integration appears as a connection card in the **Manage** tab of the Connections page. The card shows the current status of the integration:

| Status indicator | Meaning |
|---|---|
| Green checkmark | Connected and syncing normally |
| Yellow warning | There is a problem with the integration |
| Blue info icon | Setup is in progress (pending connection) |

Click the connection card to open the Connection Settings page, where you can review setup instructions, adjust sync preferences, or disconnect the integration.

### Pending connection status

Until the first data sync occurs, the integration is in a **Pending** status. This is shown:

- As a banner in the **Manage** tab
- As an info icon on the connection card
- On the Connection Settings page and the integration's marketing page

Click the connection card to return to the Connection Settings page and continue or troubleshoot the setup.

## Frequently Asked Questions (FAQs)

<details>
<summary>Where do I find my API key?</summary>

Your API key appears on the Connection Settings page after you click **Add Connection** on the integration card. Copy it from the setup instructions shown there.

</details>

<details>
<summary>Why does my connection still show as pending?</summary>

The status updates to **Connected** only after data has synced at least once. Trigger a qualifying event in the third-party application — such as completing a job or checking out a reservation — to initiate the first sync.

</details>

<details>
<summary>Can I use the same API key for multiple locations?</summary>

No. Each business location requires its own Business App account and its own API key. Generate a unique key for each location from that location's Connection Settings page.

</details>

<details>
<summary>Can I enable automated review requests later?</summary>

Yes. Open the Connection Settings page for the integration and update your sync preferences at any time. Automated review requests require a Reputation Management Premium subscription.

</details>

<details>
<summary>What data syncs from the third-party application?</summary>

The data that syncs depends on the specific integration. Customer contact details are typically included. Refer to the setup instructions on the Connection Settings page for details specific to your integration.

</details>
