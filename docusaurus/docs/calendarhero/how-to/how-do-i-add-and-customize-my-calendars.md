---
title: How do I add and customize my Calendars?
sidebar_position: 10
---

When you first create your CalendarHero account (by logging in via Google or Microsoft) CalendarHero will automatically sync with your default calendar associated with your Google or Microsoft account. This makes it easy to start scheduling meetings quickly.

If for some reason you don't yet have a calendar connected but want to use the CalendarHero meeting scheduling features, you will need to connect to a calendar so that CalendarHero can automate meeting scheduling on your behalf. 

CalendarHero also supports adding multiple calendars to easily manage your booking and availability:

*Availability: *Automatically sync your availability with multiple calendars - such as your work and personal calendar to ensure you only schedule meetings at times that work for you!

*Booking: *Set a default calendar for booking or customize your booking calendar per meeting type - to automatically book certain meetings in a preferred calendar. Learn more in the *My Booking Calendar* section below.

CalendarHero supports connecting your Google, Microsoft Office 365, Outlook, Exchange, iCloud or Salesforce calendar. 

- You can confirm what calendar you have connected from My Integrations ([https://app.calendarhero.com/settings/accounts/list](https://app.calendarhero.com/settings/accounts/list))

- You can view the items on your connected calendars on CalendarHero's built-in Calendar ([https://app.calendarhero.com/calendar](https://app.calendarhero.com/calendar))

  
NOTE: While CalendarHero supports all major calendars there are some feature restrictions due to 3rd party calendar limitations with *iCloud* and *Microsoft Exchange On-Premises*. [Learn More](/calendarhero/setting-up-calendarhero/calendar-not-supported-for-specific-settings)

Adding a new Calendar

CalendarHero allows you to easily add multiple calendars to determine your availability. This is useful for automatically syncing your availability with both your work and personal calendars - to ensure work/life balance!

In addition, CalendarHero also now supports the ability to select your * Booking Calendar *per meeting type - to customize which meetings are booked into which calendar. To do this first add your calendar as an integration.

- To add a new Calendar go to the Integrations Directory ([https://app.calendarhero.com/settings/accounts/add#calendar](https://app.calendarhero.com/settings/accounts/add#calendar))

- Click the "Add" button associated with the calendar provider you want to add (e.g. Google, Microsoft) and follow the instructions to authorize access. 


*Integration Calendar Settings: *Since each attached new calendar you add may have multiple calendars associated with it, when adding your new calendar ensure you set the correct one (using the radio buttons provided). This can also be updated at any time from "Calendar Settings."



Troubleshooting Tips

CalendarHero requires permission from your calendar provider (Office 365 or Google) to sync with your calendar. If you are seeing a restricted access warning when you try to connect your calendar, scroll to the bottom of this article for instructions.

*Microsoft Users: *If you are trying to add a new Microsoft Calendar but having issues with Microsoft auto-logging you into your original account we recommend these steps:

1. Go to: [https://login.microsoftonline.com](https://login.microsoftonline.com/) and log out of your Microsoft account 

2. Login into your desired Microsoft account (connected with the new calendar you want to add)

3. Open the Integrations Directory Calendars ([https://app.calendarhero.com/settings/accounts/add#calendar](https://app.calendarhero.com/settings/accounts/add#calendar))

4. Click "Add" next to your Microsoft Calendar provider

5. Follow the directions to authorize access for your desired Microsoft account (to add your new Calendar as per directions in the section above)

Setting a Default Calendar

  
Your default Calendar is the calendar CalendarHero will use by default to book your meetings (e.g. your scheduled meetings will appear in this calendar).

- Only one calendar can be set as "Default Calendar". However, CalendarHero now allows you to change your booking calendar for a specific meeting type using *My Booking Calendar *(more information on this is below.)

- Other (non-default) connected calendars will be used to check your availability 

- When setting your default calendar ensure you select a calendar that you have both read and write permissions for - or scheduling will fail. (You may need to contact your organization's calendar Google Cloud or Microsoft administrator for assistance - as these permissions live outside of CalendarHero)

- You can set your default calendar (the one used to book the meetings on) from your [Installed Integrations list.](https://app.calendarhero.com/settings/accounts/list#calendar) From the "..." dropdown click "Set as Default" from the drop-down menu. A badge will be added to indicate that it is your default calendar. You can also set your default from your Meeting Scheduling [General Settings page](https://app.calendarhero.com/settings/meeting/general).  


Google Users: When CalendarHero syncs with Google Calendar we will automatically set your *primary* Google calendar as the CalendarHero default calendar. (Not sure what your primary calendar in Google is? This is referenced when you click "Calendars" from your [Integrations list](https://app.calendarhero.com/settings/accounts/list#calendar)). Unfortunately, Google does not allow you to change your *primary* calendar within Google (this is a limitation of Google and NOT CalendarHero). However, you can change your default CalendarHero calendar as mentioned above.

My Booking Calendar  

  
Need to schedule different meetings in different calendars? CalendarHero users can now customize which calendar they want to book their meetings in - directly from each meeting type.

Your "default calendar" is pre-set as your *Booking Calendar* for all meeting types. To update your *Booking Calendar* simply open your meeting type (or create a new one) and under "Availability" select your preferred calendar from the "My Booking Calendar" dropdown. If your preferred calendar is not listed then you must first add the calendar as a new integration from the [Integration Directory](https://app.calendarhero.com/settings/accounts/add#calendar) (see "Adding a New Calendar" above).  

For your booking calendar ensure you select a calendar that you have both read and write permissions for - or scheduling will fail. Read and write calendar permissions are configured in your native calendar application (e.g. Google, Microsoft, or iCloud) and not in CalendarHero. 

Once saved the Booking Calendar selected will be used to book future meetings for that meeting type. Please note, that updating the Booking calendar will only impact future meetings associated with that meeting type. Previous meetings (including those pending and active) will not be impacted.


---

  
Calendar Availability - Free vs. Busy

CalendarHero requires access to your calendar so that your assistant can make a decision on when to schedule based on your availability.

- By default, existing calendar events marked as *Busy* will be considered unavailable time, and your assistant will *not *book you and will prevent others from booking you. This time slot will not be offered to your invitees. 

- By default, existing calendar events marked as *Free* (or *Tentative* or *Working elsewhere* in Microsoft calendar) will be considered available (not busy) and made available for future bookings. To allow invitees to schedule time with you during an event on a connected calendar, update that event's status from *Busy* to *Free *or update your availability settings for Outlook (see below). 

- If you were double booked by CalendarHero then please check your existing calendar event (in your own Google or Microsoft calendar) to confirm the event was set to busy (and NOT *free* or *tentative*).  If needed update your availability settings for Outlook (see below). 

[Learn about the "Book Anyhow" option](/calendarhero/scheduling-meetings/how-do-i-double-book-myself-book-anyhow) for meetings at a specific time. 

  
Google Calendar

*Google Calendar* will mark new events you create or are invited to (but haven't yet accepted) as "Busy" by default. You can manually override this setting and mark individual events as Free or Busy, to control whether or not the event affects your availability.


  
Outlook Calendar 

*Microsoft Outlook Calendar *will mark new events you create as "Busy" by default, but marks new events you are invited to (but haven't yet accepted) as "Tentative". Since Tentative is treated as "Available" in CalendarHero by default, you may choose to manually override this setting depending on your needs.

In Outlook itself you can select the status (Busy / Free / etc) for each meeting. This allows you to manually mark individual events as Free or Busy, to control whether or not the event affects your availability.

Alternatively, Microsoft 365 Outlook users can now customize their Outlook availability permissions from their Account listing page. Simply click the calendar icon next to the Microsoft calendar listed. From here you will be able to customize the status used to "consider me unavailable". 

- Any availability settings (see below) will apply to each connected Outlook calendar

- Once set all meetings (from that connected calendar) with the associated status will be blocked as unavailable

- "Busy" is always selected as default for integrated Outlook calendars but can be manually unchecked




*Setting a status in Outlook*



 

Office 365 - Admin Restrictions

CalendarHero requires permission from Office 365 to sync with your calendar. If you are seeing a restricted access warning when you currently try to add your Microsoft calendar your admin should be able to grant permissions to allow third-party applications on your account via Office365. Ask them to visit their Office365 Admin Center and [update the Integrated Apps settings](https://docs.microsoft.com/en-us/office365/admin/misc/integrated-apps?view=o365-worldwide).  
  
Once  Integrated Apps has been enabled, end users can authorize CalendarHero to sync with their calendars. 

[Login to the Office.com](http://office.com/) portal and navigate to the Admin Center

2. Under "Settings", click on "Services & add-ins" in the left nav

3. Click on Integrated Apps

4. Turn the Integrated Apps switch to ON to enable Integrated Apps

5. Click Save to apply your changes

Still having problems or have a more complicated Admin set-up?   
We've integrated successfully with lots of organizations so please reach out if you require additional help getting started. We are here to help! 

