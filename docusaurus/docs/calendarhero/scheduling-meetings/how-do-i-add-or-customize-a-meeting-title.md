---
title: How do I add or customize a meeting Title?
sidebar_position: 9
---

Meeting titles are important as they represent the subject and importance of a meeting to potential attendees. CalendarHero makes it easy for you to customize your meeting type on the fly while scheduling, or to set a default meeting title (with or without variables) for each meeting type for easy scheduling automation!

Once added the meeting title will appear on your meeting invite email (if you choose to send one), on the [meeting acceptance page](/calendarhero/how-does-calendarhero-work/scheduling-page-what-do-invitees-see-when-i-invite-them-to-a-meeting) (where your invitees select a time to meet with you), and on the calendar event once the meeting is scheduled. 


## Customize a Meeting Title

For each [Meeting Type](/calendarhero/scheduling-meetings/create-and-customize-a-meeting-type), CalendarHero users have the option to customize the title by entering a "Default Meeting Title".   
  
To start select a meeting type ( [https://app.calendarhero.com/settings/meeting](https://app.calendarhero.com/settings/meeting)) and open the *Name + Link* tab. The title you enter will automatically be used by default for any associated [Personal Scheduling link](/calendarhero/scheduling-meetings/how-to-use-a-personal-scheduling-link) or meeting scheduled via the [web scheduler](/calendarhero/scheduling-meetings/how-do-i-schedule-meetings) or chat (if you don't choose to manually update during scheduling). To insert conditional information into your title please see the section below on using variables. 


Setting a 'Default Meeting Title' is optional. If you do not customize a 'Default Meeting Title' or customize the meeting title during scheduling then the meeting title will defer to the CalendarHero default: ":&lt;invitee(s)&gt; e.g. "Demo: Jill/Mike/Sam".&lt;/invitee(s)&gt;

## Dynamic Titles: Using Variables

To automatically insert conditional information into your 'Default Meeting Title' you can add *conditional words* (custom variables). A preview of the results will appear as you type. *Conditional words* will only appear when that meeting information is added. For example, if you add invitee names, this information will only appear when the invitee names are known.  

#### The following predefined variables are supported:

`\{\{invitees\}\}`  
 

  - Use this variable to automatically insert the first name of the meeting invitee(s).

    - to insert the full name use a modifier: `\{\{ invitees | fullName \}\}` 

  - "Luke/Leia/Hans" appears in the preview but will be replaced by the actual invitee(s) name when it is known. 

  - For group meetings, up to three (3) invitee names will appear. 

  - Use a mod

`\{\{meetingOwner\}\}`  
    

  - Use this variable to automatically insert the first name of the meeting owner.

    - to insert the full name use a modifier: `\{\{ meetingOwner | fullName \}\}` 

  
Using a modifier to display full name:  
  
Want to display the full name of an invitee or meeting creator instead of the first name? Now you can by using the `fullName` modifier. To use a modifier, add a pipe symbol | next to a valid variable name and the name of the modifier.

- For example, adding `fullName` to  `\{\{ invitees | fullName \}\}` will output the full name of the invitee. e.g. Luke Skywalker, Hans Solo

`fullName` the modifier can be used for: `invitees`, `meetingOwner` variables

  
Create your own custom conditional words by using quotes inside brackets:

For example, if you wanted to add the custom word "with" to a title then add brackets with that word within quotes - like this: \{\{" with "\}\}. Add a space surrounding the custom word to signify a space. Below are a few common examples, but you can put any custom word within the quotes. (Tip: Some special symbols may not be supported, simply use the preview to test.)   
  
These custom words are displayed when there are additional variables displayed - e.g. Demo \{\{" with "\}\}\{\{invitees\}\}. The "with" will only be added when the "invitees" are known. So your title will say "Demo" on your scheduling page, and "with" "Sarah" will be added once Sarah books a meeting with you.

  "with Sarah / Max" 

- \{\{" with "\}\}

- \{\{" for "\}\}

- \{\{" : "\}\}

- \{\{" your-custom-word-here "\}\}

*EXAMPLE 1  
Type this:*

```
Sales Demo\{\{" with "\}\}\{\{invitees\}\}

```

*to display this title: *

"Sales Demo with Luke/Leia/Hans"

*This version of the title will display when the variable information is not yet available:*

"Sales Demo"


*EXAMPLE 2Type this:*

```
Interview\{\{" with "\}\}\{\{invitees\}\}\{\{" hosted by "\}\}\{\{meetingOwner\}\}

```

*to display this title: *

"Interview with Luke/Leia/Hans hosted by Jill Renwick"

*This version of the title will display when the variable information is not yet available:*

"Interview"


*EXAMPLE 3Type this:*

```
Consultation\{\{" : "\}\}\{\{invitees\}\}

```

*to display this title: *

"Consultation: Luke/Leia/Hans"

*This version of the title will display when the variable information is not yet available:*

"Consultation"


## 
  
Customize Title during Scheduling 

There are times when you may want to override the 'Default Meeting Title' with a custom title during scheduling or rescheduling. You can easily do this using the web scheduler, plugins, or via chat. 

## Via Web Scheduler/Rescheduler

To customize your title using the web scheduler/rescheduler simply enter it into the provided "Meeting Title" field. Once added this title will override the 'Default Meeting Title' and automatically appear in your meeting invite and calendar event sent to your attendees. Please note this title field does not support conditional words. 


#### Via Chat

If you are scheduling a meeting using your [chat-based meeting assistant](/calendarhero/how-to/how-to-schedule-a-meeting-via-chat) you can customize your title by mentioning your meeting title between quotes.  Once added this title will override the 'Default Meeting Title' and automatically appear in your meeting invite and calendar event sent to your attendees. 


