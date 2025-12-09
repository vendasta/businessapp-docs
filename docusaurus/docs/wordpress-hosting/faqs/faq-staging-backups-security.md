---
title: "FAQ: Staging, Backups & Security"
sidebar_label: "FAQ: Staging, Backups & Security"
description: "WordPress Hosting Pro includes tools to manage site versions, backups, and hosting infrastructure security. This FAQ covers common questions about staging envi"
---

WordPress Hosting Pro includes tools to manage site versions, backups, and hosting infrastructure security. This FAQ covers common questions about staging environments, backup alerts, rate limiting, and how the platform protects against denial-of-service (DoS) attacks.

#### **Q: Why is my staging site taking a long time to create?**

Staging creation time depends on more than just the site’s file size—it also depends on how large and complex the site’s **database** is.

**Examples:**

*   A 4.5 GB eCommerce site with **10,000+ products** will take significantly longer than a 4.5 GB brochure site with 5 pages and large media files.
    
*   This is because staging involves copying both the **file system** and performing **database writes**, which can be slow for content-heavy or highly dynamic sites.
    

If your staging site is taking longer than expected, give it additional time or reach out to support if it's stalled for an extended period.

#### **Q: Does WordPress Hosting Pro provide automated daily backups? How long are they kept?**

Yes. All WordPress Hosting Pro and Standard sites are backed up daily, and users can also create manual backups at any time.

**Backup retention:**

*   **WordPress Hosting Pro**: Backups are retained for **up to 90 days**
    
*   **WordPress Hosting Standard**: Only the **most recent daily backup** is available
    

You can view and restore backups at any time from the **Backups** tab in the WordPress Hosting Pro dashboard.

> Manual backups are especially useful before major site updates, staging deployments, or plugin/theme changes.

#### **Q: What happens if I cancel a WordPress Hosting product?**

If a WordPress Hosting product (Standard or Pro) is canceled and fully deactivated:

*   Both the **production and staging sites** are taken offline immediately
    
*   The site will return a **“site not found”** error to visitors
    
*   **Backups stop being created** from the moment of cancellation
    

**For WordPress Hosting Pro users:**

*   If the product is reactivated **within 90 days**, the site can be restored in the exact state it was in when canceled
    
*   After 90 days, the system will create a **final archive**, and then both the production and staging sites will be **permanently deleted**
    

> **Tip:** If you know your client wants to cancel but may return later, reach out to Vendasta Support before canceling. We can help you obtain a final copy of the website.

#### **Q: Will I receive notifications if a backup fails?**

**No, not at this time.** WordPress Hosting Pro does not currently send failure notifications for daily or manual backups.

We recommend:

*   Regularly checking the **Backups** tab in the WordPress Hosting Pro dashboard
    
*   Reviewing backup history to confirm recent versions are available and secure
    
*   Performing manual backups before major edits or plugin installations
    

#### **Q: Does WordPress Hosting Pro use server-side rate limiting?**

Yes. WordPress Hosting Pro applies IP-based **rate limiting** to reduce the risk of abuse, bots, and DDoS attacks.

**Rate Limit Configuration:**

*   Limit: **20 requests per second**
    
*   Burst buffer: **20 extra requests** (i.e., 40 total max in 1 second)
    
*   Requests beyond this are rejected with a **429 Too Many Requests** response
    

**Exemptions (not rate-limited):**

*   Static assets (images, JS, CSS)
    
*   PHP GET requests
    
*   AJAX requests via `wp-admin/admin-ajax.php`
    

This ensures that normal traffic is unaffected while malicious requests are filtered.

#### **Q: How does WordPress Hosting Pro protect my sites from DoS attacks?**

WordPress Hosting Pro leverages [**Google Cloud Platform’s**](https://cloud.google.com/security) infrastructure-level DDoS protection, along with additional platform measures:

*   **Rate limiting** on high-volume requests (see above)
    
*   Protection of the WordPress login system:
    
    *   The default `wp-login.php` page is not directly accessible
        
    *   Admins must sign in through **Vendasta’s secure dashboard**
        
    *   This protects against brute-force login attacks and credential stuffing
        

Together, these safeguards help ensure your sites remain fast, secure, and available—even during high traffic or threat events.

### Q: Can I disable the server signature from the NGINX Server Header in WordPress Hosting Pro?

No, the server signature cannot be fully disabled in WordPress Hosting Pro.

**Why?**  
The NGINX server signature masks specific server and version details to enhance security. It’s a global configuration and not customizable per site.

Disabling it would only result in default information being shown — which is essential for troubleshooting and internal diagnostics. For this reason, WordPress Hosting Pro does not support removing or editing the server signature header.

<!-- image removed: ./img/31945021142295-8b09ad847b -->

### Q: Does WordPress Hosting Pro block SEO bots from crawling temporary URLs?

Yes. WordPress Hosting Pro automatically restricts SEO bots from indexing temporary URLs (e.g. `sitename.websitepro.hosting`).

**Why this matters:**

*   Prevents premature indexing of incomplete or placeholder content
    
*   Protects your SEO reputation
    
*   Avoids duplicate content penalties from search engines
    

**Best practice:**  
Connect your **custom domain** before launching your site or beginning any SEO efforts. Only custom domains allow full indexing and visibility by search engine bots.

> Temporary URLs are not intended for public visibility or long-term use. SEO bots are blocked by design until a custom domain is in place.

### Q: Is WordPress Hosting Pro HIPAA or GDPR compliant?

No. WordPress Hosting Pro is not fully compliant with HIPAA or GDPR regulations at this time.

**Why not?**  
While cookie banners and consent tools can be added, full compliance — such as guaranteed data deletion or protected health information (PHI) handling — involves multiple systems beyond just the website backend. Vendasta cannot guarantee total control or deletion of all user data submitted via form fills.

> If your client requires HIPAA or GDPR compliance, you may need to explore more specialized hosting or form-handling platforms.