---
title: "What is phpMyAdmin?"
sidebar_label: "What is phpMyAdmin?"
description: "What is phpMyAdmin? \n \n \n \n \n \n \n phpMyAdmin is a open source web-based tool that allows you to manage the database of your WordPress site. It's a powerful int"
---

### What is phpMyAdmin?

phpMyAdmin is a open source web-based tool that allows you to manage the database of your WordPress site. It's a powerful interface for interacting with the MySQL database that stores all the essential data for your WordPress Hosting Pro. It provides a graphical user interface (GUI) to manage and interact with databases, making it easier for users to perform database-related tasks without requiring advanced knowledge of SQL commands.Here's what it is and what it's commonly used for:

1.  **Managing the WordPress Hosting Pro Database**
    
    *   WordPress stores all content, settings, and user data in its database. phpMyAdmin allows you to view, edit, and manage this database.
2.  **Backing Up the Database**
    
    *   You can export the database as a backup, ensuring that your site's data is secure in case of an issue.
3.  **Restoring the Database**
    
    *   In case of data loss or corruption, you can use phpMyAdmin to import a previously backed-up database.
4.  **Resetting User Passwords**
    
    *   If you're locked out of your WordPress admin account, phpMyAdmin allows you to reset the password directly by editing the `wp_users` table.
5.  **Troubleshooting and Fixing Issues**
    
    *   If the site is experiencing database-related errors (e.g., a corrupted table), phpMyAdmin can help repair or optimize database tables.
6.  **Deleting Spam Comments**
    
    *   Bulk delete spam or unapproved comments directly from the `wp_comments` table.
7.  **Changing Site URLs**
    
    *   If you need to move your WordPress site to a different domain or folder, you can update the site URL in the `wp_options` table.
8.  **Optimizing Database Performance**
    
    *   You can clean up unnecessary data (like revisions, drafts, or spam) and optimize database tables for better site performance.
9.  **Adding or Editing Data**
    
    *   Manually add or update content, settings, or plugin data in the database.

**Here's how you can access phpMyAdmin in WordPress Hosting Pro:**

*   Log in to your WordPress Hosting Pro product.
*   Once you're in the WordPress Hosting Pro dashboard, navigate to **Advanced Tools** and click on **phpMyAdmin**.

### Important Notes

*   **Use with Caution**: phpMyAdmin gives you direct access to your database, so making changes without understanding their implications can break your site.
*   **Backup First**: Always create a database backup before making changes via phpMyAdmin.

phpMyAdmin is a vital tool for WordPress administrators and developers, offering flexibility and control for managing database-related tasks.
## Frequently Asked Questions

<details>
<summary>How do I use SFTP to access my site's file system?</summary>

WordPress Hosting Pro allows you to connect via **SFTP** (Secure File Transfer Protocol), which encrypts your connection for secure file access.

**Step 1: Add an SFTP key pair**

1. Go to your WordPress Hosting **Pro Dashboard** and find the **SFTP section**.
2. Click **Add Key**, name your key, and generate the key pair.
3. **Download the private key** associated with your site. This is required to authenticate your SFTP session.

**Step 2: Connect using FileZilla (or another SFTP client)**

1. Open FileZilla and go to **File > Site Manager > New Site**.
2. Configure the connection:
   * **Host**: `sftp.websitepro.hosting`
   * **Port**: `22`
   * **Protocol**: `SFTP – SSH File Transfer Protocol`
   * **Logon Type**: Key File
   * **User**: Your provided username
   * **Key file**: Browse and select your downloaded private key
3. Click **Connect**

Once connected, you'll be able to upload files, remove plugins/themes, and manage your site directly.

</details>

<details>
<summary>How can I find the database connection string for my site?</summary>

Although you can't connect remotely, you can output your site's database credentials by following these steps:

1. Connect to your file system via SFTP.
2. Upload a `.php` file with the following code:

```php
<?php
echo "Database Host: " . DB_HOST . "<br>";
echo "Database Name: " . DB_NAME . "<br>";
echo "Database User: " . DB_USER . "<br>";
echo "Database Password: " . DB_PASSWORD . "<br>";
?>
```

3. Visit the file in your browser, e.g., `http://yourdomain.com/filename.php`
4. **Important:** Delete this file after use to maintain site security.

</details>

<details>
<summary>Can I check which PHP extensions are enabled?</summary>

Yes. Follow these steps:

1. On your computer, create a file named `phpinfo.php`.
2. Add the following code:

```php
<?php
phpinfo();
?>
```

3. Upload this file to your site's `wp` directory using SFTP.
4. Visit `yourdomain.com/phpinfo.php` in a browser.
5. Look for the extensions section to confirm whether tools like `cURL` or `FTP` are enabled.
6. **Delete the file after checking.**

</details>

<details>
<summary>Can I make changes to the `php.ini` file?</summary>

No. The `php.ini` file is not accessible or editable on WordPress Hosting Pro or Standard. This is part of our secure hosting environment. If you need help with a specific PHP configuration, please contact Support.

