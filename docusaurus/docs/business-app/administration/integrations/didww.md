---
title: DIDWW
sidebar_label: DIDWW
description: Use your own DIDWW phone number for calls and two-way SMS in Business App.
sidebar_position: 4
tags: [integrations, sms, phone-calls]
keywords: [DIDWW, bring your own number, SMS, phone calls, AI receptionist]
brand: business-app
product: business-app-core
audience: smb
---

Connect your DIDWW account to use a phone number you already own for voice and two-way SMS in Business App.

## What is the DIDWW integration?

DIDWW is a phone number provider. With the DIDWW integration, you can bring a phone number from your DIDWW account into Business App and use it for calls and SMS messages.

## Why use the DIDWW integration?

- **Keep your existing number**: Customers keep calling and texting the number they already know.
- **One inbox for everything**: Calls and texts to your DIDWW number appear in Conversations alongside your other channels.
- **Let the AI receptionist answer your line**: With Conversations Premium, the AI voice receptionist can answer calls to your DIDWW number.

## What's included with the DIDWW integration?

- **Phone calls**: Incoming calls to your DIDWW number use the same call receiving settings as your Conversations number, including call forwarding, missed-call text back, and the AI voice receptionist.
- **Two-way SMS**: Send and receive text messages from your DIDWW number in Conversations, including Review Requests and Campaign.

## Before you begin

You'll need the following from your DIDWW account:

- **A phone number (DID)** that is active in your DIDWW account.
- **An API key**. In the DIDWW User Panel, go to `API` → `DIDWW API 3` → `Create new API Key`.
- **An HTTP OUT SMS trunk** with its username and password. In the DIDWW User Panel, go to `SMS` → `SMS Trunks` and select the key icon on your HTTP OUT trunk.

You also need a **Conversations Pro** or **Premium subscription**. The AI voice receptionist requires **Premium**. See [Phone Calls](../../conversations/phone-calls.mdx) for details.

:::warning Registration and compliance
Business App does not register your DIDWW number with carriers. Any registration/regulation required in your region is between you and DIDWW.
:::

## Step 1: Connect DIDWW in Business App

1. In Business App, go to `Administration` → `Integrations` → `Browse integrations`.
2. Select the **DIDWW** card and click `Connect`.
3. Enter your `SMS Trunk Username`, `SMS Trunk Password`, `API Key`, and `Phone Number`. Enter the phone number in international format, starting with `+` or `00`.
4. Click `Add Connection`.

Business App checks that the number belongs to your DIDWW account and then sets up call routing for it automatically. As soon as the connection shows as connected, calls to your DIDWW number are handled by Business App.

:::info Connection failed?
If the connection shows **Could not reach DIDWW**, delete the connection and connect again. If you see **This phone number is already connected to another account**, the number is in use elsewhere and cannot be connected twice.
:::

## What changes when you connect

- **Texts are sent from your DIDWW number.** Every text sent from Business App, including Inbox replies, review requests, and campaigns, comes from your DIDWW number instead of the number Business App assigned to you.
- **Calls to your DIDWW number come into Business App.** They follow the call receiving settings under `Administration` → `Conversation Settings` → `Phone & SMS`.
- **Your assigned Business App number still exists.** It keeps receiving calls while DIDWW is connected, and if you disconnect DIDWW, Business App switches back to it for texts.
- **Your conversation history is unchanged.** Existing conversations stay in place and new messages continue in the same threads.

## Step 2: Set up SMS in your DIDWW account

DIDWW does not allow SMS routing to be set up automatically, so these steps are done in the DIDWW User Panel. Calls work without them.

### Outbound texts

1. In the DIDWW User Panel, go to `SMS` → `SMS Trunks` and open your HTTP OUT trunk.
2. Paste the following into the `Callback URL` field, replacing `<token>` with the token provided to you by support:

   ```
   https://sms-prod.apigateway.co/didww/sms-status-webhook?token=<token>
   ```

3. Ask DIDWW support to enable delivery receipt (DLR) notifications for your account if they are not already enabled. Without them, Business App cannot show whether a text was delivered.
4. Go to `My Numbers`, open your number, and assign the HTTP OUT trunk you just configured to it.

### Incoming texts

1. In the DIDWW User Panel, go to `SMS` → `SMS Trunks` and create an HTTP IN trunk with these settings:
   - **Method**: `POST`
   - **Request URL**: `https://platform-integrations-prod.apigateway.co/webhook/data-sync?source=DIDWW`
   - **Source**: `DIDWW` (case-sensitive)
   - **Authorization**: the inbound token provided to you by support. Requests without it are rejected.
   - **Body type**: `JSON`
   - **Request body**:

     ```json
     {
       "uuid": "{SMS_UUID}",
       "src_addr": "{SMS_SRC_ADDR}",
       "dst_addr": "{SMS_DST_ADDR}",
       "text_b64": "{SMS_TEXT_BASE64_ENCODED}",
       "time": "{SMS_TIME}"
     }
     ```
2. Go to `My Numbers`, open your number, and assign the HTTP IN trunk you just configured to it.

### Test it

Send a text to your DIDWW number from a mobile phone. It appears in Conversations within a few moments. Reply from Conversations to confirm outbound texts work.

## Limitations

- **One number per account.** Each Business App account supports one DIDWW connection and one DIDWW number.
- **Text only.** Picture and media messages (MMS) cannot be sent or received through DIDWW.
- **The number cannot be changed in place.** To switch to a different DIDWW number, disconnect and connect again with the new number.
- **Credential changes require a reconnect.** If you change your DIDWW API key or SMS trunk password, disconnect and connect again with the new details.

## Disconnect DIDWW

1. Go to `Administration` → `Integrations` → `Manage`.
2. Open the **DIDWW** connection and disconnect it.

## Frequently Asked Questions

<details>
<summary>Does connecting DIDWW remove the phone number Business App assigned to me?</summary>

No. While DIDWW is connected, your DIDWW number is used instead of the number Business App assigned to you. When you disconnect DIDWW, Business App switches back to your assigned number.
</details>

<details>
<summary>Do I need to set anything up for calls?</summary>

No. Call routing is set up automatically when you connect. Only SMS requires the manual steps in your DIDWW User Panel.
</details>

<details>
<summary>Can the AI receptionist answer calls to my DIDWW number?</summary>

Yes, with Conversations Premium. Set `When a call is received...` to **Answer with AI** under `Administration` → `Conversation Settings` → `Phone & SMS`.
</details>

<details>
<summary>Why don't I see delivery status on my sent texts?</summary>

Delivery receipts must be enabled by DIDWW for your account, and the callback URL must be set on your HTTP OUT trunk. Check both, and contact DIDWW support if receipts are still missing.
</details>

<details>
<summary>Why are incoming texts not showing up in Conversations?</summary>

Check that your number's `SMS routing` points to the HTTP IN trunk, that the `Source` is exactly `DIDWW`, and that the authorization token is set. Requests without the correct token are rejected.
</details>

<details>
<summary>Can I connect more than one DIDWW number?</summary>

No. Each account supports one DIDWW connection with a single number.
</details>

<details>
<summary>Can I send pictures over SMS with DIDWW?</summary>

No. Only text messages are supported. MMS messages are rejected.
</details>

<details>
<summary>I changed my DIDWW API Key and everything stopped working?</summary>

Business App uses the credentials you entered when you connected. Disconnect DIDWW and connect again with your new credentials.
</details>

<details>
<summary>Who pays for calls and texts on my DIDWW number?</summary>

You do, through your DIDWW account. Business App does not bill you for DIDWW usage.
</details>
