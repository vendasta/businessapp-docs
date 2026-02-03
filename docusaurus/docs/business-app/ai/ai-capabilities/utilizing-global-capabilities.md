---
title: How to Utilize Global Capabilities
sidebar_label: Utilizing Global Capabilities
sidebar_position: 4
---

import { AISparkleIcon } from '@site/src/components/Icons';

This guide walks you through connecting global capabilities to your AI Employees. Global capabilities are pre-built integrations designed for common business needs, allowing you to quickly extend your AI Employee's functionality without building custom API connections from scratch.

## Prerequisites

Before you begin:
- You have an AI Employee created in Business App
- You have access credentials for the external system you want to connect (required for some capabilities)

### Step 1: Access global capabilities

1. Navigate to <AISparkleIcon /> **AI** › **AI Workforce** in your Business App dashboard.
2. Select an AI Employee.
3. Click the **Configure** button.
4. Scroll to the Capabilities section and click **Add a capability**.
5. Browse the available global capabilities.

### Step 2: Connect a global capability

1. Locate the global capability you want to use.
2. Click to enable the capability.
3. Fill in any required variable fields (these vary by capability).
4. Click **Save**.

### Step 3: Test your connection

1. Start a conversation with your AI Employee.
2. Ask a question that should trigger the capability.
3. Verify the AI retrieves and displays the correct information.

## Check WooCommerce inventory

Checks product inventory and availability from your WooCommerce store.

### Required variables

After connecting this capability to an AI Employee, fill in the following fields:

| Variable                      | Description                                          |       Example                              |
|-------------------------------|------------------------------------------------------|--------------------------------------------|
| **WooCommerceStoreUrl**       | Your WooCommerce store URL                           |    https://example.ca/                     |
| **WooCommerceProductsApiUrl** | Direct URL to your WooCommerce products API endpoint |  https://example.ca/wp-json/wc/v3/products |
| **WooCommerceBasicAuth**      | Your encoded API credentials for authentication      | Y29uc3VtZXJfa2V5OmNvbnN1bWVyX3NlY3JldA     |


### Getting your WooCommerce API credentials

The **WooCommerceBasicAuth** field requires an authentication key that allows your AI Employee to securely connect to your WooCommerce store.

#### To generate this key:

1. Log in to your WordPress admin dashboard.
2. Navigate to **WooCommerce** › **Settings** › **Advanced** › **REST API**.
3. Click **Add Key** to create new API credentials.
4. Set the permissions to **Read**.
5. Generate and copy your credentials.

:::warning
Ensure permissions are set to **Read** when creating your API key. If set to Write or Read/Write, users could potentially update or change product information or pricing on your WooCommerce store.
:::

You will need to format these credentials for use in the **WooCommerceBasicAuth** field. For detailed instructions on formatting your authentication key, search for "WooCommerce REST API Basic Authentication" or consult your WooCommerce administrator.

:::note
Do not include the word **Basic** in the **WooCommerceBasicAuth** field, it is added automatically.
:::

## Create email template

Creates an email template from a description.

:::note
You must have **Campaigns Pro** enabled to access this capability.
:::

### Using this capability

Chat with your AI Employee that has the **Create email template** capability assigned. Describe the email you want to create, and the AI will generate a template for you.

### Finding your email templates

After your AI Employee creates a template:

1. Navigate to **Campaigns** in the right navigation panel.
2. Click **Templates**.
3. Your created templates appear under **My templates**.
