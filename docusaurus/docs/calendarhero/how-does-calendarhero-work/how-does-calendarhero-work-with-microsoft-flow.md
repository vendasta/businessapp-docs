---
title: How does CalendarHero work with Microsoft Flow?
sidebar_position: 23
---

Microsoft Flow (https://flow.microsoft.com) allows CalendarHero customers to expand CalendarHero’s skills externally without “coding”. MS Flow connects into 50+ additional vendor applications to query or trigger a change.

Connecting Microsoft Flow to CalendarHero involves the configuration of both a Microsoft Flow “flow” and a CalendarHero “integration”.

Step-by-step:

1. Create a new integration on CalendarHero. Click “Add+” to begin adding a new integration. - As an individual user: [https://app.calendarhero.com/settings/integrations](https://app.calendarhero.com/settings/integrations)- As a corporate admin (for all users): [https://app.calendarhero.com/org/apps/integrations.](https://app.calendarhero.com/org/apps/integrations)

2. Name your new integration. This name will be used by users to trigger this flow. Eg. “run French translation for hello.”

3. Select the “Microsoft Flow” type.


Add Parameters.  Parameters can be questions that ask the user or can be Fixed values. Either way, each parameter’s variable will hold a value that will be sent to MS Flow. 


We now need to leave CalendarHero, go to MS Flow, and create a new flow to get the rest of the required information for our CalendarHero integration. Open up a new browser while not closing the CalendarHero tab. Navigate to [https://flow.microsoft.com/](https://flow.microsoft.com/). Create a new flow.

The trigger that starts this flow MUST be an inbound HTTP request. Search for “Request”. That trigger will not initially have an HTTP POST URL value nor a Request Body JSON Schema value. The POST URL will be generated once you save this flow, so for now, we will wait to get this value.
