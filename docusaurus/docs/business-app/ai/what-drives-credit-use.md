---
title: What drives credit use
sidebar_label: What drives credit use
sidebar_position: 6
description: What affects how many AI Credits your AI Employees use in chat and voice, and which settings give you the most control.
tags: [ai, ai-credits, credits, models, voice, chat]
keywords: [ai credits, credit use, ai model, reasoning effort, voice family, reduce credit use]
brand: business-app
product: ai-workforce
audience: smb
---

AI products use credits in proportion to the work their AI model and infrastructure does. The model you choose, where the conversation happens and how your AI Employee is set up all decide how many credits each reply or call uses. The default settings are chosen to use credits efficiently, so most accounts don't need to change anything. This article explains what affects credit use and which settings give you the most control. Comparisons are relative to the default model, GPT 5.6 Luna, shown as 1×. They are rough guides, not exact figures, and they will change as we keep improving efficiency.

## Chat

Chat credits depend on the AI model, how much your AI Employee reads and does on each reply, and how long the conversation runs.

### Tips to use fewer credits in chat

1. **Start with GPT 5.6 Luna, the default model.** Advanced models use roughly 10 times the credits or more, and premium models roughly 25 times or more. Move up only for AI Employees whose answers need it.
2. **Leave reasoning effort at its default, which is the lowest.** Raise it only where answers are measurably better, and tweak this before moving up a model tier.
3. **Turn on only the AI Capabilities and tools your AI Employee uses.** Each capability adds credit usage to every reply, even when it isn't used.
4. **Build custom tools that return focused results.** Credit consumption is lower when AI responds with one contact or the next three open calendar slots, rather than long lists or web pages.
5. **Keep roles, capabilities and tools concise, and avoid frequent edits.** Your instructions are cached and charged at a reduced rate. Changing them drops them out of the cache, so they cost more for a while after each save until they are cached again.
6. **Turn on guardrails only where you need them.** Guardrails are optional, and they use additional credits when they run.

### How chat credits are counted

Credits measure the AI model's work, not the number of messages.

- **Reading:** on every step, the model reads your Role and capability instructions, tool descriptions, the conversation so far and anything it has looked up.
- **Writing:** the reply, plus any hidden thinking. Writing costs several times more than reading.
- **Steps:** a reply that looks something up takes several steps, and each step reads everything again.
- **Cached instructions:** instructions and tool descriptions the model has read recently are charged at a reduced rate, so a stable setup costs less than one that changes often.

### Choose the AI model

Credits follow the model that answers. Compared with the default model:

| Tier | AI models | Credits vs GPT 5.6 Luna |
| --- | --- | --- |
| Lighter | GPT 5 Nano, GPT 4o Mini | Less than 1× |
| Default (recommended) | GPT 5.6 Luna | 1× |
| Everyday alternatives | GPT 5 Mini, Gemini 3.5 Flash Lite, GPT 4.1 Mini | Similar, up to about 2× |
| Advanced | GPT 6.1 Sol, GPT 5.6 Terra, GPT 5, GPT 4.1, GPT 5.1, Gemini 3 Flash, Gemini 3.7 Flash, Gemini 3.8 Flash | About 10× or more |
| Premium | GPT 5.6 Sol, Gemini 3.1 Pro, Gemini 4 Argon, GPT 5.5 | About 25× or more |

Where a model lands within its tier depends on how much it thinks and how your AI Employee is set up. If an AI provider has an outage, a backup model of similar capability may answer, and credits follow the model that answered.

### Reasoning effort

Newer models think before they answer, and that thinking uses credits even though you don't see it. You can set each AI Employee's reasoning effort to low, medium or high. The default is the lowest. A higher effort adds thinking to every step of every reply. Some models think a lot even at the lowest setting, which is part of why Gemini 3.1 Pro is a premium model. Older models such as GPT 4.1 and GPT 4o don't think at all.

### In-app chat and customer conversations

The way a conversation runs depends on where it happens. You don't choose it.

|  | **Customer conversations** | **In-app chat** |
| --- | --- | --- |
| Where | Web Chat, SMS, email, Facebook, Instagram and WhatsApp | Chat with your AI Employee in Business App |
| Mode | Fast mode | Thinking mode |
| How it works | Looks up what it needs and answers, usually in one step | Plans, works step by step, checks its own draft and revises |
| Credits on the same AI model | 1× | Several times more |

Because of this, in-app chat can account for a large share of your credit use even when it handles a small share of replies.

### Long conversations

The conversation so far is re-read on every reply, so later messages cost more than early ones. The AI Employee keeps about the last 50 messages and actions, so the cost per reply levels off after that.

## Voice

Voice credits depend on how many minutes your AI Voice Receptionist spends on calls and which voice family and voice you choose. Since voice calls use credits by the minute, not by the reply the cost per minute stays roughly even whether a call is short or long.

### Tips to use fewer credits on voice

1. **Choose your voice family deliberately.** It's the biggest lever. The recommended default (OpenAI GPT Realtime) sounds most natural and uses several times the credits per minute of Deepgram Aura-2, ElevenLabs Flash v2.5 or OpenAI GPT 4o mini TTS. If stretching your included minutes matters more than the most natural sound, a lower-credit option goes further.
2. **Ask for short answers.** Add a line such as "Keep answers short" to Additional Instructions. Longer, chattier calls use more credits.
3. **Turn on only the capabilities and tools your receptionist uses.** See "Capabilities and tools" below.
4. **Keep calls within the limit.** Calls to your Conversations AI phone number are limited to 10 minutes.

### Choose a voice family

|  | **OpenAI GPT Realtime (recommended, the default)** | **Deepgram Aura-2, ElevenLabs Flash v2.5 or OpenAI GPT 4o mini TTS** |
| --- | --- | --- |
| How it works | One AI model listens to the caller and speaks directly | Speech is transcribed, an AI model writes the reply, and the voice reads it aloud |
| Feel | Most natural. Handles interruptions and pauses smoothly | Very capable, with slightly more mechanical turn-taking |
| Credits per minute | Highest: several times the other options | Lower, and varies by option. ElevenLabs tends to cost more than the others |

For an estimate of how many minutes your plan covers, see the Included credits table in the [AI Credits](./ai-credits.md) article.

### What else affects voice credits

- **Phone calls use somewhat more than browser calls.** Calls to your Conversations AI phone number include the telephone network.
- **Speech the caller talks over still counts.** The AI's words use credits even when the caller interrupts them.
- **Each call has a small fixed cost.** The recording notice and greeting use a small, fixed number of credits per call.

## Chat and voice

These points apply to both chat and voice.

### Capabilities and tools

- **Each AI Capability is a section of prompt,** so each one you turn on adds reading to every step, as does any text in the Role field or a capability's instructions.
- **Every tool's description is read on every step,** whether or not the tool is used.
- **Whatever a tool returns is re-read** on every later step, and in later turns of the conversation, so large results add up quickly.
