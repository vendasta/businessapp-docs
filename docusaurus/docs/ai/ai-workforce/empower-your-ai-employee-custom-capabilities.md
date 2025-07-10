---
title: Creating Custom Capabilities for your AI Employees
sidebar_position: 3
---

import { AISparkleIcon } from '@site/src/components/Icons';

You can enhance your AI Employees in Business App by adding **Custom Capabilities**—specialized skills that let your AI interact with external systems and perform actions beyond chat, like checking inventory or booking appointments.

## What Are Custom Capabilities?

A **Custom Capability** is a skill you add to your AI Employee. 

Each capability has two main parts:

- **Prompt:** Tells the AI *when* to use the capability and *how* to behave before/after using it.
- **Tool:** Defines *what* the AI does (e.g., look-up data, book a meeting) and how they do it (ie. which API).

When combined, these allow your AI Employee to perform custom tasks on your behalf.

## Why Use Custom Capabilities?

Creating Custom Capabilities can enable your AI Employees to:

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

## How Your AI Employee Uses Custom Capabilities

Your AI Employee can use Custom Capabilities whenever it interacts with customers—whether through chat, voice, or any supported channel.

**Here’s how it works:**

1. A customer asks a question or makes a request.
2. Your AI Employee reviews its Prompts to identify if any Custom Capability matches the request.
3. If a match is found and all necessary information is available, your AI Employee calls the corresponding Tool.
   - If some required information is missing, your AI Employee will prompt the customer to provide the missing details before continuing.
4. Your AI Employee uses the Tool’s response to craft its reply—by sending a message or responding with spoken output.

## How to Create a Custom Capability for your AI Employees

1. In Business App, navigate to <AISparkleIcon /> `AI` › `AI Workforce` 
2. Select an existing AI Employee and click **Configure**. 
3. Access the **Custom Capabilities** section and click **Add a capability**.
4. Name the capability clearly (e.g., `CheckInventory`) and add a short description to help your AI Employee know when to use their capabilities.
5. Add the **Prompt**. For tips and best practices, see [Writing a Good Prompt](#writing-a-good-prompt).
   
:::tip
You may want to enter placeholder text like "TBD" and refine it after defining the **Tools**.
:::
6. Add one or more **Tools** (for example, one to check availability and another to confirm a booking). For details on configuring tools, see [Tool Fields Explained](#tool-fields-explained).
7. Save your changes and test the capability by chatting with your AI Employee.

### Tool Fields Explained

- **Import from cURL:** Quickly pre-fill the tool configuration by importing an existing cURL command.
- **ID:** Unique identifier for the tool (e.g., `LookupProductDetails`).
- **Description:** A plain-language explanation of what the tool does.
- **Method & URL:** The HTTP method (GET, POST, etc.) and the API endpoint.
- **Parameters:** Inputs the API requires, including name, description, location (query, path, body), and type.
- **Headers:** Authentication keys or other HTTP headers needed for the API call.
- **No external processing needed:** Check this if the tool does not call an API but only formats the AI's response.

### Writing a Good Prompt

When creating your **Prompt**, be sure to:

- Clearly specify *when* to call the tool (e.g., "ONLY call `CheckCustomerOrderStatus` when the user asks about their order status").
- List the information the AI must gather before calling the tool (e.g., "You **MUST** have `order_number` before calling").
- Guide how the AI should use the tool’s response when replying to the user.
- Explain how to handle errors or cases when the API returns no results.

## Managing Custom Capabilities

- **Updating:** Any saved changes are applied the next time the AI considers the capability during chat.
- **Disabling:** Deleting tools is not supported yet; to disable a tool, un-assign it from the AI Employee.

## Testing and Troubleshooting

1. Chat with your AI Employee and try different phrasings to trigger the capability.
2. Verify the AI requests any required information and calls the appropriate tool.
3. In the *Inbox*, click **Explanation** under a message to view the AI’s reasoning and raw API call.
4. If the API call fails, test it separately using tools like Postman, adjust as needed, and re-import the cURL command.

## Example: Product Information Lookup

### Tool Configuration

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

### Prompt Snippet

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

### Sample Conversation

**Customer:** "Hey, what's the price of product ABC-123?"  
**AI:** "Sure, let me check that. Just to confirm, the product ID is *ABC-123*?"  
**Customer:** "Yes."  
*(AI calls `LookupProductDetails` with `product_id=ABC-123`)*  
**AI:** "Got it! *Example Widget* costs **$49.99**. Description: A versatile widget."

## Summary

Custom Capabilities turn your AI Employee into an active assistant that can automate workflows, pull in live data, and perform real actions for your customers—all within a chat.

For more details or troubleshooting, visit the [AI Workforce documentation](#).