---
title: AI Overview
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import { AISparkleIcon, SettingsIcon, CRMIcon } from '@site/src/components/Icons';

<div className="row" style={{marginBottom: '1.5rem'}}>
  <div className="col col--7">
    <h1 style={{marginTop: 0}}>Build your AI Workforce</h1>
    <p>Use AI Employees to greet visitors, answer questions, capture leads, and book appointments across chat, SMS, WhatsApp, and phone.</p>
    <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
      <Link className="button button--primary" to="./ai-workforce/ai_workforce_overview"><AISparkleIcon />&nbsp;Open AI Workforce</Link>
      <Link className="button button--secondary" to="./knowledge-base"><CRMIcon />&nbsp;Knowledge Base</Link>
      <Link className="button button--secondary" to="./ai-capabilities/"><SettingsIcon />&nbsp;Capabilities</Link>
    </div>
  </div>
  <div className="col col--5">
    <img alt="AI assisting across channels" src="./img/form-fill-respond.png" />
  </div>
</div>

## Start here

- Go to <AISparkleIcon /> `AI > AI Workforce` to configure your AI Employees
- Review your <SettingsIcon /> `Administration > Business Profile` so your AI has accurate information
- Optional: Connect your calendar in <CRMIcon /> `CRM > My Meetings` for bookings

## Explore

<div className="row">
  <div className="col col--4">
    <Link className="card-link" to="./ai-workforce/ai_workforce_overview">
      <div className="card">
        <div className="card__header"><h3>AI Workforce</h3></div>
        <div className="card__body"><p>Set up employees, tone, and behavior.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="./ai-capabilities/">
      <div className="card">
        <div className="card__header"><h3>Capabilities</h3></div>
        <div className="card__body"><p>Enable skills like Q&A, booking, and integrations.</p></div>
      </div>
    </Link>
  </div>
  <div className="col col--4">
    <Link className="card-link" to="./knowledge-base">
      <div className="card">
        <div className="card__header"><h3>Knowledge Base</h3></div>
        <div className="card__body"><p>Provide business-specific information for accurate answers.</p></div>
      </div>
    </Link>
  </div>

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
<summary>Where do I enable AI?</summary>

Go to <AISparkleIcon /> `AI > AI Workforce` in Business App. Choose the employee you want to use and follow the setup prompts.
</details>

<details>
<summary>How does AI get my business information?</summary>

Your Business Profile is included by default. You can add additional knowledge sources in the Knowledge Base. See the [Knowledge Base Overview](./knowledge-base.md).
</details>
