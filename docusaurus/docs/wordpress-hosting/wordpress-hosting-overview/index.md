---
title: "WordPress Hosting Overview"
sidebar_label: "WordPress Hosting Overview"
description: "WordPress Hosting enables you to create fast, secure, and customizable websites for businesses of all sizes."
---

WordPress Hosting enables you to create fast, secure, and customizable websites for businesses of all sizes. Built on Google Cloud Platform, it delivers reliable hosting, built-in eCommerce, robust performance, and easy-to-use visual tools.

## Product Tiers

### WordPress Hosting Standard

Ideal for businesses that need a quick, cost-effective online presence.

**Included Features:**
* Pre-installed Divi Builder for visual site editing
* Pre-installed WooCommerce for eCommerce functionality
* Seven industry-specific templates
* Free SSL certificate
* Daily backups (two most recent versions retained)
* Built-in analytics

**Limitations:**
* No support for custom domains (uses subdomains only)
* No staging environment
* Limited backup retention (only two versions)

### WordPress Hosting Pro

Offers all features of Standard, plus advanced tools for developers and advanced users.

**Additional Features:**
* Custom domain support
* Staging environments for safe changes
* phpMyAdmin and SFTP access
* Google Analytics integration
* Automatic and manual backups, retained up to 90 days
* No plugin or theme restrictions
* AI-powered PHP log analysis

## Key Features

**Performance & Infrastructure**
* Hosted on Google Cloud Platform with unlimited pageviews and bandwidth
* Free SSL certificates via Let's Encrypt
* Automatic WordPress core updates for security
* High-speed, scalable performance

**eCommerce & Customization**
* Built-in WooCommerce for online stores
* Divi Builder for visual site editing
* Seven industry-specific templates
* Full customization capabilities

**Security & Backups**
* Daily automatic backups
* Free SSL certificates
* Secure hosting infrastructure
* Advanced security features

## Getting Started

1. **Set Up Your Site**: Choose a template and customize it with Divi Builder
2. **Configure Your Store**: Set up WooCommerce to start selling online
3. **Connect Your Domain**: Add a custom domain (WordPress Hosting Pro only)
4. **Set Up Email**: Configure email delivery and DNS settings

For detailed guides, see:
* [WordPress Dashboard](../wordpress-dashboard/index.mdx) - Customize your site and manage plugins
* [Templates](../templates/index.mdx) - Choose and customize templates
* [Domains](../domains/connect-a-custom-domain.md) - Connect custom domains
* [Advanced Tools](../advanced-tools/index.mdx) - Access advanced features

## Frequently Asked Questions (FAQs)

<details>
<summary>Can I upgrade to PHP 8.1 on WordPress Hosting Pro?</summary>

Yes. WordPress Hosting Pro supports PHP 8.1. Before upgrading, ensure your site uses WordPress 6.0 or higher, all themes and plugins are up to date, and you have created a backup.

To upgrade: Go to your WordPress Hosting Pro dashboard, click **Change PHP version**, select **8.1.1**, and click **Accept**. You can roll back if needed.

</details>

<details>
<summary>Is WordPress Hosting Pro suitable for high-traffic websites?</summary>

Yes. WordPress Hosting Pro is optimized for high traffic with unlimited pageviews, database storage, and bandwidth. It uses Google Cloud Platform's C2 machines and automatically scales resources based on demand.

</details>

<details>
<summary>What plugins should I avoid?</summary>

Avoid plugins that conflict with built-in features:
* **Caching plugins** (W3 Total Cache, WP Super Cache) - Server-side caching is already included
* **Backup plugins** (BackupBuddy, UpdraftPlus) - Daily backups are included
* **Login security plugins** (Rename WP Login) - Login security is handled automatically
* **SMTP plugins** - Email delivery is included

See [Blacklisted and Redundant Plugins](../wordpress-dashboard/plugins/blacklisted-and-redundant.md) for a complete list.

</details>

<details>
<summary>How does WordPress Hosting Pro manage WordPress updates?</summary>

Minor WordPress core updates are applied automatically to keep sites secure. Plugin auto-updates are off by default, but you can enable them manually from the dashboard.

</details>

<details>
<summary>Why are my WordPress posts returning 404 errors?</summary>

This is usually a permalink issue. Go to **Settings > Permalinks** in your WordPress Dashboard and click **Save Changes** without making any changes. This flushes the rewrite rules and often resolves the issue.

</details>

<details>
<summary>Can I use custom domains with WordPress Hosting Standard?</summary>

No. Custom domains are only available with WordPress Hosting Pro. WordPress Hosting Standard uses subdomains only (e.g., mybusiness.websitepro.hosting).

</details>
