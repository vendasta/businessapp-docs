---
title: Multi-location web chat widget
sidebar_label: Multi-location web chat
description: Set up one web chat widget for your brand website that lets visitors choose a location and chat with that location's AI employee
brand: business-app
product: conversations
audience: smb
---

If your business has more than one location, you can add a single web chat widget to your main brand website. Visitors choose the location they want from inside the widget, then chat with that location's own AI employee.

This widget is set up for your group of locations and is separate from the web chat widget on any individual location's website. It has its own installation code.

## How it works

The widget has two views:

1. `Location picker`: When a visitor opens the widget, they see your locations listed with their names and addresses. They can search by business name or address, and page through the list ten locations at a time.
2. `Chat`: When a visitor picks a location, the chat opens with that location's AI employee. A back arrow returns them to the list.

Each location answers with its own AI employee and its own knowledge, and the conversation goes to that location's inbox.

:::note
Going back to the location list ends the current chat. If a visitor picks a different location, they start a new conversation.
:::

## Before you begin

Each location you want to include needs web chat active in its own `Conversations` settings. Locations without it show a yellow `Conversations AI not active` badge and can't be added to the widget.

## Set up the widget

1. From your group of locations, open the `Web Chat configuration` page under `Administration`, then select `New Web Chat`.
2. Check the `Widget name`. It fills in automatically with your brand name. Only you see this name, so change it to something more specific if you plan to run more than one widget.
3. Under `Businesses included`, select `Add locations`. In the `Choose businesses` window, search for a location or pick it from the list. Each row shows the business name, its address, and the `AI Employee` that handles its chats. Check that column to confirm the right employee is assigned to each location before you go live. Select your first location and a banner appears offering to add the rest at once, for example `Select all 12 eligible`. Select `Done` when you're finished.
4. Add a `Welcome greeting` (up to 70 characters). This appears in the widget header to encourage visitors to start a chat, for example "Hi, how can we help you today?"
5. Set the `Initial AI message` (up to 600 characters). This is the first message your AI employee sends when a chat opens. It's turned on by default with a standard message and privacy notice. This message is the same for every location.
6. Under `Appearance`, set your `Primary color`, `Accent color`, text colors, which bottom corner the widget sits in, and whether the mobile popup shows. These apply to the whole widget, including every location's chat.
7. Select `Next`. Your installation code appears right away.

:::info
The live preview beside the form uses sample locations, not the ones you selected. It shows layout and colors, not your final list.
:::

## Install the widget on your website

Your installation code appears under `Floating chat widget` when you create the widget. You can reopen it any time from the `Web Chat configuration` page.

The panel has four tabs:

- `Website`: a script to paste into your site.
- `Google Tag Manager`: the same widget delivered through a custom HTML tag.
- `WordPress`: a `Download WordPress plugin` button. This tab gives you a plugin to install, not code to paste.
- `GoDaddy Website Builder`: a script sized for GoDaddy's custom code section.

For the `Website` tab, paste the script into the head section of your brand website, on every page where you want the widget to appear.

:::note
Always copy the code from the installation panel rather than typing it by hand, so your widget ID is correct.
:::

## What your visitors see

When a visitor opens the widget on your brand website, they see your welcome greeting, a search box reading `Search by business name or address...`, and your locations as cards showing each business name and address. When they pick one, the header changes to `Chatting with` that location and the chat begins.

## Where the conversations go

Each conversation is delivered to the inbox of the location the visitor chose, so that location follows up with its own leads. You can also see all of them together in your group's `Conversations` view.

:::tip Can't find the conversations?
Chats from the widget arrive as anonymous web chat conversations until the visitor shares their contact details, and the default inbox filter hides them. In the location's inbox, set the filters to include `Web Chat` and `Anonymous`.
:::

## What isn't available on this widget

Some options from the single-location web chat widget don't apply here:

- The `Embedded chat widget` installation option. The multi-location widget is a floating widget only.
- `Widget actions`, the links that prefill or send a message for a visitor.
- The AI employee's name and picture aren't shown in the chat window. You can see which employee handles each location in the `Choose businesses` window when you set the widget up.

## Related articles

- [Web chat setup and usage](./index.mdx)
