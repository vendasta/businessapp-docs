---
title: "Understanding WordPress Multisite Structures"
sidebar_label: "Multisite"
description: "Learn about WordPress Multisite structures, subdirectory vs. subdomain setups, and how to configure subdirectory-based Multisite on WordPress Hosting."
---

## WordPress Multisite: Subdirectory vs. subdomain setup

WordPress Multisite allows you to create multiple sites under one installation. The two primary ways to organize them are:

1.  **Subdomains** (e.g., `site1.yourdomain.com`)
2.  **Subdirectories** (e.g., `yourdomain.com/site1`)

WordPress Hosting fully supports subdirectory-based Multisite, which is the simpler, more SEO-friendly, and easier-to-manage option for most setups.

## Why we only support subdirectory Multisite

While WordPress allows both **subdomains** (`blog.yourdomain.com`) and **subdirectories** (`yourdomain.com/blog`), WordPress Hosting supports **only subdirectories** because:

1.  **Easier setup**
    *   No wildcard DNS or extra server configuration needed
    *   Works instantly with WordPress Hosting's optimized infrastructure
2.  **Better for SEO**
    *   Subdomains are treated as separate sites by Google
    *   Subdirectories inherit the main domain’s authority
3.  **Simpler SSL management**
    *   A single SSL certificate covers all subdirectory sites
    *   No need for expensive wildcard SSL certificates
4.  **Lower maintenance**
    *   No extra DNS records or server tweaks required

## How to set up subdirectory Multisite on WordPress Hosting

### Step 1: Activate WordPress Hosting Premium

### Step 2: Configure Network Site

1.  **Log in and navigate:** Log in to your WordPress Multisite network's admin dashboard. Go to `My Sites` → `Network Admin` → `Sites`. 
    
2.  **Add new site:** Click the `Add New` button.
3.  **Enter site information:** Provide the necessary details for the new site, such as:
    1.  **Site Address (URL):** The subdirectory path for the new site (e.g., `example.com/newsite`).
    2.  **Site Title:** A name for the new site.
    3.  **Admin Email:** An email address for the site's administrator.
4.  **Add site:** Click the `Add Site` button to create the new site. 
    
5.  **Access the new site's dashboard:** You can access the new site's dashboard from the `My Sites` menu in the top toolbar, or by going to `Network Admin` → `Sites`, finding the new site, and clicking `Dashboard`. 

### Step 3: Start Adding Sites

*   New sites will appear as `yourdomain.com/site1`, `yourdomain.com/site2`, etc.

## Best practices for subdirectory Multisite

* **Use SEO-friendly slugs** (e.g., `yourdomain.com/blog` instead of `yourdomain.com/site1`)
* **Limit plugins** – Only use Multisite-compatible plugins
* **Regular backups** – WordPress Hosting provides automated daily backups for safety