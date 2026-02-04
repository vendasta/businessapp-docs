---
title: "Managing Subdomains"
sidebar_label: "Subdomains"
description: "Learn about subdomain limits, configuration, and how subdomains work with WordPress Hosting. Understand how subdomains redirect to your primary domain."
tags: [wordpress-hosting, domains, subdomains, dns]
keywords: [subdomains, subdomain limits, subdomain setup, primary domain, CNAME subdomain]
---

Subdomains allow you to create additional addresses for your website, such as `www.yourdomain.com` or `shop.yourdomain.com`. This guide explains how subdomains work with WordPress Hosting and how to manage them.

## How Many Subdomains Can I Use?

There is no limit to the number of sub-domains allowed or supported by WordPress Hosting Pro, however, all sub-domains will be redirected to a single primary domain.

For example, a customer can decide to have:
* website.com (PRIMARY)
* portal.website.com
* portal2.website.com
* portal3.website.com
* portal100.website.com

All these sub-domains can be added to WordPress Hosting Pro, but you can only have **1 primary domain**. All secondary domains will redirect to the primary domain.

## Important Things to Note

* The sub-domain CNAME DNS record has to point to [**host.websiteprohosting.com**](http://host.websiteprohosting.com/)
* All the sub-domains will redirect to the primary domain.
* Each sub-domain cannot be configured to redirect to anywhere else other than the primary domain on WordPress Hosting Pro.
* When setting up sub-domains, you would add only the subdomain portion as the host in your record (e.g., `www` or `shop`, not `www.yourdomain.com`).

## Setting Up Subdomain DNS Records

To set up a subdomain, you'll need to create a CNAME record at your domain registrar:

1. Log in to your domain registrar and access your domain settings
2. Choose to add a CNAME record
3. Enter the following information:
   * **HOST**: Enter only the subdomain part (e.g., `www`, `shop`, `blog`)
   * **Points to**: `host.websiteprohosting.com`
   * **TTL**: 3600 seconds (1 hour) or leave as default

For detailed DNS configuration instructions, see [Understanding DNS Records](understanding-dns-records.md).

## Connecting Subdomains in WordPress Hosting

1. Log into WordPress Hosting Pro and navigate to the **Domains** tab
2. Click **Connect a Domain**
3. Enter the full subdomain name (e.g., `shop.yourdomain.com`)
4. Click **Add Domain**
5. The subdomain will be added and will automatically redirect to your primary domain

## Setting Your Primary Domain

You can only have one primary domain. All other connected domains (including subdomains) will redirect to your primary domain. To change which domain is primary:

1. On the **Domains** tab
2. Find the domain in the list, expand the options menu on the right side, then click **Make Primary**
3. All of your domains will then redirect to this domain

For more details, see [Set your preferred URL or domain](set-your-preferred-url-or-domain.md).

## Frequently Asked Questions (FAQs)

<details>
<summary>Is there a limit to how many subdomains I can add?</summary>

No, there is no limit to the number of subdomains you can add to WordPress Hosting Pro. You can add as many as you need (e.g., `www`, `shop`, `blog`, `portal`, etc.). However, all subdomains will automatically redirect to your single primary domain.

</details>

<details>
<summary>Can I make a subdomain redirect to a different website?</summary>

No, all subdomains connected to WordPress Hosting Pro will redirect to your primary domain. Each subdomain cannot be configured to redirect to anywhere else. If you need a subdomain to point to a different site, you would need to host it elsewhere and configure the DNS records accordingly.

</details>

<details>
<summary>What DNS record do I need for a subdomain?</summary>

You need to create a CNAME record for each subdomain. The HOST field should contain only the subdomain portion (e.g., `www`, `shop`, `blog`), and it should point to `host.websiteprohosting.com`. Do not include the full domain name in the HOST field.

</details>

<details>
<summary>How do I change which domain is primary?</summary>

To change your primary domain, go to the Domains tab in WordPress Hosting Pro, find the domain you want to make primary, expand the options menu (three dots), and click "Make Primary." All other connected domains (including subdomains) will then redirect to this new primary domain.

</details>

<details>
<summary>Can I use an A record instead of a CNAME for a subdomain?</summary>

While technically possible, WordPress Hosting Pro recommends using a CNAME record for subdomains. CNAME records are easier to manage and automatically update if the target changes. If you use an A record, you would need to point it directly to the IP address `34.149.86.124`, but CNAME is the preferred method.

</details>
