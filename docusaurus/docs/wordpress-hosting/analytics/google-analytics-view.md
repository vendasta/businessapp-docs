---
title: "Google Analytics View"
sidebar_label: "Google Analytics View"
description: "View your top traffic sources and page view metrics using the Google Analytics view in WordPress Hosting."
---

The Google Analytics view in WordPress Hosting allows you to view your top traffic sources and page view metrics within the product. Some available metrics include:

* Total Visitors
* Pageviews
* Pages per Session
* Bounce Rate
* % of New Visits
* Total Visits
* Traffic Source
* Top Referral Sources

### How to add your own Google Analytics account

See [Add your own analytics account](add-your-own-analytics-account.md) for steps on how to add your Google Analytics account.

### How does the Google Analytics view work?

When you set up a site on WordPress Hosting, you have the option to either allow the platform to collect GA data for you, or you can connect your own GA account view.

1. **Default Google Analytics pulled in by the system**: If there is a prompt at the top informing you to connect a GA view, you are using the default view and not a custom view.

   ![Default Google Analytics view with connection prompt](img/google-analytics-view/default-ga-view.png)

2. **Custom Google Analytics view**: For a custom connected view, you get the option to toggle the amount of data shown at the top and also more refined traffic metrics.

   ![Custom Google Analytics view with refined metrics](img/google-analytics-view/custom-ga-view.png)

### Which should I use?

We _strongly_ encourage you to connect your own view, as it provides the most accurate data. When you use the built-in Google Analytics system, a shared Google Analytics ID is used, which does not provide data as accurate as connecting your own Google Analytics view. When you rely on the built-in offering, data may not be accurate because the GA ID is shared between sites, so Google Analytics sends data that is aggregated over multiple sites rather than exactly the domain of your site.

### How much Google Analytics data does the platform collect?

When you connect your own Google Analytics view, the platform pulls in data for the past 12 months. Provided you select a view that has 12 months of historical data, you will have access to that data, and data going forward as well.

### A user connected GA but there is no data

The most likely issue is being connected to the incorrect view. In Google Analytics, you can configure your own view with specific data collection and filtering behavior. As long as you connect a view that has data, the platform will pull the data in; in addition, it will pull in 12 months' worth of data upon connection.
