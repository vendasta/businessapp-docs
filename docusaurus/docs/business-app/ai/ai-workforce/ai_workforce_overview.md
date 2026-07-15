---
title: AI Workforce Overview
sidebar_label: AI Workforce Overview
description: Overview of AI Employees and the common structure for digital team members in Business App.
tags: [ai-workforce, overview, ai-employees]
keywords: [AI workforce, digital employees, AI automation, AI setup, Business App AI]
---

AI Employees are digital team members you can configure to automate conversations, answer customer questions, capture leads, book appointments, and more. Each works well out of the box but can be tailored to fit your business.

All AI Employees share a common structure: **name**, **purpose**, **channels**, **capabilities**, and **knowledge sources**. Specific roles (like Chat Receptionist or Voice Receptionist) may include additional options, but the basics are always the same.

**Guides:**
- [Set up the AI Chat Receptionist](./ai-chat-receptionist/index.mdx)
- [Set up the AI Voice Receptionist](ai-voice-receptionist.md)
- [Custom AI Employees](./custom-ai-employees/index.md)
- [AI Capabilities Overview](../ai-capabilities/index.mdx)
- [Creating Custom Capabilities](../ai-capabilities/creating-custom-capabilities.md)

If you’re just getting started, the sections below give an overview of the main elements you’ll configure for any AI Employee.

---

## AI Employee Elements

### Profile

The **Profile** section is where you set the basics: how your AI Employee appears and how they introduce themselves to customers.

- **Name & Avatar**: The display name and image used across your channels. Choose a friendly, memorable name and a profile image (e.g. your logo or a custom avatar) that fits the role or your brand.
- **Purpose**: The job description and behavioral guidelines for your AI. Write a clear, short summary of what they should do, such as tone, greeting, and key tasks. Be specific.

:::tip
Use bullets or a numbered list to clarify instructions. For example: “Introduce yourself as the business receptionist,” “Speak in a friendly, concise way,” “Always collect name, email, and phone before ending the conversation.”
:::

---

### Channels

The **Channels** section is where you choose where your AI Employee will work. Channels are the places your AI can interact with customers, such as website chat, SMS, email, phone calls, and more.

Turn on the channels that make sense for your business. You can enable or disable them at any time.

- Website chat
- Email
- SMS (text messages)
- Phone calls (voice)
- WhatsApp
- Facebook
- Instagram

:::tip
Start with one or two channels while you get comfortable, then expand as you see results.
:::

---

### Capabilities

The **Capabilities** section is where you decide what your AI Employee can do. Capabilities are like skills or tasks you turn on or off, such as capturing leads, booking appointments, and answering FAQs.

- **Turn on** the capabilities that matter most for your workflow.
- **Add or adjust** capabilities as your business needs change.
- **Create custom capabilities** for advanced or unique workflows. [Learn more ›](../ai-capabilities/creating-custom-capabilities.md)

Examples: capture lead information, book appointments with your calendar, answer common questions, follow your specific instructions or goals.

:::tip
You can experiment with different capabilities and update them any time as your business grows.
:::

---

### Knowledge Sources

The **Knowledge Sources** section is where you give your AI information about your business so it can give accurate, up-to-date answers.

- **Connect your business profile**: Address, hours, services, and contact info.
- **Add your website**: This allows the AI to answer questions about your offerings, prices, or policies.
- **Upload documents or custom text**: Menus, price lists, terms, or FAQs.
- **Review and update regularly**: Keep sources current so the AI never gives outdated info.

:::tip
The more up-to-date and specific your knowledge sources, the more helpful and accurate your AI Employee will be.
:::

---

## Adjust responses by channel

Your AI Employee knows which channel a conversation is happening on, so a single employee can respond differently depending on where a customer reaches out. A text message and an email often call for different lengths and tones, and your AI can adapt to each one automatically.

There's no separate menu for this. Instead, you write **channel-specific instructions** in the same places you write your other instructions, and the AI applies them only when it's responding on that channel:

- **The Purpose field** (labeled `Role` on the Chat and Voice Receptionists) — best for behavior that should apply across everything the employee does, such as tone, greeting style, or reply length per channel.
- **A capability's instructions** — best for shaping a single task, such as how much information to collect for lead capture on SMS versus email.

Both approaches work, and you can combine them. Reference the channel by name in your instructions and describe how you want the AI to behave there.

### Example instructions

Add lines like these to your Purpose field or a capability's instructions:

```text wrap
When responding on SMS, keep replies short and conversational. Use plain text only — no bullet points, headings, or markdown, since text messages display them as raw symbols. Aim for one or two sentences.

When responding by email, you can write longer, more detailed replies. Open with a professional greeting and sign off with the business name.

When responding on web chat, keep answers brief and friendly, and offer to continue the conversation or book an appointment.
```

:::tip
Only add channel-specific instructions for the channels where the default behavior isn't quite right. For everything else, your AI Employee falls back to its general Purpose and capability instructions.
:::

:::note
These instructions change *how* your AI Employee communicates on each channel. They don't change *which* actions it can take — those come from its capabilities. See the [AI Capabilities Overview](../ai-capabilities/index.mdx).
:::

---

## Custom AI Employees

Pre-configured AI Employees (Chat Receptionist, Voice Receptionist) come ready to use with a defined role and built-in capabilities. **Custom AI Employees** start as a blank slate — you define the role prompt, capabilities, knowledge sources, and channels from scratch to handle specialized business functions.

Build a custom AI Employee when you need a role that isn't covered by a pre-configured option, such as:

- **[AI Data Analyst](./custom-ai-employees/ai-data-analyst.mdx)** — analyzes CRM, review, and social data to deliver structured insights
- **[Inside Sales Representative](./custom-ai-employees/inside-sales-representative.md)** — qualifies inbound leads before capturing contact information or booking appointments
- **[AI Support Employee](./custom-ai-employees/ai-support-employee.mdx)** — resolves customer inquiries via chat and SMS, and escalates when a question falls outside the knowledge base

See [Custom AI Employees](./custom-ai-employees/index.md) for the full setup process and additional examples.

---

## Frequently Asked Questions

<details>
<summary>How many channels can I enable for one AI Employee?</summary>

You can enable as many available channels as you like. One AI Employee can handle website chat, email, SMS, Facebook, and other enabled channels at the same time.
</details>

<details>
<summary>What happens if I disable a capability?</summary>

The AI Employee will no longer perform that task. If a customer asks for it, the AI will say it can’t help with that request. The capability remains available so you can turn it back on later.
</details>

<details>
<summary>Can one AI Employee respond differently on different channels?</summary>

Yes. Your AI Employee knows which channel it's responding on, so you can have it behave differently on SMS, email, web chat, and other channels. Add channel-specific instructions to the Purpose field (or `Role` field) or to a capability's instructions. See [Adjust responses by channel](#adjust-responses-by-channel).
</details>

<details>
<summary>What happens if an AI Employee requires a subscription I don't have?</summary>

If an AI Employee requires a product you don't currently have, you'll see an upgrade option on that employee's card on the AI Workforce page. Selecting it takes you through the purchase flow for the required product, where you can review pricing and complete your purchase. See [Taking action on a package](../../store/index.mdx#taking-action-on-a-package) for more on the purchase flow.
</details>
