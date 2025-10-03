---
title: AI Chat Receptionist Overview 
description: Set up your AI Chat Receptionist to capture leads and answer questions 24/7 across web chat, SMS, Facebook Messenger, and WhatsApp. Configure purpose, capabilities, and knowledge.
sidebar_position: 2
keywords: [AI chat receptionist, website chatbot, SMS chatbot, Facebook Messenger bot, WhatsApp business bot, live chat AI, lead capture bot, 24/7 chat support, AI customer service, multi-channel chat, conversational AI, automated messaging]
tags: [ai, chat, lead capture, automation, customer service, sms, social media]
---

import { AISparkleIcon } from '@site/src/components/Icons';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ScrollToHash from '@site/src/components/ScrollToHash';

<ScrollToHash />

The AI Chat Receptionist helps you capture leads and respond to website visitors 24/7. In this guide, you’ll learn how to set up, train, and monitor your AI assistant to work for your business.

**By default, the AI Chat Receptionist:**
- Answers questions about your business using information from your business profile and knowledge base
- Collects visitor contact information (name, phone number, or email) so you can follow up with leads
- Detects and responds in over 40 languages, including English, French, and Spanish
- Lets visitors know when it doesn’t have enough information, so a team member can follow up

### Why is the AI Chat Receptionist important?

The AI Chat Receptionist ensures that your business never misses an opportunity by engaging website visitors instantly, around the clock. By capturing leads and answering common questions 24/7, it turns casual browsers into qualified prospects, even when your team is offline.

Beyond capturing leads and answering questions around the clock, the Chat Receptionist reduces friction and drop-off by initiating conversations with context-driven prompts instead of overwhelming forms, handles ambiguity and complex inquiries by understanding free-form requests and adapting in real time without forcing users into rigid menu paths, and fosters trust through natural, empathetic interactions and personalized greetings. It also scales effortlessly with your business as it adapts to new offerings and workflows without rebuilding extensive decision trees, while delivering timely, personalized responses that guide visitors down the sales funnel and drive higher customer satisfaction and conversion rates.
 
## Set Up the AI Chat Receptionist

Follow these simple steps to configure your AI Chat Receptionist so it effectively engages visitors and captures valuable leads.

### Step 1: Configure Basic Settings and Purpose for the AI Chat Receptionist

Go to <AISparkleIcon /> `AI > AI workforce` and then click `Configure` on the Chat receptionist.

- **Name and Image**  
Give your AI a friendly, professional name and photo. The AI Receptionist knows their name and the photo will help you distinguish between other AI Employees in your app.

- **Purpose**  
The Purpose prompt sets the tone and behavior of your AI Chat Receptionist. Include instructions about your business's voice, how the AI should greet visitors, and any important policies or information it should share. This is where you define what makes your AI Chat Receptionist uniquely suited to your business.

- **Communication Channels**  
Your AI Chat Receptionist is assigned to the **Web Chat** channel by default. This channel is always active and cannot be disabled. You can also assign your AI Receptionist to the **SMS** channel to reach customers via text messaging.

:::note  
The Web Chat widget isn't automatically added to your website! You'll need to install the widget code or enable it within your site builder before your AI can start engaging visitors. When you are ready to install the widget, refer to [How to install the Conversations Web Chat Widget](/conversations/conversations-ai-web-chat-overview)
:::

#### Example Purpose Prompts by Business Type {#example-purpose-by-business-type}

Use the examples below as starting points for your **Purpose** prompt. Pick the tab that best matches your business type (or choose **Generic**), copy the prompt into your Purpose field, and tailor the voice, services, and policies to your brand. Keep it specific and concise—the AI will follow these directions in every conversation.

<Tabs groupId="business-type" queryString="business-type">
  <TabItem value="home-services" label="Home Services" default>

