---
title: "Understanding WordPress Multisite Structures"
sidebar_label: "Understanding WordPress Multisite Structures"
description: "WordPress Multisite: Subdirectory vs. Subdomain Setup:   WordPress Multisite allows you to create multiple sites under one installation. The two primary ways"
---

### **WordPress Multisite: Subdirectory vs. Subdomain Setup:**

WordPress Multisite allows you to create multiple sites under one installation. The two primary ways to organize them are:

1.  **Subdomains** (e.g., `site1.yourdomain.com`)
2.  **Subdirectories** (e.g., `yourdomain.com/site1`)

Our hosting environment **fully supports subdirectory-based Multisite**, which is the **simpler, more SEO-friendly, and easier-to-manage** option for most users.

### **Why We Only Support Subdirectory Multisite**

While WordPress allows both **subdomains** (`blog.yourdomain.com`) and **subdirectories** (`yourdomain.com/blog`), we’ve chosen to support **only subdirectories** because:

1.  **Easier Setup**
    *   No wildcard DNS or extra server config needed.
    *   Works instantly with our optimized hosting.
2.  **Better for SEO**
    *   Subdomains are treated as separate sites by Google.
    *   Subdirectories inherit the main domain’s authority.
3.  **Simpler SSL Management**
    *   A single SSL certificate covers all subdirectory sites.
    *   No need for expensive wildcard SSL certs.
4.  **Lower Maintenance**
    *   No extra DNS records or server tweaks required.

### **How to Set Up Subdirectory Multisite on Our Hosting**

#### **Step 1: Activate the WordPress Hosting | Premium Plan**

#### **Step 2: Configure Network Site**

1.  **Login and Navigate:** Log in to your WordPress Multisite network's admin dashboard. Go to "My Sites" > "Network Admin" > "Sites". 
    
    ![](https://support.vendasta.com/hc/article_attachments/33643485395607)
    
2.  **Add New Site:** Click the "Add New" button.
3.  **Enter Site Information:** Provide the necessary details for the new site, such as:
    1.  **Site Address (URL):** The domain or subdomain for the new site (e.g., `newsite.example.com` or `example.com/newsite`).
    2.  **Site Title:** A name for the new site.
    3.  **Admin Email:** An email address for the site's administrator.
4.  **Add Site:** Click the "Add Site" button to create the new site. 
    
    ![](https://support.vendasta.com/hc/article_attachments/33643497519255)
    
5.  **Access the New Site's Dashboard:** You can access the new site's dashboard from the "My Sites" menu in the top toolbar, or by going to "Network Admin" > "Sites", finding the new site, and clicking "Dashboard". 

#### **Step 3: Start Adding Sites**

*   New sites will appear as `yourdomain.com/site1`, `yourdomain.com/site2`, etc.

* * *

### **Best Practices for Subdirectory Multisite**

✔ **Use SEO-Friendly Slugs** (e.g., `yourdomain.com/blog` instead of y`ourdomain.com/site1`).  
✔ **Limit Plugins** – Only use Multisite-compatible plugins.  
✔ **Regular Backups** – We provide **automated daily backups** for safety.