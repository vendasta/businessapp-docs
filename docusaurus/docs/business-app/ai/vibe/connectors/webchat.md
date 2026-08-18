---
title: Webchat
sidebar_label: Webchat
sidebar_position: 6
description: Add an existing webchat to your Vibe app, or create a new one, without leaving the chat.
---

# Webchat

The Webchat connector lets you add live chat to your Vibe app without leaving the conversation. Ask for a webchat, and Vibe finds the ones already set up for your account, or creates a new one if you don't have any yet.

## What it layers on

Webchat layers on the same widgets you manage in [Web Chat](/business-app/conversations/web-chat). When you ask Vibe to add a webchat, it looks up the widgets already configured for your account and shows a searchable list in the chat so you can pick which one to embed. Selecting one embeds that widget in your generated app — there's no separate installation step.

If your account doesn't have a webchat yet, Vibe offers to create one. You give it a name, and Vibe creates the widget with default settings before embedding it.

## Enabling the connector

From the projects list click **Configure**, or inside the project click **+** in the chat box and select **Connectors**. Toggle **Webchat** on to make it available to the supervisor agent for that project.

## When to use it

Reach for Webchat when:

- You want visitors to your Vibe app to be able to chat with your business.
- You already have a webchat set up in Web Chat and want to reuse it instead of building a new one.
- You want live chat on your app without leaving the Vibe conversation to configure it separately.

## Adding a webchat

Ask for it directly:

> Add a webchat to the site so visitors can chat with us.

If your account has one or more webchats, Vibe shows a searchable list so you can pick which one to embed. If you don't have one yet, Vibe asks for a name and creates a widget with default settings, then embeds it.

## What you get in the generated app

- A chat widget embedded in your app, wired to the webchat you selected or created.
- A widget created through Vibe uses default settings — you're not asked to configure the assigned AI employee, appearance, or messaging during creation.

## Limitations

- Vibe can list, select, and embed webchats, and create a new one when you have none — it can't edit, delete, or otherwise reconfigure an existing webchat. Make those changes in [Web Chat](/business-app/conversations/web-chat).
- Vibe doesn't manage which domains a webchat is allowed to load on. Review or restrict that in Web Chat if needed.

## Next Steps

- [Connectors](./index.md) — Overview of all connectors and how to combine them
- [Web Chat](/business-app/conversations/web-chat) — Configure the assigned AI employee, appearance, and messaging for your widgets
- [Prompting Library](../guides/prompting-library.md) — Ready-made prompts for each connector
