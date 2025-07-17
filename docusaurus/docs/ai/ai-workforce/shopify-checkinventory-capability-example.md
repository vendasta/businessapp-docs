---
title: "Example Shopify Inventory & Ordering Capability"
---

import {AISparkleIcon} from '@site/src/components/Icons' 

You can create a Custom Capability that allows your AI Employee to search products, list details, and fetch real-time inventory using both Shopify’s GraphQL and REST APIs in one unified workflow. Shoppers can view real-time product availability and pricing directly within chat. 

Use this example as a starting point to build your own Custom Capabilities tailored to your Shopify store.

## Prerequisites & Setup

- **Shopify Store Domain** (e.g., `your-store.myshopify.com`)
  - *How to obtain:* In Shopify Admin, go to `Settings → General` and copy the Store address under "Store details."  

- **Admin API Access Token** (scopes required):
  - `read_inventory`  
  - `read_products`  
  - *How to obtain:* In Shopify Admin, navigate to `Apps → [Develop apps for your store](https://help.shopify.com/en/manual/apps/custom-apps)` → Create a new app → Configure Admin API scopes with the above permissions → Install the app → Copy the Admin API access token.  

- **Storefront API Access Token** (scopes required) ([API docs](https://shopify.dev/docs/api/storefront)):
  - `unauthenticated_read_product_listings`  
  - *How to obtain:* In the same [`Develop apps for your store`](https://help.shopify.com/en/manual/apps/custom-apps) section, enable Storefront API access → Configure access scopes → Install or update the app → Copy the Storefront access token.  

- *(Optional)* **GraphQL Familiarity**
  - *How to obtain:* Review the [Shopify Admin GraphQL API documentation](https://shopify.dev/docs/api/admin-graphql) for examples and query patterns.

#### Shopify Help Resources

- Shopify general settings ([getting your store domain](https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/general-settings))
- Shopify app development ([develop apps for your store](https://help.shopify.com/en/manual/apps/custom-apps))
- Shopify Storefront API documentation ([Storefront API docs](https://shopify.dev/docs/api/storefront))
- Shopify Admin GraphQL API documentation ([Admin GraphQL API docs](https://shopify.dev/docs/api/admin-graphql))

---

## Step 1: Add a new Custom Capability
1. In Business App, navigate to <AISparkleIcon />**AI › AI Workforce**
2. Select your AI Employee and click **Configure**.
3. Under **Custom Capabilities**, click **Add a capability**.
4. Enter **Name**: `CheckInventory`  
   **Description**: Retrieves current inventory levels for a Shopify product.

## Step 2: Configure Your Tools

Configure three tools under this capability:

### Tool: getProductList
| Field       | Value                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------|
| **ID**      | `getProductList`                                                                                           |
| **Description** | Searches the Shopify store for products matching a keyword and returns names, descriptions, prices, and availability. |
| **Method**  | `POST`                                                                                                     |
| **URL**     | `` `https://{{your-shopify-domain}}/api/2025-01/graphql.json` ``                                                  |
| **Headers** | `` `X-Shopify-Storefront-Access-Token: YOUR_STOREFRONT_ACCESS_TOKEN` ``<br/>`` `Content-Type: application/json` ``         |
| **Body Parameter** | `query` = GraphQL string, e.g.:<br/>
```graphql
query {
  products(first: 5, query: "{{keyword}}") {
    edges {
      node {
        id
        title
        variants(first: 1) { edges { node { price } } }
      }
    }
  }
}
```
|

### Tool: searchProductsByKeyword
| Field       | Value                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------|
| **ID**      | `searchProductsByKeyword`                                                                                  |
| **Description** | Searches products by category or keyword and returns a list of product IDs and titles.                    |
| **Method**  | `POST`                                                                                                     |
| **URL**     | `` `https://{{your-shopify-domain}}/api/2025-01/graphql.json` ``                                                  |
| **Headers** | same as getProductList                                                                                     |
| **Body Parameter** | `query` = GraphQL string for keyword-based search, e.g.:<br/>
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

## Sample Conversation

**Customer:** “Can you show me hoodies?”  
**AI:** “Sure—what keyword or category should I use?”  
*(AI calls `searchProductsByKeyword` with the provided keyword or category)*  
**AI:** “Here are some options I found: [list product IDs and titles]. Which product ID would you like details for?”  
*(AI calls `getProductList` with the selected product ID)*  
*(AI calls `CheckInventory` with the mapped `inventory_item_id`)*  
**AI:** “Great news! We have **25** red hoodies available right now.”

## Testing & Troubleshooting

- Test the API separately (e.g., with Postman) to confirm your token and endpoint.
- Verify the `inventory_item_id` mapping if you supply SKUs.
- In the Business App UI, use the **Explanation** view to see the raw API call and JSON response.
- Consider using Shopify’s GraphQL Admin API via the `inventoryLevels` query for more flexible filtering and potentially improved performance.