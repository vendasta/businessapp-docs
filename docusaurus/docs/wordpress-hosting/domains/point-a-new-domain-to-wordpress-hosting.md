---
title: "Point a new Domain to WordPress Hosting"
sidebar_label: "Point Domain"
description: "If you recently purchased the domain (or just have never pointed your domain to a site), then these instructions should allow you to point your domain to your"
---

If you recently purchased the domain (or just have never pointed your domain to a site), then these instructions should allow you to point your domain to your WordPress Hosting Pro site.

If your domain is managed in GoDaddy, see [GoDaddy Domain Setup](godaddy-domain-setup.md) for GoDaddy-specific instructions.

For detailed information about DNS records and how they work, see [Understanding DNS Records](understanding-dns-records.md).

**Part 1: Setting your DNS settings**

1.  Log into your DNS management service (often it is the same company you purchased the domain through).
2.  Find the screen where DNS Records are managed
3.  Your bare domain (like _example.com_) may show as **"@"** or it might be listed as "_example.com_" depending on your DNS provider. Make sure it has an **"A"** Record, and change the value to be  **34.149.86.124**
4.  If you have a subdomain (like _www.example.com_) it may show as "www" or as the full "www.example.com" depending on your DNS provider. It can have an **"A**" Record like the previous step, or it can be a **"CNAME**" record with a value of [host.websiteprohosting.com](http://host.websiteprohosting.com/)
5.  Make sure all your changes have been saved.
6.  To encourage the DNS system on the internet to update quickly you can flush Google's DNS cache using their [Google Public DNS Flush Cache](https://developers.google.com/speed/public-dns/cache) tool.
7.  Allow up to 24 hours for all changes to take full effect. During this time your old host may still be serving your site's traffic. You can check on the status of your DNS Settings using tools like [MxToolbox DNS Lookup](https://mxtoolbox.com/DNSLookup.aspx) or viewing the **Domains** tab in WordPress Hosting**.

**Part 2: Configuring your WordPress Hosting Site**

1.  Log into WordPress Hosting Pro and navigate to the **Domains** tab
2.  Click **Connect a Domain**
3.  Enter the domain name you purchased. Click **Add Domain.**
4.  Your domain will show up in the table and it will be marked **pending** while WordPress Hosting gets ready to handle requests on that domain. This should take a minute.
5.  When it can handle requests on that domain it might appear **disconnected** because WordPress Hosting cannot detect the correct DNS records yet. Once your DNS Records have completely propagated through the DNS system they should appear **connected**.
    *   It is also normal for your SSL Certificate to be **pending** at this point. It may take several minutes to obtain an SSL Certificate. If you can't wait for the SSL Certificate you can expand **Advanced Settings** and disable **Redirect to HTTPS** temporarily. _It is very important to re-enable this setting_ because serving traffic on **HTTPS** is much safer and it improves your site's ranking in Search Engines.
6.  Click **Make Primary** on the domain that you want all your visitors to be redirected to.
7.  If you disabled **Redirect to HTTPS** temporarily in step 5 you should check this **Domains** tab frequently until the SSL Certificate is marked **secure**. As soon as you can you should enable **Redirect to HTTPS.**

## Frequently Asked Questions (FAQs)

<details>
<summary>How do I know if my domain has never been used before?</summary>

A domain has never been used if it has no existing DNS records pointing to a website, or if all DNS records are set to default/placeholder values. If your domain was previously used, you'll see existing A or CNAME records pointing to other IP addresses or domains. In that case, you'll need to update those records rather than create new ones.

</details>

<details>
<summary>What's the difference between @ and my domain name in DNS records?</summary>

The `@` symbol represents your root domain (e.g., `mybusiness.com`). Some DNS providers show `@` in the HOST field, while others show your full domain name. Both mean the same thing - they refer to your root domain without any subdomain prefix.

</details>

<details>
<summary>Should I disable HTTPS redirect during setup?</summary>

If you're waiting for your SSL certificate to be provisioned, you can temporarily disable "Redirect to HTTPS" in Advanced Settings to allow your site to load over HTTP. However, it's very important to re-enable this setting once your SSL certificate is active, as HTTPS is more secure and improves your site's search engine ranking.

</details>

<details>
<summary>How can I speed up DNS propagation?</summary>

You can speed up DNS propagation by reducing the TTL (Time To Live) value on your DNS records before making changes (if your provider allows it). You can also flush Google's DNS cache using the [Google Public DNS Flush Cache](https://developers.google.com/speed/public-dns/cache) tool. However, full propagation across all ISPs can still take up to 24 hours.

</details>

<details>
<summary>What if my domain shows as "Disconnected" after I add it?</summary>

If your domain shows as "Disconnected" after adding it, this is normal during the initial setup. WordPress Hosting Pro checks for DNS records, and if they haven't propagated yet, it will show as disconnected. Once your DNS records propagate (which can take up to 24 hours), the status will change to "Connected." You can check DNS propagation using tools like [MxToolbox DNS Lookup](https://mxtoolbox.com/DNSLookup.aspx).

</details>
