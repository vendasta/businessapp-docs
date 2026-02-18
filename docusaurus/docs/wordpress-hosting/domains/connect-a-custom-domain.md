---
title: "Domain Setup"
sidebar_label: "Setup"
description: "Complete guide to setting up and connecting your custom domain to WordPress Hosting. Includes DNS record configuration, domain connection steps, validation, and FAQs."
tags: [wordpress-hosting, domains, dns, setup]
keywords: [domain setup, connect custom domain, WordPress DNS records, domain registrar setup, point domain to WordPress, A record CNAME]
---

To connect a custom domain to WordPress Hosting, you'll need to configure DNS records at your domain registrar and then connect the domain in WordPress Hosting Pro.

## Overview

To set up your domain for WordPress Hosting, there are two types of DNS records you'll need to configure:

**A record:** This allows you to point your root domain (e.g., `mybusiness.com`) to your website.

**CNAME record:** Allows pointing a subdomain (e.g., `www.mybusiness.com`) to your website.

You'll need at least one of these records. It's common to use both: an A Record for the root domain and a CNAME for `www`.

## Part 1: Configure DNS Records

### Setting up an A record

To set up an A record, log in to your domain registrar and access your domain settings. From there, choose to add an A record. For this new record, add the following information:

**HOST**: This should be either blank or `@` (depending on your provider)  
**Points to**: `34.149.86.124`  
**TTL**: 3600 seconds (1 hour)

### Setting up a CNAME record

To set up your CNAME record, log in to your domain registrar and access your domain settings. From there, choose to add a CNAME record and enter the following information:

**HOST:** This should be the subdomain you want to use (usually `www`)

**Points to:** `host.websiteprohosting.com`

**TTL:** 3600 seconds (1 hour)

:::info
We recommend setting a CNAME Record for subdomains. If you require an A Record for your root domain, use the value `34.149.86.124`.
:::

For more detailed information about DNS records, when to use each type, and DNS propagation, see [Understanding DNS Records](understanding-dns-records.md).

## Part 2: Connect Domain in WordPress Hosting Pro

1. Log into WordPress Hosting and navigate to the **Domains** tab
2. Click **Connect a Domain**
3. Enter the domain name you purchased. Click **Add Domain.**
4. WordPress Hosting will mark the new domain as **Pending** while it verifies that the DNS records are correct. Once the DNS records have been verified (WordPress Hosting checks for this automatically), your domain will show as **Connected.**
5. You will receive an email and see a notification in the **Recent Activity** stream of **Business App**.
6. You can also **Delete** added domains from this tab.
7. Once it has been **connected**, requests for your new domain will be redirected to the **Primary Domain**.

### Setting Your Primary Domain

You have the ability to set any of your **connected** domains to be the **Primary Domain**.

1. On the **Domains** tab
2. Find the domain in the list, expand the options menu on the right side, then click **Make Primary**.
3. All of your domains will then redirect to this domain.

For more information on managing multiple domains and setting your primary domain, see [Set your preferred URL or domain](set-your-preferred-url-or-domain.md).

## Part 3: Validate DNS Records

Once the above records are set up, WordPress Hosting Pro will automatically validate them. The domain will show as **Pending** until WordPress Hosting detects the correct DNS records, then it will change to **Connected**.

You can also manually check to see if your domains are propagating by looking them up on MxToolbox:

**A record**: Enter your root domain: [https://mxtoolbox.com/DNSLookup.aspx](https://mxtoolbox.com/DNSLookup.aspx)  
The A record that is returned should include an IP address of `34.149.86.124`

**CNAME record**: Enter your subdomain (e.g. `www.business.com`): [https://mxtoolbox.com/DNSLookup.aspx](https://mxtoolbox.com/DNSLookup.aspx)  
The record that is returned should reflect a Canonical Name of `host.websiteprohosting.com`

## Frequently Asked Questions (FAQs)

<details>
<summary>When do I use an A Record?</summary>

You would use an A record if you want your root domain, for example, `business.com`, to point to your site on WordPress Hosting Pro.

</details>

<details>
<summary>When do I use a CNAME record?</summary>

You would use a CNAME record any time you want a subdomain to point to your website. Some example subdomains would be `www.business.com` or `listings.business.com`. In both of these cases you would add only the subdomain portion as the host in your record, so `www` and `listings` in the example.

</details>

<details>
<summary>What is the base requirement for linking my domain?</summary>

To link your domain to WordPress Hosting Pro you must use at least one A record or CNAME record. Which one you use depends on whether you want to link the root domain or a subdomain to WordPress Hosting Pro. To link the root domain you would use an A record. To link a subdomain you would use a CNAME record.

</details>

<details>
<summary>Do I need to do anything to setup SSL?</summary>

All WordPress Hosting Pro sites are automatically provisioned with a Let's Encrypt SSL certificate, so you would not need to follow any extra steps to set this up.

</details>

<details>
<summary>How do I set the preferred URL?</summary>

This can be done from the domains tab of WordPress Hosting Pro. Select the kabob menu next to the domain you want to use, then select Make Primary. This will make it so that when the site is accessed from any of its connected domains, the user is redirected to your primary one.

</details>


<details>
<summary>How long does it take for my domain to connect?</summary>

After configuring your DNS records, it typically takes a few minutes for WordPress Hosting to detect and connect your domain. However, DNS propagation can take up to 24 hours to fully complete across all internet service providers. Your domain will show as "Pending" until WordPress Hosting detects the correct DNS records, then it will change to "Connected."

</details>

<details>
<summary>What if my domain stays in "Pending" status?</summary>

If your domain remains in "Pending" status, verify that your DNS records are configured correctly. You can check your DNS records using tools like [MxToolbox DNS Lookup](https://mxtoolbox.com/DNSLookup.aspx). Ensure your A record points to `34.149.86.124` and your CNAME record (if using www) points to `host.websiteprohosting.com`. DNS changes can take up to 24 hours to propagate.

</details>

<details>
<summary>Can I connect multiple domains to the same WordPress Hosting site?</summary>

Yes, you can connect multiple domains to your WordPress Hosting site. However, only one domain can be set as the primary domain. All other connected domains will automatically redirect to your primary domain. You can change which domain is primary at any time from the Domains tab.

</details>

<details>
<summary>What happens if I delete a connected domain?</summary>

If you delete a connected domain from WordPress Hosting, it will no longer redirect to your site. Your DNS records will remain unchanged at your domain registrar, so you'll need to update or remove those DNS records if you want to use the domain elsewhere.

</details>
