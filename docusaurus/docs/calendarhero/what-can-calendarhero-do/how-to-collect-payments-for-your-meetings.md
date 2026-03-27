---
title: How to Collect Payments for your meetings
sidebar_position: 6
---

Easily collect credit card payments using [Stripe](https://stripe.com) when an invitee schedules time with you using CalendarHero. Payment is fully secure and powered by Stripe. 

The *Collect Payments* feature is currently available to all CalendarHero Pro and Team plan members. [View Plans](https://calendarhero.com/pricing)

> PLEASE NOTE: Collect Payments is currently only available for 1:1 meetings accessed via your [personal scheduling link](/calendarhero/scheduling-meetings/how-to-use-a-personal-scheduling-link) or [embed code](/calendarhero/what-can-calendarhero-do/how-do-i-embed-calendarhero-on-my-website) AND for [Group Classes](/calendarhero/how-to/how-do-i-schedule-a-group-class) (where multiple attendees can self book the same class or event). If you are looking for payment collection for your group meetings [drop us a line](https://calendarhero.com/get-support) at and let us know your needs!

Highlights:

- Allow customers to securely submit payments when self-scheduling a time to meet with you using your [personal scheduling link](/calendarhero/scheduling-meetings/how-to-use-a-personal-scheduling-link), [self-scheduling embed](/calendarhero/what-can-calendarhero-do/how-do-i-embed-calendarhero-on-my-website), or group class.

- Specify any payment amount: Payment is automatically collected and routed to your connected Stripe account. 

- Have different offerings? Simply create multiple meeting types and customize the amount for each.

- Currency Friendly: Collect payments in the currency of your choice - as specified in Stripe.

- Payment Terms: Include custom payment terms that appear during the scheduling process. 

- Payment receipts are automatically sent to your invitee from Stripe.

- Activate *Automatic Refunds* for easy refunds when a meeting is canceled by the meeting creator.

- The meeting title will be used as the charge description (statement descriptor).


Add Stripe as a Payment Provider

Do you have an active Stripe account? If so proceed with the steps below. If you don't yet have a Stripe account [please set up a Stripe account first](https://stripe.com/). Once you are done proceed to the steps below.

##### Add Stripe as an individual integration: 

In order to collect payments for CalendarHero meetings that you create first add Stripe as a payment provider from your individual *Integrations Directory *([https://app.calendarhero.com/settings/accounts/add#payment](https://app.calendarhero.com/settings/accounts/add#payment)).

Simply click "Add" and follow the directions to log in to the Stripe account you would like to integrate. This account will be used to securely process credit card payments from your invitees. 

##### Add Stripe as a Team Plan Admin: 

If you are the administrator of a Team plan you can also choose to add Stripe for your entire team organization from the *Admin Integrations Directory *([https://app.calendarhero.com/org/accounts/add#payment](https://app.calendarhero.com/org/accounts/add#payment)).

- If Stripe is integrated at the organization level then ALL members of your Team plan will be able to enable/disable Stripe payment collection from their meeting types. 

- Please note that if a Team plan member also has added an individual Stripe integration then payment collection will default to this individual Stripe account, 

 


  
Add Payment to a Meeting Type

Once you have added Stripe as your payment provider you're ready to enable payment collection. *Collect Payments *is set up on the meeting type, allowing you to easily enable payment for specific meeting types only.The Collect Payment feature is currently available to all Pro and Team plan members. If you are a Basic user please first [upgrade to Pro or Team plan](https://calendarhero.com/pricing). 

> 
*Please Note: Collect Payments is currently only available for 1:1 meetings accessed via your ersonal scheduling linkp*or embed code.   *Looking for payment collection for your group meetings?  *Drop us a line at and let us know your needs!

Once enabled the Collect Payments UI will appear for all 1:1 self-scheduled meetings associated with this meeting type. This includes meetings set up via Personal Scheduling links and on-demand meetings (created via web or chat).

Off/On Enable payment collection from the "Collect Payments" section of any Meeting Type by selecting "On - Collect payments with Stripe." If at any time you want to stop collecting payments for this meeting type simply toggle the setting to "Off."

Amount to Collect: Enter the amount you want to collect for the meeting and select the currency of your choice. Your currency options will automatically be populated based on your Stripe account settings (and are restricted based on Stripe requirements).

- CalendarHero pulls currencies from the products you specify in Stripe. For example, if you have a product with a USD currency, then USD will appear in the list.

Automatic Refunds: Select this option if you would like to automatically initiate a refund when the meeting is canceled by the meeting creator. Refunds are ONLY automatically issued when the meeting creator cancels the meeting by clicking "Cancel" on the related [Task card](/calendarhero/scheduling-meetings/how-to-manage-your-meetings-from-tasks). When a refund is issued CalendarHero will let the meeting creator know via a notification on their preferred channel. Refund information will also appear on the Task card for the meeting. [Learn More](/calendarhero/additional-resources/how-do-automatic-refunds-work)

Payment Terms: Enter optional payment term text that will display for your customers/invitees. The rich text editors make it easy to style and add links to external information. 


Important:

*Collect Payments* will only appear for 1:1 meetings accessed via your personal scheduling link or self-scheduling embed.

Invitee Payment Experience

Once you enable payment collection on your meeting type, simply share the associated scheduling link with your invitees/customers OR add the associated scheduling embed to your website. 

The amount, currency and any payment terms you added (optional) will be clearly indicated to your customers; which makes scheduling a paid meeting quick and easy!

After selecting a time that works for them, invitees will be prompted to provide payment using a credit card. The payment is fully secure and powered by Stripe. Payment will be required before anyone can book a meeting with you. As always - you will be notified once the meeting is scheduled and the details will be automatically added to your synced calendar and your invitees!  



Payment History

Once a meeting is scheduled the payment will be referenced in the associated Task card. If an automatic refund is issued then this information will appear.     
  
Full transaction details can be seen by clicking on the link and going to your linked Stripe account. As Stripe handles all payment transfers and transactions your Stripe account is always the source of truth for your payments. 

In Stripe the meeting title will be used as the charge description (statement descriptor.)

