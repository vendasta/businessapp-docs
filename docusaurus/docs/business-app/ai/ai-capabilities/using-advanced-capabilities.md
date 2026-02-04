---
title: Using Advanced Capabilities
sidebar_label: Using Advanced Capabilities
sidebar_position: 4
---

import { AISparkleIcon } from '@site/src/components/Icons';

Before your AI Employee can use certain capabilities, you may need to configure API credentials or connect to external systems. This page provides setup instructions for capabilities that require additional configuration or are more complex to use.

For general information on enabling and configuring capabilities, see [Configuring Capabilities](configuring-capabilities.md).

## Prerequisites

Before you begin:
- You have an AI Employee created in Business App
- You have access credentials for the external system you want to connect (required for some capabilities)

---

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

---

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
