---
title: "WordPress Dashboard Login"
sidebar_label: "Admin Dashboard"
description: "Learn how to securely access the WordPress Admin Dashboard through WordPress Hosting and understand how the custom login system works."
---

# WordPress Dashboard Login

WordPress Hosting provides secure access to the WordPress Admin Dashboard through a custom login system. This makes your site safer and easier to use by unifying user management and access control.

## How It Works

WordPress Hosting uses a **custom Single Sign-On (SSO) integration** that:

* Intercepts all attempts to access your WordPress Dashboard
* Directs unauthenticated traffic to your homepage or a custom login page
* Secures your site from password attacks
* Unifies user management and access control for WordPress Hosting and other software solutions
* Automatically creates WordPress users when valid users click the "WordPress Dashboard" button

## Accessing the WordPress Dashboard

To log into the WordPress Dashboard:

1. Log into **Business App**
2. Navigate to **My Products > WordPress Hosting Pro**
3. Click **WordPress Dashboard**

You'll be automatically logged in, and a WordPress user will be created to match your Business App account if one doesn't already exist.

## Important Plugin Compatibility Notes

:::warning
Plugins that attempt to intercept or alter WordPress login behavior are **not recommended** and may interfere with WordPress Hosting's login mechanisms.
:::

**Plugins to avoid:**
* [Rename wp-login.php](https://en-ca.wordpress.org/plugins/rename-wp-login/) and similar plugins
* Any plugin that modifies or overrides the default WordPress login process

**If you're locked out:**
If a plugin prevents access to the WordPress dashboard, you can:
1. Connect through **SFTP** to access your file system
2. Remove the problematic plugin from the `wp-content/plugins` directory
3. Access the WordPress dashboard again

:::info
If you need to disable WordPress Hosting Pro's login override, you can toggle off **Hide Advanced Login** under **Advanced Tools** in the WordPress Hosting Pro dashboard.
:::

## Frequently Asked Questions

<details>
<summary>How does WordPress Hosting Pro handle WordPress login?</summary>

WordPress Hosting Pro uses a **custom SSO (Single Sign-On) integration** to provide secure access to the WordPress Admin Dashboard:

* Clicking the "WordPress Dashboard" button generates a WordPress user that matches the Business App user
* Unauthenticated access attempts to `/wp-admin` are redirected or denied
* This login method enhances site security and centralizes user management

> **Note:** Plugins that alter or override login behavior—such as _Rename wp-login.php_—can interfere with WordPress Hosting Pro's login system and **should not be used**. If a plugin locks you out, you can use **SFTP access** to remove it from your file system.

To disable the WordPress Hosting Pro login override, toggle off **Hide Advanced Login** under **Advanced Tools** in the WordPress Hosting Pro dashboard.

</details>

<details>
<summary>How do I change a user's role in WordPress?</summary>

There are two supported methods for updating a WordPress user's role:

**Option 1: Create via Business App**

1. Create a Business App user
2. Log in to WordPress as that user
3. Navigate to **Users > Edit User > Role**, and assign a new role

**Option 2: Create in WordPress first**

1. In WordPress, create a user **with the same email** as their Business App account
2. Assign the desired role under **Users > Role**

> **Important:** The email addresses **must match** exactly between Business App and WordPress. If they differ, a duplicate user will be created.

</details>

<details>
<summary>Can I edit the `.htaccess` file on WordPress Hosting Pro?</summary>

WordPress Hosting Pro is hosted on **NGINX**, which does not use `.htaccess` files (an Apache-only feature). While you can **view** the `.htaccess` file via SFTP, any changes made to it **will have no effect**.

This ensures platform-wide performance and security consistency.

</details>

<details>
<summary>Is the `robots.txt` file accessible?</summary>

Yes, but only when using a **custom domain**.

* The `robots.txt` file is **not accessible** on:
  * The default WordPress Hosting Pro domain (`yourbusiness.websitepro.hosting`)
  * The staging domain (`yourbusiness-staging.websitepro.hosting`)
* The file **is accessible** when the site is live on a **custom domain** (e.g., `www.yourbusiness.com/robots.txt`)

This behavior supports white-labeling and privacy during development.

</details>
