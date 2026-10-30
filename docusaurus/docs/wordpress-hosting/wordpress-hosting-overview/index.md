---
title: "WordPress Hosting Overview"
sidebar_label: "WordPress Hosting Overview"
description: "WordPress Hosting enables you to create fast, secure, and customizable websites for businesses of all sizes."
brand: business-app
product: wordpress-hosting
audience: smb
---

WordPress Hosting is fully managed, secure, high-performance hosting that lets you create fast, customizable websites for businesses of all sizes. It includes built-in eCommerce and easy-to-use visual tools.

## Product tiers

### WordPress Hosting Standard

Ideal for businesses that need a quick, cost-effective online presence.

**Included Features:**
* Pre-installed Divi Builder for visual site editing
* Pre-installed WooCommerce for eCommerce functionality
* Seven industry-specific templates
* Free SSL certificate
* Daily backups
* Built-in analytics

**Limitations:**
* No support for custom domains (uses subdomains only)
* No staging environment

### WordPress Hosting Pro

Offers all features of Standard, plus advanced tools for developers and advanced users.

### Feature comparison

| Feature | Standard | Pro |
| --- | --- | --- |
| WordPress Dashboard access | ✓ | ✓ |
| phpMyAdmin access | ✓ | ✓ |
| SFTP access | ✓ | ✓ |
| Free SSL certificate | ✓ | ✓ |
| PHP logs | ✓ | ✓ |
| Google Analytics integration | ✓ | ✓ |
| Staging environment | | ✓ |
| Custom domains | | ✓ |
| Create staging from backup | | ✓ |

## Key features

**Performance & Infrastructure**
* Fully managed, high-performance hosting with unlimited pageviews and bandwidth
* Per-site isolation, so each site runs separately from others
* Global CDN for fast load times worldwide (WordPress Hosting Pro and Premium only)
* Automatic WordPress core updates for security

**eCommerce & Customization**
* Built-in WooCommerce for online stores
* Divi Builder for visual site editing
* Seven industry-specific templates
* Full customization capabilities

**Security & Backups**
* Daily automatic backups
* Free SSL certificates that renew automatically
* Built-in firewall and DDoS protection
* Secure, isolated hosting for every site

## Getting started

1. **Set Up Your Site**: Choose a template and customize it with Divi Builder
2. **Configure Your Store**: Set up WooCommerce to start selling online
3. **Connect Your Domain**: Add a custom domain (WordPress Hosting Pro only)
4. **Set Up Email**: Configure email delivery and DNS settings

For detailed guides, see:
* [WordPress Dashboard](../wordpress-dashboard/index.mdx) - Customize your site and manage plugins
* [Templates](../templates/index.mdx) - Choose and customize templates
* [Domains](../domains/connect-a-custom-domain.md) - Connect custom domains
* [Advanced Tools](../advanced-tools/index.mdx) - Access advanced features

## Frequently asked questions (FAQs)

<details>
<summary>Can I change the PHP version on WordPress Hosting?</summary>

Yes. You can change your site's PHP version from your WordPress Hosting dashboard. Before changing it, make sure WordPress, your themes, and your plugins are up to date, and create a backup.

To change it: Go to your WordPress Hosting dashboard, click `Change PHP version`, select the version you want from the list, and click `Accept`. You can roll back if needed.

</details>

<details>
<summary>Is WordPress Hosting suitable for high-traffic websites?</summary>

Yes. WordPress Hosting is optimized for high traffic with unlimited pageviews, database storage, and bandwidth. Each site runs in its own isolated environment. WordPress Hosting Pro and Premium also include a global CDN that serves your site quickly to visitors worldwide.

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
<summary>How does WordPress Hosting manage WordPress updates?</summary>

Minor WordPress core updates are applied automatically to keep sites secure. Plugin auto-updates are off by default, but you can enable them manually from the dashboard.

</details>

<details>
<summary>Why are my WordPress posts returning 404 errors?</summary>

This is usually a permalink issue. Go to `Settings` → `Permalinks` in your WordPress Dashboard and click `Save Changes` without making any changes. This flushes the rewrite rules and often resolves the issue.

</details>

<details>
<summary>Can I use custom domains with WordPress Hosting Standard?</summary>

No. Custom domains are only available with WordPress Hosting Pro. WordPress Hosting Standard uses subdomains only (e.g., mybusiness.websitepro.hosting).

</details>
