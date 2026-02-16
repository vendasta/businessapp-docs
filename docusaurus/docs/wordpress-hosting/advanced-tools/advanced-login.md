---
title: "Captcha's, reCaptcha's and Advanced Login (Using /wp-admin page)"
sidebar_label: "Advanced Login"
description: "If the Advanced Login feature is enabled, logging into the WordPress dashboard directly via SSO could be affected if a reCaptcha is set up"
---

If the Advanced Login feature is enabled, logging into the WordPress dashboard via SSO could be affected if a reCaptcha is set up on the WordPress login page.

![](./img/captchas/hide-advanced-toggle.png)

When the toggle is turned off, a user can log in using www.domainname.com/wp-admin.  

### Enhanced Captcha Settings

Enhanced Captcha can be configured from your WordPress dashboard -> General settings page. From here, you can enable/disable captcha and adjust the failed login attempt threshold.



![](./img/captchas/enhanced-captcha-settings.png)


![mceclip1.png](./img/captchas/enhanced-captcha-login.png)

If you would still like to log in directly via SSO, simply disable the captcha feature on the login page (If using a reCaptcha plugin, simply disabling the plugin should achieve this).
