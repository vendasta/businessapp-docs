---
title: Analytics
sidebar_position: 3
unlisted: true
---

# Analytics

The Analytics connector turns your app into a multi-location dashboard. It surfaces metrics like sales per location, top items, customer trends, and time-series data — without you wiring up data plumbing yourself. Vibe builds the UI; the connector provides the data.

## What it layers on

Analytics layers on the in-app metrics that Business App already aggregates for the signed-in member's businesses and locations. When the connector is enabled, Vibe routes dashboard prompts through that data layer instead of generating placeholder numbers. The numbers in the preview are live values from the platform, refreshed when the page reloads.

Because the data is scoped to the signed-in member, this connector is most useful inside an area gated by [Single sign-on](./single-sign-on.md) — the panel description in Project Settings calls this out: "Surface in-app analytics for signed-in users."

## Enabling the connector

Open **Project Settings**, scroll to **Shared connectors**, and toggle **Analytics** on. Pair it with **Single sign-on** so the dashboard pages have a signed-in member to scope data to.

## When to use it

Reach for Analytics when:

- You operate multiple locations and want a single view of how each is doing.
- You want a stakeholder dashboard for a business owner or manager.
- You want a trend view (last 30 days, last quarter) of a key metric.
- You want a member-facing summary, like a loyalty status page or an account-activity panel.

## Asking for an analytics dashboard

Describe the metrics and the cuts you want:

> Build an owner dashboard showing service requests per location for the last 30 days, top three services this month, and a bar chart of weekly revenue.

> Add a metrics page with three tiles: total leads this week, average response time, and conversion rate.

> Show a multi-location comparison: one row per location, columns for monthly visits, bookings, and average ticket size.

When your prompt mentions metrics, dashboards, or per-location cuts, Vibe's supervisor agent recognizes the intent and routes the request through the Analytics connector. The generated dashboard is wired to live data — refresh the preview and the numbers update.

You don't need to "enable" the connector inside a prompt — turning it on once in Project Settings is enough. Describe what you want to see and Vibe handles the wiring.

## Next Steps

- [Connectors](./index.md) — Overview of all connectors and how to combine them
- [Single sign-on](./single-sign-on.md) — Gate your analytics dashboard behind a sign-in screen
- [Prompting Library](../prompting-library.md) — Ready-made dashboard prompts organized by use case

