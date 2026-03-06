---
title: AI Support Employee
sidebar_label: AI Support Employee
sidebar_position: 3
description: Set up a custom AI Support Employee that resolves customer inquiries via chat, follows the HEARD framework for troubleshooting, and captures escalation details when a question falls outside the knowledge base.
tags: [ai-workforce, custom, support, chat, escalation, ai-employees]
keywords:
  [
    AI support employee,
    customer support AI,
    HEARD framework,
    escalation,
    message capture,
    chat support,
    SMS support,
    custom AI employee,
  ]
---

The AI Support Employee is a custom AI Employee that handles inbound customer inquiries with an empathetic, resolution-first approach. It answers questions immediately using your knowledge base, follows a structured support framework for complaints and troubleshooting, and captures contact details for follow-up when a question falls outside what it can answer. It is designed for SMS and chat channels, where brevity and warmth matter more than formatted responses.

## Why build an AI Support Employee?

Customers reaching out via chat expect fast, helpful responses: not hold queues or form submissions. Without an AI handling first-contact support, businesses face:

- Missed inquiries outside of business hours
- Inconsistent responses to common questions
- No structured escalation path when questions go unanswered
- Support teams spending time on questions the knowledge base could resolve

The AI Support Employee addresses this by resolving questions it can answer immediately and capturing detailed follow-up information for anything it cannot. This ensures no inquiry falls through the cracks.

## Before you begin

Before you begin, ensure you have the following:

- Conversations AI active
- Knowledge base content ready: hours, services, policies, FAQs, and any information customers commonly ask about

:::note
These prompts were developed and tested using **Gemini Flash 3**. Select Gemini Flash 3 as the model for this AI Employee for best results.
:::

:::tip
The AI Support Employee is only as good as your knowledge base. The more complete your business information, the fewer escalations you'll need.
:::

## How to set up the AI Support Employee

### Step 1: Create the AI Employee

1. Navigate to `AI` > `AI Workforce` in your Business App dashboard
2. Click `Create Custom AI Employee`
3. Set a name (e.g., "Support" or your preferred name) and upload an avatar image
4. Click `Save` to create the employee profile

### Step 2: Set the role prompt

The role prompt defines the AI's personality and communication style. This one establishes an empathetic, resolution-first support voice optimized for SMS and chat.

1. Open the **Purpose** field in the AI Employee configuration
2. Copy and paste the following role prompt:

```markdown
You are an Empathetic Support Expert. Your goal is to resolve customer issues effectively while ensuring they feel heard and valued.

You represent the business as the first line of support. Your job is to answer questions, troubleshoot problems, and leave messages for specialized team members when you cannot provide a direct solution.

### Tone

Highly empathetic, patient, and professional. Use validating language like "I understand" and "I'm here to help."

### Strategy

Resolve the user's query immediately using your knowledge base. Do not ask for a name or phone number unless you are escalating the issue or taking a message.

Acknowledge all information the user provides. Be succinct but warm. Every message should feel like progress toward a resolution.

### Communication Style

You are speaking with customers via SMS and chat. Respond using plain text and short messages. Do not use markdown, bolding, or italics. Keep messages under 1500 characters.

Always close by asking if the solution provided helps or if the customer needs further assistance.
```

3. Click `Save`

:::tip
The key distinction here is resolution-first. The AI should attempt to answer from your knowledge base before asking for any contact information. Asking for details too early feels like friction, not service.
:::

### Step 3: Add the HEARD framework capability

The HEARD framework is a custom capability that defines how the AI handles different types of inquiries. Simple factual questions get a direct answer. Complaints and troubleshooting get a structured, empathetic sequence. This ensures the AI always responds appropriately to the customer's situation.

1. In the AI Employee configuration, scroll to `Capabilities`
2. Click `Add a capability`
3. Set the capability name to `HEARDSupportFramework`
4. Set the description to: "Applies a tiered support framework: direct resolution for simple questions, empathetic troubleshooting sequence for complaints and problems"
5. In the **Prompt** field, copy and paste the following:

```markdown
You follow a two-level support framework based on the nature of the customer's inquiry.

## Level 1: Information Retrieval

If the user asks a simple question (hours, location, "Do you do X?"):

- Acknowledge and resolve. Give the answer immediately based on retrieved facts.
- No need for a full empathetic sequence unless the user seems frustrated.

## Level 2: Troubleshooting and Complaints

If the user presents a problem, failure, or frustration, follow the full HEARD sequence:

- **Hear:** Acknowledge the specific issue they described.
- **Empathize:** Briefly validate their frustration.
- **Apologize:** Offer a professional apology for the trouble.
- **Resolve:** Attempt to fix the issue using the information in your knowledge base.
- **Diagnose/Escalate:** If the information is not available, explain: "I don't have that specific detail available right now, but I can leave a detailed message for a team member to follow up with you."
```

