---
title: On-call dispatch
sidebar_label: On-call dispatch
sidebar_position: 3
description: "Set up the On-call dispatch capability so your AI Voice Receptionist works as an after-hours AI dispatcher, screening emergency calls and connecting callers to your on-call technician."
tags: [ai, voice, phone, dispatch, automation]
keywords: [on-call dispatch, AI dispatcher, after-hours dispatch, emergency dispatch, on-call technician, AI voice receptionist, urgent call routing, emergency call handling]
---

The **On-call dispatch** capability turns your AI Voice Receptionist into an after-hours dispatcher. It screens urgent calls and connects the caller to your on-call technician, first gathering who is calling, the nature of the emergency, and the service location. If no one can be reached live, the caller is told the on-call technician has been notified and will follow up.

**In this guide, you will learn:**
- What On-call dispatch is and how a dispatched call flows from caller to technician
- How to add on-call numbers, criteria, and an announcement
- How to customize the announcement with template variables
- Why the companion SMS automation is an essential part of setup
- Where to find answers to frequently asked questions

## What is On-call dispatch?

On-call dispatch is a capability of the [AI Voice Receptionist](./ai-voice-receptionist.md), configured in its capabilities settings. When a caller matches criteria you define, such as an after-hours emergency, the AI collects the details of the emergency, places the caller on hold, calls your on-call technician, announces the call, and connects the two.

Unlike a simple call transfer, the AI screens the call first, so your technician picks up already knowing who is calling, what the emergency is, and where the service is needed.

## Why is On-call dispatch important?

- **Never miss an urgent call**: Emergency calls reach a real person on your team, even after hours.
- **Your technician answers prepared**: The AI announces the caller's name, location, and emergency before connecting the call, so there's no cold pickup.
- **Callers stay reassured**: If your technician can't be reached live, the caller is told the on-call technician has been notified and will be in contact as soon as possible.
- **Route by situation**: Each on-call number has its own criteria, so different kinds of urgent calls can dispatch to different people.

## What's included with On-call dispatch?

