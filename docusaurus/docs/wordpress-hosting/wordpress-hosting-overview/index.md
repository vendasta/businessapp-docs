---
title: "WordPress Hosting Overview"
sidebar_label: "WordPress Hosting Overview"
description: "WordPress Hosting enables you to create fast, secure, and customizable websites for businesses of all sizes."
---

WordPress Hosting enables you to create fast, secure, and customizable websites for businesses of all sizes—from small businesses just getting started online to those managing multiple sites. Built on Google Cloud Platform, it delivers reliable hosting, built-in eCommerce, robust performance, and easy-to-use visual tools.

This guide provides everything you need to know about WordPress Hosting Standard and WordPress Hosting Pro, including how to set up sites, configure email and domains, manage backups and plugins, and customize access and branding.

### WordPress Hosting Product Tiers

**WordPress Hosting Standard**

WordPress Hosting Standard is a simplified version of WordPress Hosting Pro. It is ideal for businesses that need a quick, cost-effective online presence.

**Included Features:**

*   Pre-installed Divi Builder for visual site editing
    
*   Pre-installed WooCommerce for eCommerce functionality
    
*   Seven industry-specific templates
    
*   Hosting on Google Cloud Platform
    
*   Free SSL certificate via Let's Encrypt
    
*   Daily backups (two most recent versions retained)
    
*   Built-in analytics for traffic and performance
    

**Limitations:**

*   No support for custom domains (uses subdomains only)
    
*   No staging environment
    
*   Limited backup retention (only two versions)
    

**WordPress Hosting Pro**

WordPress Hosting Pro offers all features of Standard, plus a full suite of tools for developers, agencies, and advanced users.

**Additional Features:**

*   Custom domain support
    
*   Staging environments for safe changes
    
*   phpMyAdmin and SFTP access
    
*   Google Analytics integration
    
*   Automatic and manual backups, retained up to 90 days
    
*   No plugin or theme restrictions
    
*   Access to the WordPress Hosting Admin Dashboard for centralized site management
    
*   AI-powered PHP log analysis via Advanced Tools > PHP Logs
    

### Infrastructure and Performance

All WordPress Hosting plans are hosted on Google Cloud Platform using compute-optimized C2 machines for high-speed, secure, and scalable performance.

**Technical Specifications:**

*   Unlimited pageviews and bandwidth
    
*   Unmetered CloudSQL database storage (isolated per site)
    
*   NGINX web server
    
*   PHP 7+
    
*   Free SSL certificates via Let's Encrypt
    
*   HTTPS-only firewall with Google botnet IP blocking
    
*   Docker containers and Kubernetes orchestration
    
*   Automatic core updates for minor WordPress versions
    

**Performance Benchmarks:**

*   30 concurrent users: 1.3 seconds average response time
    
*   60 concurrent users: 1.7 seconds
    
*   100 concurrent users: 2.4 seconds
    
*   200 concurrent users: 4.1 seconds
    

**Server Location:**

All websites are hosted in the **us-central1-f** zone of Google Cloud (Council Bluffs, Iowa, USA). Additional regions may be added in the future to support global compliance and performance needs.

### How to Start Selling WordPress Hosting

1.  Log into **Partner Center**.
    
2.  Go to **Marketplace > Discover Products**.
    
3.  Search for **WordPress Hosting**.
    
4.  Click **Start Selling**.
    
5.  Click **Done** to publish it in your Store.
    

### Setting Up a WordPress Hosting Website

**Step 1: Choose a Subdomain or Domain**

When setting up a site, users are prompted to define:

*   **Business Name**
    
*   **Marketing Tagline**
    
*   **Subdomain** (e.g., mybusiness.websitepro.hosting)
    

**Note:** Only WordPress Hosting Pro supports custom domains.

**Step 2: Select a Template**

Seven customizable templates are available:

Template

Best For

Retail

Bookstores, Clothing Shops, Pet Stores

Services

Hairdressers, Movers, Life Coaches

Education

Preschools, Cooking Classes, Clubs

B2B

Agencies, Startups, SaaS

Home Services

Renovators, Painters, Cleaners

Art/Photography

Crafters, Artists, Photographers

