---
title: API Key-Based Integrations
sidebar_label: API Key Integrations
description: Connect third-party applications to Business App using an API key for automatic data syncing.
sidebar_position: 3
tags: [integrations, api-key, connections, fieldedge, jobnimbus, shopboss]
keywords: [API key, integrations, FieldEdge, JobNimbus, RB Control Systems, ShopBoss, API key setup]
---

API key integrations connect third-party applications to Business App by exchanging a unique key. Once connected, customer and job data syncs automatically into your CRM.

Integrations that use this method include **FieldEdge**, **JobNimbus**, **RB Control Systems**, and **ShopBoss**.

## Set up an API key integration

### Step 1: Get your API key from Business App

1. Go to **Administration** → **Connections** in Business App.
2. Find the integration card for your application and click **Add connection**.
3. Copy the API key shown in the setup instructions.

### Step 2: Add the API key in the third-party application

Open your third-party application and paste the API key into the appropriate field. The exact location varies by application — refer to the setup instructions shown on the connection card in Business App, or consult the third-party application's help documentation.

### Step 3: Confirm the connection

Return to Business App. Your connection status will update to **Connected** once data has successfully synced. This typically happens the first time a qualifying event occurs in the third-party application (such as a completed job or closed record).

## Manage your connection

To view or disconnect an active integration:

1. Go to **Administration** → **Connections**.
2. Click the **Manage** tab to see all active connections.
3. Click the integration card to view its status or disconnect.

## Frequently Asked Questions (FAQs)

<details>
<summary>Where do I find my API key?</summary>

Your API key is generated automatically when you click **Add connection** on the integration card in **Administration** → **Connections**. Copy it from the setup instructions shown on the card.

</details>

<details>
<summary>Why does my connection still show as pending?</summary>

The connection status updates to **Connected** only after data has synced at least once. Trigger a qualifying event in the third-party application (such as completing a job or closing a record) to initiate the first sync.

</details>

<details>
<summary>Can I use the same API key for multiple locations?</summary>

No. Each business location requires its own Business App account and its own API key. Generate a unique key for each location from that location's connection card.

</details>

<details>
<summary>What data syncs from the third-party application?</summary>

The data that syncs depends on the specific integration. Customer contact details and job or service records are typically included. Refer to the setup instructions on the connection card for details specific to your integration.

</details>
