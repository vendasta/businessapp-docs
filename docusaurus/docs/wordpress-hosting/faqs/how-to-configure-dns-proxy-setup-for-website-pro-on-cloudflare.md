---
title: "How to Configure DNS Proxy Setup for Website Pro on Cloudflare"
sidebar_label: "How to Configure DNS Proxy Setup for Website Pro on Cloudflare"
description: "If you're using WordPress Hosting Pro and want to configure your DNS settings on Cloudflare for optimized performance and security, follow the steps be"
---

If you're using WordPress Hosting Pro and want to configure your DNS settings on Cloudflare for optimized performance and security, follow the steps below.

### Prerequisites

1.  A Cloudflare account.
2.  Your domain added to Cloudflare.
3.  Access to your WordPress Hosting Pro hosting details (e.g., IP address or CNAME record).

### Steps to Configure DNS Proxy

1.  **Log in to Cloudflare**  
    Navigate to Cloudflare's dashboard and log in with your credentials.
    
2.  **Select Your Domain**  
    From the Cloudflare dashboard, choose the domain for which you want to configure DNS.
    
3.  **Go to DNS Settings**  
    Click on the **DNS** tab in the Cloudflare interface.
    
4.  **Add or Edit DNS Records**  
    Depending on your hosting configuration, you may need to either add new DNS records or modify existing ones.
    
    *   **A Record**:
        
        *   Type: `A`
        *   Name: Your root domain (e.g., `example.com`).
        *   Content: Your WordPress Hosting Pro-provided IP address (e.g., `34.149.86.124` as seen in the image).
        *   Proxy Status: **Click the cloud icon to disable the orange “Proxied” status**.
    *   **CNAME Record**:
        
        *   Type: `CNAME`
            
        *   Name: `www` or other subdomains.
            
        *   Content: Your WordPress Hosting Pro-provided CNAME (e.g., `host.websiteprohosting.com`).
            
        *   Proxy Status: **Enable the orange “Proxied” status**.
            
    
    > **Note:** If the proxy status is set to **DNS Only**, Cloudflare's features such as caching and SSL won’t be active for those records. You need to enable the proxy (orange cloud).
    
5.  **Verify DNS Changes**  
    After updating your DNS settings, ensure the proxy status for both `A` and `CNAME` records is set to **Proxied** (orange cloud). This ensures Cloudflare optimizes and secures your website traffic.
    
6.  **Test Your Configuration**
    
    *   Visit your website to ensure it loads correctly.
    *   Use Cloudflare diagnostic tools to check for any configuration issues.

### Troubleshooting

*   **Website not resolving correctly?**  
    Double-check the DNS entries and ensure the proxy status is enabled for the correct records.
    
*   **SSL Issues?**  
    Make sure you have an active SSL certificate on Cloudflare. Under the **SSL/TLS** tab, choose “Full” or “Full (Strict)” depending on your server setup.
    

By configuring the proxy status correctly, you’ll be able to leverage Cloudflare’s security and performance features effectively for your WordPress Hosting Pro setup.