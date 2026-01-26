---
title: Set up Conversations for Emails 
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can use Conversations to send and receive emails with leads and customers from a shared email address. As long as you have the email address for a contact, anyone on the team can send an email to that customer from your centralized Conversations and keep message history in one shared place.

## AI Auto-Response for Emails

The AI Chat Receptionist can automatically respond to inbound emails, providing instant 24/7 customer support via email just like other communication channels. When enabled, the AI will:

- Automatically reply to customer emails within minutes
- Answer questions using your business profile and knowledge base
- Capture lead information and book appointments
- Create a conversation thread in Conversations for your team to monitor

**To enable AI auto-response for email:**
1. Go to AI > AI Workforce in your dashboard
2. Configure your AI Chat Receptionist
3. In the Communication Channels section, enable the **Email** channel
4. Your AI will now automatically respond to emails sent to your business

Learn more about setting up and customizing your [AI Chat Receptionist](/business-app/ai/ai-workforce/ai-chat-receptionist/).

## Sender, Reply, and Forwarding settings for email in Conversations

![](./img/email_setup.png)

### Conversations Email Sender Address

Conversations uses a shared email address to keep all customer conversations in one place. When you send a message, it appears to come from your business's assigned email (like `reply+xxxxx@businessapp.io`), but the sender's name and signature are visible to the customer. This helps your team collaborate without confusion over who sent what.

### Conversations Email Reply-to Routing

The reply-to feature ensures that responses from customers are automatically directed back to the shared Conversations thread. When a customer replies, their response lands in the same conversation where any team member can continue the discussion.

### Conversations Email Forwarding Settings

By setting up email forwarding, you can receive incoming messages from your existing business email (e.g., `team@yourcompany.com`) directly into Conversations. Use the tabs below for detailed setup instructions per provider.

You can use the instructions below to get you started on forwarding emails from your email provider. 

<Tabs>
  <TabItem value="gmail" label="Gmail">
#### Gmail Forwarding to Conversations

1. Go to `Gmail > Settings > Forwarding > POP/IMAP`.
2. Add your Conversations forwarding address and confirm the request.
3. Enable forwarding and save changes. Optionally, set filters to forward selected emails only.
  </TabItem>
  <TabItem value="outlook" label="Outlook">
#### Outlook Forwarding to Conversations

1. Go to `Outlook > Settings > Mail > Forwarding`.
2. Enable forwarding and enter your Conversations forwarding address.
3. Save your changes.
  </TabItem>
</Tabs>

## Sending emails using Conversations

- Click `New Message` in Conversations.
- Enter the recipient’s email address.
- Write your message, then select `Email` in the **Send via** dropdown menu.  
:::info
Your choices available in this menu depend on what contact information you have, and which channels you have connected to Conversations.
:::
- Click `Send` to send your message.
Let'
## Getting Replies in Conversations

- Customer replies automatically route back to your shared Conversations.
- The "reply-to" is set to your `reply+xxxxx@businessapp.io`, so all responses land in the same thread.


## FAQs About Email Messaging in Conversations

<details>
<summary><strong>Can I use a branded email address for sending and replying to emails to clients?</strong></summary>

Not currently. All emails are sent from an assigned unique email address, that has the following format `reply+xxxxxxxxxxx@businessapp.io`.
</details>

<details>
<summary><strong>Can each user get their own email address?</strong></summary>

Not currently. The business uses one shared email address and Conversations. But when a message is sent, the name of the user that sent the email is visible as the Sender details and within the Signature.
</details>

<details>
<summary><strong>I see an area in my settings called "email configuration" – is this where I manage my email for Conversations?</strong></summary>

No, not currently. The email configuration area in settings is for managing email that's sent from Campaigns Pro and Reputation AI Premium.
</details>

<details>
<summary><strong>Is there a limit on how many emails I can send?</strong></summary>

Yes, there is a daily email quota. If you're unable to send emails, you may have reached your daily limit. The quota resets every 24 hours.

</details>