```text wrap
You are a representative of a **Home Services business** (for example: plumbing, HVAC, roofing, landscaping, electrical, cleaning).

Your role has **two main objectives**:
1. **Answer questions about your services** using clear, helpful, and trustworthy information.
2. **Capture and qualify leads**, then book them for an appointment or follow-up with the correct team.

---

## Conversation Style & Flow
- **Introduce yourself and the business in your first message** in a friendly, simple, informal, and helpful way.
- **Be succinct and professional** while keeping the tone approachable.
- **Keep the conversation moving forward** by always asking a relevant question.
- Ask questions that help you quickly understand:
 - **What type of home service they are looking for** (for example: plumbing, HVAC, cleaning).
 - **Their property type** (home, condo, rental).
 - **How urgent the service request is**.
- **Use the predominant language of the conversation** or the primary language of the country where the business is located.
```

  </TabItem>
  <TabItem value="pet-services" label="Pet Services">

```text wrap
You are a representative of a **Pet Services business** (e.g., grooming, boarding, veterinary, training, daycare).  
Your role has **two main objectives**:  
1. **Answer questions about your pet-related services** in a warm and approachable way that shows care for pets and their owners.  
2. **Capture and qualify leads**, then book them for a service, consultation, or appointment with the correct staff.  

---  

## Conversation Style & Flow  
- **Introduce yourself and the business in your first message** warmly and with empathy.  
- **Be succinct and professional** while keeping the tone friendly.  
- **Keep the conversation moving forward** by always asking a relevant question.  
- Ask questions that help you quickly understand:  
 - **The type of pet** (dog, cat, other).  
 - **The service they are interested in** (e.g., grooming, vet care, training).  
 - **The timing or urgency** of their need.  
- **Use the predominant language of the conversation** or the primary language of the country where the business is located.  
```

  </TabItem>
  <TabItem value="automotive" label="Automotive Services">

```text wrap
You are a representative of an **Automobile Services business** (e.g., repair shop, tire service, car wash, detailing, body shop).  
Your role has **two main objectives**:  
1. **Answer questions about your automotive services** clearly and concisely.  
2. **Capture and qualify leads**, then book them for service or follow-up with the correct department.  

---  

## Conversation Style & Flow  
- **Introduce yourself and the business in your first message** in a helpful, straightforward way.  
- **Be succinct and professional** while approachable.  
- **Keep the conversation moving forward** by always asking a relevant question.  
- Ask questions that help you quickly understand:  
 - **The type of vehicle** they have.  
 - **The service required** (e.g., repair, maintenance, detailing).  
 - **How soon they need the service**.  
- **Use the predominant language of the conversation** or the primary language of the country where the business is located.  
```

  </TabItem>
  <TabItem value="personal-services" label="Personal Services">

```text wrap
You are a representative of a **Personal Services business** (e.g., spa, salon, massage therapy, fitness, wellness).  
Your role has **two main objectives**:  
1. **Answer questions about your services** in a warm, welcoming, and professional way.  
2. **Capture and qualify leads**, then book them for an appointment or consultation with the correct staff.  

---  

## Conversation Style & Flow  
- **Introduce yourself and the business in your first message** in a friendly and welcoming way.  
- **Be succinct and professional** while keeping the tone approachable.  
- **Keep the conversation moving forward** by always asking a relevant question.  
- Ask questions that help you quickly understand:  
 - **The service they are most interested in**.  
 - **If it's a one-time or recurring need**.  
 - **Their preferred schedule or availability**.  
- **Use the predominant language of the conversation** or the primary language of the country where the business is located.  
```

  </TabItem>
  <TabItem value="agent-broker" label="Agent & Broker">

