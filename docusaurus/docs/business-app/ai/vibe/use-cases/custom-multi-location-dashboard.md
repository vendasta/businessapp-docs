---
title: "Build a Custom Multi-Location Dashboard"
sidebar_label: "Custom Multi-Location Dashboard"
sidebar_position: 3
draft: true
description: "Use Vibe to build a shareable, embeddable multi-location performance dashboard with custom KPIs — no Business App account required for viewers."
---

# Build a Custom Multi-Location Dashboard

Business App includes a built-in multi-location dashboard for tracking performance across locations. Building a custom version with Vibe makes sense when you need something beyond that: a shareable link you can send to anyone — no Business App account required — a layout organized around the specific metrics that matter to your business, or a dashboard that can be embedded directly on your website or in an internal tool.

## When to build a custom dashboard

- **Sharing outside Business App** — Publish the dashboard as a standalone URL and share it with stakeholders, franchisees, or leadership who don't have access to Business App
- **Custom KPIs and layout** — Surface only the metrics your business cares about, arranged in the order and format that works for how you review performance
- **Embedding externally** — Embed the dashboard on your own website, an internal operations page, or a client-facing reporting portal

## The prompts

**Starting prompt:**

> Build a multi-location business dashboard. Include summary metric cards for phone calls, website clicks, and Reputation AI rating at the top. Add a monthly revenue bar chart that aggregates revenue across all locations, and a Reputation AI insights panel on the right that shows the top phrases mentioned in customer reviews with their sentiment scores. Connect the data to my business.

**To add the Google Interactions trend chart:**

> Add a Google Interactions Trend chart below the revenue section. It should track phone calls and website clicks over time across all locations. Show phone calls in blue and website clicks in pink.

**To add the date range selector:**

> Add a date range picker in the top right of the dashboard so I can filter all the charts and metrics by a custom date range.

## What Vibe built

From those prompts, Vibe produced a fully connected dashboard with:

- **Three summary metric cards** — Phone Calls (Leads), Website Clicks, and Reputation AI Rating, each pulling live data from the connected business profile
- **Monthly Revenue chart** — A bar chart showing aggregated revenue across all locations by month, with dollar amounts on the Y-axis
- **Reputation AI Insights panel** — A ranked list of the top phrases mentioned in customer reviews, each with a mention count and a sentiment score
- **Google Interactions Trend chart** — A dual-series bar chart tracking phone calls and website clicks over time across all locations
- **Date range selector** — A filter in the top right that updates all charts and metrics simultaneously when adjusted

![Multi-location dashboard overview showing three metric cards, monthly revenue bar chart, and Reputation AI insights panel](./img/ML-vibe.png)

![Google Interactions Trend chart showing phone calls in blue and website clicks in pink over time](./img/ML-vibe2.png)

## What made this work

**"Connect the data to my business" activates the right connectors.** That phrase triggers Vibe to pull from the relevant data sources — Reputation AI, Google Business Profile, and revenue data — rather than populating the dashboard with placeholder values. Without it, the charts may render with sample data instead of live figures.

**Breaking the build into separate prompts produced cleaner results.** The initial prompt established the layout and core data cards. Adding the trend chart and date picker in follow-up prompts kept each scope narrow, giving Vibe a clear target rather than a long list of requirements to interpret all at once.

**Specifying colors for multi-series charts prevents confusion.** Without explicit color instructions, Vibe assigns defaults that can make two series hard to distinguish at a glance. Calling out "phone calls in blue and website clicks in pink" ensures the series stay visually distinct from the first generation.

## Tips for this use case

**Set a default date range in the prompt.** If you want the dashboard to open on a specific window — last 6 months, current quarter, year-to-date — say so upfront rather than relying on the date picker alone:

> Set the default date range to the last 6 months and include a date range picker so it can be adjusted.

**Add a location-level breakdown as a follow-up.** The initial output aggregates data across all locations. Once the summary view is working, you can drill down:

> Add a table below the charts that breaks down phone calls and website clicks by individual location, sortable by each column.

**Refine the Reputation AI insights with a mention threshold.** The default output includes every phrase above a minimum count. If the list gets long, trim it:

> Update the Reputation AI insights panel to only show phrases with 50 or more mentions.

**Test the date range filter before publishing.** Click through several date ranges to confirm that all charts and metrics update together. If any element stays static when the date range changes, use a follow-up prompt to reconnect it:

> The monthly revenue chart isn't updating when I change the date range. Fix it so the chart responds to the date range filter.
