---
title: "Connect the AI Chat Receptionist with WooCommerce"
---

import {AISparkleIcon} from '@site/src/components/Icons'
import {ChatUserMessage, ChatAIMessage} from '@site/src/components/ChatBubble' 
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

By connecting the AI Chat Receptionist with WooCommerce, you'll be able to integrate info from your online store directly to your AI Chat Receptionist. 

**In this guide, you will set up your AI Receptionist to be able to:**
- Search your WooCommerce store for products by keyword;
- Fetch detailed product information, including title, handle, price range, and description;
- Check real-time inventory levels; and
- Look up order status and tracking information for customers.

### Why is connecting the AI Receptionist with WooCommerce important?

When a customer visits a WooCommerce store they might have a general idea of a product they want but aren't sure exactly how to find it on the store website. Similarly, a customer might be able to find it in search but miss out on some key product details if they don't know where to look. This integration lets a customer ask general questions using chat and get helpful, personalized responses from the AI Receptionist that directs them where they want to go.



## Prerequisites & Setup for connecting the AI Receptionist with WooCommerce

Before you connect your AI Receptionist to WooCommerce, you need to gather the following items from your WooCommerce store's admin. You'll only need to do this once.

| What you need | Where to find it | Scopes / Notes |
|---------------|------------------|----------------|
| **WooCommerce Store URL** (`your-store.com`) | `WooCommerce` → `Settings` → `General` — copy **Store Address** | — |
| **Consumer Key** | <p>1. Go to `WooCommerce` → `Settings` → `Advanced` → `REST API`</p><p>2. Click `Add key`, give it a description, and select a user.</p><p>3. Choose `Read` permissions and click `Generate API key`.</p> | <ul><li>`read`</li></ul> |
| **Consumer Secret** | <p>Generated along with the Consumer Key. Make sure to copy it as it won't be shown again.</p> | — |

#### WooCommerce Help Resources

