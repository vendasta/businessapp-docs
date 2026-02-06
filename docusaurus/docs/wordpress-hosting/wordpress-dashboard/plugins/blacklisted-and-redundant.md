---
sidebar_position: 4
---

# Blacklisted and Redundant Plugins

WordPress Hosting supports thousands of WordPress plugins, and most work seamlessly. However, some plugins conflict with WordPress Hosting's built-in features because they provide duplicate functionality that's already included. These plugins can cause performance issues, unexpected behavior, or prevent built-in features from working correctly.

## Caching Plugins

WordPress Hosting includes server-side caching to make your site fast. Caching plugins are unnecessary and can cause conflicts with WordPress Hosting's built-in caching system, potentially interfering with backups and restores.

**Examples:**
* A2 Optimized WP
* W3 Total Cache
* WP Super Cache
* WP File Cache

## Backup Plugins

WordPress Hosting automatically backs up your site daily and provides on-demand backup and restore capabilities. Backup plugins are unnecessary and can slow your site's performance. Some backup plugins store backups on your site itself, which uses up storage space unnecessarily.

**Examples:**
* BackupBuddy
* BackWPUp
* BackUpWordPress
* WP DB Backup
* WP DB Manager

## Login Security Plugins

WordPress Hosting provides secure login functionality automatically. Access to your WordPress Admin Dashboard is only available through WordPress Hosting's dashboard, which includes controlled access and "Sign in with Google" support.

Plugins that alter the login process are unnecessary and may break the login workflow, potentially making your Admin Dashboard inaccessible. If this happens, you can use SFTP or phpMyAdmin (available in WordPress Hosting Pro) to disable or remove the plugin.

**Examples:**
* Rename WP Login
* [Jetpack](https://en-ca.wordpress.org/plugins/jetpack/) (some functionality issues)

## SMTP/Email Plugins

WordPress Hosting provides reliable email delivery. Plugins that integrate with third-party email services via HTTP APIs (like SendGrid) should work, but plugins that attempt to use SMTP directly or operating system utilities are not supported.

**Examples:**
* Configure SMTP
* WP Mailing List
* Other SMTP email plugins

## Security Plugins

WordPress Hosting follows WordPress security best practices and prevents brute force attacks. Security plugins can interfere with caching mechanisms, add overhead, and conflict with WordPress Hosting's security systems.

**Examples:**
* Shield Security for WordPress (WP Simple Firewall)

## Other Incompatible Plugins

### Slider Revolution Plugin (Revslider)

Older versions of Slider Revolution (Revslider) plugin have code that's incompatible with PHP 7. If you have an incompatible version installed, you may see a 500 error when accessing the WordPress Admin Dashboard.

**To fix this:**

1. **Remove and reinstall**: Use SFTP to remove the plugin entirely, then install the newest version (5.3.0.2 or later).
2. **Update the code**: If you need to keep the old version temporarily, use SFTP to edit the plugin file and change a line of code. This requires technical knowledge and is not recommended for non-technical users.

### Plugins That Modify Server Configuration

Plugins that attempt to modify `.htaccess` or NGINX configuration files will not work. WordPress Hosting manages these files to maintain security and performance.

**Examples:**
* Redirection (may not function as expected)

### Plugins That Use exec()

Plugins that attempt to execute commands at the operating system level are disabled for security reasons.

**Examples:**
* EWWW Image Optimizer

## Blacklisted Plugins

The following plugins cannot be installed on WordPress Hosting:

* **Akeeba Backup**: WordPress Hosting includes backup functionality
* **BackUpWordPress**: WordPress Hosting includes backup functionality
* **BackWPup**: WordPress Hosting includes backup functionality
* **EWWW Image Optimizer**: Uses exec() command which is disabled for security
* **Login LockDown**: Functionality handled automatically by WordPress Hosting
* **UpdraftPlus**: WordPress Hosting includes backup functionality
* **WP Clean Up Optimizer**: Creates unreasonably large amounts of database data
* **File Manager** (versions 6.0, 6.8 only): Contains security vulnerabilities
* **WP phpMyAdmin**: WordPress Hosting includes phpMyAdmin access

:::warning
If you install a conflicting plugin and lose access to your Admin Dashboard, you can use SFTP or phpMyAdmin (available in WordPress Hosting Pro) to disable or remove the plugin.
:::
