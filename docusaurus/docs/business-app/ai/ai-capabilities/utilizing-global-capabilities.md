---
title: How to Utilize Global Capabilities
sidebar_label: Utilizing Global Capabilities
sidebar_position: 4
---

import { AISparkleIcon } from '@site/src/components/Icons';

This guide walks you through connecting global capabilities to your AI Employees. Global capabilities are ready to use integrations designed for common business needs, allowing you to quickly extend your AI Employee's functionality without building custom API connections from scratch.

## Prerequisites
Before you begin:

- You have an AI Employee created in Business App
- You have access credentials for the external system you want to connect in some instances


## Check WooCommerce inventory

Checks product inventory and availability from your WooCommerce store

### Required Variables

After connecting this capability to an AI Employee, fill in the following fields:

| Variable                  | Description                                          |       Example                              |
|---------------------------|------------------------------------------------------|--------------------------------------------|
| WooCommerceStoreUrl       | Your WooCommerce store URL                           |    https://example.ca/                     |
| WooCommerceProductsApiUrl | Direct URL to your WooCommerce products API endpoint |  https://example.ca/wp-json/wc/v3/products |
| WooCommerceBasicAuth      | Your encoded API credentials for authentication      | Y29uc3VtZXJfa2V5OmNvbnN1bWVyX3NlY3JldA     |


### Getting Your WooCommerce API Credentials

The WooCommerceBasicAuth field requires an authentication key that allows your AI Employee to securely connect to your WooCommerce store.

#### To generate this key: 

1. Log in to your WordPress admin dashboard.
2. Navigate to WooCommerce › Settings › Advanced › REST API.
3. Click Add Key to create new API credentials.
4. Set the permissions to Read.
5. Generate and copy your credentials.

You will need to format these credentials for use in the WooCommerceBasicAuth field. For detailed instructions on formatting your authentication key, search for "WooCommerce REST API Basic Authentication" or consult your WooCommerce administrator.

:::tip
Do not include the word **Basic** in the WooCommerceBasicAuth field, it is added automatically.
:::

#### Testing the Connection

Try asking your AI Employee questions like:

- "Do you sell laptops?"
- "Check inventory for wireless headphones"

### Troubleshooting

#### Capability Not Returning Data

- Verify your API credentials: Ensure the credentials are correctly encoded and have appropriate permissions.
- Check the URL format: Confirm URLs are complete and include https://.

#### Authentication Errors

- Regenerate your API key: Create a new key in your external system and update the capability configuration.
- Check permissions: Ensure the API key has read access to the required data.