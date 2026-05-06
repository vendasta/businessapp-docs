---
title: "Roofing Quote Estimator"
sidebar_label: "Roofing Quote Estimator"
sidebar_position: 1
draft: true
description: "Build a roofing quote estimator with lead capture using Vibe."
---

# Roofing Quote Estimator

A service estimator is one of the strongest demonstrations of what Vibe can do for a trade or home services client. This example walks through building a quote calculator for a roofing company, complete with a lead capture form.

## The Prompt

> Generate a service estimator for my roofing company that calculates quotes based on roof size and materials with a lead capture form connected to my CRM.

## What Vibe Built

From that single prompt, Vibe produced:

- A form that collects home size, number of stories, and roof pitch
- Material selection (asphalt, architectural, premium metal, etc.)
- An option to include or exclude tear-off of existing shingles
- An estimated quote based on approximate material costs
- A lead capture form to collect customer contact information

## Tips for This Use Case

**Use the client's actual pricing.** The default output uses general pricing approximations. For more accurate results, point Vibe at a URL from the client's website or a supplier's site that lists their real rates:

> Here is our materials pricing page: [URL]. Use these prices in the estimator.

**Use "contact intake" for the lead form.** To ensure the lead capture form connects to the CRM, use "contact intake" in your prompt rather than "contact form." See the [Use Cases overview](./index.md) for more on this.

**Embed it on their website.** Once the estimator is built, it can be embedded on the client's existing website or deployed with a custom domain.

---

*This article is based on internal testing and is being reviewed for accuracy before publication.*