Health/Fitness

Gyms, Yoga Studios, Dance Instructors

All templates come pre-installed with WooCommerce and Divi Builder.

**Step 3: Customize with Divi Builder**

Users can:

*   Enable the **Visual Builder**
    
*   Click on text, images, or modules to edit content live
    
*   Add sections by clicking the **plus (+) icon**
    
*   Modify fonts, layout, colors, buttons, and spacing
    
*   Use the media library for image management
    

To save changes:

1.  Click the purple icon at the bottom of the screen.
    
2.  Select **Save** on the right.
    
3.  Return to the WordPress dashboard from the top-left menu.
    

**Step 4: Set Up WooCommerce Store**

1.  Create a **WooCommerce** account using the same email as the WordPress admin.
    
2.  Complete the Setup Wizard:
    
    *   Store address and currency
        
    *   Product types (physical/digital)
        
    *   Payment methods (Stripe, PayPal, offline)
        
    *   Shipping zones and rates
        
    *   Optional Jetpack add-on (not required)
        
3.  To add products:
    
    *   Go to **Products > Add New**
        
    *   Add product title, description, pricing, category, and image
        

Refer to WooCommerce documentation for more on managing inventory, shipping, orders, and taxes.

### Importing an Existing Site

1.  **Create a new WordPress Hosting site** as a placeholder.
    
2.  **Update the existing WordPress site** (core, plugins, themes) to be PHP 7-compatible.
    
3.  **Install All-in-One WP Migration plugin** on both sites.
    
4.  **Export the old site:**
    
    *   Go to **All-in-One WP Migration > Export > Export to > File**
        
    *   Save the exported file
        
5.  **Import to new site:**
    
    *   Go to **All-in-One WP Migration > Import > Import From > File**
        
    *   Upload and restore the file
        

### Domain, DNS, and Email Configuration

**DNS Basics**

*   **A Record**: Points a domain to a specific IP (e.g., mysite.com → 216.239.38.21)
    
*   **CNAME**: Maps a subdomain to a primary domain (e.g., www → mysite.com)
    
*   **CAA**: Restricts SSL certificate issuance to specific authorities
    

**SSL Certificates**

All WordPress Hosting sites receive free SSL certificates from Let's Encrypt. TLS versions 1.1–1.3 are supported for encrypted, secure traffic.

### DNSSEC Support

Enabling DNSSEC adds cryptographic validation to DNS records.

**Effects:**

*   **On:** More secure; may slow DNS propagation
    
*   **Off:** Faster propagation; less protection from DNS attacks
    

### Email Delivery and Configuration

By default, WordPress Hosting Pro uses **SendGrid** for transactional emails (e.g., contact forms, order confirmations).

To use an external SMTP plugin:

1.  Go to **Settings > General**
    
2.  Disable the "WordPress Hosting Pro Mail System" toggle
    
3.  Click **Save Changes**
    
4.  Install and configure your chosen SMTP plugin
    

To prevent spam filtering, verify DNS settings:

*   SPF
    
*   DKIM
    
*   DMARC
    

Manage DNS validation at **Business App > Administration > Email Configuration**.

### Plugin Management

**Plugin Conflicts**

Some plugins are either redundant or conflict with built-in features.

**Avoid these types of plugins:**

*   **Caching**: W3 Total Cache, WP Super Cache, A2 Optimized WP
    
*   **Backups**: BackupBuddy, BackWPup, UpdraftPlus
    
*   **Login**: Rename WP Login, Login LockDown
    
*   **SMTP/Email**: Configure SMTP, WP Mailing List
    
*   **Security**: Shield Security
    
*   **Other**: EWWW Image Optimizer, Slider Revolution (old versions), Redirection
    

**Blacklisted Plugins:**

*   Akeeba Backup
    
*   File Manager (v6.0, v6.8)
    
*   WP phpMyAdmin (already included)
    

### Deactivating Plugins Without Dashboard Access

If locked out of the admin dashboard:

**Option 1: Using phpMyAdmin**

*   Go to `wp_options` table
    
*   Locate `active_plugins` row
    
*   Set value to: `a:0:{}`
    

**Option 2: Using FTP/File Manager**

