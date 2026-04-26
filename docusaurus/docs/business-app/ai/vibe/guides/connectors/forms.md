---
title: Forms
sidebar_position: 2
unlisted: true
---

# Forms

The Forms connector turns your generated app into something your customers can actually fill out. Use it for contact forms, lead capture, appointment requests, surveys, and newsletter sign-ups.

## What it layers on

Forms layers on Business App's Forms product. When the connector is enabled and your prompt asks for a form, Vibe renders the form UI in your generated app and wires every submission into Business App's Forms backend. Submissions show up where the rest of your form responses live in Business App, with the same review, export, and notification tooling you already use for forms created outside Vibe.

You don't need to provision a backend, configure a database, or wire up email notifications — the connector handles persistence and routing through the Forms product.

## Enabling the connector

Open **Project Settings**, scroll to **Shared connectors**, and toggle **Forms** on. Once enabled, every prompt in the project that asks for form-like behavior is wired through the connector automatically.

## When to use it

Reach for Forms when you want any of the following in your generated app:

- A contact form on a landing page.
- A lead capture popup tied to a scroll trigger or a button.
- An appointment or booking request form.
- A multi-step intake form for service requests, surveys, or onboarding.
- A newsletter sign-up.

## Building an app with a form

Describe the form you want as part of any prompt:

> Add a contact form at the bottom of the landing page. Collect name, email, and message.

> Create a lead capture popup that asks for name, email, and company size.

> Add a "Book an appointment" form to the services page with fields for name, phone, preferred service, and preferred date.

Vibe renders a form styled to match your application's theme. Submissions are captured by Business App's Forms backend automatically, so you don't have to wire up a backend yourself.

## Editing a form

Modify an existing form by describing the change:

> Change the contact form to also ask for a phone number, and make the message field optional.

> Move the form into a modal that opens when someone clicks "Get in Touch".

> Reorder the contact form so the email field comes first.

## Styling

Forms inherit your application's theme automatically — primary color, border radius, font, spacing. If you want a form to look different from the rest of the app, ask for it:

> Style the contact form with a dark background and light text. Add rounded corners and more padding.

Forms use structured style fields (background color, border, primary color, etc.) that pull from your theme, so visual consistency is the default.

## Next steps

- [Single sign-on](./single-sign-on.md) — gate forms behind a member sign-in.
- [Analytics](./analytics.md) — surface submission counts and trends in a dashboard.
- [Prompting library — Forms](../prompting-library.md#connecting-to-forms) — paste-ready prompts for contact forms, lead capture popups, and multi-step bookings.
