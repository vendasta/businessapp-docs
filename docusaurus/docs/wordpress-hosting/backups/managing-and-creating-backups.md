---
title: "Manage Backups"
sidebar_label: "Manage Backups"
description: Learn how to manage automated and manual backups in WordPress Hosting to protect your website data.
tags: [wordpress-hosting, backups, security, setup]
keywords: [WordPress backups, website restore, manual backup WordPress, automated backups, data protection]
---

The WordPress Hosting Pro Dashboard offers a robust backup system, empowering users to protect their digital assets efficiently. This article delves into the mechanics of creating backups from the Website Pro Dashboard, highlighting its importance and providing a straightforward, step-by-step guide.

**How Automated and Manual Backups Work**: The WordPress Hosting Pro Dashboard is equipped with a dual-layered backup system for unparalleled security:

**Automated Daily Backups**: The platform diligently creates backups for all websites on a daily basis, ensuring that your latest updates are safeguarded without requiring manual intervention.  
**Manual Backup Capability**: For instances where immediate backup is crucial, users have the flexibility to generate backups at any time, providing an additional layer of control and peace of mind.  
**Backup Retention Policy**: Understanding the varying needs of its users, the platform offers tiered backup retention periods:

*   **WordPress Hosting Pro Accounts**: Enjoy extended security with backups retained for up to 60 days, ideal for comprehensive project tracking and risk management.
*   **WordPress Hosting Standard Accounts**: While still offering the essential safeguard, backups are retained for 1 day, emphasizing the importance of proactive management for these users.

### How does it work?

Users can create a new backup of their live site at any time from the Backups tab. Click on the Backups Tab. Click on **Create a new backup from Production** or **Backup Now** to create a backup of the live/production site.

![Screenshot 2025-05-27 at 3.08.23 PM.png](img/32997952840599-27fd398bb0.png)**Initiate the Backup Process**: Within the Backups Tab, you will have two primary options:

*   Backup Now: Instantly generates a backup of your live/production site, ensuring any recent changes are secured.

## Frequently Asked Questions

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

<details>
<summary>How does WordPress Hosting Pro protect my sites from DoS attacks?</summary>

WordPress Hosting Pro leverages [**Google Cloud Platform's**](https://cloud.google.com/security) infrastructure-level DDoS protection, along with additional platform measures:

* **Rate limiting** on high-volume requests (20 requests per second limit, with 20 extra requests burst buffer)
* Protection of the WordPress login system:
  * The default `wp-login.php` page is not directly accessible
  * Admins must sign in through **the secure dashboard**
  * This protects against brute-force login attacks and credential stuffing

Together, these safeguards help ensure your sites remain fast, secure, and available—even during high traffic or threat events.

</details>

<details>
<summary>Does WordPress Hosting Pro use server-side rate limiting?</summary>

Yes. WordPress Hosting Pro applies IP-based **rate limiting** to reduce the risk of abuse, bots, and DDoS attacks.

**Rate Limit Configuration:**

* Limit: **20 requests per second**
* Burst buffer: **20 extra requests** (i.e., 40 total max in 1 second)
* Requests beyond this are rejected with a **429 Too Many Requests** response

**Exemptions (not rate-limited):**

* Static assets (images, JS, CSS)
* PHP GET requests
* AJAX requests via `wp-admin/admin-ajax.php`

This ensures that normal traffic is unaffected while malicious requests are filtered.

</details>

<details>
<summary>Can I disable the server signature from the NGINX Server Header in WordPress Hosting Pro?</summary>

No, the server signature cannot be fully disabled in WordPress Hosting Pro.

**Why?**  
The NGINX server signature masks specific server and version details to enhance security. It's a global configuration and not customizable per site.

Disabling it would only result in default information being shown — which is essential for troubleshooting and internal diagnostics. For this reason, WordPress Hosting Pro does not support removing or editing the server signature header.

</details>

<details>
<summary>Is WordPress Hosting Pro HIPAA or GDPR compliant?</summary>

No. WordPress Hosting Pro is not fully compliant with HIPAA or GDPR regulations at this time.

**Why not?**  
While cookie banners and consent tools can be added, full compliance — such as guaranteed data deletion or protected health information (PHI) handling — involves multiple systems beyond just the website backend. The platform cannot guarantee total control or deletion of all user data submitted via form fills.

> If you require HIPAA or GDPR compliance, you may need to explore more specialized hosting or form-handling platforms.

</details>