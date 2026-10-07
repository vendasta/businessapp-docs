---
title: Meetings
sidebar_label: Meetings
sidebar_position: 8
description: Let visitors book appointments directly from your Vibe app.
brand: business-app
product: vibe
audience: smb
---

# Meetings

The Meetings connector lets visitors book appointments directly from your Vibe app. Ask Vibe to add booking, and it reads the event types configured in your account's scheduler, shows the bookable options in a chat card, and embeds the real booking page into your app.

## What it layers on

Meetings layers on the same scheduler you manage in [My Meetings](/business-app/my-meetings). When the connector is enabled, Vibe can:

- Read the event types configured for your account.
- Present them as options in a chat card so you can pick which one to offer.
- Embed the corresponding booking page into your generated app.

Visitors book through the same calendar availability and confirmation flow you already use, so appointments land in the same place as every other booking.

## Enabling the connector

Open your project's settings and select **Connectors** — see [project settings](../guides/project-settings.md). Toggle **Meetings** on to make it available to the supervisor agent for that project.

## When to use it

Reach for Meetings when:

- You want visitors to book an appointment without leaving your Vibe app.
- You already have event types set up in your scheduler and want to surface them on a generated site or portal.
- You want a real booking experience, not a mocked contact form that just says "we'll call you."

## Adding a booking widget

Ask for it directly:

> Add a booking widget so visitors can schedule a consultation.

> Let customers book a free estimate from the homepage.

> Add a "Book an appointment" button that opens the scheduler.

Vibe shows a card listing the event types available on your account. Select the one you want, and Vibe embeds that booking page into your app.

## What you get in the generated app

- A booking widget or embedded scheduler in your app, wired to the event type you selected.
- Real availability from your calendar, not placeholder slots.
- Confirmed bookings appear in the same place as every other appointment on your account.

## Setup issues

If the Meetings connector can't surface a working booking widget, Vibe explains why in the chat instead of embedding a broken widget. Common situations:

| Issue | What Vibe tells you |
|-------|---------------------|
| An event type has no host assigned | The event type needs a host before visitors can book it. |
| A host hasn't connected their calendar | The host needs to connect their calendar so Vibe can read availability. |
| No event types are configured | Create at least one event type in your scheduler before enabling the connector. |

Resolve the issue in [My Meetings](/business-app/my-meetings), then ask Vibe to try again.

## Limitations

- Vibe can embed your existing booking pages — it can't create or configure event types. Set those up in [My Meetings](/business-app/my-meetings) first.
- Vibe shows only event types that are bookable (host assigned, calendar connected). If an event type is missing from the list, check its configuration.

## Frequently Asked Questions

<details>
<summary>Can Vibe create event types for me?</summary>

No. Vibe can read and embed event types that already exist, but it can't create, edit, or delete them. Manage your event types in [My Meetings](/business-app/my-meetings).
</details>

<details>
<summary>Why isn't my event type showing up in the list?</summary>

An event type must have a host assigned and that host must have their calendar connected. If either is missing, Vibe won't list it because it can't be booked.
</details>

<details>
<summary>Where do confirmed bookings appear?</summary>

Bookings made through your Vibe app appear in the same place as every other appointment: on your calendar and in [My Meetings](/business-app/my-meetings).
</details>

## Next Steps

- [Connectors](./index.md) — Overview of all connectors and how to combine them
- [My Meetings](/business-app/my-meetings) — Configure event types and calendar settings
- [Prompting Library](../guides/prompting-library.md) — Ready-made prompts for each connector
