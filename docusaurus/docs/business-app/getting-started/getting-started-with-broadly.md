---
title: Getting Started with Broadly
sidebar_label: Getting Started with Broadly
sidebar_position: 2
description: A detailed walkthrough of the setup steps every new business owner completes after onboarding, from platform login through SMS registration and integrations.
---

This guide walks you through the setup steps you'll complete after onboarding, in more detail than a short checklist. Use it to know what to expect at each step and why it matters.

## What Business App does for you

Business App is your one-stop dashboard for capturing leads, communicating with customers, and managing your online presence. As you work through setup, here's where each step fits in:

- **Home dashboard**: Once you're logged in, this is your at-a-glance view of business performance and quick access to key features.
- **Conversations**: Brings together SMS, email, and social messages into a single inbox once you're registered and connected.
- **Business Profile**: The source of truth for your business info across the app, including what customers see online.
- **Administration**: Where you invite your team, connect integrations, and configure SMS.

## Getting started checklist

1. [Set up your platform login](#step-1-set-up-your-platform-login): Access your dashboard for the first time.
2. [Invite your team](#step-2-invite-your-team-optional): Give teammates their own login and control what they can see.
3. [Register for SMS](#step-3-register-for-sms): Complete the required carrier registration before sending text messages.
4. [Connect your Google Business Profile](#step-4-connect-your-google-business-profile): Sync your business details and start powering automated review requests.
5. [Connect additional social platforms](#step-5-connect-additional-social-platforms-optional): Link your social accounts for the Social AI suite.

## Step 1: Set up your platform login

Look for the welcome email with your login instructions, then follow the link to set a secure password. This login is your access to everything else in this guide, and it becomes your day-to-day dashboard once you're set up.

Once you're logged in, your Home dashboard gives you an at-a-glance view of:

- **Key metrics**: performance data organized into impressions, engagement, and leads
- **Recent activity**: a live feed of messages, calls, and customer interactions
- **Business profile**: quick access to your location info

:::tip
Bookmark your dashboard once you've logged in so you can get back to it quickly.
:::

[Back to checklist](#getting-started-checklist)

---

## Step 2: Invite your team (optional)

You can give teammates their own login and control exactly which tabs they can see. Adding your team early means more than one person can respond to leads, messages, and reviews, instead of everything routing through a single login.

### Full user management

1. Go to `Administration` > `User Management`.
2. Click `Invite user`.
3. In the **Add team member** panel, enter the person's name, email, and (optionally) phone number.
4. Under **Permissions**, choose which tabs this person can access. All tabs are selected by default, so uncheck anything you don't want them to see.
5. Click `Send`.

The invited user gets a welcome email to set up their own login. See [User Management](../administration/users.md) for the full list of available permissions and how to edit or remove access later.

:::note
Removing a user's access is immediate and permanent. If you need to restore it, you'll need to send a new invite.
:::

[Back to checklist](#getting-started-checklist)

---

## Step 3: Register for SMS

US carriers require A2P 10DLC registration before you can send SMS messages. This is what powers text messaging in your Conversations inbox, one of the most common ways customers reach out, which is why it's a critical step rather than an optional one. Canadian businesses are exempt and can use SMS immediately.

Before you start, have ready:

- Your legal business name and EIN, matching your IRS records exactly
- A privacy policy page with SMS-specific language
- Terms and conditions describing your SMS program
- Web forms with separate, unchecked opt-in checkboxes for transactional and marketing messages

Your privacy policy needs to state that opt-in data isn't shared with third parties (other than your SMS provider), that consent is given by providing a phone number, how to opt out (STOP) or get help (HELP), and that message and data rates may apply. Your terms and conditions need to include a program description, the STOP/HELP/rates language, and your business contact info. See [SMS Registration for US Businesses](../administration/sms_configuration.md) for the full requirements and exact required wording.

### How to submit your registration

1. Go to `Administration` > `Conversations Settings` > `Phone & SMS`.
2. Complete the carrier verification form.
3. Add your privacy policy and terms and conditions URLs.
4. On the review step, click `Check with AI` to flag potential issues before you submit.
5. Click `Submit Registration`.

:::warning
Once submitted, the registration can't be edited or canceled. If it comes back with a failed status, you can correct the issue and resubmit.
:::

Registration typically takes 1 to 4 weeks. Common reasons for a failed registration include a privacy policy that doesn't mention SMS, a missing or pre-checked consent checkbox, or business details that don't exactly match IRS records. If you recently got a new EIN, it may not appear in verification databases for up to 90 days.

:::tip
One registration covers every SMS feature on your account.
:::

[Back to checklist](#getting-started-checklist)

---

## Step 4: Connect your Google Business Profile

Connecting your Google Business Profile syncs your location details and powers automated review requests and dashboard metrics, so you can see the impact of your online presence without checking Google directly.

1. Go to `Administration` > `Integrations`.
2. Click the `Browse` tab.
3. Find and click the **Google Business Profile** tile.
4. Sign in and authorize the connection.

:::tip
Data can appear in your dashboard within about 5 minutes of connecting.
:::

You can manage or reconnect this integration later from `Administration` > `Integrations` > `Manage`. See [Integrations](../administration/connections/index.md) for more on browsing and managing connections.

[Back to checklist](#getting-started-checklist)

---

## Step 5: Connect additional social platforms (optional)

If you use the Social AI suite, connecting your accounts lets you manage posts and messages across platforms without switching tools.

1. Go to `Social AI` > `Settings` > `Connect Accounts`.
2. Click a platform: Facebook and Google Business Profile are available on every plan, while Instagram, LinkedIn, X, and TikTok are available on Pro plans.
3. Sign in and grant permissions.
4. Repeat for each additional platform.

:::note
Instagram must be linked through a connected Facebook Page. There's no way to connect an Instagram account on its own.
:::

See [Connecting and managing accounts in Social AI](../../social-marketing/settings/account-connections.mdx) for connection limits per plan and more on managing existing connections.

[Back to checklist](#getting-started-checklist)

---

## Frequently asked questions

<details>
<summary><strong>What happens if my SMS registration fails?</strong></summary>

It moves to a failed status instead of staying pending. Correct the issue (usually a privacy policy, consent checkbox, or business detail mismatch) and resubmit. See [Step 3](#step-3-register-for-sms) for common failure reasons.
</details>

<details>
<summary><strong>Can I skip inviting my team for now?</strong></summary>

Yes. Team invites are optional and you can add teammates anytime from `Administration` > `User Management`.
</details>

<details>
<summary><strong>Once I submit my SMS registration, can I make changes?</strong></summary>

No. It can't be edited or canceled after you submit it. If it comes back with a failed status, you can correct the issue and resubmit.
</details>

<details>
<summary><strong>How long until my Google Business Profile data shows up?</strong></summary>

Data can appear in your dashboard within about 5 minutes of connecting.
</details>

<details>
<summary><strong>Do I need to connect every social platform?</strong></summary>

No. Connecting additional social platforms is optional and only matters if you use the Social AI suite.
</details>
