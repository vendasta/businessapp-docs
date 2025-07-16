---
title: AI Workforce Overview
sidebar_position: 1
---
Explore the guides below for step-by-step setup and answers to common questions about each AI Workforce role. Use these as a starting point, or come back any time you need more details or help.

- [AI Chat Receptionist](./ai-receptionist.md)
- [AI Voice Receptionist](./ai-voice-receptionist.md)
- [Custom Capabilities for AI Employees](./empower-your-ai-employee-custom-capabilities.md)
- [How to Configure an AI Employee](#how-to-configure-an-ai-employee)
- [Training Your AI Employees: Purpose and Knowledge](#training-your-ai-employees-purpose-and-knowledge)
- [Frequently Asked Questions (FAQs)](#frequently-asked-questions-faqs)

## How to Configure an AI Employee

Each AI Employee can be customized to fit your brand, desired outcomes and communication preferences. Customization options include:

### Channels
Choose which platforms the AI should respond on:
- Website Chat Widget
- SMS
- WhatsApp
- Voice (for phone receptionists)

![AI Chat Receptionist with WhatsApp Active](../img/administration_ai_workforce_communication.png)


You can toggle channels on or off and adjust channel-specific settings.

### Goals and Instructions

Recommended primary goals:

**Capture lead information** – always prompt lead to collect name and contact details (and automatically create a record in your CRM) 

**Book calendar events** – link to a scheduling tool with real-time availability.

![Goals and Instructions – Primary Goal Settings](../img/administration_ai_workforce_primary_goal.png)

You can also write detailed behavior instructions, like:

```markdown
# TONE & PERSONALITY  
Stay friendly and professional.

# SERVICE QUALIFICATION  
Ask what type of service they need.

# BOOKING  
If they want to schedule, link to my booking page.

# CONTACT INFO  
Ask for name, phone, and email before ending the chat.
```

## Training Your AI Employees: Purpose and Knowledge

To respond accurately and effectively, your AI Employees need context about your business. There are two main tools for training your AI: **Purpose** and **Knowledge**.

| Feature        | What It Does                                   | When to Use It                                                           |
|----------------|------------------------------------------------|--------------------------------------------------------------------------|
| **Purpose** | Information that AI Employees use together with their capability instructions to respond.     | For core behaviors and tone (e.g., "Always collect home address.", "You are bright and cheerful")       |
| **Knowledge**     | Content used only when questions are asked     | For FAQs, service descriptions, pricing info, policies, and more         |

### Understanding the Purpose Section

The Purpose section defines your AI Employee's role, tone, and behavioral guidelines. This is where you set the foundation for how your AI should interact with customers and what it should prioritize during conversations.

**What to Include in Purpose:**
- Your AI's personality and communication style
- Core business rules and policies
- Specific instructions for handling different situations
- Required information to collect from customers
- Services you do and don't provide

**Example Purpose instructions using Markdown formatting:**

```markdown
# Services
## We are not licensed plumbers
### If asked, take contact info and suggest a referral
```

:::info
Keep both instructions and knowledge concise. Use clear language and offer examples when possible.
:::

### Knowledge Sources: Teaching Your AI About Your Business

Knowledge sources provide the detailed information your AI uses to answer customer questions. Unlike Purpose instructions, Knowledge content is only referenced when customers ask specific questions.

#### Business Profile Knowledge (Enabled by Default)

Your AI Employees automatically use information from your business profile to answer common questions such as what you do, where you're located, hours of operation, and how to get in touch. This is enabled by default, but you can remove it as a knowledge source if needed.

The following fields from the business profile are shared with your AI:

- Business Name  
- Address and/or Service Areas  
- Website  
- Booking URL  
- Phone Number  
- Categories  
- Hours  
- Services Offered  
- Short Description  
- Long Description  
- Social Media URLs  

#### Adding Your Website as a Knowledge Source

You can have your AI scrape your website, which helps it respond to detailed inquiries about your business.

1. Go to `AI > AI knowledge base > Manage knowledge`.  
2. Click `Add knowledge` then choose `Website`
3. Follow the setup instructions to train the AI on your website. Make sure you select all the pages you would like to train your AI on, and save.

To manage website content:
- Go to the `Train` tab in the AI configuration.
- Select which pages to include or exclude.
- If you update your site, revisit this tab and click `Refresh`.

#### Adding Custom Knowledge

You can expand your AI's capabilities by adding your own knowledge content from any text-based source.

1. Go to `AI > AI knowledge base > Manage knowledge`. 
2. Click on any knowledge source title to preview what content is currently accessible to the AI.  
3. Click `Manage Knowledge` to open the centralized knowledge area.  
4. Add new content by writing or pasting text into a new knowledge source.  
5. Select the checkbox next to each source you want the AI to use.

This lets you teach your AI to respond using business-specific details such as product explanations, policies, or unique services beyond what's stored in the profile.

### Testing and Monitoring Your AI Employees

#### Testing Your AI's Responses

Use the `Try it` button to simulate customer interactions. For best results, open the test in an incognito window so it starts with a clean session.

Ask the kinds of questions your real customers might ask, and pay attention to:

- How the AI responds
- Whether it gives too much or too little information
- If it's assuming something you didn't intend

Then go back and adjust your Purpose instructions or Knowledge sources as needed.

#### Monitoring and Improving Performance

Regularly review the `Conversations` and `Anonymous Visitors` tabs in your app:

- **Review successful interactions** where your goals were achieved
- **Check anonymous conversations** to see what people are asking
- **Identify misunderstandings** or overly complex responses—these are key areas for improvement

**Pro Tip:**  
When reviewing a conversation, expand the **Source material** beneath any AI response bubble. This reveals where the AI pulled its information from. If a response was incorrect, you can use this insight to:
- Refine your Purpose instructions
- Add new knowledge
- Remove or update outdated knowledge sources

This is like an in-app audit of all your online information!

### Best Practices for Training Your AI

#### Set Realistic Expectations

AI is **non-deterministic**—that means it may not give the exact same answer every time. That's not a bug; it's part of how it adapts to different inputs.

Think of your AI like a helpful teammate, not a fixed script.

#### Capture What You Know

You're the expert on your business. Create a simple guide that answers:

- What services do you offer—and which do you not?
- What questions do customers ask the most?
- What information should always be collected?

Use this guide to build your Purpose instructions and upload content to your AI knowledge base.

#### Keep Content Fresh

- Review and update your Knowledge sources regularly
- Remove outdated information that might confuse your AI
- Add new content as your business evolves
- Monitor conversations to identify gaps in your AI's knowledge

### Frequently Asked Questions (FAQs)

**Do I need to enable all AI Employees?**  
No. You can choose which AI Employees to activate based on your business needs. Each performs a separate function and can be configured independently.

**Can I customize what an AI Employee says?**  
Yes. You can set up detailed behavior using the `Purpose` section and upload FAQs, pricing, and service information to the `Knowledge` section.

**Will the AI capture contact details automatically?**  
Only if the "Capture lead information" goal is enabled. 

**How does the AI book appointments?**  
The AI connects to your calendar and offers available time slots during the conversation. It captures the necessary contact info and confirms the booking with the customer.

**Can I test the AI before going live?**  
Yes. Click the `Try it` button to open a test conversation. You can use this to simulate real customer interactions and refine your configuration.

**How do I know if the AI is working well?**  
Check the `Conversations` and `Anonymous Visitors` regularly to review how the AI responded, which leads were captured, and where improvements may be needed. This is like an in-app audit for all your online information.

**What if the AI gives the wrong answer?**  
Review the conversation and expand the **Source material** to see where the information came from. You can then update your Purpose instructions, edit knowledge sources, or remove outdated content.

**Does the AI answer the same way every time?**  
Not always. AI is non-deterministic, meaning responses can vary slightly. This helps the AI adapt to different phrasing and conversation flow.

**Can I deactivate or delete an AI Employee?**  
Yes. You can deactivate any AI Employee from the `AI Workforce` section. This stops it from responding to new conversations.

**Do I need technical knowledge to configure this?**  
No. Most configuration is done through simple forms and toggles. Instructions can be written in plain language or Markdown.