1.  Navigate to `wp-content`
    
2.  Rename the `plugins` folder to `plugins.hold`
    
3.  Log into `/wp-admin/plugins.php` to disable missing plugins
    
4.  Rename the folder back to `plugins`
    

### Memory Limits

**PHP Memory Limit** and **WP Memory Limit** determine how much memory a website can use.

*   WordPress Hosting Pro does not allow manual increases for stability and security.
    
*   Requests for increased memory can be made through your account administrator.
    

**Why limits matter:**

*   Prevent site crashes
    
*   Support high-traffic sites
    
*   Enable large file uploads
    
*   Run resource-heavy plugins
    

### Access Control and White-Label Branding

**Manage Internal Access**

1.  Go to **Partner Center > Marketplace > Products > WordPress Hosting**
    
2.  Click **Product Info**
    
3.  Under **Access Control**, restrict access to team members only
    

Only Partner Center admin users with access to all markets can view the Admin Dashboard.

**White-Labeling the Product**

1.  In **Product Info**, locate **White-Label Branding**
    
2.  Customize product name and upload your brand's logo
    

Note: White-label options are available on select subscription tiers.

WordPress Hosting empowers Partners to offer high-performance websites across a range of client needs. Whether you're building a fast, templated site with Standard or managing advanced deployments with Pro, you have the tools, infrastructure, and support needed to succeed.
## Frequently Asked Questions

<details>
<summary>Can I upgrade to PHP 8.1 on WordPress Hosting Pro?</summary>

Yes. WordPress Hosting Pro supports PHP 8.1 and allows you to upgrade via your dashboard. This upgrade is optional, but recommended since PHP 7.4 has reached its end of life and no longer receives security updates.

**Before upgrading, ensure:**

* Your site is using **WordPress version 6.0 or higher**
* All themes and plugins are up to date and compatible
* You have created a **backup** (you can restore if issues arise)

**To upgrade PHP:**

1. Go to the WordPress Hosting **Pro dashboard**
2. Click on **Change PHP version**
3. Select **8.1.1**
4. Click **Accept**

> You can roll back to an earlier version if needed.

</details>

<details>
<summary>Is WordPress Hosting Pro well suited for high-traffic websites?</summary>

Yes. WordPress Hosting Pro is optimized to handle very high traffic volumes. It features:

* **Unlimited pageviews**, and database storage, and bandwidth
* Hosting on **Google Cloud Platform's C2 machines**, which are optimized for compute-heavy workloads
* Dynamic scaling: usage scales up or down based on traffic (e.g., less load at night, more during peak hours)
* Global content delivery via **Google Cloud CDN**, improving speed and reliability worldwide

</details>

<details>
<summary>How much RAM and CPU does WordPress Hosting Pro allocate?</summary>

WordPress Hosting Pro does not have a fixed RAM/CPU limit per site. Instead, the infrastructure automatically **scales resources based on demand**:

* Low resource usage during quiet hours (e.g., overnight)
* More server power is dynamically allocated when traffic increases

You don't need to manually configure or monitor server performance — the platform adjusts automatically.

</details>

<details>
<summary>Can I install custom applications like Node.js or tweak server settings?</summary>

No. WordPress Hosting Pro runs in a **shared server environment** and does not provide root or SSH access.

As a result:

* You **cannot deploy custom server-side applications** like Node.js
* You **cannot modify NGINX or Apache configurations**
* `.htaccess` files are not supported, as WordPress Hosting Pro uses NGINX

For projects requiring server-level customization, a VPS or dedicated server may be a better fit.

</details>

<details>
<summary>Can I downgrade or upgrade WordPress versions?</summary>

