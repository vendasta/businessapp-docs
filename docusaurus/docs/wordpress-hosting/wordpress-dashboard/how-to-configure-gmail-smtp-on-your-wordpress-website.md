---
title: "How to Configure Gmail SMTP on Your WordPress Website"
sidebar_label: "Gmail SMTP"
description: "Learn how to set up Gmail SMTP for your WordPress website using the WP Mail SMTP plugin and Google Cloud Console to send emails securely."
---

This article walks you through setting up Gmail SMTP for your WordPress website using the **WP Mail SMTP** plugin and **Google Cloud Console**. This configuration allows you to send emails securely via Gmail instead of relying on your hosting server.

### Prerequisites

*   A Gmail or Google Workspace account
*   Admin access to your WordPress site
*   Access to Google Cloud Console

## Step 1: Create a Project in Google Cloud

1.  Go to [Google Cloud Console](https://console.cloud.google.com/).
2.  Log in with your Google account.
3.  Click **Create Project**, name it (e.g., **Gmail SMTP**), and click **Create**.

![Create Project in Google Cloud](./img/32998698678551-f664efbb74.png)

![Project Created](./img/32998698678551-c30fff1231.png)

## Step 2: Enable the Gmail API

1.  In the Google Cloud Console, navigate to **APIs & Services** > **Library**.
2.  Search for **Gmail API**, click it, and then click **Enable**.
3.  Click **Create Credentials** to begin setting up your OAuth access.

![Navigate to APIs & Services](./img/32998698678551-49b46ca0db.gif)

4. Click **Create Credentials** to Generate Client ID.

![Create Credentials](./img/32998698678551-f45615ce38.png)

## Step 3: Set up OAuth consent screen & credentials

1.  Go to **Credentials** > **OAuth consent screen**.
2.  Choose **User Type** as **External**, then click **Create**.

![OAuth Consent Screen](./img/32998698678551-10bb46f1c2.png)

3. Fill in:

    *   **App name**: SMTP
    *   **User support email**: Your Gmail address
    *   **Developer contact email**: Your Gmail address

![OAuth Consent Screen Details](./img/32998698678551-9e0b05c458.png)

4. Skip scopes and click **Save and Continue**.

5. Under **Credentials**, click **Create Credentials** > **OAuth Client ID**.

    *   **Application type**: Web application
    *   **Name**: Web Client 1 (or your choice)
    *   **Authorized JavaScript origins**: `https://yourdomain.com`
    *   **Authorized redirect URI**: `https://connect.wpmailsmtp.com/google`

![OAuth Client ID Configuration](./img/32998698678551-722250e5a5.png)

![OAuth Client ID Created](./img/32998698678551-03946a624b.png)

![OAuth Client Details](./img/32998698678551-3b83e1836a.png)

6. Click **Create** and copy both the **Client ID** and **Client Secret**. You'll need these in Step 5.

## Step 4: Publish the App

1.  Go back to **OAuth Consent Screen**.
2.  Click **Publish App** to switch from testing to production mode.

:::info
Testing mode limits usage to 100 users. Publishing removes this limit.
:::

## Step 5: Configure WP Mail SMTP plugin

### Install the Plugin

1.  Go to your WordPress dashboard.
2.  Navigate to **Plugins** > **Add New**.
3.  Search for **WP Mail SMTP**, install, and activate it.

![WP Mail SMTP Plugin](./img/32998698678551-abd897df61.png)

### Configure the plugin

1.  Go to **WP Mail SMTP** > **Settings**.
2.  Fill in:

    *   **From Email**: Your Gmail address
    *   **Force From Email**: Enabled
    *   **From Name**: e.g., "Test Email"
    *   **Mailer**: Google

3.  Paste your **Client ID** and **Client Secret** from Google Cloud.
4.  Save the settings.

![WP Mail SMTP Settings](./img/32998698678551-830e88fe8a.png)

### Authorize Gmail

1.  Click **Allow plugin to send emails using Google**.
2.  Log in to your Google account and grant permissions.
3.  If prompted with a warning, click **Advanced** > **Go to WP Mail SMTP** and continue.
4.  You'll be redirected back to your site once authorization is complete.

![Authorize Gmail](./img/32998698678551-617860fb6b.png)

![Gmail Authorization Complete](./img/32998698678551-9ab46437e9.png)

## Step 6: Disable WordPress Hosting Pro Mail System

1.  In your WordPress dashboard, go to **Settings** > **General**.
2.  Disable the **WordPress Hosting Pro Mail System** to allow WP Mail SMTP to take over.

![Disable WordPress Hosting Pro Mail System](./img/32998698678551-b3abd4e6d9.png)

## Step 7: Test the configuration

1.  Install the **WP Mail SMTP Email Test** plugin (if not included).
2.  Go to **WP Mail SMTP** > **Tools** > **Email Test**.
3.  Send a test email.
4.  Look for the message: "Email has been sent!"
5.  Check your inbox to confirm delivery.

You've now configured Gmail SMTP on your WordPress website. This setup improves deliverability and ensures your site uses Gmail's secure and reliable email service.