> You can get more detailed help on gathering this information from the WooCommerce help links below:
> - [WooCommerce REST API Docs](https://woocommerce.github.io/woocommerce-rest-api-docs/)

---

## Creating WooCommerce Custom Capabilities for your AI Receptionist

Each WooCommerce capability follows a simple 3-step process:
1. **Create the capability** - Define what your AI can do
2. **Configure the API tool** - Set up the WooCommerce REST API connection  
3. **Write the prompt** - Train your AI on when and how to use the tool

By the end of this guide, your customers will be able to ask questions like "Do you have blue hoodies in stock?" or "What's the status of my order #123?" and get instant, accurate responses from your AI Receptionist.

### Choose the WooCommerce Capabilities for your AI Receptionist  

There are two separate capabilities for WooCommerce available in this guide. Depending on your business needs, you can implement one or both capabilities. Each capability is independent - you can start with one and add the other later.

#### Option A: Product Search Only
Add this if customers frequently ask "Do you have [product]?" or "What's the price of [item]?" Your AI will help customers find products, check availability, and provide pricing information.

#### Option B: Order Status Only
Add this if customers frequently ask "Where is my order?" or "What's the status of order #123?" Your AI will help customers check order status and get tracking information.

#### Option C: Both Capabilities *(Recommended)*
Implement both for comprehensive support covering sales and post-purchase inquiries.

## WooCommerce Product Search Integration for AI Receptionist

This capability allows customers to search for products and get real-time inventory information through your AI Receptionist.

### Step 1: Configure WooCommerce Product Search Capability

1. In Business App, navigate to <AISparkleIcon /> `AI` → `AI Workforce`
2. Select your AI Employee and click `Configure`.
3. Under `Custom Capabilities`, click `Add a capability`.
4. Fill in the following fields:
   - **Name**: `WooCommerce Product Search`
   - **Description**: Searches the WooCommerce store for products matching keywords and returns product names, descriptions, prices, and availability information.

### Step 2: Set Up WooCommerce Product Tool

`getProductList` is your AI Receptionist's product‑search tool. We are using it to send a keyword to WooCommerce's REST API and returns up to five matching products with title, handle, price range, and availability. 
Use the values below (replacing any placeholders) to create your version of this tool.

#### Summary

| Field | Value |
|-------|-------|
| **ID** | `getProductList` |
| **Description** | Searches the WooCommerce store for products matching a keyword and returns names, descriptions, prices, and availability. |
| **Method** | `GET` |
| **URL** | `https://{{your-woocommerce-domain}}/wp-json/wc/v3/products` |

#### Required headers

| Header | Example value | Required |
|--------|---------------|:-------:|
| `Authorization` | `Basic YOUR_CONSUMER_KEY:YOUR_CONSUMER_SECRET` | ✓ |

> You can also authenticate by passing the `consumer_key` and `consumer_secret` as query parameters in the URL. However, using the Authorization header is the recommended method.

> **Security Tip**: Always use HTTPS when making API requests to protect your Consumer Key and Secret during transmission.

#### Query parameters
| Name | Location | Type | Description |
|------|----------|------|-------------|
| `search` | `Query` | `string` | The search term to look for in product titles, descriptions, and SKUs. |
| `per_page` | `Query` | `number` | The number of products to return. Defaults to 10. We recommend setting this to 5. |
| `status` | `Query` | `string` | The product status. We recommend setting this to `publish` to only show products that are visible on your store. |
| `stock_status` | `Query` | `string` | The stock status. We recommend setting this to `instock` to only show products that are available for purchase. |
| `orderby` | `Query` | `string` | The field to order the results by. We recommend setting this to `popularity`. |
| `order` | `Query` | `string` | The order to sort the results in. We recommend setting this to `desc` for descending. |

### Step 3: Create AI Product Search Prompts and Instructions

Go back to your **WooCommerce Product Search** capability in the AI Employee configuration and add this prompt:

````
When customers ask about products in your store, use the getProductList tool to search for matching items.

**Use the getProductList tool when customers:**
- Ask about specific products (e.g., "Do you have hoodies?")
- Want to browse categories (e.g., "Show me your skincare products")
- Need product recommendations

**Don't use this tool for:**
- Order status questions
- Shipping or return policy questions
- General store information

**When presenting results:**
- Show product names, prices, and brief descriptions
- Include direct links to products
- Be helpful and encouraging
- If no products found, politely suggest they try different keywords or browse your main categories

Keep responses friendly and focused on helping customers find what they're looking for.
````
---

## WooCommerce Order Status Lookup for AI Receptionist

This capability allows customers to check their order status and get tracking information through your AI Receptionist.

### Step 1: Configure WooCommerce Order Status Capability

1. In Business App, navigate to <AISparkleIcon /> `AI` → `AI Workforce`
2. Select your AI Employee and click `Configure`.
3. Under `Custom Capabilities`, click `Add a capability`.
4. Fill in the following fields:
   - **Name**: `WooCommerce Order Lookup`
   - **Description**: Retrieves order information including status, totals, and tracking details when customers provide their order number.

### Step 2: Set Up WooCommerce Order Tool

`getOrderStatus` allows your AI Receptionist to check the status of customer orders. Customers can ask about their order using the order number, and the AI can provide real-time status updates including tracking information.

#### Summary

| Field | Value |
|-------|-------|
| **ID** | `getOrderStatus` |
| **Description** | Retrieves order information including status, total, and tracking details for a specific order number. |
| **Method** | `GET` |
| **URL** | `https://{{your-woocommerce-domain}}/wp-json/wc/v3/orders` |

#### Required headers

| Header | Example value | Required |
|--------|---------------|:-------:|
| `Authorization` | `Basic YOUR_CONSUMER_KEY:YOUR_CONSUMER_SECRET` | ✓ |

#### Query parameters
| Name | Location | Type | Description |
|------|----------|------|-------------|
| `number` | `Query` | `string` | The order number to search for (e.g., "123" or "#123"). |
| `per_page` | `Query` | `number` | Set to 1 since we're looking for a specific order. |
| `status` | `Query` | `string` | Optional. Filter by order status if needed (pending, processing, on-hold, completed, cancelled, refunded, failed). |

> **Note**: This tool uses the same API key you set up in Prerequisites, which already has "Read" permissions for orders.

### Step 3: Create Order Status Prompts and Instructions

Go back to your **WooCommerce Order Lookup** capability in the AI Employee configuration and add this prompt:

````
When customers ask about their orders, use the getOrderStatus tool to look up order information.

**Use this tool when customers:**
- Ask about order status (e.g., "Where is my order #123?")
- Want tracking information
- Need order details or delivery updates

**Don't use this tool for:**
- Product searches
- General store policies
- Account creation help

**When helping customers:**
- If they don't provide an order number, politely ask for it
- Present order information clearly (status, date, total)
- Explain what each status means in simple terms
- Suggest helpful next steps based on the order status
- If order not found, ask them to double-check the number

Be reassuring and helpful when discussing order concerns.
````

---

# Example Conversations

### Product Search Example

<ChatUserMessage>
Hey, do you have any hoodies for sale?
</ChatUserMessage>

*(AI calls `getProductList` with the provided keyword `hoodie`)*

<ChatAIMessage>
Sure! Here are a couple of options for hoodies:

1. **Cozy Hoodie** – $45.00 USD  
   A fleece-lined pullover with a front pocket and adjustable drawstring hood.  
   [View Cozy Hoodie](https://your-store.com/products/cozy-hoodie)

2. **Lightweight Zip-Up** – $39.00 USD  
   A breathable, zip-up hoodie perfect for layering, available in multiple colors.  
   [View Lightweight Zip-Up](https://your-store.com/products/lightweight-zip-up)

Would you like more details or help placing an order?
</ChatAIMessage>

### Order Status Example

<ChatUserMessage>
Hi, can you check the status of my order #1247?
</ChatUserMessage>

*(AI calls `getOrderStatus` with order number `1247`)*

<ChatAIMessage>
I found your order #1247! Here's the current status:

**Order Status:** Processing  
**Order Total:** $89.50 USD  
**Order Date:** December 15, 2024  

Your order is currently being prepared for shipment. You should receive tracking information within the next 24-48 hours via email.

Is there anything else I can help you with regarding your order?
</ChatAIMessage>

## Testing & Troubleshooting

This section walks you through diagnosing the most common issues with connecting WooCommerce with the AI Receptionist.

<Tabs
  defaultValue="token"
  values={[
    { label: 'Unauthorized Error (401)', value: 'token' },
    { label: 'Invalid API Key', value: 'invalid_key' },
    { label: 'No Products Found', value: 'empty' },
    { label: 'Rate Limit Exceeded (429)', value: 'rate_limit' },
  ]}>

<TabItem value="token">
#### What is this error?
You'll get a `401 Unauthorized` response.

#### How do we fix this error?
1. Double-check your Consumer Key and Consumer Secret.
2. Make sure that the user associated with the API key has the correct permissions.
</TabItem>

<TabItem value="invalid_key">
#### What is this error?
You'll get a `401` response with the message `Invalid API key`.

#### How do we fix this error?
1. Make sure that the Consumer Key and Consumer Secret are correct.
2. Check that the user associated with the API key has not been deleted or had their permissions changed.
</TabItem>

<TabItem value="empty">
#### What is this error?
The response's `products` array is empty, so no products matched.

#### How do we fix this error?
1. Verify the search term matches a product title, SKU, or description.
2. Try a broader keyword or check for typos.
3. Make sure that the `status` and `stock_status` parameters are set correctly.
</TabItem>

<TabItem value="rate_limit">
#### What is this error?
You'll get a `429 Too Many Requests` response if you exceed rate limits.

#### How do we fix this error?
1. Implement proper rate limiting in your application.
2. Add delays between API requests.
3. Cache results when possible to reduce API calls.
</TabItem>

</Tabs>

## FAQ: Connecting the AI Receptionist with WooCommerce

<details>
<summary>Can I use this WooCommerce integration with other AI Employees besides the Chat Receptionist?</summary>

Absolutely! While this guide focuses on the AI Chat Receptionist, the Custom Capability and tools you create here work with any AI Employee, including your AI Voice Receptionist. 

This means customers can ask about products through phone calls, SMS, WhatsApp, or any other AI Employees support. The same WooCommerce product data will be available regardless of how customers choose to interact with your business. 

</details>

<details>
<summary>What other e-commerce platforms can I connect besides WooCommerce?</summary>

While this guide is specific to WooCommerce, you can create similar integrations with any e-commerce platform that offers an API—including Shopify, BigCommerce, Magento, or custom-built stores.

</details>

<details>
<summary>How does the WooCommerce integration work with my AI's Knowledge Base?</summary>

The WooCommerce integration provides real-time product data through API calls, while your Knowledge Base contains static business information. These work together perfectly:

**WooCommerce API provides:** Live product availability, current prices, product descriptions  
**Knowledge Base should include:** Shipping policies, return information, size guides, care instructions, warranty details

Your AI will use the WooCommerce API to answer "Do you have this product?" and the Knowledge Base to answer "What's your return policy?" For best results, ensure your Knowledge Sources include comprehensive product and policy information to complement the real-time data.
</details>