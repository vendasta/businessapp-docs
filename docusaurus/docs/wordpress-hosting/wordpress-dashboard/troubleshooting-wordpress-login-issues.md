---
title: "Troubleshooting WordPress Login Issues"
sidebar_label: "Login Issues"
description: "Learn how to resolve common WordPress login problems including incorrect credentials, locked accounts, white screens, and Jetpack-related errors."
---

Logging into your WordPress site should be simple, but sometimes issues arise that prevent access. Here are common login problems and how to fix them.

## Common Login Issues

### 1. Incorrect Username or Password

**Solution:**

*   Double-check your login details.
*   Reset your password by clicking **"Lost your password?"** on the login page.
*   If the reset email doesn't arrive, reset the password via **phpMyAdmin** (a database management tool) in your hosting account, or contact support for assistance.

### 2. Locked Out Due to Too Many Login Attempts

**Solution:**

*   Wait a few minutes and try again.
*   If you're using a security plugin that blocks multiple failed attempts, disable it via **FTP** (File Transfer Protocol - a way to access your website files) or contact support.

### 3. White Screen or Login Page Refreshing

**Solution:**

*   Clear your browser **cache and cookies**.
*   Disable plugins by renaming the **plugins** folder in **wp-content** via **FTP**.
*   Switch to a default theme (like Twenty Twenty-Four) by renaming your current theme folder in **wp-content/themes** via **FTP**.

:::info
If you're not comfortable using FTP, contact support for assistance with disabling plugins or switching themes.
:::

### 4. 403 Forbidden Error

**Solution:**

*   Check **file permissions** via FTP. Set folders to **755** and files to **644** (your hosting provider can help with this).
*   Disable security plugins temporarily via FTP.
*   Contact your hosting provider if the issue persists.

### 5. 500 Error When Logging In (Jetpack)

If you're receiving a 500 error when attempting to log in and have the **Jetpack by WordPress.com** plugin installed, this may be caused by Jetpack's WordPress.com login feature conflicting with WordPress Hosting Pro.

**Why this happens:**

WordPress Hosting Pro does not support logins from other sources. If you have enabled **WordPress.com login** in Jetpack settings, you'll get this error because the system doesn't support logins from external sources.

**Solution:**

Disable the "WordPress.com log in" feature in Jetpack:

1.  Go to your WordPress Admin page. Use the **"WordPress Dashboard"** button in WordPress Hosting Pro. If you're unable to access it because you continue to receive 500 error codes, try:
    *   Copy the URL of your site from the left-hand side panel of the WordPress Hosting Pro dashboard
    *   Paste your URL into the address field of your browser
    *   Add `/wp-admin` to the end of the URL, and hit enter. This should redirect you to your WordPress admin page.

2.  Go to the **Jetpack by WordPress.com** settings. This can be found:
    *   In the **Plugins** tab on the left-hand side, visit the Plugins page. Find the **Jetpack by WordPress.com** plugin and click the **Settings** button immediately below the plugin name. **OR:**
    *   Click on **Jetpack** > **Settings** tab on the left-hand side

3.  This will redirect you to the settings page for the Jetpack plugin, which should contain multiple headers at the top. Click on the **Security** header to adjust the security settings.

4.  Find the panel labelled **WordPress.com log in**. Disable this by turning off the option that says **Allow users to log in to this site using WordPress.com accounts**.

**Alternative solution:**

You can also set up an SFTP user and remove the Jetpack plugin from your installation if you don't need it.

## When to Contact Support

If you've tried these solutions and still can't access your WordPress dashboard, contact support. They can help with:

*   Resetting passwords via the database
*   Disabling problematic plugins or themes
*   Fixing file permission issues
*   Resolving server-side login problems

## Always Keep Backups

Before making changes, always back up your website. WordPress Hosting Pro creates daily backups automatically, which you can restore if something goes wrong.

By following these steps, you should be able to regain access to your WordPress site quickly!

## Related Articles

*   For general debugging help, see [WordPress Debugging Basics](wordpress-debugging-basics.md)
*   For security best practices, see [WordPress Security Guide](wordpress-security-guide.md)