6. Click `Save`

:::note
The HEARD sequence is invisible to the customer as a label: it shapes how the AI structures its response, not what it says explicitly. Customers experience it as a natural, empathetic interaction.
:::

### Step 4: Enable built-in capabilities

The AI Support Employee relies on the `Capture leads` capability to handle escalation and message capture.

1. In the `Capabilities` section, toggle on:
   - **Capture leads**: handles name, phone, and email collection
   - **Book appointments** (optional): checks calendar availability and schedules meetings (requires calendar connected in Business App)

2. Click `Save`

:::note
The **Retrieve knowledge** capability is enabled by default for all AI Employees. This allows the AI to answer questions using your connected knowledge sources without additional configuration.
:::

### Step 5: Configure the escalation logic

The built-in **Capture leads** capability is a starting point. For a support AI, you should edit its prompt to ensure it uses an empathetic "escalation" tone when transitioning from answering questions to collecting contact details.

1. In the `Capabilities` section, click the `Edit` icon next to `Capture leads`
2. In the **Prompt** field, add strategy directives that define how to bridge into escalation. For example:
   - "When you cannot find an answer in the knowledge base, or when a customer has a complex problem, transition to lead capture by saying: 'I'm not exactly sure about that, but I'll have a human look into this. Can I get your name to start?'"
   - "Maintain an empathetic tone during escalation: 'I understand this is frustrating. I'd like to get one of my team members to help resolve this. What is your name?'"

For more details on configuring built-in capabilities, see [Configuring Capabilities](../../ai-capabilities/configuring-capabilities.md).

### Step 6: Add knowledge sources

Your knowledge base is the AI's primary resource for resolving inquiries. The more complete it is, the fewer escalations you'll generate.

1. In the `Knowledge Sources` section, add:
   - **Business profile**: address, hours, phone, and service area
   - **Website**: services, pricing, and policies customers commonly ask about
   - **FAQs** (recommended): written answers to your most common support questions
   - **Documents** (optional): return policies, warranty terms, service procedures, or any detailed reference material

2. Click `Save`

:::tip
Review your escalation transcripts after the AI goes live. Common escalation topics represent gaps in your knowledge base: add that content and the AI will handle those questions directly in future conversations.
:::

### Step 7: Test and refine

Use these test scenarios to verify the AI handles each support situation correctly.

**Level 1: simple question**
Ask a factual question your knowledge base covers (hours, location, "Do you offer X?"). The AI should answer immediately without asking for contact information.

**Level 2: complaint or problem**
Describe a problem or express frustration ("My order was wrong" or "I've been waiting two weeks"). The AI should acknowledge the issue, empathize, apologize, and attempt a resolution in that sequence.

**Escalation: unknown question**
Ask about something not covered in your knowledge base. The AI should bridge to escalation naturally, then collect name and contact method in sequence, and confirm the message.

**Partial resolution:**
Ask a question where you know the AI can answer half of it. Confirm it resolves the answerable part first, then offers to escalate the remainder rather than escalating the entire inquiry.

Adjust the role prompt, HEARD capability, or Escalation capability based on what you observe. Common refinements include adjusting the bridge language to match your brand voice or adding specific topics to the Escalation prompt that should always trigger a message.

## Frequently Asked Questions

<details>
<summary>Which editions support custom AI Employees?</summary>

Custom AI Employees are available with any edition of Conversations AI.

</details>

<details>
<summary>What is the HEARD framework?</summary>

HEARD stands for Hear, Empathize, Apologize, Resolve, Diagnose/Escalate. It is a structured sequence for handling customer complaints and troubleshooting. The AI applies it automatically when a customer presents a problem or frustration. For simple factual questions, it skips the sequence and answers directly.

</details>

<details>
<summary>When does the AI escalate instead of answering?</summary>

The AI escalates only when your knowledge base does not contain the answer. If the knowledge base has the information, the AI resolves the inquiry directly without asking for contact details. Escalation is a last resort, not a default.

</details>

<details>
<summary>What contact information does the AI collect during escalation?</summary>

The AI captures the customer's name first, then asks for a phone number or email address. It confirms the details once captured and lets the customer know a team member will follow up.

</details>

<details>
<summary>Why does the AI avoid markdown and formatting?</summary>

The AI Support Employee is designed for SMS and chat channels where markdown does not render correctly. Bold text, bullet points, and headers appear as raw symbols in most SMS clients. Plain text ensures every response looks clean regardless of the channel.

</details>

<details>
<summary>Can I customize the escalation language?</summary>

Yes. The escalation directives in the `Capture leads` capability prompt are fully editable. The bridge examples are a starting point: adjust them to match your brand voice. Keep the core logic intact: acknowledge the question, bridge to expert help, and ask for the customer's name to start.

</details>
