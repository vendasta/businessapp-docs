---
title: Set up Conversations for phone calls 
sidebar_position: 2.4
---

import { SettingsIcon } from '@site/src/components/Icons';

You can use Conversations to handle incoming phone calls with your assigned Conversations phone number. The features available depend on your Conversations edition:
- **Pro:** Assigns your business a dedicated phone number for texts and enables you to handle phone calls to this number with missed-call text back and follow-up SMS automation.
- **Premium:** Includes everything in Pro, plus the AI Voice Receptionist, which can answer calls 24/7 and capture leads automatically.

:::info
Only businesses located in the United States and Canada are able to claim a phone-number with Conversations and make use of the phone call features as a result.
:::

> **Note:** For setup and advanced AI options (Premium only), see [AI Voice Receptionist Guide](../ai/ai-workforce/ai-voice-receptionist.md).
---

## Phone call features included with Conversations AI

The table below shows which phone call features are included in each Conversations edition. 

| Feature                                              | Pro   | Premium |
|------------------------------------------------------|:-----:|:-------:|
| Dedicated Conversations phone number   | ✔️    | ✔️      |
| Call forwarding from main business line              | ✔️    | ✔️      |
| Missed-call text back & SMS automation               | ✔️    | ✔️      |
| Call recordings, transcripts, summaries in CRM       |     | ✔️      |
| AI Voice Receptionist answers calls 24/7             |       | ✔️      |


## Set Up Your Conversations Phone Number 

Your Conversations phone number is automatically assigned to you when you activate the Pro or Premium editions of Conversations AI. You can find this phone number by navigating to <SettingsIcon /> `Administration > Conversation Settings > Phone & SMS > Configure`. The options available to you depend on your edition of Conversations AI.

### Call Receiving Settings in Conversations AI

When someone calls your Conversations phone number, you can choose what happens using the **When a call is received...** dropdown in your settings.

#### End call
The call is automatically disconnected.

- ***(Optional)* Play a voice message before ending the call:**  
  Enable this to play a short, custom text-to-speech message (e.g., “Sorry we missed you!”) before the call disconnects.

#### Forward the call
Calls to your Conversations number are forwarded to another phone number you specify (such as your main office, personal cell, or a team member).

- **Enter the number in the `Forward to` field.**
- **Set up SMS follow-up for forwarded calls:**
  - **Immediately:** An SMS is sent as soon as the call is forwarded.
  - **If the forwarded call is missed:** An SMS is only sent if the forwarded call is not answered (e.g., disconnects or receives a busy tone). Calls answered by voicemail are considered "answered" and won’t trigger a text back.

#### Answer with AI (Premium only)
The AI Voice Receptionist will answer, greet, and engage with the caller as configured in your AI settings. 

> **Note:** For setup and advanced AI options see [AI Voice Receptionist Guide](../ai/ai-workforce/ai-voice-receptionist.md).

#### Additional SMS options
For all three scenarios, you can enable **Follow up with an SMS message**:
- Toggle on this setting to automatically send a custom text after a call ends or is missed.
- Customize your SMS message in the “Message to send” 
   - Example: `Thanks for calling [Your Business Name]. Feel free to message us back if you have any further questions.`

## Additional Step: Enable the AI Voice Receptionist (Premium Only)

1. Go to **AI Workforce > AI Voice Receptionist > Configure**
2. Check **"Phone call: Answer with Voice AI"** and save
3. Customize your AI greeting, voice, and business knowledge as needed
4. Test by calling your Conversations number

For advanced AI configuration (scripts, voice family, multi-language), see [AI Voice Receptionist Guide](../ai/ai-workforce/ai-voice-receptionist.md).

### What Happens When AI Voice Receptionist Answers Calls (Premium Only)
Once your AI Voice Receptionist is set up to receive calls from your Conversations phone number:

- All phone conversations appear in your Conversations dashboard 
- Call recordings and transcripts are automatically generated 
- Lead information is saved directly to your CRM 
- Team members can review conversations and 
- Follow-up actions can be triggered through Automations

