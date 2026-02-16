---
title: Knowledge Base Overview
sidebar_label: Knowledge Base
sidebar_position: 3
description: Centralize information for AI Employees to reference when answering customer questions.
tags: [ai-employees, knowledge-base, setup]
keywords: [AI Knowledge Base, AI data sources, business info for AI, AI training data, document upload]
---

The Knowledge Base is a reference library your AI Employees can search when answering customer questions. When the AI determines a lookup would be helpful, it performs a semantic search and retrieves relevant content to inform its response.

:::tip Knowledge Base vs Capabilities
**Knowledge Base** is for reference information the AI retrieves when relevant—like FAQs, pricing, and policies. If certain information must appear in **every** response or you need the AI to follow specific behavior patterns, add that to your AI Employee's instructions using [custom Capabilities](/business-app/ai/ai-capabilities/creating-custom-capabilities) instead.
:::

## What is your Knowledge Base?

Your Knowledge Base is a collection of information sources that your AI Employees can search during conversations. This includes:

- **Business Profile Information** - Your basic business details, hours, location, and services
- **Website Content** - Pages from your website that contain relevant customer information
- **Custom Documents** - Uploaded files like FAQs, price lists, policies, or procedures
- **Manual Knowledge Entries** - Custom text you've written specifically for your AI team

## How AI Employees Use Knowledge

When a customer asks a question, your AI Employee:
1. Understands what the customer is asking
2. Decides whether a Knowledge Base lookup would help answer the question
3. If so, performs a semantic search and retrieves relevant content
4. Uses the retrieved information to provide an accurate, contextual answer
5. Falls back to general assistance if no specific knowledge is found

The AI doesn't read your entire Knowledge Base for every message—it retrieves the most relevant portions based on the customer's question. For general conversation or questions the AI can answer without specific business information, it may not perform a lookup at all.

## Benefits of a Well-Maintained Knowledge Base

- **Consistent Answers** - All AI Employees give the same accurate information
- **Reduced Training Time** - New AI Employees instantly have access to business knowledge
- **Better Customer Experience** - Customers get precise, up-to-date answers
- **Time Savings** - Less need for human intervention in routine inquiries

## Best Practices

### Keep Information Current
- Review and update your Knowledge Base regularly
- Remove outdated pricing, policies, or service information
- Add new products, services, or procedures as they become available

### Organize by Topic
- Group related information together
- Use clear, descriptive titles for documents
- Create separate entries for different aspects of your business

### Write for AI Understanding
- Use clear, direct language
- Include specific details and examples
- Avoid ambiguous terms or internal jargon

### Test and Iterate
- Monitor how your AI Employees use the knowledge
- Identify gaps where customers aren't getting good answers
- Add missing information based on common questions

## Getting Started

To build an effective Knowledge Base:

1. **Start with the basics** - Add your business profile and key website pages
2. **Identify common questions** - What do customers ask most often?
3. **Create targeted content** - Write specific answers for frequent inquiries
4. **Test with your AI** - See how well your AI can answer questions with the current knowledge
5. **Expand gradually** - Add more detailed information as you identify gaps

A strong Knowledge Base is the foundation of effective AI Employee performance. The time you invest in creating comprehensive, accurate knowledge sources will pay dividends in better customer interactions and reduced manual support needs.

## Frequently Asked Questions

<details>
<summary>What types of files can I upload to the Knowledge Base?</summary>

You can upload common document formats such as PDF, DOCX, TXT, CSv, and PPTX files. Note that text-based will be most effective for the AI to read and process it effectively.

</details>

<details>
<summary>How often should I update my Knowledge Base?</summary>

You should update your Knowledge Base whenever your business information changes—such as new products, price adjustments, or updated policies. Regular reviews (e.g., monthly) help ensure accuracy.

:::note
If you find yourself updating your Knowledge Base very often, you may want to consider giving your AI a Capability that connects to your systems and uses live info instead.
:::

</details>

<details>
<summary>Can I restrict knowledge to specific AI Employees?</summary>

Knowledge sources are generally shared across your AI workforce, but you can configure specific AI Employees to prioritize certain information through their instructions and prompts.

</details>

<details>
<summary>Does the AI always use my Knowledge Base when responding?</summary>

No. The AI performs a semantic search and retrieves relevant content when it determines a lookup would help answer the customer's question. For general conversation, greetings, or questions the AI can answer without specific business information, it may not consult the Knowledge Base.

If certain information must appear in **every** AI response, add it to your AI Employee's instructions by [creating a custom Capability](/business-app/ai/ai-capabilities/creating-custom-capabilities) rather than relying on Knowledge Base retrieval.

</details>

<details>
<summary>How can I see what Knowledge Base content the AI used?</summary>

You can audit any AI response by clicking **Explanation** on the message in Conversations. This shows exactly which Knowledge Base content was retrieved and referenced for that specific response.

</details>

<details>
<summary>What if my Knowledge Base conflicts with my AI's instructions?</summary>

Your AI Employee's prompt and instructions take priority over Knowledge Base content. If there's conflicting information, it can result in inconsistent answers.

To avoid this:
- Ensure your Knowledge Base content aligns with your AI's configured instructions
- Use the **Explanation** feature to audit responses and identify conflicts
- Keep authoritative business rules in your AI's instructions (via Capabilities) and factual reference information in the Knowledge Base

</details>

<details>
<summary>Will the AI apply frameworks or processes I describe?</summary>

The AI can explain frameworks or processes when customers ask about them directly. However, it won't automatically apply a described framework to unrelated questions unless the customer specifically asks it to.

If you need your AI to consistently follow a specific process or framework across conversations, configure that behavior in your AI Employee's instructions using a [custom Capability](/business-app/ai/ai-capabilities/creating-custom-capabilities).

</details>