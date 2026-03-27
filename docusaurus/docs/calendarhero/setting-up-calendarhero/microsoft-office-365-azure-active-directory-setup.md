---
title: Microsoft Office 365 &  Azure Active Directory Setup
sidebar_position: 21
---

You have two options to setup CalendarHero on Microsoft Azure: 

1. Use our web sign-up and then configure Azure or

2. Use MS Teams

Then, you must (3) Add Permissions for CalendarHero on Microsoft Azure

#### 1) Using Web Sign-up

Browse to [https://calendarhero.com/start](https://calendarhero.com/start) and click on the “Sign-up with Microsoft” button.


Authenticate with your Office 365 administrator account credentials and accept the scope of access. This will be for your account and not the entire tenant.


2) Using Microsoft Teams (skip if not using Teams)

Instructions to enable CalendarHero as a chat app on Azure Active Directory for Microsoft Teams.

An Office 365 administrator must complete this process to enable the app for organizational users. 

Create a Team by going to the “Teams” tab and selecting “Join or create a team.”


Name the team. For example, “Zoom.ai pilot” or “Assistant Setup & Support.”


Skip adding new members for now.


Inside Microsoft Teams, navigate to the Microsoft Teams Store. 

Search for “CalendarHero” and select the application to add to your organization or channel.


Select the channel you created. In the below example, it is the “CalendarHero pilot” channel. 


Select “General” channel and “Set up.” 


You have added CalendarHero to the channel. Next, you need to authenticate as an Azure Admin. 

Inside Teams, go to the “Teams” tab on the left-hand navigation bar. Select the “General” channel that you created from the previous step. You will see the welcome message from CalendarHero shown below. Select “Go to Private Chat."


Say “Hi” to engage the assistant. Follow the steps to authenticate with your Office 365 credentials. 


Authenticate with your Office 365 administrator account credentials and accept the scope of access.


3) Add Permissions for CalendarHero on Microsoft Azure

To confirm the authentication worked with Azure, log in to your organization’s Azure Active Directory portal and navigate to the “Enterprise Applications” section. CalendarHero will now be listed as an application.



3.1) Granting CalendarHero Access to Specific Users 


  
Select the CalendarHero app. Navigate to “Users and groups.” This is where you will have the ability to assign access permissions to users and groups.

Add all users that will be using the CalendarHero app. These users will not receive a barrier when authenticating to CalendarHero. You can add users individually, aggregate by a group, or by communities from the directory. 

  


3.2) Granting Access to all Users (in Azure)

You can grant “admin consent” and grant permission for all users in your MS tenant to have access to CalendarHero.


Click on the “Grant admin consent to CalendarHero Inc.” button. An authentication popup from Microsoft is shown and asks you to approve the permissions.


Once you click on “Accept,” your users in your tenant will be able to access CalendarHero.  


3.3) Granting Access to all Users (in Teams)

You can also grant Tenant Access inside Microsoft Teams. Return to Teams and the chat tab with your assistant. Say “Provide admin consent.”

This approves access for all users in your organization, so general users signing on will not see the previous sign-in page. 



If you have granted admin consent when your users sign up at [https://calendarhero.com/start](https://calendarhero.com/start) they will still see an authorization popup, but it will state that the organization has already approved access.