### Call Forwarding Setup in Conversations (Optional)

If you want your main business number to be answered by Conversations (or by the AI Voice Receptionist), you can set up call forwarding from your existing number to your Conversations phone number.

Most mobile carriers (AT&T, T-Mobile, Rogers, Bell, Telus, and many others) support simple star-codes to enable forwarding. In-platform, you’ll find a helpful guide in your Conversations phone settings that shows:
- Activation and cancel codes for your provider
- Step-by-step setup instructions, including confirmation steps
- How to forward calls if you don’t answer, if your phone is off or has no signal, or if you’re on another call

**How to access call forwarding instructions:**
1. Go to <SettingsIcon />`Settings > Conversations Settings > Phone & SMS > Configure` in Business App.
2. Check the **call forwarding help section** for up-to-date activation and cancel codes and step-by-step guidance.
3. Test your setup by calling your business number from another phone.
4. To turn off forwarding later, use the cancel code in the help section or dial `#004#` to reset your phone’s settings.

> **Tip:** The call forwarding section in your Conversations settings always shows the latest carrier-specific instructions and codes, so check there for the most accurate info.

### Troubleshooting Phone Call Setup Issues

#### Don't See Phone Call Options?

- Verify you have the appropriate Conversations subscription (Pro or Premium)
- Check that your business address is in the US or Canada
- Ensure AI Workforce features are enabled on your account (Premium only)

#### AI Not Answering Calls?

- Confirm the AI Voice Receptionist is properly configured and active (Premium only)
- Check that `Phone call: Answer with Voice AI` is enabled in AI Workforce settings
- Verify your phone number assignment in Conversations Settings

---

## FAQs About Phone Calls in Conversations

<details>
<summary><strong>What regions support phone call functionality?</strong></summary>

Phone call integration is currently available for businesses located in the United States and Canada only. This feature requires a Conversations Pro or Premium subscription.
</details>

<details>
<summary><strong>Can the AI transfer calls to my team?</strong></summary>

Yes. With Premium, the AI Voice Receptionist can transfer calls based on caller intent or rules you define. See [Transfer calls to other numbers](../ai/ai-workforce/ai-voice-receptionist.md) for setup steps and best practices.
</details>

<details>
<summary><strong>Are transferred calls recorded or transcribed?</strong></summary>

No. Recording ends at the moment of transfer and does not continue on the destination leg of the call.
</details>

<details>
<summary><strong>Can I use my existing business phone number?</strong></summary>

You can set up call forwarding from your existing business number to your assigned Conversations phone number. This allows your AI (Premium) to answer calls made to your main business line.
</details>

<details>
<summary><strong>Can multiple team members access call recordings?</strong></summary>

Yes, all team members with access to Conversations can view call recordings, transcripts, and summaries. This enables collaborative follow-up and improves customer service. Available in both Pro and Premium editions.
</details>

<details>
<summary><strong>What happens if the AI can't capture caller information?</strong></summary>

If the AI is unable to capture complete caller information, the conversation will still be recorded and appear in Conversations. You can review the transcript to identify any missed opportunities or follow-up needs. This applies to Premium edition AI Voice Receptionist.
</details>

<details>
<summary><strong>Can I customize what the AI says to callers?</strong></summary>

Yes, you can customize your AI's responses, greeting, and behavior through the AI Workforce configuration. You can also add specific business knowledge to help the AI provide more accurate answers. For more information, refer to [AI Voice Receptionist Guide](../ai/ai-workforce/ai-voice-receptionist.md).

</details>

<details>
<summary><strong>How are call costs handled?</strong></summary>

Phone call functionality is included with your Conversations Pro or Premium subscription. There are no additional per-minute charges for incoming calls handled by your AI Voice Receptionist or your team.
</details>

<details>
<summary><strong>Can I disable phone calls later?</strong></summary>

Yes, you can disable phone call functionality at any time through your AI Workforce settings (Premium) or by adjusting your Conversations phone number settings (Pro). This will stop calls from being answered, but your phone number will remain active for SMS messaging.
</details>