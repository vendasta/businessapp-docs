---
title: AI Overview
sidebar_position: 1
description: Configure AI Employees in Business App to answer questions, capture leads, book appointments, and automate conversations across chat, SMS, WhatsApp, and phone.
slug: /ai
---

import Link from '@docusaurus/Link';
import { AISparkleIcon, SettingsIcon, CRMIcon } from '@site/src/components/Icons';

The AI Workforce is a set of configurable AI Employees that help do the heavy lifting for your business by taking on repetitive tasks so humans can focus on other work. Each employee uses assigned **Capabilities** and knowledge from the **Knowledge Base** to perform their work accurately and consistently.

## Understanding the core concepts

Your AI employees are powered by three key components:

- **Knowledge Base** provides the factual content your AI can search and reference when answering questions — like business hours, pricing, FAQs, and policies.

- **Capabilities** tell your AI employee how to act and when to take specific actions in conversations — like when to capture leads, how to qualify customers, or what tone to use.

- **Tools** connect your AI employee to external systems via APIs, allowing them to perform actions like creating appointments, checking inventory, or updating your CRM.

These three components can be mixed and matched to create powerful AI employees that handle complex customer interactions and automate business processes.

:::tip Quick Reference
- **Knowledge Base** = Information to reference (reactive, fact-based)
- **Capabilities** = Instructions on how to behave (proactive, process-based)  
- **Tools** = Ability to take action in external systems (integration-based)
:::

## Key areas

<div className="row">
  <div className="col col--4">
    <Link className="card-link" to="./ai-workforce/ai_workforce_overview">
      <div className="card">
        <div className="card__header"><h3>AI Workforce</h3></div>
        <div className="card__body"><p>Configure employees, capabilities, tone, and behavior.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="./ai-capabilities/">
      <div className="card">
        <div className="card__header"><h3>Capabilities</h3></div>
        <div className="card__body"><p>Enable skills like lead capture, Q&A, booking, and integrations.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="./knowledge-base.md">
      <div className="card">
        <div className="card__header"><h3>Knowledge Base</h3></div>
        <div className="card__body"><p>Provide business‑specific information for accurate answers.</p></div>
      </div>
    </Link>
  </div>
</div>

### Popular guides

<div className="row">
  <div className="col col--4">
    <Link className="card-link" to="./ai-workforce/ai-chat-receptionist">
      <div className="card">
        <div className="card__header"><h3>AI Chat Receptionist</h3></div>
        <div className="card__body"><p>Answer web chat, SMS, and WhatsApp automatically.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="./ai-workforce/ai-voice-receptionist">
      <div className="card">
        <div className="card__header"><h3>AI Voice Receptionist</h3></div>
        <div className="card__body"><p>Answer phone calls 24/7 and capture leads.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="./ai-capabilities/creating-custom-capabilities">
      <div className="card">
        <div className="card__header"><h3>Custom Capabilities</h3></div>
        <div className="card__body"><p>Connect tools and tailor what your AI can do.</p></div>
      </div>
    </Link>
  </div>
</div>

## FAQs

<details>
<summary>How do I enable AI Employees?</summary>

Go to <AISparkleIcon /> `AI > AI Workforce` in Business App. Choose the employee you want to use and follow the setup prompts.
</details>

<details>
<summary>How do AI Employees get my business information?</summary>

Your Business Profile is included by default. You can add additional knowledge sources in the Knowledge Base. See the [Knowledge Base Overview](./knowledge-base.md).
</details>