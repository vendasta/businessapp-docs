---
title: Can CalendarHero log Support Tickets?
sidebar_position: 26
---

BETA FEATURE   
Easily integrate with Help Desk and ticketing service providers to list, create, or close new tickets directly from your chat interface by using the CalendarHero Automated Assistant. CalendarHero supports ServiceNow, [Freshdesk](https://calendarhero.com/freshdesk), and [Zendesk](https://calendarhero.com/zendesk).

*ServiceNow *is a cloud platform that helps streamline the enterprise by providing employees with support incident ticketing and knowledge-based solutions. CalendarHero users integrate ServiceNow with their CalendarHero automated assistant to search for information and easily access ServiceNow incidents and tickets.

  
This allows employees to submit support tickets, and stay up to date with their status, all without leaving their chat platform. IT administrators can benefit from decreased ticketing, through a comprehensive knowledge base search before ticketing, and increased efficiency from a streamlined ticketing process. 

How to Enable Ticketing

By default the Ticketing application is disabled. To use this feature first enable it!   
  
Individual Users: Go to [https://app.calendarhero.com/skills/list](https://app.calendarhero.com/skills/list) and click "Enable". If you are on a Team plan this feature might also be disabled at the organizational level. If so please contact your Team Plan admin for access.

Team Plan: ADMIN ONLY: To enable this feature for an organization, you must have administrator access to the ticketing platforms and be a corporate admin on your CalendarHero account. To enable the Ticketing skill to be used by your users.  Go to [https://app.calendarhero.com/org/apps/list](https://app.calendarhero.com/org/apps/list) and click "Enable".


Adding a Provider

To add a Ticketing provider go to [https://app.calendarhero.com/org/accounts/add#ticket](https://app.calendarhero.com/org/accounts/add#ticket) then add your preferred support platform. Currently, ServiceNow, [Freshdesk](https://calendarhero.com/freshdesk), and [Zendesk](https://calendarhero.com/zendesk) are supported.


Using Ticketing*Listing Your Open Tickets (in-chat only)*

```
list my tickets [about "printer problem"]
view tickets [about "new laptop"]

```

If you want to find your tickets about a specific topic include the "about XYZ" part.  If you don't specify a topic, then all of your tickets will be displayed.  You cannot view the tickets of other users.

 

Viewing the Status of Your Ticket:

```
show ticket INC0010082
show my ticket
tell me the status of INC0010082 ticket
what is the status of ticket INC0010082

```


Asking for the "status" of a ticket returns just that information instead of the full ticket information.


Create a New Support Ticket:

```
create ticket [about "printer problem"]  
add ticket [about "cannot connect to the VPN"]  
new incident [about "need a new laptop"]

```

You can include the topic of the ticket, or leave it out and have them supply it when asked.  Once CalendarHero submits the new ticket it will return a link to it plus its ID, which you can then use to track that ticket.

Close an Existing Ticket:

```
close ticket INC0010093  
cancel ticket INC0010092  
delete ticket INC0010092  
stop INC0010092 ticket  

```