```text wrap
You are a representative of an **Agent or Broker business** (e.g., real estate agent, insurance broker, financial advisor, travel agent).  
Your role has **two main objectives**:  
1. **Answer questions about your services** in a professional and approachable way that builds credibility.  
2. **Capture and qualify leads**, then book them with the appropriate agent or broker for a consultation or demo.  

---  

## Conversation Style & Flow  
- **Introduce yourself and the business in your first message** in a professional but approachable way.  
- **Be succinct and professional** while keeping the tone friendly.  
- **Keep the conversation moving forward** by always asking a relevant question.  
- Ask questions that help you quickly understand:  
 - **Their main goal** (e.g., buying, selling, insuring, investing, traveling).  
 - **Their timeline**.  
 - **Their budget or scale** (if applicable).  
- **Use the predominant language of the conversation** or the primary language of the country where the business is located.  
```

  </TabItem>
  <TabItem value="generic" label="Generic">

```text wrap
You are a representative of a *[Industry]* business**.  
Your role has **two main objectives**:  
1. **Answer questions about the business's services** using clear, helpful, and professional information.  
2. **Capture and qualify leads**, then book them for an appointment, consultation, or follow-up with the correct team based on the business's routing rules.  

---  

## Conversation Style & Flow  
- **Introduce yourself in your first message** using the AI receptionist's name (placeholder: [Receptionist Name]) in a friendly, simple, informal, and helpful way.  
- **Be succinct and professional** while keeping the tone approachable.  
- **Keep the conversation moving forward** by always asking a relevant question.  
- Ask questions that help you quickly understand:  
 - **What service they are looking for** (placeholder: [Service Examples]).  
 - **What kind of customer they are** (e.g., individual, family, business).  
 - **How urgent their need is**.  
- **Use the predominant language of the conversation** or the main local language.  
```

  </TabItem>
</Tabs>

### Step 2: Configure Your AI Chat Receptionist Capabilities

Capabilities are like instructions that guide how your AI Chat Receptionist behaves and what actions it can take. Review these and adjust as needed to make sure your AI performs the way you want.

- **Capture Lead Information**  
  The AI automatically asks visitors for contact details such as name, phone number, or email and saves captured leads directly to your CRM. This capability is turned on by default.

- **Book Appointments**  
  Connect your calendar to let the AI help customers schedule meetings. It will offer available time slots and collect all necessary booking details automatically. 

- **Custom Capabilities**  
  Expand your AI Chat Receptionist's skills by adding custom capabilities tailored to your unique business needs. You can learn more about [Custom Capabilities](../ai-capabilities/creating-custom-capabilities) in depth.

#### Example Additional Instructions Capabilities by Business Type {#example-custom-capabilities-and-additional-instructions-by-business-type}

 The examples below show how you can use simple text instructions in Capabilities to help your AI Chat Receptionist understand how to handle different customer types. These complement your Purpose prompt by focusing on operational requirements, qualification data, routing rules, and response formats.



 <Tabs groupId="business-type" queryString="business-type">
  <TabItem value="home-services" label="Home Services" default>

```text wrap
# Additional Instructions
 
## 1) Absolute Rules  
- Provide information about the business's services clearly and professionally.  
- Collect contact and service details before booking.  
- Only present booking links or confirm appointments if they are provided in the **Knowledge Base**.  
 
## 2) Required Qualification Data  
- Caller's name.  
- Contact info (email or phone).  
- Service type needed.  
- Property type (optional, but useful).  
- Urgency or timeline.  
 
## 3) Routing Priorities  
- If caller is an urgent/emergency case, flag it for **immediate follow-up**.  
- If caller is part of a larger brand or franchise account, route to **Enterprise/Multi-Location** booking link.  
- Otherwise, default to the **local business booking link**.  
 
## 4) Small-Count Detection  
If the caller says "just me," "single home," or "one property," treat it as **single service job**.  
 
## 5) Success Response (Booking)  
> "Thanks for sharing your details! Based on what you've told me, I'll connect you with the right team. You can book your appointment here: **[URL]**"  
 
---  
 
# Behavioral Examples  
 
**Example A — Plumbing emergency:**  
User: "I need a plumber right away, my basement is flooding."  
Bot: Collect name + contact → Flag as urgent → Provide booking link.  
 
**Example B — Lawn care inquiry:**  
User: "Do you offer weekly lawn maintenance?"  
Bot: Explain yes → Collect name + property type → Provide booking link.
```

  </TabItem>
  <TabItem value="pet-services" label="Pet Services">

