---
title: "Example Shopify Inventory & Ordering Capability"
---

import {AISparkleIcon} from '@site/src/components/Icons' 

You can create a Custom Capability that allows your AI Employee to search products, list details, and fetch real-time inventory using both Shopify’s GraphQL and REST APIs in one unified workflow. Shoppers can view real-time product availability and pricing directly within chat, and the AI Receptionist can use this on phone calls to help answer questions about inventory.

Use this example as a starting point to build your own Custom Capabilities tailored to your Shopify store.


## Prerequisites & Setup

Before you connect your AI Employee to Shopify, gather the following items from your store’s admin. You’ll only need to do this once.

| What you need | Where to find it | Scopes / Notes |
|---------------|------------------|----------------|
| **Shopify Store Domain** (`your-store.myshopify.com`) | `Admin` → `Settings` → `General` — copy **Store address** | — |
| **Admin API Access Token** | <p>1. Click <code>New app</code> → <code>Configure Admin API</code> (select the permissions shown in “Scopes / Notes” and click Save)</p><p>2. Click <code>Install</code> → <code>Reveal token</code></p> | <ul><li>`read_inventory`</li><li>`read_products`</li></ul> |
| **Storefront API Access Token** | <p>1. Click <code>Enable Storefront API</code> (turn on the permission listed in “Scopes / Notes” and click Save)</p><p>2. Click <code>Install / Update</code> → <code>Reveal token</code></p> | <ul><li>`unauthenticated_read_product_listings`</li></ul> |
| *(Optional)* **GraphQL Familiarity** | Review [Shopify Admin GraphQL API docs](https://shopify.dev/docs/api/admin-graphql) | — |

#### Shopify Help Resources

- Shopify general settings ([getting your store domain](https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/general-settings))
- Shopify app development ([develop apps for your store](https://help.shopify.com/en/manual/apps/custom-apps))
- Shopify Storefront API documentation ([Storefront API docs](https://shopify.dev/docs/api/storefront))
- Shopify Admin GraphQL API documentation ([Admin GraphQL API docs](https://shopify.dev/docs/api/admin-graphql))

---

## Step 1: Add a new Custom Capability

This step creates the capability an AI Employee will reference when someone asks about items or stock.

1. In Business App, navigate to <AISparkleIcon /> `AI` → `AI Workforce`
2. Select your AI Employee and click `Configure`.
3. Under `Custom Capabilities`, click `Add a capability`.
4. Fill in the fields:
   - **Name**: `GetShopifyProductInfo`
   - **Description**: Finds Shopify products based on keywords, and fetches information on them like 

:::note
Any capabilities you create for one AI Employee can be added as a capability for others! Keep this in mind when you are naming or describing a capability.
:::

## Step 2: Configure Your Tools

Add three simple tools your AI Employee can use behind the scenes: one to find matching products, one to pull their details, and one to see how many are left in stock.

### Tool: getProductList

`getProductList` is your AI Employee’s product‑search tool. It sends a keyword‑driven query to Shopify’s Storefront API and returns up to five matching products with title, handle, price range, and availability. Use the values below (replacing any placeholders) to create your version of this tool.

#### Summary

| Field | Value |
|-------|-------|
| **ID** | `getProductList` |
| **Description** | Searches the Shopify store for products matching a keyword and returns names, descriptions, prices, and availability. |
| **Method** | `POST` |
| **URL** | `https://{{your-shopify-domain}}/api/2025-01/graphql.json` |

#### Required headers

| Header | Example value | Required |
|--------|---------------|:-------:|
| `X-Shopify-Storefront-Access-Token` | `YOUR_STOREFRONT_ACCESS_TOKEN` | ✓ |
| `Content-Type` | `application/json` | ✓ |

#### Body parameters
| Name | Location | Type | Description |
|------|----------|------|-------------|
| `query` | `Body` | `string` | `Generate a full GraphQL query string using Shopify Storefront API with this format: query { products(first: 5, query: "KEYWORD") { edges { node { title handle availableForSale priceRange { minVariantPrice { amount currencyCode } } descriptionHtml } } } }, replacing KEYWORD with the user's term. Do not return just a keyword—return the entire query string exactly as shown.` |

:::tip
When an AI Employee uses a tool, you can inspect its raw API calls in the `Conversations` tab. If a call isn’t formatted correctly, expand the sample query below and compare it to this known-good GraphQL body.
<details>
<summary>Sample GraphQL body</summary>

```graphql
query {
  products(first: 5, query: "{{keyword}}") {
    edges {
      node {
        id
        title
        variants(first: 1) {
          edges { node { price } }
        }
      }
    }
  }
}
```
</details>

:::

### Tool: searchProductsByKeyword
| Field       | Value                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------|
| **ID**      | `searchProductsByKeyword`                                                                                  |
| **Description** | Searches products by category or keyword and returns a list of product IDs and titles.                    |
| **Method**  | `POST`                                                                                                     |
| **URL**     | `` `https://{{your-shopify-domain}}/api/2025-01/graphql.json` ``                                                  |
| **Headers** | same as getProductList                                                                                     |
| **Body Parameter** | `query` = GraphQL string for keyword-based search, e.g.:
```graphql
query {
  products(first: 10, query: "tag:{{category}}") {
    edges { node { id title } }
  }
}
```
|

### Tool: CheckInventory
| Field              | Value                                                                                                      |
|--------------------|------------------------------------------------------------------------------------------------------------|
| **ID**             | `CheckInventory`                                                                                           |
| **Description**    | Retrieves available quantity for a product from Shopify.                                                    |
| **Method**         | `GET`                                                                                                      |
| **URL**            | `` `https://{{your-shopify-domain}}/admin/api/2023-10/inventory_levels.json` ``                                   |
| **Query Parameters** | `inventory_item_ids` = `` `{{inventory_item_id}}` `` **(required)**<br/>`location_ids` = `` `{{location_id}}` `` **(optional)** |
| **Headers**       | `` `X-Shopify-Access-Token: YOUR_SHOPIFY_ACCESS_TOKEN` ``<br/>`` `Content-Type: application/json` ``                     |

## Step 3: Write the Prompt

Give the AI clear rules on when and how to use the new tools in a conversation.

```markdown
# Shopify Inventory Checker
## When to use
- ONLY call `CheckInventory` when the user asks about stock levels for a specific product.

## Information Needed
- Ensure you have `inventory_item_id` (or SKU) before calling.
- If the user provides SKU, convert it to `inventory_item_id` via your SKU mapping logic.

## How to respond
- If successful: “I checked our Shopify store — there are **[quantity]** units available for [Product Name].”
- If zero: “It looks like [Product Name] is currently out of stock. Would you like to be notified when it’s back in stock?”
- On error: Apologize and suggest retrying or checking the store directly.
```
---

## Sample Conversation

Here’s what a successful chat flow looks like in real life.

**Customer:** “Can you show me hoodies?”  
**AI:** “Sure—what keyword or category should I use?”  
*(AI calls `searchProductsByKeyword` with the provided keyword or category)*  
**AI:** “Here are some options I found: [list product IDs and titles]. Which product ID would you like details for?”  
*(AI calls `getProductList` with the selected product ID)*  
*(AI calls `CheckInventory` with the mapped `inventory_item_id`)*  
**AI:** “Great news! We have **25** red hoodies available right now.”

## Testing & Troubleshooting

Use these tips if responses don’t match your store’s data.

- Test the API separately (e.g., with Postman) to confirm your token and endpoint.
- Verify the `inventory_item_id` mapping if you supply SKUs.
- In the Business App UI, use the **Explanation** view to see the raw API call and JSON response.
- Consider using Shopify’s GraphQL Admin API via the `inventoryLevels` query for more flexible filtering and potentially improved performance.