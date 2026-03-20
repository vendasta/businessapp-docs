---
title: "Managing Subdomains"
sidebar_label: "Subdomains"
description: "Learn how alternate domains and subdomains work on WordPress Hosting Pro single-site installations. All alternate domains redirect to your primary domain."
tags: [wordpress-hosting, domains, subdomains, dns, alternate-domains]
keywords: [alternate domains, subdomains, subdomain limits, primary domain, CNAME subdomain, single-site, WordPress Hosting Pro]
---

This guide applies to **WordPress Hosting Pro** (single-site). On a single-site installation, you can connect additional domains and subdomains, but they all function as **alternate domains** — every one of them redirects to your primary domain.

:::tip Looking for subdirectory-based Multisite?
To manage multiple sites under a single domain using subdirectories (e.g., `yourdomain.com/site1`, `yourdomain.com/site2`), see [WordPress Hosting Premium](../overview/wordpress-hosting-premium.md).
:::

## How Many Alternate Domains Can I Add?

There is no limit to the number of alternate domains or subdomains you can connect to WordPress Hosting Pro. However, all of them redirect to your single **primary domain**.

For example, you could connect:
* `website.com` — **Primary domain**
* `www.website.com` — redirects to primary
* `portal.website.com` — redirects to primary
* `shop.website.com` — redirects to primary
* `myotherdomain.com` — redirects to primary

You can only have **one primary domain**. All other connected domains are alternate domains that redirect visitors to it.

## Important Things to Note

* The CNAME DNS record for each subdomain must point to [**host.websiteprohosting.com**](http://host.websiteprohosting.com/).
* All alternate domains and subdomains redirect to the primary domain — this cannot be changed on a single-site installation.
* Each alternate domain cannot be configured to point to a different destination.
* When setting up subdomains, enter only the subdomain portion as the host in your DNS record (e.g., `www` or `shop`, not `www.yourdomain.com`).

## Setting Up Subdomain DNS Records

To set up a subdomain, you'll need to create a CNAME record at your domain registrar:

1. Log in to your domain registrar and access your domain settings
2. Choose to add a CNAME record
3. Enter the following information:
   * **HOST**: Enter only the subdomain part (e.g., `www`, `shop`, `blog`)
   * **Points to**: `host.websiteprohosting.com`
   * **TTL**: 3600 seconds (1 hour) or leave as default

For detailed DNS configuration instructions, see [Understanding DNS Records](understanding-dns-records.md).

## Connecting Alternate Domains in WordPress Hosting Pro

1. Log into WordPress Hosting Pro and navigate to the **Domains** tab
2. Click **Connect a Domain**
3. Enter the full subdomain name (e.g., `shop.yourdomain.com`)
4. Click **Add Domain**
5. The subdomain will be added and will automatically redirect to your primary domain

## Setting Your Primary Domain

You can only have one primary domain. All other connected alternate domains redirect to it. To change which domain is primary:

1. On the **Domains** tab
2. Find the domain in the list, expand the options menu on the right side, then click **Make Primary**
3. All of your domains will then redirect to this domain

For more details, see [Set your primary domain](point-a-new-domain-to-wordpress-hosting.md#set-your-primary-domain).

## Frequently Asked Questions (FAQs)

<details>
<summary>Is there a limit to how many alternate domains I can add?</summary>

No, there is no limit to the number of alternate domains or subdomains you can connect to WordPress Hosting Pro. You can add as many as you need (e.g., `www.yourdomain.com`, `shop.yourdomain.com`, `myotherdomain.com`). However, all of them automatically redirect to your single primary domain.

</details>

<details>
<summary>Can I make an alternate domain point to a different website?</summary>

No. On a WordPress Hosting Pro single-site installation, all alternate domains redirect to your primary domain. They cannot be configured to point elsewhere. If you need multiple sites under one domain (e.g., `yourdomain.com/site1`), consider upgrading to [WordPress Hosting Premium](../overview/wordpress-hosting-premium.md) for subdirectory-based Multisite support.

</details>

<details>
<summary>What DNS record do I need for a subdomain?</summary>

You need to create a CNAME record for each subdomain. The HOST field should contain only the subdomain portion (e.g., `www`, `shop`, `blog`), and it should point to `host.websiteprohosting.com`. Do not include the full domain name in the HOST field.

</details>

<details>
<summary>How do I change which domain is primary?</summary>

Go to the Domains tab in WordPress Hosting Pro, find the domain you want to make primary, expand the options menu (three dots), and click "Make Primary." All other alternate domains will then redirect to this new primary domain.

</details>

<details>
<summary>Can I use an A record instead of a CNAME for a subdomain?</summary>

While technically possible, a CNAME record is recommended for subdomains. CNAME records are easier to manage and automatically update if the target changes. If you use an A record, point it directly to `34.149.86.124`, but CNAME is the preferred method.

</details>
