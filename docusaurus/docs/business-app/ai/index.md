---
title: AI Overview
sidebar_position: 1
description: Configure AI Employees in Business App to answer questions, capture leads, book appointments, and automate conversations across chat, SMS, WhatsApp, and phone.
---

import Link from '@docusaurus/Link';
import { AISparkleIcon, SettingsIcon, CRMIcon } from '@site/src/components/Icons';

The **AI** section in Business App lets you deploy and configure AI Employees that handle customer conversations, capture leads, book appointments, and automate repetitive tasks so your team can focus on higher-value work.

## How it fits together

**AI Employees** are the roles you configure—such as the AI Chat Receptionist (web chat, SMS, email, WhatsApp) and the AI Voice Receptionist (phone calls). Each employee has a **Profile** (name, purpose, tone), **Channels** (where they work), **Capabilities** (what they can do), and **Knowledge Sources** (what they know).

**Capabilities** are the skills you turn on or off for each employee: lead capture, appointment booking, answering FAQs, transferring calls, or custom actions that connect to your tools (e.g. ServiceTitan, Shopify). Built-in capabilities cover common tasks; [custom capabilities](./ai-capabilities/creating-custom-capabilities.md) let you connect APIs and external systems.

**Knowledge Base** is the reference library your AI Employees search when answering questions. It includes your business profile, website content, uploaded documents (FAQs, price lists, policies), and custom text. The AI retrieves only the relevant parts for each question—it doesn’t read everything every time. Keeping the Knowledge Base up to date helps your AI give accurate, consistent answers.

## AI roles and integrations

| Role | What it does |
|------|----------------|
| **AI Chat Receptionist** | Answers web chat, SMS, email, Facebook Messenger, and WhatsApp 24/7; captures leads and answers questions using your knowledge. |
| **AI Voice Receptionist** | Answers phone calls 24/7; captures lead info, books appointments, and can transfer calls. |
| **AI Reputation Specialist** | Automates review responses and helps you analyze reviews and NPS data. |

Integrations (e.g. [ServiceTitan](./ai-workforce/ai-chat-receptionist/connect-the-ai-receptionist-with-servicetitan), [Shopify](./ai-workforce/ai-chat-receptionist/connect-the-ai-receptionist-with-shopify)) extend what your AI can do—such as scheduling jobs or looking up products—by connecting your AI Employees to your existing tools.

## Key areas

<div className="row business-app-cards">
  <div className="col col--4">
    <Link className="card-link" to="./ai-workforce/ai_workforce_overview">
      <div className="card">
        <div className="card__header"><h3>AI Workforce</h3></div>
        <div className="card__body"><p>Configure employees: profile, channels, capabilities, and knowledge sources.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="./ai-capabilities/">
      <div className="card">
        <div className="card__header"><h3>Capabilities</h3></div>
        <div className="card__body"><p>Built-in skills (lead capture, booking, Q&A) and custom capabilities for APIs and integrations.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="knowledge-base.md">
      <div className="card">
        <div className="card__header"><h3>Knowledge Base</h3></div>
        <div className="card__body"><p>Business profile, website, and documents your AI uses to answer questions accurately.</p></div>
      </div>
    </Link>
  </div>
</div>

## Popular guides

<div className="row business-app-cards">
  <div className="col col--4">
    <Link className="card-link" to="./ai-workforce/ai-chat-receptionist">
      <div className="card">
        <div className="card__header"><h3>AI Chat Receptionist</h3></div>
        <div className="card__body"><p>Set up chat, SMS, email, and messaging; capture leads and answer questions 24/7.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="./ai-workforce/ai-voice-receptionist">
      <div className="card">
        <div className="card__header"><h3>AI Voice Receptionist</h3></div>
        <div className="card__body"><p>Answer calls 24/7, capture leads, book appointments, and route or transfer calls.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="./ai-capabilities/creating-custom-capabilities">
      <div className="card">
        <div className="card__header"><h3>Custom Capabilities</h3></div>
        <div className="card__body"><p>Connect external systems and APIs so your AI can run your business workflows.</p></div>
      </div>
    </Link>
  </div>
</div>

## More resources

- [AI Reputation Specialist](./ai-workforce/ai-reputation-specialist) — Automate review responses and explore NPS and review data.
- [AI models and privacy](./ai-models-and-privacy) — How AI generates answers, model disclosure, and data handling.

## FAQs

<details>
<summary>How do I enable AI Employees?</summary>

Go to <AISparkleIcon /> **AI** → **AI Workforce** in Business App. Choose the employee you want (e.g. Chat or Voice Receptionist) and follow the setup prompts.
</details>

<details>
<summary>How do AI Employees get my business information?</summary>

Your Business Profile is included by default. Add more in the [Knowledge Base](knowledge-base.md): website content, documents, and custom text. AI Employees only use this when it’s relevant to the question.
</details>

<details>
<summary>What’s the difference between Knowledge Base and Capabilities?</summary>

**Knowledge Base** is reference information the AI looks up when needed (FAQs, pricing, policies). **Capabilities** define what the AI can *do*—e.g. capture leads, book appointments, or call an API. Use capabilities when you need consistent behavior or actions; use the Knowledge Base for facts and content.
</details>
