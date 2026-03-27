---
title: Google Analytics Tracking
sidebar_position: 13
---

Pro and Team plan users can add Google Analytics tracking to their invitee scheduling flow to track events and measure conversions. This is a great feature for measuring the success of your campaign funnels by setting up goals in Google Analytics to track conversions. GA Tracking can be added to both meetings and [group classes](/calendarhero/how-to/how-do-i-schedule-a-group-class)! 

  
Add Google Analytics Tracking

To start tracking you will simply need to locate your Google Analytics tracking ID and then add that tracking ID to each of the [meeting types](/calendarhero/scheduling-meetings/create-and-customize-a-meeting-type) you want to track. If you don't yet have a *Google Analytics (Universal Analytics) *or a *Google Analytics 4* account you will first need to [set that up](https://support.google.com/analytics/answer/10269537?hl=en). 

Note: Currently CalendarHero now supports both *Google Analytics 4 (Measurement ID) andUniversal Analytics* tracking. 

Find your GA Tracking ID (Universal Analytics)

1. Login to your Google Analytics (Universal Analytics) [Admin](https://support.google.com/analytics/answer/6132368) settings.

2. Locate your GA Tracking ID by choosing your preferred account and the specific property you would like to track. 

3. In Universal Analytics, the tracking ID is located on the “Property Settings” page. Go to *Admin* and from the Property column, click on *Property Settings*.

  1. You can also get the ID from the “Tracking Code” page located in the *AdminProperty Column Tracking InfoTracking Code*.

  2. The *Tracking ID* is a string like "UA-000000-2". It is made up of 3 elements: Analytics version, account ID, and property index number. [Learn More](https://support.google.com/analytics/answer/7372977?hl=en)

4. Highlight the ID and copy it to your clipboard.



Add Tracking ID to a Meeting Type

1. Once you have copied your Tracking ID go to your CalendarHero Meeting Types ([https://app.calendarhero.com/settings/meeting](https://app.calendarhero.com/settings/meeting)) and open the meeting type you want to track. 

2. Under the "Invitee Experience" tab paste your copied *GA Tracking ID* into the "Google Analytics Tracking" textbox.

3. Save your meeting types to begin tracking all associated events.

4. Repeat steps 1-3 for any other meeting types you want to track.


Create GA Goals  
  
Use Google Analytics goals to measure how often users complete specific actions. Once a goal is created within Google Analytics, any meetings scheduled through CalendarHero will be tracked as a conversion. 

1. Login to your Google Analytics Admin settings (Universal Analytics)

2. From the *Goals* view add a new goal. 

3. Specify the type as an *event. *Customize your goal by tracking your preferred CalendarHero events.

Learn More:

- [All about Google Analytic Goals](https://support.google.com/analytics/answer/1012040?hl=en#zippy=%2Cin-this-article)

- [Collect Campaign Data with Custom URLs](https://support.google.com/analytics/answer/1033863?hl=en#zippy=%2Cin-this-article)

####   
Events tracked by CalendarHero 

The following three (3) events are tracked by CalendarHero for both Meetings and Group Classes. These events are triggered for each invitee (for both 1:1 and Group meetings). The event label will be customized with your meeting type name.

Invitee lands on the (Meeting Acceptance) scheduling page

- Event Category: *CalendarHero *

- Event Action: *'Land on scheduling page'*

- Event Label:

*Example screenshot for reference:* 


Invitee selects a date and time

  - Event Category: *CalendarHero *

  - Event Action: 'Selected a time for meeting'

  - Event Label:

  - *Example screenshot for reference:*


Invitee confirms their submitted time for meeting

- Event Category: *CalendarHero *

- Event Action: *'Time confirmed for meeting'*

- Event Label:

*Example screenshots for reference:*



*Events not yet tracked, but coming soon:  *Invitee lands on a [directory page.](/calendarhero/setting-up-calendarhero/how-do-i-create-a-meeting-directory)