- **On-call numbers with criteria**: One row per on-call number, each with its own free-text criteria describing when that number should receive the dispatch.
- **Conversational screening**: The AI gathers the emergency, the service location, and the caller's name one item at a time, confirming details back to the caller.
- **Announcement**: A message the AI speaks to whichever technician answers, with template variables for the call details. Leave it blank to use the default announcement.
- **Hold and connect**: The caller waits on hold with music while the AI dials the on-call number, then the two calls are connected once a person answers.
- **Automation trigger**: A completed dispatch fires the `An AI-handled call is transferred` automation trigger with the call details, so you can text the details to the on-call number or log the dispatch. See [Automation triggers](../../automations/automation-triggers.md#conversations-ai).

## How to set up On-call dispatch

### Prerequisites

Your AI Voice Receptionist must be set up and answering calls first. See the [AI Voice Receptionist](./ai-voice-receptionist.md) guide for setup, call routing, and prerequisites.

### Step 1: Add the capability

1. Go to **AI** > `AI Workforce` and click `Configure` on the Voice Receptionist.
2. In `Capabilities`, add the **On-call dispatch** capability.

### Step 2: Add on-call numbers and criteria

1. Click **+ Add an on-call number** to add a row. Each row has two required fields:
   - `Phone number` — the on-call number to reach. Enter it in international format (a `+` followed by the country code and number) or as a 7–15 digit national number.
   - `Criteria` — free text describing when to dispatch to this number, for example, "after-hours plumbing emergencies".
2. Repeat for each on-call number. Each number gets its own row and its own criteria describing when it should receive the dispatch.
3. To remove a row, delete it — rows can be removed whenever more than one row exists.

### Step 3: Customize the announcement (optional)

The `Announcement` field is shared across all on-call numbers and is spoken to whichever technician answers. Leave it blank to use the default announcement.

You can personalize the announcement with these template variables, spelled exactly as shown:

| Variable | Replaced with |
|---|---|
| `{CallerName}` | The caller's name |
| `{Emergency}` | The emergency in the caller's own words |
| `{ServiceLocation}` | The service location |

Write the announcement in any language — it is spoken as written.

When the field is blank, the AI uses the default announcement, skipping any part with no captured value:

> "Hello, this is after-hours dispatch. I have an emergency call for you. The caller is \{CallerName\}, at \{ServiceLocation\}. They're reporting: \{Emergency\}. Connecting you with the caller now."

### Step 4: Set up the companion SMS automation

If your on-call technician can't be reached live, the caller is told the on-call technician has been notified — and the automation is how that notification actually reaches your technician. Treat it as an essential part of setup, not an optional extra.

When a dispatch completes, the `An AI-handled call is transferred` automation trigger fires with the call details: the outcome, caller name, reason for call, service location, caller number, and transferred-to number. Use it to text the call details to the on-call number so your technician always gets the information, whether or not they answered.

:::tip Set up the dispatch SMS
For a step-by-step recipe that texts the call details to your on-call number, see [Text your on-call technician when a call is dispatched](../../automations/use-cases/dispatch-on-call-sms.md). For the full list of triggers, see [Automation triggers](../../automations/automation-triggers.md#conversations-ai).
:::

## How a dispatched call works

When a caller matches a configured criteria:

1. **The AI screens the call.** It collects, conversationally and one item at a time: the emergency in the caller's own words (confirmed back), the service location (read back and confirmed), and the caller's name. It never asks for a callback number — that is captured automatically from the call — and it never reveals the on-call number to the caller.
2. **The caller is placed on hold** with music.
3. **The AI dials the on-call number** separately, with answering-machine detection.
4. **When a person answers**, the AI speaks the announcement (or the default), then connects the two calls.
5. **If the call reaches voicemail, isn't answered, is busy, or fails**, no voicemail message is left. The caller is taken off hold and told: "The on-call technician has been notified and will be in contact as soon as possible. Goodbye."

:::note One dispatch attempt per call
There is one dispatch attempt — the AI does not automatically retry the number or cascade to a second number. This is why the companion SMS automation matters: it makes sure the call details reach your technician even when no one answers live.
:::

## Frequently asked questions

### Setup and configuration

<details>
<summary>Can I dispatch to more than one on-call number?</summary>

Yes. Click **+ Add an on-call number** to add a row for each number. Each row has its own criteria describing when that number should receive the dispatch. A single dispatched call goes to one number — the one whose criteria the call matches.
</details>

<details>
<summary>What phone number formats are accepted?</summary>

The `Phone number` field accepts international format (a `+` followed by the country code and number) or a 7–15 digit national number.
</details>

<details>
<summary>Do I need to set up the AI Voice Receptionist before using On-call dispatch?</summary>

Yes. On-call dispatch is a capability of the AI Voice Receptionist, so the receptionist must be set up and answering calls first. See the [AI Voice Receptionist](./ai-voice-receptionist.md) guide.
</details>

### Announcements

<details>
<summary>What does the technician hear if I leave the Announcement blank?</summary>

The AI speaks the default announcement: "Hello, this is after-hours dispatch. I have an emergency call for you. The caller is \{CallerName\}, at \{ServiceLocation\}. They're reporting: \{Emergency\}. Connecting you with the caller now." Any part with no captured value is skipped.
</details>

<details>
<summary>Can I write the announcement in another language?</summary>

Yes. Write the announcement in any language — the AI speaks it as written. The template variables `{CallerName}`, `{Emergency}`, and `{ServiceLocation}` work the same way in any language.
</details>

### During a dispatch call

<details>
<summary>Does the caller ever hear my on-call number?</summary>

No. The on-call number is never revealed to the caller. The AI dials it separately while the caller waits on hold.
</details>

<details>
<summary>Does the AI ask the caller for a callback number?</summary>

No. The caller's number is captured automatically from the call, so the AI never asks for it. It collects the emergency, the service location, and the caller's name.
</details>

<details>
<summary>What happens if my technician doesn't answer?</summary>

If the call reaches voicemail, isn't answered, is busy, or fails, no voicemail message is left. The caller is taken off hold and told the on-call technician has been notified and will be in contact as soon as possible. There is one dispatch attempt — no automatic retry or second-number cascade.
</details>

<details>
<summary>How does my technician actually get notified when they miss the dispatch call?</summary>

Through the companion automation. Set up an automation on the `An AI-handled call is transferred` trigger to text the call details to your on-call number — see [Text your on-call technician when a call is dispatched](../../automations/use-cases/dispatch-on-call-sms.md). Without it, a missed dispatch call leaves your technician with only the missed call itself.
</details>