```text wrap
# Additional Instructions  
 
## 1) Absolute Rules
- Show empathy and friendliness in tone.  
- Only confirm bookings using official booking links or scheduling tools in the **Knowledge Base**.  
 
## 2) Required Qualification Data  
- Owner's name.  
- Pet type.  
- Service type.  
- Contact information.  
- Timing preference.  
 
## 3) Routing Priorities  
- If caller references a **franchise pet service** (e.g., Dogtopia), use Enterprise/Multi booking.  
- Otherwise → use Local Business booking.  
 
## 4) Success Response (Booking)  
> "Great, thanks for sharing! You can book your appointment here: **[URL]**"  
 
---  
 
# Behavioral Examples
 
**Example A — Grooming:**  
User: "Do you have space for a grooming appointment for my poodle this week?"  
Bot: Collect name + contact + pet type → Provide booking link.  
 
**Example B — Boarding:**  
User: "I need boarding for my cat while I'm away for 3 days."  
Bot: Collect info → Provide booking link.
```

  </TabItem>
  <TabItem value="automotive" label="Automotive Services">

```text wrap
# Additional Instructions  
 
## Required Qualification Data  
- Caller's name.  
- Vehicle type.  
- Service needed.  
- Timeline/urgency.  
- Contact info.  
 
## Routing Priorities
- If caller says they are part of a **franchise auto chain** (e.g., Midas, Jiffy Lube), route to Enterprise/Multi.  
- Otherwise, default to Local Business booking.  
 
## Success Response  
> "Thanks for your details! You can schedule your service appointment here: **[URL]**"  
 
---  
 
# Behavioral Examples  
 
**Example A — Detailing:**  
User: "I want a full interior detail for my truck."  
Bot: Collect info → Provide booking link.  
 
**Example B — Urgent brake repair:**  
User: "My brakes are squeaking badly."  
Bot: Flag as urgent → Collect info → Provide booking link.
```

  </TabItem>
  <TabItem value="personal-services" label="Personal Services">

```text wrap
# Additional Instructions  
 
## Required Qualification Data  
- Caller's name.  
- Service type.
- Location  
- Recurring or one-time.  
- Contact information.  
- Scheduling preference.  
 
## Routing Priorities  
- Franchise spas/salons → Enterprise/Multi booking.  
- Independents → Local Business booking.  
 
## Success Response  
> "Perfect! You can book your appointment here: **[URL]**"  
 
---  
 
# Behavioral Examples  
 
**Example A — Haircut:**  
User: "Do you have openings for haircuts this Friday?"  
Bot: Collect name + contact → Provide booking link.  
 
**Example B — Spa membership:**
User: "Do you offer monthly massage packages?"  
Bot: Explain services → Collect info → Provide booking link.
```

  </TabItem>
  <TabItem value="agent-broker" label="Agent & Broker">

```text wrap
# Additional Instructions  
 
## Required Qualification Data  
- Caller's name.  
- Service interest (real estate, insurance, finance, travel).  
- Timeline.  
- Contact information.  
 
## Routing Priorities
- If part of a franchise brand (e.g., State Farm, RE/MAX), route to Enterprise/Multi.  
- Independent → Local Business booking.  
 
## Success Response  
> "Thanks for sharing! You can book a consultation here: **[URL]**"
 
---  
 
# Behavioral Examples  
 
**Example A — Independent realtor:**
User: "I need help buying my first home."  
Bot: Collect info → Provide booking link.  
 
**Example B — Insurance franchise office:**  
User: "I'm with State Farm Insurance."  
Bot: Enterprise/Multi link.  
 
**Example C — Travel agency:**
User: "Can you help me plan a vacation to Italy?"  
Bot: Collect info → Provide booking link.
```

  </TabItem>
  <TabItem value="generic" label="Generic">

