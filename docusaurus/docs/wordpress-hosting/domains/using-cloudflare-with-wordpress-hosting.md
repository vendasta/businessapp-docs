---
title: "Using Cloudflare with WordPress Hosting"
sidebar_label: "Cloudflare"
description: "Learn how to integrate Cloudflare DNS and CDN services with WordPress Hosting. Move your domain to Cloudflare, connect existing Cloudflare domains, and configure DNS proxy settings."
tags: [wordpress-hosting, domains, cloudflare, dns, cdn]
keywords: [Cloudflare DNS, Cloudflare CDN, Cloudflare proxy, WordPress Hosting Cloudflare, DNS proxy setup]
---

Cloudflare provides DNS management and CDN (Content Delivery Network) services that can enhance your WordPress Hosting site's performance and security. This guide covers how to integrate Cloudflare with WordPress Hosting.

## Moving Your Domain to Cloudflare DNS

If you want to use Cloudflare's DNS management instead of your domain registrar's DNS:

1. Create an account at [Cloudflare](https://www.cloudflare.com/).
2. Choose a free or paid plan.
3. Add your domain.
4. Cloudflare will display **nameservers** to replace at your domain registrar.
5. Update your **domain's nameservers** to Cloudflare's.
6. All DNS records must now be managed in the **Cloudflare DNS zone**.

More details: [Cloudflare setup guide](https://support.cloudflare.com/hc/en-us/articles/201720164-Creating-a-Cloudflare-account-and-adding-a-website)

## Connecting a Cloudflare-Managed Domain

If your domain is already managed by Cloudflare, follow these steps to connect it to WordPress Hosting Pro:

### Step 1: Configure DNS Records in Cloudflare

1. **Ensure your DNS records are set correctly**
   * Add the necessary **A** and **CNAME** records for your domain in Cloudflare.
   * A Record: `@ → 34.149.86.124`
   * CNAME Record: `www → host.websiteprohosting.com`

For detailed DNS configuration instructions, see [Understanding DNS Records](understanding-dns-records.md).

### Step 2: Configure SSL Settings in Cloudflare

1. Go to the **SSL/TLS > Overview** tab and set **SSL** to `Full`
2. Under **SSL/TLS > Edge Certificates**, turn **"Always Use HTTPS"** to `Off` temporarily

### Step 3: Connect Domain in WordPress Hosting Pro

1. Go to the **Domains** tab and add your domain
2. Wait for the domain status to show **"Connected"** (DNS propagation may take time)

### Step 4: Re-enable HTTPS in Cloudflare

1. Once connected in WordPress Hosting Pro, go back to **Edge Certificates** in Cloudflare
2. Switch **"Always Use HTTPS"** to `On`

**Additional Notes:**

* **Four-level domains (e.g. `www.your.business.com`)** may face limitations when using Cloudflare's proxy (orange cloud) feature.
  * **Solution 1:** Disable **DNS and HTTP Proxy (CDN)** mode for that domain
  * **Solution 2:** Purchase a custom SSL certificate in Cloudflare under `SSL/TLS > Edge Certificates > Order SSL Certificate`

> If HTTPS doesn't activate immediately, this is usually due to DNS caching. You can flush DNS manually or wait up to 24 hours for propagation.

## Configuring DNS Proxy Setup

If you're using WordPress Hosting Pro and want to configure your DNS settings on Cloudflare for optimized performance and security, follow the steps below.

### Prerequisites

1. A Cloudflare account.
2. Your domain added to Cloudflare.
3. Access to your WordPress Hosting Pro hosting details (e.g., IP address or CNAME record).

### Steps to Configure DNS Proxy

1. **Log in to Cloudflare**  
   Navigate to Cloudflare's dashboard and log in with your credentials.

2. **Select Your Domain**  
   From the Cloudflare dashboard, choose the domain for which you want to configure DNS.

3. **Go to DNS Settings**  
   Click on the **DNS** tab in the Cloudflare interface.

4. **Add or Edit DNS Records**  
   Depending on your hosting configuration, you may need to either add new DNS records or modify existing ones.
   * **A Record**:
     * Type: `A`
     * Name: Your root domain (e.g., `example.com`).
     * Content: Your WordPress Hosting Pro-provided IP address (e.g., `34.149.86.124`).
     * Proxy Status: **Click the cloud icon to disable the orange "Proxied" status**.
   * **CNAME Record**:
     * Type: `CNAME`
     * Name: `www` or other subdomains.
     * Content: Your WordPress Hosting Pro-provided CNAME (e.g., `host.websiteprohosting.com`).
     * Proxy Status: **Enable the orange "Proxied" status**.

   > **Note:** If the proxy status is set to **DNS Only**, Cloudflare's features such as caching and SSL won't be active for those records. You need to enable the proxy (orange cloud).

5. **Verify DNS Changes**  
   After updating your DNS settings, ensure the proxy status for both `A` and `CNAME` records is set to **Proxied** (orange cloud). This ensures Cloudflare optimizes and secures your website traffic.

6. **Test Your Configuration**
   * Visit your website to ensure it loads correctly.
   * Use Cloudflare diagnostic tools to check for any configuration issues.

### Troubleshooting

* **Website not resolving correctly?**  
  Double-check the DNS entries and ensure the proxy status is enabled for the correct records.
* **SSL Issues?**  
  Make sure you have an active SSL certificate on Cloudflare. Under the **SSL/TLS** tab, choose "Full" or "Full (Strict)" depending on your server setup.

By configuring the proxy status correctly, you'll be able to leverage Cloudflare's security and performance features effectively for your WordPress Hosting Pro setup.

## Frequently Asked Questions

<details>
<summary>Do I need to use Cloudflare's proxy (orange cloud) for my DNS records?</summary>

For the A record, you should disable the proxy (DNS Only mode) to ensure direct connection to WordPress Hosting. For CNAME records, you can enable the proxy (orange cloud) to take advantage of Cloudflare's CDN and security features. However, ensure your SSL/TLS settings are configured correctly (set to "Full") when using the proxy.

</details>

<details>
<summary>Why should I turn off "Always Use HTTPS" temporarily during setup?</summary>

During the initial domain connection, WordPress Hosting Pro needs to provision an SSL certificate. Having Cloudflare's "Always Use HTTPS" enabled before the certificate is ready can cause connection issues. Turn it off temporarily, wait for the domain to show as "Connected" in WordPress Hosting Pro, then re-enable it.

</details>

<details>
<summary>What SSL/TLS mode should I use in Cloudflare?</summary>

Set your SSL/TLS mode to **"Full"** (not "Full Strict") when using WordPress Hosting Pro. This allows Cloudflare to connect to your WordPress Hosting site using a valid SSL certificate, even if it's not issued by Cloudflare. "Full Strict" requires Cloudflare-issued certificates, which aren't necessary for WordPress Hosting.

</details>

<details>
<summary>Can I use Cloudflare with a four-level domain (like www.your.business.com)?</summary>

Four-level domains may face limitations with Cloudflare's proxy feature. If you encounter issues, you can either disable the DNS and HTTP Proxy (CDN) mode for that domain, or purchase a custom SSL certificate in Cloudflare under SSL/TLS > Edge Certificates > Order SSL Certificate.

</details>

<details>
<summary>How do I know if my Cloudflare setup is working correctly?</summary>

After configuring your DNS records and SSL settings, check that your domain shows as "Connected" in WordPress Hosting Pro's Domains tab. Visit your website to ensure it loads correctly, and verify that HTTPS is working. You can also use Cloudflare's diagnostic tools in the dashboard to check for any configuration issues.

</details>
