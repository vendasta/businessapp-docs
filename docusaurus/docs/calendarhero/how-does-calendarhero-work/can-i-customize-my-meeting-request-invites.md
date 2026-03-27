---
title: Can I customize my meeting request invites?
sidebar_position: 10
---

When you create a new meeting request, your automated assistant can send out the [meeting invite to your invitees](/calendarhero/how-does-calendarhero-work/scheduling-page-what-do-invitees-see-when-i-invite-them-to-a-meeting) on your behalf. This is the invite that asks your invitee to select/suggest a time to meet. 

Pro and Team plan users can customize their email invite by adding custom copy. Team admins can also customize the template for the entire organization for greater control.  

Note: If you share a [Private Meeting Link](/calendarhero/how-does-calendarhero-work/how-do-private-invite-links-work) or a [Personal Scheduling link](/calendarhero/scheduling-meetings/how-to-use-a-personal-scheduling-link) then no email invite is sent.

 

How to Customize Your Email Invite

The “Meeting Request Email” option is accessible to all Pro and Team plan users from the My Profile My Assistant tab ( [https://app.calendarhero.com/settings/user#Assistant](https://app.calendarhero.com/settings/user#Assistant)). 

- To activate this feature toggle on the “Customize” option. Please note that enabling the individual email customization will override any existing Admin email customization.

- Enter the custom copy that you want to appear in each invite email.

  - The Rich Text Editor includes core styling options (such as bold, and italics).

  - Default text will automatically be added to the invite template *in addition* to your custom copy. See the "Editing Notes" section below for more information on the default text and adding custom variables.

  - Custom text will NOT be translated into other languages and will appear in the language it was written. [Learn More](/calendarhero/what-can-calendarhero-do/what-languages-does-calendarhero-support)

- To Save: You must click the 'Save Settings' button at the bottom of the page. 



  
How to Customize the Invite for a Team

Only a Team plan Administrator can customize the invite for all team members. The “Customize Invite Email” option is accessible to Team Admins from the Meetings configuration page ( [https://app.calendarhero.com/org/apps/meeting](https://app.calendarhero.com/org/apps/meeting)).   
  
Please note that individual users can override Admin email customization by enabling their individual email customization.

- Select the “Enable custom invite email” option to activate this feature (disabled by default).

- Enter the custom copy that you want to appear in each invite email.

  - The Rich Text Editor includes core styling options (such as bold, and italics).

  - Default text will automatically be added to the invite template *in addition* to your custom copy. See the "Editing Notes" section below for more information on the default text and adding custom variables.

  - Custom text will NOT be translated into other languages and will appear in the language it was written.

- To Save: You must click the “Save Settings” button at the bottom of the page. 


  
Editing Notes / Custom Variables:Default Text: The following default text will automatically be added to the invite template *in addition to your custom copy:* 

- The salutation "Hi" 

- The call to action text: "Would like to meet with you. Please select a time to meet by clicking the link below."

- The button "Respond to Meeting Invite"

- All conditional details (which are dependent on the meeting type) such as meeting title, location, attendee list, and meeting selection URL will automatically be added to the email and are not editable or visible here.

Using Custom Variables: The email customization box supports the use of variables to automatically insert conditional information. Note: If you are adding styling (such as bold / italics) to a variable please style the entire variable e.g.  \{\{user.name\}\} instead of \{\{user.name\}\}

- \{\{assistant.name\}\} Use this variable to automatically insert the name of the automated assistant.

- \{\{user.name\}\} Use this variable to automatically insert the full name of the meeting creator.

- \{\{user.email\}\} Use this variable to automatically insert the email of the meeting creator.

- \{\{contact.name\}\} Use this variable to automatically insert the first name of the meeting invitee.

*Example of a customized meeting request email*


*Example of a default (non customized) meeting request email*

