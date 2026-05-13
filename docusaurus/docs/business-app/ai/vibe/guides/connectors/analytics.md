---
title: Analytics
sidebar_position: 3
unlisted: true
---

# Analytics

The Analytics connector turns your app into a multi-location dashboard. It surfaces metrics like sales per location, top items, customer trends, and time-series data — without you wiring up data plumbing yourself. Vibe builds the UI; the connector provides the data.

## What it layers on

Analytics layers on the in-app metrics that Business App already aggregates for the signed-in member's businesses and locations. When the connector is enabled, Vibe routes dashboard prompts through that data layer instead of generating placeholder numbers. The numbers in the preview are live values from the platform, refreshed when the page reloads.

Because the data is pulled from authenticated APIs scoped to the signed-in member, the [Single sign-on](./single-sign-on.md) connector must be enabled for Analytics to work.

## Enabling the connector

The Analytics connector requires **Single sign-on** to be enabled. Analytics data is pulled from authenticated APIs scoped to a signed-in user — without SSO, there is no authenticated session to make those requests against.

To set up both:
1. Open **Project Settings** and scroll to **Shared connectors**.
2. Toggle **Single sign-on** on first.
3. Toggle **Analytics** on.

With both enabled, your dashboard prompts are wired to live data scoped to the signed-in member.

## When to use it

Reach for Analytics when:

- You operate multiple locations and want a single view of how each is doing.
- You want a stakeholder dashboard for a business owner or manager.
- You want a trend view (last 30 days, last quarter) of a key metric.
- You want a member-facing summary, like a loyalty status page or an account-activity panel.

## Be specific about what you want to see

The Analytics connector has access to a large range of metrics. Vague requests like "show me my data" are harder to act on than specific ones. Describe the exact metric, the time range, and how you want it grouped or visualized.

**Good:**
> Add a reviews widget to the dashboard showing the last 90 days of reviews and a count of reviews grouped by star rating.

> Build an owner dashboard showing service requests per location for the last 30 days, top three services this month, and a bar chart of weekly revenue.

> Add a metrics page with three tiles: total leads this week, average response time, and conversion rate.

> Show a multi-location comparison: one row per location, columns for monthly visits, bookings, and average ticket size.

**Less effective:**
> Show me my analytics.

When your prompt mentions metrics, dashboards, or per-location cuts, Vibe's supervisor agent recognizes the intent and routes the request through the Analytics connector. The generated dashboard is wired to live data — refresh the preview and the numbers update.

You don't need to "enable" the connector inside a prompt — turning it on once in Project Settings is enough. Describe what you want to see and Vibe handles the wiring.

## Next Steps

- [Connectors](./index.md) — Overview of all connectors and how to combine them
- [Single sign-on](./single-sign-on.md) — Gate your analytics dashboard behind a sign-in screen
- [Prompting Library](../prompting-library.md) — Ready-made dashboard prompts organized by use case

