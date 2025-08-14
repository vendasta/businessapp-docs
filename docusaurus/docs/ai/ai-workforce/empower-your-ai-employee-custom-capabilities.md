---
title: Creating Custom Capabilities for your AI Employees
sidebar_position: 3
---

import { AISparkleIcon } from '@site/src/components/Icons';

You can enhance your AI Employees in Business App by adding **Custom Capabilities**—specialized skills that let your AI interact with external systems and perform actions beyond chat, like checking inventory or booking appointments.

## What are Custom Capabilities?

A **Custom Capability** is a skill you add to your AI Employee. 

Each capability has two main parts:

- **Prompt:** Tells the AI *when* to use the capability and *how* to behave before/after using it.
- **Tool:** Defines *what* the AI does (e.g., look-up data, book a meeting) and how they do it (ie. which API).

When combined, these allow your AI Employee to perform custom tasks on your behalf.

## Why use Custom Capabilities?

Creating Custom Capabilities can enable your AI Employees to use other systems to:

- Check real-time inventory and product details
- Schedule appointments or bookings
- Look up order status
- Generate custom quotes or estimates
- Access customer account information (loyalty points, purchase history)
- Locate the nearest store or business hours
- Search an internal knowledge base or FAQ
- Create a ticket in your job-tracking or support system
- Automate repetitive workflows for your team

If an action can be done via an API, you can probably turn it into a capability.

## How your AI Employees use Custom Capabilities

Your AI Employee can use Custom Capabilities whenever it interacts with customers—whether through chat, voice, or any supported channel.

**Here’s how it works:**

1. A customer asks a question or makes a request.
2. Your AI Employee reviews its Prompts to identify if any Custom Capability matches the request.
3. If a match is found and all necessary information is available, your AI Employee calls the corresponding Tool.
   - If some required information is missing, your AI Employee will prompt the customer to provide the missing details before continuing.
4. Your AI Employee uses the Tool’s response to craft its reply—by sending a message or responding with spoken output.

## How to create a Custom Capability for your AI Employees
1. In Business App, navigate to <AISparkleIcon /> `AI` › `AI Workforce` 
2. Select an existing AI Employee and click **Configure**. 
3. Access the **Custom Capabilities** section and click **Add a capability**.
4. Name the capability clearly (e.g., `CheckInventory`) and add a short description to help your AI Employee know when to use their capabilities.
5. Add the **Prompt**. For tips and best practices, see [Writing a Good Capability Prompt](#writing-a-good-capability-prompt).
   
:::tip
You may want to enter placeholder text like "TBD" and refine it after defining the **Tools**.
:::

6. Add one or more **Tools** (for example, one to check availability and another to confirm a booking).
7. Save your changes and test the capability by chatting with your AI Employee.

### Tool fields explained

#### Import from cURL  
cURL is a tool developers use to test APIs by typing commands. Many API docs show example cURL commands. Importing a cURL command here helps you fill in the tool setup automatically—saving time and avoiding mistakes.  

#### ID  
This is a unique name for your tool inside your AI’s setup. Choose something simple and descriptive, like `CheckInventory` or `BookAppointment`. You cannot use spaces.

#### Description  
Write a short, clear sentence that explains what this tool does. This helps your AI Employee know what the tool does and helps you and your team remember its purpose later
*Example:* “Checks if a product is in stock.”

#### Method & URL  
- **Method:** This is the action your AI will ask the API to perform:  
  - **GET** means "give me some info."  
  - **POST** means "create or update something."  
  - **PUT/PATCH** means "change something."  
  - **DELETE** means "remove something."  
- **URL:** This is the web address your AI will contact to do the action. Think of it like the phone number the AI calls.  
*Example:* `GET https://api.yourbusiness.com/products`

#### Parameters  
Parameters are extra details your AI sends so the API knows exactly what you want. They come in different types:  
- **Query parameters:** Added to the end of a URL like a question. Example: `?product_id=123` means “tell me about product 123.”  
- **Path parameters:** Part of the URL path, like an address. Example: `/products/123` means “look up product 123.”  
- **Body parameters:** Sent inside the request, usually to add or update info (like customer details).  
Each parameter has a name (like `product_id`), a description (what it means), where it goes (query, path, or body), and what kind of data it is (text, number, etc.).

#### Headers  
Headers are extra info sent with the API request, often for security. For example:  
- `Authorization: Bearer YOUR_API_KEY` (lets the AI access the data)  
- `Content-Type: application/json` (tells the AI what kind of data is sent)

#### No external processing needed  
Check this box if your tool doesn’t actually call an outside API but works internally—like formatting dates or text within the AI. This saves unnecessary network calls.

### Writing a good capability Prompt

When creating your **Prompt**, be sure to:

- Clearly specify *when* to call the tool (e.g., "ONLY call `CheckCustomerOrderStatus` when the user asks about their order status").
- List the information the AI must gather before calling the tool (e.g., "You **MUST** have `order_number` before calling").
- Guide how the AI should use the tool’s response when replying to the user.
- Explain how to handle errors or cases when the API returns no results.

## Managing Custom Capabilities

- **Updating:** Any saved changes are applied the next time the AI considers the capability during chat.
- **Disabling:** Deleting tools is not supported yet; to disable a tool, un-assign it from the AI Employee.

## Testing and troubleshooting ustom Capabilities

1. Chat with your AI Employee and try different phrasings to trigger the capability.
2. Verify the AI requests any required information and calls the appropriate tool.
3. In *Conversations*, click **Explanation** under a message to view the AI’s reasoning and raw API call.
4. If the API call fails, test it separately using tools like Postman, adjust as needed, and re-import the cURL command.

## Example Custom Capability: Product information lookup

### Example tool configuration

| Field       | Value                                              |
|-------------|----------------------------------------------------|
| **ID**      | `LookupProductDetails`                              |
| **Description** | Retrieves details for a product from the product database |
| **Method**  | `GET`                                              |
| **URL**     | `https://api.yourdatabase.com/products`            |

### Parameters

- `product_id` (string, *query*) – the unique identifier of the product

### Headers

- `X-API-Key: YOUR_SECURE_API_KEY`

### Prompt snippet

```markdown
# Product Lookup Assistant
## When to use
- ONLY call `LookupProductDetails` when the user asks about a product's price, description, or features.
- Do NOT call this unless the user has provided a specific product name **or** ID.

## Information Needed
- Before calling the tool, you MUST identify `product_id`.
- If the user only gives a name, ask for the ID.

## Tool Parameters
- Set `product_id` to the user-provided ID.

## How to respond
- If successful: "I found **[Product Name]**. The price is **$[Price]**. Description: **[Description]**."
- If not found: Apologize and suggest the user double-check the ID or browse products online.
```

### Sample conversation

**Customer:** "Can you tell me the price of the blue wireless headphones?"  
**AI:** "Sure! To make sure I have the right product, can you confirm if you mean the *BlueWave Wireless Headphones*?"  
**Customer:** "Yes, that's the one."  
*(AI calls `LookupProductDetails` with `product_id` matching BlueWave Wireless Headphones)*  
**AI:** "Great! The *BlueWave Wireless Headphones* are priced at **$89.99**. They offer 20 hours of battery life and come with a two-year warranty."