---
title: Zapier Integration
sidebar_position: 6
---

Zapier is an online automation tool that allows you to connect different apps and services without the need for coding. It lets you create automated workflows, called "Zaps," that perform actions in one app when something happens in another app.

Business App CRM can be connected to many 3rd party systems using Zapier. This page walks you through connecting Business App CRM to Zapier and running an automation when something happens in another app (such as QuickBooks).

## How does it work?

### Step 1: Selecting the trigger

In this step, you can select the trigger that initiates an action in your workflow. For example, a new payment in QuickBooks Online can be used as a trigger. You can choose from various other triggers available in Zapier.


### Step 2: Choosing the app

After selecting the trigger, you’ll need to choose the app that will carry out your desired action. In this example, that app is Business App. Whenever a new payment is received in QuickBooks Online, an automation runs in Business App CRM. In Zapier, Business App supports various actions, such as Run Automation.

<img src={require('./img/zapier_app.png').default} alt="Zapier app selection" width="60%" />

### Step 3: Choosing the action

In this step, you’ll set the action to be performed when the trigger event happens. For this scenario, the action is to Run Automation in the Business App CRM.

Remember, you can change the action anytime by clicking on the dropdown menu and choosing a different option. After selecting the action, click “Continue” to proceed to the next step.

<img src={require('./img/zapier_action.png').default} alt="Zapier action selection" width="60%" />

### Step 4: Signing in

In this step, you’ll connect your Business App account. Click on “Sign in” to be redirected to the login page. Here, you’ll enter your Account ID and grant the necessary permissions. After this, you’ll be automatically redirected back to Zapier.

Note: You only need to complete this process once. In the future, you’ll be automatically signed into your account when using the Business App Action.

<img src={require('./img/zapier_signin.png').default} alt="Zapier sign in" width="60%" />

<img src={require('./img/zapier_allow_access.png').default} alt="Zapier allow access" width="60%" />

### Step 5: Entering the organization ID

In this step, you will need to enter the Organization ID, which is a mandatory field. This ID is automatically populated based on the Account ID you used when signing in.

<img src={require('./img/zapier_organization_id.png').default} alt="Zapier organization ID" width="60%" />

### Step 6: Choosing the automation trigger type

In the ‘Trigger’ field, select the type of automation you want to run in Business App CRM.

<img src={require('./img/zapier_trigger_field.png').default} alt="Zapier trigger field" width="60%" />

You can search and select the trigger type from the dropdown. The options are:

* Triggered via API
* Triggered manually for an Account
* Triggered via API for an Account
* Triggered manually for an Order
* Triggered via API for an Order

<img src={require('./img/zapier_trigger.png').default} alt="Zapier trigger options" width="60%" />

Once you have chosen the trigger type, enter the Account ID or Order ID based on the trigger type you chose.

For Automations Triggered manually for an Account or Triggered via API for an Account enter the Account ID.

<img src={require('./img/zapier_manual_account.png').default} alt="Zapier manual account trigger" width="60%" />

For Automations Triggered manually for an Order or Triggered via API for an Order enter the Order ID.

<img src={require('./img/zapier_manual_order.png').default} alt="Zapier manual order trigger" width="60%" />

### Step 7: Automation ID

In the 'Automation ID' field, enter the ID of the automation you want Zapier to run when a trigger occurs in an external system, such as QuickBooks.

<img src={require('./img/zapier_automation_id.png').default} alt="Zapier automation ID field" width="60%" />

The 'Automation ID' field is a searchable dropdown that lets you find the Automation ID by searching with either the ID or the Automation name.

<img src={require('./img/zapier_automation_id_searchable.png').default} alt="Zapier automation ID searchable dropdown" width="60%" />

Note: The automation must be turned on for it to be triggered via Zapier.

<img src={require('./img/zapier_automation_on.png').default} alt="Zapier automation turned on" width="60%" />

### Step 8: Testing the step

Before publishing the Zap, be sure to test the step in Zapier. This can help identify any missing fields or incorrect data.

<img src={require('./img/zapier_testing.png').default} alt="Zapier testing step" width="60%" />

After testing, a 'Run Automation Successful' message confirms that the Zap is working as expected and ready to be published.
