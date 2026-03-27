---
title: How do I integrate my ATS (Applicant Tracking System)?
sidebar_position: 4
---

CalendarHero’s ATS (applicant tracking system) integration empowers recruiters and hiring managers by making ATS information easily accessible during the candidate interview process, even for those on the go.

Users can quickly book meetings with contacts synchronized from their ATS, and easily access key candidate info directly from their [favourite chat application or email platform.](/calendarhero/how-to/how-to-schedule-a-meeting-via-chat) Candidate details such as status, position, and a link to the resume are easily accessible; making it easier for busy recruiters to prepare for upcoming meetings. 

In addition, meetings created with CalendarHero can also now be automatically logged in Greenhouse. Scroll down for details.

CalendarHero integrates with the following ATS:

- Greenhouse (includes meeting automation)

- BreezyHR

- Workable

- Zoho Recruit ([see below for generating passwords](#zoho))

- FreshTeam

- Lever ([learn how to get a Lever API key](/calendarhero/setting-up-calendarhero/lever-ats-api-key))

Users Can:  

- Sync candidates (contacts) from their ATS

- Automatically log meetings (in Greenhouse ATS)

- View candidate information - via  

  - Meeting Briefings

  - People Insights (Who is)

ATS Integration is available to all users and currently, there is no additional cost for this initial ATS Integration. Different plans, however, are limited in the number of *Who is* and Meeting requests.

Adding an ATS Integration

Individual users (on any plan) can add BreezyHR, Workable, Lever, Greenhouse or ZohoRecruiting from [https://calendarhero.com/settings/accounts/add](https://calendarhero.com/settings/accounts/add)

Admins (on the Corporate plan) can add Greenhouse from [https://calendarhero.com/org/accounts/add](https://calendarhero.com/org/accounts/add)  
  
Users can integrate multiple ATS providers. If more than one ATS is added, the associated information will appear from the relevant ATS.


Screenshare - How to add Greenhouse.io ATS

ATS Integration Overview

Book a Meeting with a Candidate 

Once an ATS provider is integrated, CalendarHero automatically syncs key candidate information from the ATS, so that Recruiters can quickly schedule a meeting with these contacts. The ATS remains ‘the source of truth’ so any updates made in the ATS will automatically sync back into CalendarHero.

Note: It may take up to 15min. after candidate information is first added to sync with CalendarHero.

* Contact information in Greenhouse:*


* Contact info synced to theCalendarHero contact list (*[https://app.calendarhero.com/contacts/list](https://app.calendarhero.com/contacts/list)*).*


*Contact info is used to book a meeting in Slack using the CalendarHero Meeting Assistant.*


 

View Candidate Insights

  
Meeting Briefings

A link directly to the candidate's record in the ATS is now included in CalendarHero’s meeting briefings - making it easy for recruiters or hiring managers to access relevant information before they meet the candidate. A user simply clicks the link and is taken to the candidate record in the ATS system. 


People Insights (Who is)

Users can also access candidate information on demand - via “Who is” people insights. For Example: "Who is Sam Sheppard?"

Key candidate information - synced from the ATS - makes it easy for recruiters or hiring managers to quickly access relevant information as needed. Candidate details such as status, position, and links to attached documents such as the resume, and cover letter are automatically included.  The specific information returned depends on the ATS and what information is available for the candidate in the ATS.   
*  
"Who Is" returning ATS information from within Slack via the CalendarHero  Meeting Assistant:*

 


Meeting Automation (Greenhouse) 

CalendarHero now supports meeting automation in Greenhouse, allowing meetings created in CalendarHero to *automatically* be logged in Greenhouse without any action required.* View full requirements and details below.*Scheduled Meeting Log

Create the meeting using CalendarHero and invite the candidate and hiring manager (or alternatively the hiring manager can schedule the meeting). Other invitees can also be included in the meeting invite.   
When the meeting is booked the meeting details (hiring manager's name, date and location) will automatically be logged to Greenhouse under the current stage (as set in Greenhouse). If the meeting is declined then this will be reflected in Greenhouse. If the meeting is rescheduled then these details will automatically be updated in Greenhouse.


Activity Feed Updates 

To provide the recruitment team with visibility and an audit trail of the scheduling progress, key CalendarHero activity will be automatically logged in the Greenhouse activity feed for the associated candidate. Here is a list of the CalendarHero activity and how it will appear in the Greenhouse feed:

When a meeting request is sent to the candidate. This is the initial email invite.

  -  *"A CalendarHero meeting request was sent to for them to choose a timeslot for the meeting with ."*

When each email reminder is sent to the candidate. Reminders are only sent if an invitee has not yet selected a time, and multiple reminders may be sent depending on timing. 

  - *“A CalendarHero reminder was sent for them to choose a timeslot for the meeting*.*”*

When an upcoming meeting reminder is sent to the candidate on the day of the meeting. This email reminder is sent to remind them of the time and meeting details.

  - *“A CalendarHero reminder was sent to for the upcoming meeting with ”*

When the candidate selects and confirms a time from the meeting acceptance page. This activity will be logged regardless if this results in a meeting being booked. For 1:1 meetings the meeting would be booked on time selection and for group meetings, the meeting booking is dependent on other attendees' votes.

  - *“ selected a meeting timeslot via *CalendarHero *for the meeting with ”*

When the candidate declines the meeting

  - *“ declined the meeting " via *CalendarHero*”*

When the meeting with the candidate is booked

  - *" The meeting " with was booked via *CalendarHero *for "*

When the meeting with the candidate is postponed by the meeting creator

  - *"The meeting " was postponed via *CalendarHero* by ”*

When the meeting with the candidate is cancelled by the meeting creator

  - *"The meeting " was cancelled via *CalendarHero* by ”  
*


Requirements

The following criteria must be met for the scheduled meeting and the activity feed updates to be logged automatically:

- Greenhouse must first be added as an ATS provider (scroll above for instructions)

- The hiring manager and candidate must exist in Greenhouse ATS before scheduling the meeting 

- The hiring manager (as set in Greenhouse) must either be the meeting creator or an invitee

- The candidate must exist in Greenhouse ATS and be invited to the same meeting as the hiring manager

Zoho Recruit

If you are signing in to Zoho with a Google or Microsoft account, then you will need to generate a password to use when adding this integration to  *CalendarHero*.

1. Log in to Zoho Recruit.

2. Open [https://accounts.zoho.com/home#security/app_password](https://accounts.zoho.com/home#security/app_password)

3. Generate a new App-specific password

4. In the *Application Specific Passwords* pop-up, specify these details:

  - App Name (whatever you like, but you could just use "*CalendarHero*")

  - Click Generate
