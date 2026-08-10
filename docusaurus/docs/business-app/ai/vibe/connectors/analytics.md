---
title: Analytics
sidebar_position: 3
unlisted: false
---

# Analytics

The Analytics connector gives your Vibe app access to live Business App data. It surfaces metrics like reviews, reputation, leads, social activity, and more — without you wiring up data plumbing yourself. Vibe builds the UI; the connector provides the data.

## What it layers on

Analytics layers on the in-app metrics that Business App already aggregates for the signed-in member's businesses and locations. The metrics available are the same ones that appear across Business App's products — reviews, listings, reputation, social, and more. Think of them as all the stat cards you see throughout the platform, including everything that surfaces in the Executive Report.

When the connector is enabled, Vibe routes dashboard prompts through that data layer instead of generating placeholder numbers. You describe what you want to see in plain language; Vibe identifies the right metric and builds the query automatically. The numbers in the preview are live values from the platform, refreshed when the page reloads.

Because the data is pulled from authenticated APIs scoped to the signed-in member, the [Single sign-on](./single-sign-on.md) connector must be enabled for Analytics to work.

## Enabling the connector

The Analytics connector requires **Single sign-on** to be enabled. Analytics data is pulled from authenticated APIs scoped to a signed-in user — without SSO, there is no authenticated session to make those requests against.

To set up both:
1. From the projects list click **Configure**, or inside the project click **+** in the chat box and select **Connectors**.
2. Toggle **Single sign-on** on first.
3. Toggle **Analytics** on.

With both enabled, your dashboard prompts are wired to live data scoped to the signed-in member.

## When to use it

Reach for Analytics when:

- You want a dashboard showing live performance data from your Business App account.
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