Yes, you can upgrade or downgrade the WordPress core version using the [WP Downgrade plugin](https://wordpress.org/plugins/wp-downgrade/).

This is helpful if:

* A plugin or theme doesn't support the latest WordPress version
* You want to revert to a known stable version for compatibility reasons

> Always back up your site before changing WordPress versions.

</details>

<details>
<summary>How does WordPress Hosting Pro manage WordPress core updates?</summary>

* **Minor WordPress core updates** are applied automatically to keep sites secure
* **Plugin auto-updates** are off by default (to avoid potential site breakage)
* Partners can manually enable automatic plugin updates from the dashboard

This provides a balance between safety and control — especially important for client sites.

</details>

<details>
<summary>Does WordPress Hosting Pro support Apache tweaks or advanced server customization?</summary>

No. WordPress Hosting Pro does not allow Apache-style configuration or custom server directives.

Reasons include:

* It's a **shared environment**, so global server changes aren't permitted
* WordPress Hosting Pro uses **NGINX**, not Apache — so `.htaccess` rules won't work

> If you're curious about the difference between NGINX and Apache, check out this overview: NGINX vs Apache

</details>

<details>
<summary>What are common plugin issues I should be aware of?</summary>

There are thousands of plugins available for WordPress sites and most of them will work with WordPress Hosting Pro seamlessly. WordPress Hosting Pro does not prevent users from installing any plugins. However, some plugins have functionality that interferes with the operation of your site in the WordPress Hosting Pro ecosystem.

**Caching Plugins**

WordPress Hosting Pro is built to make your sites fast. To help WordPress developers serve content as quickly as possible we have server-side caching already in place.

Though plugin-based caching features are common and often useful in other hosting platforms, they're unlikely to improve things in the WordPress Hosting Pro environment. On a cache miss, your site will experience the added overhead of populating the plugin's slower PHP-based caching system. In the case of a cache hit the content should be served from WordPress Hosting Pro's automatic caching layer. The cache hit request will never even make it to your plugin. This leaves your site bloated with cached data that doesn't get used. In addition, plugin-based caching solutions could cause issues or unexpected behavior with WordPress Hosting Pro features like backing up and restoring your site.

Examples of Plugins that might cause issues:
* [A2 Optimized WP](https://en-ca.wordpress.org/plugins/a2-optimized-wp/)
* [W3 Total Cache](https://en-ca.wordpress.org/plugins/w3-total-cache/)
* Divi Builder _Some functionality issues_

**Login Plugins**

One of the most straightforward ways for malicious attackers to gain entry to your WordPress site is through a brute force attack on the Admin Login page. Because of this, it is common practice for WordPress developers to use plugins to move, hide, or otherwise override the Admin Login process. The security of your login page is a necessity. That's why this functionality is taken care of automatically by WordPress Hosting Pro.

Access to your WordPress Admin Dashboard is only available via the WordPress Hosting Pro dashboard. This login is tightly controlled and supports an incredibly convenient "Sign in with Google" workflow.

Because of our integration between WordPress Hosting Pro and the WordPress Admin Dashboard any plugin that alters the login should be unnecessary and is unlikely to work as expected. Even worse it might break the login workflow we have in place for you, leaving your Admin Dashboard inaccessible. If you find yourself in this situation it can be remedied using WordPress Hosting Pro's SFTP and PHP My Admin integrations to disable or remove the plugin.

Examples of Plugins that might cause issues:
* [Rename WP Login](https://en-ca.wordpress.org/plugins/rename-wp-login/)
* [Jetpack](https://en-ca.wordpress.org/plugins/jetpack/) _Some functionality issues_

**Backup Plugins**

WordPress Hosting Pro has your back with a robust backup and restores the system. WordPress Hosting Pro saves a copy of your entire site every day and preserves it in an isolated and incredibly reliable cloud-based file storage system. You can also backup on demand using the WordPress Hosting Pro dashboard or restore it to a previous backup if something goes wrong.

With the backup services WordPress Hosting Pro provides, backup plugins are unnecessary and they have several downsides. Poorly configured backup plugins have been known to slow the performance of sites and even render them useless while backing up. Some of them will store the backups in your site itself, bloating the filesystem more every day. Save yourself the headache and leave backing up to us.

**Email Plugins**

With WordPress Hosting Pro, we provide a reliable email delivery mechanism but we understand that sometimes you want more control over how it's delivered. Plugins that integrate with third-party email senders (like [SendGrid](https://sendgrid.com/)) over HTTP-based APIs should work as expected in the WordPress Hosting Pro environment. However, keep in mind the standard wp_mail function has been overridden already to support WordPress Hosting Pro's email system. Some email plugins will refuse to function if that is the case.

To promote compatibility with underlying hosting infrastructures WordPress Hosting Pro does not support plugins that directly attempt to use operating system utilities (like [Sendmail](https://en.wikipedia.org/wiki/Sendmail)) nor any plugin attempting to directly send mail using SMTP. But with email delivery already included and API-based solutions available, hopefully, that's not a problem.

Examples of Plugins that might cause issues:
* [Configure SMTP](https://wordpress.org/plugins/configure-smtp/)

**Security Plugins**

For WordPress Hosting Pro, security is fundamental. We follow WordPress best practices for hosting security and go the extra mile to keep your site safe. We prevent brute force attacks on your site's login screen (see _Login Plugins_ above) and keep our hosting infrastructure up to date with the latest security patches and configurations.

Several security plugins have been found to interfere with caching mechanisms, weigh down your site with a ton of overhead, and interfere with WordPress Hosting Pro's security systems. We recommend you exercise caution when deciding to add security plugins.

Examples of Plugins that might cause issues:
* [Shield Security for WordPress (WP Simple Firewall)](https://en-ca.wordpress.org/plugins/wp-simple-firewall/)

**Other things to watch out for**

**Slider Revolution Plugin (Revslider)**

Older versions of the Slider Revolution (Revslider) plugin have code that is incompatible with PHP 7. From Version 5.3.0.2 this issue should be rectified, but you might find that older versions that are bundled with themes may not support PHP 7. In the case where you have an incompatible Revslider plugin installed, it may result in a 500 error when accessing the WordPress Admin Dashboard.

There are two options to fix the issue:

1. Set up an SFTP user and remove the plugin entirely using an SFTP client like FileZilla. You can then install the newest version of the Revslider plugin.
2. Set up an SFTP user and change a line of code within the plugin

If you decide to try option 2, it requires a single-line change. Depending on the version of the plugin you might find it in one of the following files:
* revslider/inc_php/framework/base_admin.class.php
* revslider/includes/framework/base-admin.class.php

Somewhere around line 21, you'll find the line:

**private static $arrMetaBoxes = '';**

It must be changed to:

**private static $arrMetaBoxes = array();**

Both of these options should allow you to access the WordPress Admin Dashboard again.

**Modifying .htaccess or NGINX configs**

There are many plugins that try to create or modify Apache's configuration files (.htaccess files) and/or NGINX configuration files. Any such changes made to these files by plugins or directly will not be recognized by WordPress Hosting Pro. This is to ensure WordPress Hosting Pro maintains high levels of security and site speed. A site that relies on modifying those files might not function as expected in WordPress Hosting Pro.

Examples of Plugins that might not function as expected:
* [Redirection](https://en-ca.wordpress.org/plugins/redirection/)

**Plugins that use exec(…)**

Some plugins attempt to execute commands at the operating system level using the exec command. This command has been disabled in WordPress Hosting Pro to improve security.

An example of Plugins that might not function as expected:
* [EWWW Image Optimizer](https://wordpress.org/plugins/ewww-image-optimizer/)

</details>

<details>
<summary>How do I unpublish a WordPress site?</summary>

Unpublishing a WordPress website can be done in several ways depending on your goals:

* **To take a site offline completely** in WordPress Hosting Pro, you can cancel or deactivate the WordPress Hosting product. This removes public access and stops all future backups.
* **To temporarily hide a site**, use a maintenance mode plugin. This is useful for rebranding, major updates, or staging.
* **To fully remove a site**, you can manually delete the site's files via SFTP or use a plugin that disables public access.

> Deactivating a WordPress Hosting Pro product will make both the production and staging sites inaccessible and return a "site not found" error.

</details>

<details>
<summary>How do I export a website from WordPress Hosting Standard or Pro?</summary>

You can export your website using the **All-in-One WP Migration** plugin:

1. Install the plugin in the WordPress dashboard.
2. Go to the plugin menu and click **Export > File**.
3. Download the exported `.wpress` file to your local device.

> If your website has been deactivated, contact Support to request the most recent backup file (available for a limited time after cancellation).

</details>

<details>
<summary>What is a sitemap and why does it matter?</summary>

A **sitemap** is a blueprint of your website that helps search engines like Google find and index all the pages on your site.

There are two main types:

* **XML sitemap** – Used by search engines to crawl your website effectively
* **HTML sitemap** – Helps visitors navigate your site content

To check if you have a sitemap:
* Visit `https://yourdomain.com/sitemap.xml`

If one isn't available, use a plugin like **Yoast SEO** or a tool such as [xml-sitemaps.com](https://www.xml-sitemaps.com/) to generate it.

Sitemaps are especially useful for new websites, websites with few backlinks, or sites with deep page structures.

</details>

<details>
<summary>How do I bypass caching to see my most recent changes?</summary>

WordPress Hosting Pro uses caching to speed up your site. However, changes may not show immediately due to this caching.

To bypass the cache temporarily:
* Add `/?skip` to the end of your page URL
  * Example: `https://examplewebsite.com/?skip`

This forces your browser to pull the latest version of the page.

> For a more permanent solution, you can manually flush your site's cache in the WordPress Hosting **Pro Overview** tab.

</details>

<details>
<summary>Why am I getting a memory limit error when editing with Divi or Elementor?</summary>

Memory issues in Divi or Elementor are usually caused by:

* Too many post revisions stored in the database
* Conflicting plugins

**Recommended steps:**

1. **Backup your site.**
2. Install the **WordPress Sweep plugin** to clear unnecessary post revisions.
3. If issues persist, disable plugins one by one to find the culprit.

**Known conflicting plugins include:**

* MetaSlider
* Photo Gallery
* Recent Posts Widget With Thumbnails
* Simple Custom Post Order
* Smart Grid Gallery
* Testimonial Rotator
* Unbounce Loading Pages
* WordPress Importer
* WP-Optimize – Clean, Compress, Cache
* WP Responsive Menu

</details>

<details>
<summary>Why do I see a "Storage engine MyISAM is disabled" error?</summary>

WordPress Hosting Pro supports only the **InnoDB** storage engine. Plugins or themes trying to use **MyISAM** will fail.

**Why?**  
This is a stability and reliability decision made by our cloud provider. MyISAM is outdated and lacks support for transactions and row-level locking.

**Workaround:**  
If the plugin requires MyISAM, contact the plugin developer to explore switching to InnoDB in the table creation script.

</details>

<details>
<summary>What does the `WP_AUTO_UPDATE_CORE` error mean?</summary>

This WordPress Site Health warning simply means that **core auto-updates are turned off**.

**Why this is safe:**  
Auto-updating WordPress core versions can break your site if your plugins/themes are not compatible. Manual updates are recommended to maintain stability.

No action is needed unless your team chooses to handle updates differently.

</details>

<details>
<summary>Why am I seeing "Access Denied" errors when importing a `.sql` file via phpMyAdmin?</summary>

This error typically occurs when:

* The `.sql` file includes `CREATE DATABASE` statements (not permitted)
* You're trying to import into a non-existent database

**To fix it:**

* **Remove all `CREATE DATABASE` and `USE` commands** from your `.sql` file
* Only use the two pre-created databases in WordPress Hosting Pro (Production and Staging)

You cannot create new databases in WordPress Hosting Pro, only use the ones provisioned per site.

</details>

<details>
<summary>Why are my WordPress posts returning 404 errors?</summary>

This is a common permalink issue. Here's how to fix it:

1. Log in to the WordPress Dashboard
2. Navigate to **Settings > Permalinks**
3. Without changing anything, click **Save Changes**

This action will flush the rewrite rules, often resolving 404 errors on blog posts or custom URLs.

</details>

<details>
<summary>What is Google Cloud Armor?</summary>

Ensuring the security of your website is essential, as compromised sites can mislead users or even steal their information. Google Cloud Armor is a tool designed to protect websites by blocking malicious traffic and preventing common attacks.

**What is Google Cloud Armor?**

Google Cloud Armor is a firewall that acts as a shield for websites, routing traffic through a layer of security to detect and block harmful activities. It safeguards against various attacks, including:

* **Distributed Denial of Service (DDoS) Attacks**: Large-scale attacks aimed at overwhelming the website's server.
* **SQL Injections**: Attempts to manipulate a website's database through insecure inputs.
* **Brute Force Attacks**: Automated, high-frequency login attempts to gain unauthorized access.

**How to Set Up Google Cloud Armor**

1. **Log in to Your Domain Provider's Account**
   * Access the website where you purchased your domain.
2. **Update the A Record**
   * For each domain, modify the **A record** to the following IP address:
     * **34.149.86.124**

For more guidance on domain configuration, see [Domain Setup](../domains/connect-a-custom-domain.md).

Using Google Cloud Armor can help you keep your website secure, protecting both your data and your visitors.

</details>

<details>
<summary>What is Mixed Content and How Does It Affect Your Website?</summary>

**Mixed content** refers to a situation where a website loads both secure (HTTPS) and non-secure (HTTP) elements on the same page. These elements can include images, scripts, or other resources that are being loaded over an insecure connection, even though the website itself is securely served via HTTPS.

In simpler terms, it's like inviting someone to a fancy, secure party, but letting them walk through the back door (with no security) to get to the event.

**Types of Mixed Content**

There are two main types of mixed content:

**1. Passive Mixed Content**

* Includes images, videos, or audio files loaded over HTTP on an HTTPS site.
* These elements don't interact with your site's code directly but can still pose a security risk.

**2. Active Mixed Content**

* Includes JavaScript, CSS, and other scripts loaded over HTTP on an HTTPS page.
* This is much more dangerous because it can potentially allow hackers to inject malicious code into your website, compromising its security.

**Why is Mixed Content a Problem?**

1. **Security Risks**

Loading insecure resources on a secure site opens the door for attackers to exploit vulnerabilities. If hackers can inject malicious code through mixed content, it could lead to data breaches, malware infections, or compromised user data.

2. **SEO Penalties**

Search engines like Google prioritize secure websites (those using HTTPS) over non-secure ones. If your website has mixed content, it could hurt your search rankings, affecting your visibility and organic traffic.

3. **Browser Warnings**

Modern browsers like Chrome and Firefox will alert users with a warning message when they visit a site with mixed content. This can significantly reduce trust in your site and cause visitors to leave before interacting with it.

**How to Resolve Mixed Content Issues**

If you have mixed content issues on your WordPress website, don't worry — there are ways to fix it! You can either use a **plugin** or manually check your domain settings to ensure everything is securely configured.

**1. Using a Plugin to Resolve Mixed Content**

* **Better Search and Replace**: This plugin allows you to search for any non-secure (HTTP) content in your website's database and replace it with secure (HTTPS) links. It's a great tool for bulk updates and quickly resolving mixed content issues.
* **SSL Insecure Content Fixer**: This plugin automatically fixes mixed content issues by forcing all non-secure requests to be loaded over HTTPS. It's simple to install and works in the background to ensure your site stays secure.
* **SSL Checker Plugin**: This plugin helps you check if your SSL certificate is correctly configured and highlights any resources that are still being served over HTTP. It's a useful diagnostic tool to pinpoint mixed content problems.

**2. Manually Checking Domains in the Domain Tab in WordPress Hosting Pro**

If you prefer to manually resolve mixed content issues, you can go to the **Domains Tab** in your **WordPress Hosting Pro Dashboard**. Here, you can check the domains associated with your site and re-add them to resolve the issue. It's one of the easiest ways to ensure all resources are loaded securely.

**Tips for Preventing Mixed Content in the Future**

* **Always Use HTTPS Links**: When adding new images, videos, or scripts to your website, ensure that the URLs start with **https://** instead of **http://**.
* **Update External Links**: If you're embedding content from external sites (like YouTube, Twitter, or others), make sure the URLs are secure (HTTPS).

**Conclusion**

Mixed content is a serious issue for any website that wants to ensure security and provide a seamless experience for visitors. By resolving mixed content problems, you can:

* Protect your website from potential security threats
* Improve your SEO ranking
* Avoid browser warnings and increase user trust

Using plugins like **Better Search and Replace**, **SSL Checker**, or checking your **Domains Tab** manually are great ways to ensure that all elements of your site are securely loaded. Keep your website safe, secure, and trustworthy for your visitors!

</details>
