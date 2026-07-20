---
title: "Captchas, reCAPTCHAs, and Advanced Login"
sidebar_label: "Advanced Login"
description: "Learn how to configure captcha protection and advanced login options for your WordPress admin page."
---

## Hide Advanced Login

The **Hide Advanced Login** toggle controls whether users can access the WordPress admin panel directly via `/wp-admin`. When enabled, direct access is blocked and users must sign in through the WordPress Hosting dashboard.

To find the toggle, navigate to **My Products > WordPress Hosting**, select your site, and open **Advanced Tools**.

![Advanced Login toggle in the WordPress Hosting dashboard](./img/advanced-login/hide-advanced-login-toggle.png)

- **Enabled**: Direct `/wp-admin` access is blocked. Users must log in through the WordPress Hosting dashboard.
- **Disabled**: Users can log in directly at `www.domainname.com/wp-admin`.

:::info
When **Hide Advanced Login** is enabled, logging into the WordPress dashboard via SSO may be affected if a reCAPTCHA is also configured on the WordPress login page.
:::

## Enhanced captcha settings

You can configure Enhanced Captcha from your WordPress dashboard under `Settings` → `General`. From here, you can enable or disable captcha and adjust the failed login attempt threshold.

![Enhanced Captcha settings page in the WordPress dashboard](./img/advanced-login/enhanced-captcha-settings.png)

![Enhanced Captcha displayed on the WordPress login page](./img/advanced-login/enhanced-captcha-login.png)

If you prefer to log in directly via SSO, disable the captcha feature on the login page. If you are using a reCAPTCHA plugin, disabling the plugin achieves this.
