---
title: "WordPress Hosting Overview"
sidebar_label: "WordPress Hosting Overview"
description: "Vendasta’s WordPress Hosting product enables Partners to offer fast, secure, and customizable websites to clients of all sizes—from small businesses just getti"
---

Vendasta’s WordPress Hosting product enables Partners to offer fast, secure, and customizable websites to clients of all sizes—from small businesses just getting started online to agencies managing dozens of sites. Built on Google Cloud Platform, it delivers reliable hosting, built-in eCommerce, robust performance, and easy-to-use visual tools.

This guide provides everything you need to know about WordPress Hosting Standard and WordPress Hosting Pro, including how to set up sites, configure email and domains, manage backups and plugins, and customize access and branding.

### WordPress Hosting Product Tiers

**WordPress Hosting Standard**

WordPress Hosting Standard is a simplified version of WordPress Hosting Pro. It is free to Vendasta Partners on any paid subscription tier and is ideal for clients who need a quick, cost-effective online presence.

**Included Features:**

*   Pre-installed Divi Builder for visual site editing
    
*   Pre-installed WooCommerce for eCommerce functionality
    
*   Seven industry-specific templates
    
*   Hosting on Google Cloud Platform
    
*   Free SSL certificate via Let’s Encrypt
    
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
    
*   Free SSL certificates via Let’s Encrypt
    
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

All WordPress Hosting sites receive free SSL certificates from Let’s Encrypt. TLS versions 1.1–1.3 are supported for encrypted, secure traffic.

### DNSSEC Support

Enabling DNSSEC adds cryptographic validation to DNS records.

**Effects:**

*   **On:** More secure; may slow DNS propagation
    
*   **Off:** Faster propagation; less protection from DNS attacks
    

### Email Delivery and Configuration

By default, WordPress Hosting Pro uses **SendGrid** for transactional emails (e.g., contact forms, order confirmations).

To use an external SMTP plugin:

1.  Go to **Settings > General**
    
2.  Disable the “WordPress Hosting Pro Mail System” toggle
    
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
    
2.  Customize product name and upload your brand’s logo
    

Note: White-label options are available on select subscription tiers.

WordPress Hosting empowers Partners to offer high-performance websites across a range of client needs. Whether you’re building a fast, templated site with Standard or managing advanced deployments with Pro, you have the tools, infrastructure, and support needed to succeed.