</details>

<details>
<summary>Can I increase the upload limit for the All-in-One WP Migration plugin?</summary>

Yes, but it depends on the plugin version:

* Default limit: **64 MB**
* With free extension: **Up to 512 MB**
* For larger sites: **Use the All-in-One WP Migration Unlimited extension**

This extension is not installed by default. If you need help installing it, our support team can assist.

</details>

<details>
<summary>Can I connect to the database using MySQL Workbench or other remote clients?</summary>

No. WordPress Hosting Pro site databases are **isolated inside a secure network**. For that reason:

* Remote database tools like MySQL Workbench **will not work**
* Direct configuration file transfers or database exports from other hosts may not be compatible

If you're migrating a site, we recommend using supported plugins like **All-in-One WP Migration**, or contact our support team for alternate solutions.

</details>

<details>
<summary>Why can't I use plugins that require the XMLRPC.php file?</summary>

The `xmlrpc.php` file enables remote access to WordPress, but it is **disabled by default** in WordPress Hosting Pro and WordPress Hosting Standard due to known security vulnerabilities.

Plugins that rely on it, such as **Jetpack** or certain **Zapier** integrations, may not function correctly.

For more context:
* [What is XMLRPC.php? (Hostinger)](https://www.hostinger.com/tutorials/xmlrpc-wordpress)
* [Why XMLRPC is blocked (WP Engine)](https://wpengine.com/resources/xmlrpc-php/)

</details>

<details>
<summary>How do I increase the file upload limit in WordPress?</summary>

You can increase the upload limit using a plugin, but the maximum limit in WordPress Hosting Pro is **256 MB**.

To increase the default upload limit:

1. In WordPress, go to **Plugins > Add New**
2. Install **Big File Uploads – Increase Maximum File Upload Size**
3. Activate the plugin
4. Navigate to **Media > Big File Uploads** and set your desired limit (up to 256 MB)

> If you need to upload files larger than 256 MB, use **SFTP** to upload directly to your server.

</details>

<details>
<summary>How can I hide the Advanced Tools tab from clients?</summary>

Partner admin users can remove the **Advanced Tools** tab from the WordPress Hosting dashboard for all client accounts.

This prevents clients from accessing:
* phpMyAdmin
* SFTP
* PHP logs
* Advanced WordPress login option

**To disable it:**

1. Go to **Partner Center > Marketplace > Products > WordPress Hosting**
2. Click the **Product Info** tab
3. Go to **Admin tools > Product Settings**
4. Toggle off **Show Advanced Features**

> This change applies **globally** across all accounts and cannot be customized per client.

Partner admins will still be able to see and use all advanced tools.

</details>

<details>
<summary>Do I get access to cPanel when hosting on WordPress Hosting Pro?</summary>

No — **[cPanel](https://cpanel.net/) is not used** with WordPress Hosting Pro.

WordPress Hosting Pro is a fully managed hosting environment built on Google Cloud infrastructure. It handles traditional cPanel features internally, including:
* Domain management
* Backups and restores
* SSL provisioning

If you need direct technical access, you can use:
* **phpMyAdmin** for database management
* **SFTP** (with a key file) for accessing your file system

</details>

<details>
<summary>Can I log in to WordPress Hosting Pro SFTP with a username and password?</summary>

No. WordPress Hosting Pro does **not support password-based SFTP access**.

To connect over SFTP, you must:
* Generate a **key file** from the WordPress Hosting Pro dashboard
* Use an SFTP client like FileZilla with your username and key file

> For setup steps, see: How to use SFTP to access the file system in the WordPress Hosting dashboard under Advanced Tools.

</details>

<details>
<summary>Are there any limits on site databases?</summary>

WordPress Hosting does not currently impose restrictions on database sizes.

For WordPress Hosting Pro accounts, certain MySQL resource limits are in place to manage extreme scenarios, such as traffic surges caused by attacks on websites. These limits, set at approximately 720000 queries per hour, are designed to handle normal site traffic comfortably and are unlikely to be exceeded under typical conditions.

If a site exceeds the MySQL resource limit, it may result in HTTP 500 internal server errors or PHP error logs indicating that the user has exceeded the "max_questions" resource limit. Such issues are generally caused by poorly optimized plugins or themes, rather than limitations of the platform itself.

**How to Prevent and Resolve MySQL Limit Issues**

1. **Optimize Plugins and Themes** – Regularly audit and update plugins and themes to ensure they are well-coded and efficient.
2. **Monitor Site Traffic** – Use monitoring tools to track traffic spikes and detect unusual activity.
3. **Implement Caching Solutions** – Caching can reduce the number of direct database queries by serving stored content instead.
4. **Database Optimization** – Regularly clean up unnecessary data, optimize database tables, and remove outdated records.
5. **Security Measures** – Use security plugins and firewalls to prevent malicious attacks that generate excessive database queries.

</details>