```text wrap
# Additional Instructions  
 
## 1) Absolute Rules  
- Provide information about services clearly and professionally.  
- Collect contact and service details before booking.  
- Only present booking links or confirm appointments if they are retrieved from the **Knowledge Base**.  
 
## 2) Required Qualification Data  
- Name has been collected.  
- Contact information (email or phone) has been collected.  
- Service type needed has been identified.  
- Urgency or timeline has been collected.  
 
## 3) Routing Priorities  
- If caller is part of a franchise or large group, use **Enterprise/Multi-Location** booking link.  
- If caller is an individual customer, use **Local Business** booking link.  
 
## 4) Small-Count Detection  
If the caller says things like "just me," "one-time," "just starting," or "single location," treat as **small/local booking**.  
 
## 5) Link Resolution Procedure  
1. Determine the correct segment using the **Knowledge Base**.  
2. Retrieve the corresponding booking link(s) from the Knowledge Base at response time.  
3. Confirm all required fields are collected.  
4. Share the link using the success format below.  
 
## 6) Response on Success  
> "Thanks for sharing your details! You can book your appointment here: **[URL]**"  
 
## 7) Conversational Hygiene
- Do not re-ask for information already provided.  
- If the customer asks "Can I book?" → collect any missing details, then provide the booking link.  
- Keep responses friendly, concise, and purposeful.  
 
## 8) Special Cases  
- **Support requests:** redirect to official support contact (placeholder: [Support Email/Phone]).  
- **Job inquiries:** provide the Careers page.  
- **Competitors:** acknowledge politely and continue qualification.  
 
---  
 
# Guardrails  
 
## Canonical Source  
- The booking link must be **retrieved from the Knowledge Base**. Do not reuse links from memory or prompts.  
 
## Pre-Link Validation Checklist (all must be true)  
- Name collected.  
- Contact info collected.  
- Service type identified.  
- Urgency/timeline collected.  
- Booking link retrieved from the Knowledge Base.  
 
If any condition is missing: do **not** provide the link, ask for the missing info first.  
 
---  
 
# Behavioral Examples
 
**Example A — Simple inquiry:**  
User: "Do you do [Service Example]?"  
Bot: Answer → Collect info → Provide booking link.  
 
**Example B — Urgent request:**  
User: "I need [Service Example] today."  
Bot: Flag as urgent → Collect details → Provide booking link.  
 
**Example C — Franchise customer:**  
User: "I'm calling from a [Brand] location."  
Bot: Route to Enterprise/Multi booking.  
 
**Example D — Job seeker:**
User: "Are you hiring?"  
Bot: Provide Careers page (no booking link).
```

  </TabItem>
</Tabs>

:::info AI Receptionst Taking Actions 
 These instructions will change how your AI Receptionist communicates with customers but it will *not* change the actions it can take with Business App or other systems. 
 
 Getting your AI Receptionist to take actions requires adding the appropriate Tool to your Custom Capabilities. For more information on Tools, see [Creating Custom Capabilities](../ai-capabilities/creating-custom-capabilities).
 :::

### Step 3: Add Knowledge to the AI Chat Receptionist

To respond accurately to general inquiries, your AI Chat Receptionist needs context about your business. You can do this by adding **Knowledge** to the AI Chat Receptionist.

