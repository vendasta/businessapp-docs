---
title: "Troubleshoot SSL issues in WordPress Hosting"
sidebar_label: "Troubleshoot SSL issues in WordPress Hosting"
description: "If you have correctly added the following A and CNAME records in your domain’s DNS settings, follow the steps below to connect SSL to your custom domain. \n Req"
---

If you have correctly added the following A and CNAME records in your domain’s DNS settings, follow the steps below to connect SSL to your custom domain.

### Required DNS Records

**A Record**

*   **Name:** @
*   **Value:** 34.149.86.124
*   **TTL:** Leave as default

**CNAME Record**

*   **Name:** www
*   **Value:** host.websiteprohosting.com
*   **TTL:** Leave as default

### Step 1: Reconnect Your Domain

If the DNS records are configured correctly but the SSL status still shows as “Pending,” remove the domain and reconnect it. This action restarts the automatic SSL generation process.

  
![Screenshot 2025-06-03 at 9.18.05 AM.png](./img/29594088000151-6fc62054c8.png)

### Step 2: Wait for SSL Activation

After reconnecting the domain, allow up to **30 minutes** for the SSL certificate to be issued and installed.**![](./img/29594088000151-f9a331107c.png)**

### Notes

*   Ensure only **one A record** exists, pointing to WordPress Hosting Pro’s IP (**34.149.86.124**).
*   There should be **no AAAA record** in the DNS settings.

If the issue persists, contact Support via **chat** or **email at support@vendasta.com** for further assistance.