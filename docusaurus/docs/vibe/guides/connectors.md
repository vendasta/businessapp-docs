---
title: Connectors
sidebar_position: 4
unlisted: true
---

# Connectors

Connectors let your Vibe-built app do real work, not just look like it could. Instead of mocking a contact form or hardcoding a fake login button, Vibe wires the generated UI into live platform features. You ask for the behavior in plain English; the supervisor agent activates the right connectors automatically.

There are four connectors today: Forms, Image Generation, Analytics, and SSO. Each section below explains what the connector does, when an SMB owner would reach for it, the prompt patterns that activate it, and what shows up in the live preview.

## Forms

Forms turn your generated app into something your customers can actually fill out. Use Forms for contact forms, lead capture, appointment requests, surveys, and newsletter signup.

### Building an app with a form

Describe the form you want as part of any prompt:

> Add a contact form at the bottom of the landing page. Collect name, email, and message.

> Create a lead capture popup that asks for name, email, and company size.

> Add a "Book an appointment" form to the services page with fields for name, phone, preferred service, and preferred date.

Vibe uses the Forms connector to render a form styled to match your application's theme. Submissions are captured by the platform automatically, so you don't have to wire up a backend yourself.

### Editing a form

Modify an existing form by describing the change:

> Change the contact form to also ask for a phone number, and make the message field optional.

> Move the form into a modal that opens when someone clicks "Get in Touch".

> Reorder the contact form so the email field comes first.

### Styling

Forms inherit your application's theme automatically — primary color, border radius, font, spacing. If you want a form to look different from the rest of the app, ask for it:

> Style the contact form with a dark background and light text. Add rounded corners and more padding.

Forms use structured style fields (background color, border, primary color, etc.) that pull from your theme, so visual consistency is the default.

## Image Generation

Image Generation produces real images on demand — not stock placeholders. Vibe sends a description to the platform's image model, gets back a hosted image, and embeds the URL directly in your app. The result is a real asset, not a `lorem ipsum` graphic.

### Asking for an image

Mention the image in any prompt:

> Add a hero image of a modern office workspace with warm lighting.

> Generate a logo for the company — a minimalist mountain peak icon in blue.

> Add a portrait of a professional service technician at the top of the about page.

### Aspect ratios and image types

Vibe picks an aspect ratio based on where the image is going:

| Aspect ratio | Best for |
|---|---|
| `1:1` | Logos, avatars, square cards |
| `16:9` | Hero banners, landscape feature images |
| `9:16` | Mobile-first heroes, vertical sections |
| `4:3` | Standard photography |
| `3:4` | Portrait photography, profile shots |

You can also specify the image's role:

- **Logo** — small, simple, recognizable.
- **Primary** — hero or feature images that anchor a page.
- **General** — anything else (illustrations, supporting imagery).

If Vibe picks the wrong ratio, ask it to regenerate:

> Regenerate the hero image as 16:9 instead of square.

### Tips for better images

- **Be descriptive.** Style, mood, colors, and composition all influence the output. "A coffee shop interior" is weaker than "A small independent coffee shop interior, warm afternoon light through large windows, exposed brick, dark wood counters, espresso machine in the foreground."
- **Specify where it's going.** Telling Vibe the placement (hero banner, card thumbnail, profile photo) helps it pick the right aspect ratio without you having to ask explicitly.
- **Iterate.** If the first image isn't right, ask for a regeneration with adjusted descriptions.

## Analytics

The Analytics connector turns your app into a multi-location dashboard. It surfaces metrics like sales per location, top items, customer trends, and time-series data — without you wiring up data plumbing yourself. Vibe builds the UI; the connector provides the data.

### When to use Analytics

Reach for Analytics when:

- You operate multiple locations and want a single view of how each is doing.
- You want a stakeholder dashboard for a business owner or manager.
- You want a trend view (last 30 days, last quarter) of a key metric.

### Asking for an analytics dashboard

Describe the metrics and the cuts you want:

> Build an owner dashboard showing service requests per location for the last 30 days, top three services this month, and a bar chart of weekly revenue.

> Add a metrics page with three tiles: total leads this week, average response time, and conversion rate.

> Show a multi-location comparison: one row per location, columns for monthly visits, bookings, and average ticket size.

### What activates the connector

When your prompt mentions metrics, dashboards, or "per location" cuts, Vibe's supervisor agent recognizes the intent and routes the request through the analytics connector. The generated dashboard is wired to live data — refresh the preview and the numbers update.

You don't need to "enable" the connector explicitly. Describe what you want to see and Vibe handles the wiring.

## SSO {#sso-member-sign-in}

Member sign-in via OAuth/OIDC.

SSO lets your customers sign into your generated app using their existing account. The connector wires the login UI into the OAuth/OIDC flow, so you don't have to manage passwords, password resets, or session storage yourself.

### When to use SSO

Reach for SSO when:

- Part of your app should only be visible to logged-in customers (a member dashboard, an order history page, a loyalty profile).
- You want sign-in to feel familiar — the same account your customer already uses with you.
- You want a profile page that shows the signed-in customer's information without you having to build a settings backend.

### Asking for sign-in

Describe the gated experience:

> Add a "Members" area with a sign-in screen. After signing in, members see their loyalty points, recent orders, and a profile section with their name and email.

> Gate the booking page behind a sign-in screen. Only signed-in customers can book.

> Add a profile page that shows the signed-in customer's name, email, phone, and a list of their last five service appointments.

### Provisioning the connection

Before a generated app can use SSO, your trusted-tester program contact provisions an OAuth client for your project. Once that's in place, Vibe's prompts include the OIDC discovery endpoint and the connector flows through to a working sign-in experience. If you ask for SSO before the OAuth client is provisioned, Vibe will scaffold the UI but the sign-in itself won't complete — contact your program coordinator to finish the connection.

## Combining connectors

Most realistic apps use more than one connector. You don't need to declare them separately — describe the full app and Vibe activates whatever is needed:

> Build a customer portal for a multi-location HVAC business. Marketing landing page, contact form on the landing, members area with sign-in showing service history, and an owner dashboard with bookings per location and weekly revenue. Use a clean professional theme.

That single prompt activates Forms (contact), SSO (members area), and Analytics (owner dashboard). The supervisor agent identifies which connector each part of the request needs and wires the UI accordingly.

## Next steps

- [Prompting library](./prompting-library.md) — concrete prompts you can paste, organized by connector and intent.
- [Prompting guide](./prompting.md) — the principles behind effective prompts.
- [Visual editor and themes](./visual-editor.md) — style your connected components after generation.
- [Error handling and troubleshooting](./troubleshooting.md) — what to do if a connector doesn't activate as expected.
