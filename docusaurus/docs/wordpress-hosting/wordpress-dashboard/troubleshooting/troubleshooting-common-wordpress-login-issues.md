---
title: "Troubleshooting Common WordPress Login Issues"
sidebar_label: "Login Issues"
description: "Logging into your WordPress site should be simple, but sometimes issues arise that prevent access. Here are some common login problems and how to fix them."
---

Logging into your WordPress site should be simple, but sometimes issues arise that prevent access. Here are some common login problems and how to fix them.

**1\. Incorrect Username or Password**

Solution:

*   Double-check your login details.
*   Reset your password by clicking **"Lost your password?"** on the login page.
*   If the reset email doesn't arrive, reset the password via **phpMyAdmin** in your hosting account.

**2\. Locked Out Due to Too Many Login Attempts**

Solution:

*   Wait a few minutes and try again.
*   If you're using a security plugin that blocks multiple failed attempts, disable it via **FTP** or **phpMyAdmin**.

**3\. White Screen or Login Page Refreshing**

Solution:

*   Clear your browser **cache and cookies**.
*   Disable plugins by renaming the **plugins** folder in **wp-content** via **FTP**.
*   Switch to a default theme (like Twenty Twenty-Four) by renaming your current theme folder in **wp-content/themes**.

**4\. 403 Forbidden Error**

Solution:

*   Check **file permissions** via FTP. Set folders to **755** and files to **644**.
*   Disable security plugins temporarily via FTP.
*   Contact your hosting provider if the issue persists.

Final Tip: **Always Keep Backups**

Before making changes, always back up your website.

By following these steps, you should be able to regain access to your WordPress site quickly!