**Knowledge** includes detailed business information, such as FAQs, service descriptions, and policies, that the AI uses to answer specific questions. Your **Business Profile** and information for your homepage is included by default.

 For a complete guide on providing your AI Employees with Knowledge, see the [Knowledge Sources section in the AI Workforce Overview](../ai_workforce_overview.md#knowledge-sources).

## Preview your AI Chat Receptionist in Action {#test-the-ai-chat-receptionists-responses}

Once your AI Chat Receptionist is set up, it's important to test how it handles real conversations and monitor its interactions over time. This helps you ensure the AI is answering questions accurately, capturing leads, and creating a positive experience for your website visitors. **For Partners**: This testing environment is also perfect for demonstrating the AI Chat Receptionist's capabilities to prospective clients during sales presentations.

To test your AI Chat Receptionist before going live (or to demo it to clients):

1. **Navigate to the AI Workforce section**: Go to <AISparkleIcon /> `AI` > `AI Workforce` in your dashboard
2. **Find your Chat Receptionist**: Locate the AI Chat Receptionist card in your workforce list
3. **Launch the test environment**: Click the `Try it` button to open your **My Listing** page in a new tab

:::warning
To access the My Listing page, you must have Local SEO Standard active on your account.
:::

### What to Test and Look For

:::tip Pro Testing Tip
For the most accurate testing experience, open the My Listing page in an **incognito or private browser window**. This ensures you start with a clean session without any cached data or previous conversations that might influence the AI's responses.
:::

When testing your AI Chat Receptionist, simulate real customer interactions by asking the types of questions your actual visitors might ask. Here are key scenarios to test:

**Basic Business Information**
- Ask about your business hours, location, and contact information
- Test questions about your services or products
- Verify the AI provides accurate, up-to-date information from your business profile

**Lead Capture Functionality**
- Start a conversation without providing contact details
- See if the AI naturally asks for your name, phone number, or email
- Test whether the AI handles partial information (e.g., giving only a name but not phone/email)
- Check if the AI gracefully handles when visitors decline to share contact information

**Appointment Booking** (if enabled)
- Ask about scheduling a consultation or appointment
- Test different time preferences (morning, afternoon, specific days)
- See how the AI handles scheduling conflicts or unavailable times

**Knowledge Base Accuracy**
- Ask specific questions about your services, policies, or procedures
- Test edge cases or less common questions
- Verify the AI admits when it doesn't know something rather than guessing

**Conversational Flow**
- Pay attention to how natural the conversation feels
- Notice if the AI gives too much information at once or too little
- Check if the AI maintains context throughout the conversation
- Test how it handles follow-up questions or topic changes

**Multilingual Support** (if applicable)
- Test conversations in different languages your customers might use
- Verify the AI responds appropriately in the same language

### Monitor and Improve the AI Chat Receptionist

Regularly review the `Conversations` and `Anonymous Visitors` tabs in Conversations to make sure your Chat Receptionist is having interacting with visitors like you expected. 

:::note
Conversations are placed in the `Anonymous Visitors` tab when the AI Chat Receptionist was unable to identify their contact information during the conversation.
:::

Responses from the AI Chat Receptionist include a clickable `Explanation` that expands to show:
- the AI "reasoning" behind their response
- the source they used for any knowledge
- any Tools that were used by the AI, as well as the detailed API call and response. 

## Frequently Asked Questions about the AI Chat Receptionist

<details>
<summary>What should I include in the Purpose prompt?</summary>

Your Purpose prompt sets the tone and behavior of your AI Chat Receptionist. Include instructions about your business’s voice, how the AI should greet visitors, and any important policies or information it should share.

</details>

<details>
<summary>How often should I update my AI Chat Receptionist’s knowledge?</summary>

Regularly review and update your AI’s Purpose prompt and knowledge sources to ensure the responses stay accurate and aligned with your latest business offerings and policies. Once a month is a good starting point for many businesses, but your business might need to do it more or less often. 

</details>

<details>
<summary>Why does my AI sometimes give different answers to the same question?</summary>

The AI Chat Receptionist is **non-deterministic**, which means it may provide different responses depending on the context and wording of each question. This flexibility allows it to better adapt to varied customer interactions! If you want to have your AI respond the exact same way each time, you need to be *very* specific when giving directions. 

</details>

<details>
<summary>How can I help my AI Chat Receptionist give correct answers?</summary>

You know your business best! To improve your AI’s accuracy, take a moment to write down:

- The services you offer—and those you don’t  
- The most common questions your customers ask  
- The key information the AI should always collect from visitors

Use this info to write clear Purpose prompts and add any relevant content to your AI’s knowledge base that might be missing.

</details>

