---
title: Single sign-on
sidebar_position: 1
unlisted: true
---

# Single sign-on

The Single sign-on connector lets your customers sign into your generated app using their existing Business App account. The connector wires the login UI into the OAuth/OIDC flow, so you don't have to manage passwords, password resets, or session storage yourself.

## What it layers on

Single sign-on layers on Business App's customer authentication. When you enable the connector, Vibe provisions an OAuth client for the project — a dedicated identity for your app inside the platform's OAuth/OIDC service. Your generated app uses that client to redirect customers through the standard OAuth flow, and Business App returns a signed identity token your app can use to look up the signed-in member.

The OAuth client ID for the project is shown in the **Overview** card on the Project Settings page once the connector is enabled.

## Enabling the connector

Open **Project Settings**, scroll to **Shared connectors**, and toggle **Single sign-on** on. Toggling it on provisions the OAuth client automatically — there's nothing you need to configure manually for the redirect flow to start working in your generated app.

If you ask for a sign-in experience before the connector is enabled, Vibe will scaffold the UI but the sign-in itself won't complete until you turn the connector on.

## When to use it

Reach for Single sign-on when:

- Part of your app should only be visible to logged-in customers — a member dashboard, an order history page, a loyalty profile.
- You want sign-in to feel familiar, with the same account your customer already uses with you.
- You want a profile page that shows the signed-in customer's information without you having to build a settings backend.

## Asking for sign-in

Describe the gated experience in your prompt:

> Add a "Members" area with a sign-in screen. After signing in, members see their loyalty points, recent orders, and a profile section with their name and email.

> Gate the booking page behind a sign-in screen. Only signed-in customers can book.

> Add a profile page that shows the signed-in customer's name, email, phone, and a list of their last five service appointments.

The supervisor agent recognizes phrases like "sign in", "members area", "gated", and "profile" and wires the UI through the Single sign-on connector when it is enabled for the project.

## What you get in the generated app

- A sign-in route that redirects the visitor through Business App's OAuth flow and returns them to your app once authenticated.
- A session-aware layout that knows when a member is signed in and exposes their identity to the rest of the app.
- A sign-out control wired to the same flow so members can end their session cleanly.

Single sign-on pairs naturally with the [Analytics connector](./analytics.md) for member-specific data, and with the [Forms connector](./forms.md) when a form should be visible only to signed-in members.

## Next Steps

- [Connectors](./index.md) — Overview of all connectors and how to combine them
- [Analytics](./analytics.md) — Surface member-specific metrics behind your sign-in gate
- [Prompting Library](../prompting-library.md) — Ready-made SSO prompts for members areas and gated content

