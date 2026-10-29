---
title: "Vibe use cases"
sidebar_label: "Overview"
sidebar_position: 0
draft: false
description: "Practical guidance for building real tools for your business with Vibe: what to build, how to approach it, and what to expect."
brand: business-app
product: vibe
audience: smb
---

This section covers practical, real-world builds you can create using Vibe. Each use case includes the prompt used, what Vibe produced, and tips for refining the result.

This page covers the approach and patterns that apply across all of them.

## What you can build

Vibe lets you build custom tools using plain language prompts, with no coding required. Examples include:

- **Landing pages**: Public-facing pages for your business or a specific campaign, with generated images and lead capture
- **Custom dashboards**: Gated, branded views that pull live data from Business App and display it the way your team actually reviews it
- **Lead capture tools**: Forms that route submissions directly into Business App
- **Service estimators and quote calculators**: Let customers input details and get an instant price estimate
- **Scheduling tools**: Manage bookings, team schedules, or appointment flows

## How to approach a build

### Think in versions

The most common mistake is trying to build something complete in one prompt. The right approach is to think in versions: the first prompt produces a working starting point, and each follow-up refines it.

- **The first version is rarely perfect.** That's normal and expected.
- **Each prompt should focus on one or two things.** Trying to add many features at once leads to worse results.
- **Testing is part of building.** After each version, click through what was built and identify what to adjust next.

### Connect data one section at a time

When a build pulls in live data from multiple sources, connect them one at a time rather than all at once. Asking Vibe to connect everything in a single prompt often produces incomplete results. Prompting for each data source separately (Reputation AI first, then leads and bookings, then revenue) gives Vibe a clear target and makes it easier to spot what isn't working yet.

If a section shows empty or placeholder data, prompt specifically for that section:

```text
The leads section isn't showing data. Connect it to the multi-location group and pull the real figures.
```

### Save visual polish for last

Ask for design changes (colors, layout, visual styling) after the structure and data connections are working. Applying a visual redesign to a work-in-progress can overwrite structure Vibe is still building. Once the build is stable, a single follow-up prompt can restyle the whole thing.

## Prompting tips

### Use "my business information" to pull from Business Profile

The phrase **use my business information** tells Vibe to pull details (address, hours, contact info, and services) directly from the Business Profile. This happens automatically with no additional setup. It's enough to include the phrase in the prompt.

```text
Build a landing page for a seasonal promotion. Use my business information for the details.
```

### Enable connectors before you prompt

Some builds require a connector to be enabled before running the prompt. In your project, select `Settings` → `Connectors` → `Add connectors` (see [project settings](../guides/project-settings.md)), then select `Enable` next to the connector you need. If it isn't enabled first, the UI appears but the functionality doesn't work.

| What you're building | Connector to enable first |
|---|---|
| Lead capture form routed to Business App | `Forms` connector |
| Gated dashboard for Business App users | `Single sign-on` connector |

### Use specific IDs for real data

When connecting a build to live Business App data, include the specific group ID or account ID in your prompt. Without it, Vibe uses placeholder values. With it, the live metrics appear.

```text
Please add in the Reputation AI Average Review rating for multi-location group [your-group-ID]
```

### Be patient during generation

Building a complex application takes time. Vibe works through the build step by step: writing files, applying design, and validating the result. A detailed project can take a few minutes. If the progress indicator looks frozen, give it more time before assuming something went wrong.
