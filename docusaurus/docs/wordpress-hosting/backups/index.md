---
title: "Backups"
sidebar_label: "Backups"
description: "Protect your WordPress site with automated daily backups and manual backup options. Restore your site to any previous backup point."
tags: [wordpress-hosting, backups, security, restore]
keywords: [WordPress backups, website restore, manual backup WordPress, automated backups, data protection]
---

WordPress Hosting provides a robust backup system to protect your website data. Your site is automatically backed up daily, and you can create manual backups at any time to safeguard your work before making major changes.

## How Backups Work

WordPress Hosting uses a dual-layered backup system for comprehensive protection:

**Automated Daily Backups**: Your website is automatically backed up every day, ensuring your latest updates are safeguarded without requiring any manual intervention.

**Manual Backup Capability**: Create a backup instantly whenever you need one—especially useful before major site updates, plugin installations, or theme changes.

## Backup Retention

Backup retention varies by your WordPress Hosting plan:

* **WordPress Hosting Pro**: Backups are retained for **up to 90 days**, giving you access to multiple restore points for comprehensive project tracking and risk management.
* **WordPress Hosting Standard**: Only the **most recent daily backup** is available, emphasizing the importance of proactive backup management.

## What's Included in a Backup

Each backup captures your complete website, including:

* All WordPress files and content
* Database (posts, pages, settings, user data)
* Uploaded media files
* Installed plugins and themes
* Site configuration

## When to Create Manual Backups

While daily automated backups provide ongoing protection, consider creating a manual backup before:

* Installing or updating plugins or themes
* Making major content changes
* Updating WordPress core
* Deploying changes from staging to production
* Making significant configuration changes

## Restoring a Backup

You can restore your site to any available backup point directly from the **Backups** tab in your WordPress Hosting dashboard. Restoration time depends on your site size—small sites may restore in minutes, while larger sites can take longer.

:::important
Restoring a backup will replace your current site with the selected backup version. All changes made after that backup point will be lost.
:::

## Frequently Asked Questions (FAQs)

<details>
<summary>How long does a restoration take?</summary>

Restoration time depends on the size of your site. Small sites may restore in minutes, while larger sites (multiple GBs) can take significantly longer.

</details>

<details>
<summary>Does WordPress Hosting Pro provide automated daily backups? How long are they kept?</summary>

Yes. All WordPress Hosting Pro and Standard sites are backed up daily, and users can also create manual backups at any time.

**Backup retention:**

* **WordPress Hosting Pro**: Backups are retained for **up to 90 days**
* **WordPress Hosting Standard**: Only the **most recent daily backup** is available

You can view and restore backups at any time from the **Backups** tab in the WordPress Hosting Pro dashboard.

> Manual backups are especially useful before major site updates, staging deployments, or plugin/theme changes.

</details>

<details>
<summary>What happens if I cancel a WordPress Hosting product?</summary>

If a WordPress Hosting product (Standard or Pro) is canceled and fully deactivated:

* Both the **production and staging sites** are taken offline immediately
* The site will return a **"site not found"** error to visitors
* **Backups stop being created** from the moment of cancellation

**For WordPress Hosting Pro users:**

* If the product is reactivated **within 90 days**, the site can be restored in the exact state it was in when canceled
* After 90 days, the system will create a **final archive**, and then both the production and staging sites will be **permanently deleted**

> **Tip:** If you're planning to cancel but may return later, reach out to Support before canceling. We can help you obtain a final copy of the website.

</details>

<details>
<summary>Will I receive notifications if a backup fails?</summary>

**No, not at this time.** WordPress Hosting Pro does not currently send failure notifications for daily or manual backups.

We recommend:
* Regularly checking the **Backups** tab in the WordPress Hosting Pro dashboard
* Reviewing backup history to confirm recent versions are available and secure
* Performing manual backups before major edits or plugin installations

</details>
