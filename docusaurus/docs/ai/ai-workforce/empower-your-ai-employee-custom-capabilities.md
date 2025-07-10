---
sidebar_position: 3
---

# Empower Your AI Employee: Create Custom Capabilities

Business App now lets you **teach** your AI Employees new skills by wiring them up to external systems and services.  
These skills are called **Custom Capabilities**.

A Custom Capability is made of two parts:

- **Prompt (Instructions)** – tells the AI *when* it should use the capability and *how* to behave before and after calling it.
- **Tool (Action / Function)** – the technical definition of *what* the AI needs to do (an HTTP request, a database query, etc.).

Combining clear instructions with a well-defined action gives your AI Employee super-powers beyond simple chat.

---

## Why build a Custom Capability?

- Check real-time inventory and product details
- Schedule appointments or bookings
- Look up order status
- Generate custom quotes or estimates
- Access customer account information (loyalty points, purchase history)
- Locate the nearest store or business hours
- Search an internal knowledge base or FAQ
- Create a ticket in your job-tracking or support system

If an action can be done via an API, you can probably turn it into a capability.

---

## How a capability is used during chat

1. The customer asks a question or makes a request.
2. The AI checks its **Prompts** to see if any Custom Capability matches the request.
3. If there is a match *and* all required information is available, the AI calls the corresponding **Tool**.
4. The AI uses the tool's response to craft its reply back to the customer.

---

## Creating a new capability

1. **Open AI Workforce** – go to *AI › AI Workforce* and click **Configure** on an existing AI Employee (or **Create new**).
2. **Scroll to "Custom Capabilities"** and click **Add a capability**.
3. **Select the new capability** that appears to start editing.
4. **Name & Describe** – pick a clear name (e.g. `CheckInventory`) and a short description so the AI knows when to use it.
5. **Add the Prompt (Instructions)** – you can enter "TBD" for now and come back after defining the tools.
6. **Add one or more Tools** – each tool is an API call the capability might need.
7. **Save** – test the capability by chatting with your AI Employee.

:::tip Multiple tools per capability
A complex task (e.g. *book an appointment*) might require two tools:

1. `lookup_availability` – fetch open time slots.
2. `book_the_meeting` – confirm the chosen slot.

Add both tools under the same capability.
:::

### Tool fields explained

- **Import from cURL** – fastest way to pre-fill the form if you already have a working cURL command.
- **ID** – unique identifier for the tool (e.g. `LookupProductDetails`).
- **Description** – what the tool does in plain language.
- **Method & URL** – the HTTP method (GET, POST, …) and the endpoint.
- **Parameters** – each input the API needs (name, description, location, type).
- **Headers** – authentication keys or any other headers.
- **"No external processing needed"** – check this if the tool doesn't actually call an API but only formats the AI's response.

### Writing an effective Prompt

- **Be explicit about *when* to call the tool**  
  "ONLY call `CheckCustomerOrderStatus` when the user asks *about their order status*."
- **List the information the AI must gather first**  
  "Before calling, you **MUST** have `order_number`."
- **Guide the response format**  
  Tell the AI how to use the tool's response when talking back to the user.
- **Cover edge-cases**  
  Explain what to do if the API fails or returns no results.

---

## Managing existing capabilities

- **Updating** – any saved change is used the *next* time the AI considers the capability.
- **Deleting** – deleting tools is not supported yet; you can un-assign them from the AI to disable.

---

## Testing & troubleshooting

1. Chat with your AI Employee and try to trigger the capability with different phrasings.
2. Confirm the AI asks for required info and calls the tool.
3. In *Inbox* click **Explanation** under a message to see the AI's reasoning and raw API call.
4. If the API itself is failing, test the same request in a tool like Postman, tweak, then re-import the cURL.

---

## Generic example – Product information lookup

> **Goal**: Let the AI fetch price & description for a product.

### Tool definition

| Field | Value |
|-------|-------|
| **ID** | `LookupProductDetails` |
| **Description** | Retrieves details for a product from the product database |
| **Method** | `GET` |
| **URL** | `https://api.yourdatabase.com/products` |

**Parameters**

- `product_id` (string, *query*) – the unique identifier of the product

**Headers**

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

---

### Conversation flow example

**Customer**: "Hey, what's the price of product ABC-123?"  
**AI**: "Sure, let me check that. Just to confirm, the product ID is *ABC-123*?"  
**Customer**: "Yes."  
*(AI calls `LookupProductDetails` with `product_id=ABC-123`)*  
**AI**: "Got it! *Example Widget* costs **$49.99**. Description: A versatile widget."

---

## The power of Custom Capabilities

With Custom Capabilities your AI Employees move from *answering questions* to *taking action*.  
Automate complex workflows, pull live data, and deliver tailored experiences — all inside a single chat. 