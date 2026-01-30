---
title: "Understanding DNS Records"
sidebar_label: "DNS Records"
description: "Learn about DNS records and how to configure them for WordPress Hosting. Understand A records, CNAME records, CAA records, and DNS propagation."
tags: [wordpress-hosting, domains, dns, dns-records]
keywords: [DNS records, A record, CNAME record, CAA record, DNS configuration, DNS propagation]
---

DNS (Domain Name System) records are essential for connecting your domain to WordPress Hosting. This guide explains what DNS records are, which types you need, and how to configure them.

## What are DNS Records?

The **Domain Name System (DNS)** is a collection of standards and infrastructure that allows internet clients (like Chrome, Safari, or Edge) to map human-readable domain names to server addresses.

Think of it like giving a taxi driver the name of a place, such as "the mall," instead of the exact address; the driver can look up the location and find the directions.

DNS records serve as "listings" for domain addresses. They're configured on **NameServers**, which respond to queries about domains, such as "Where can I find mybusiness.com?" WordPress Hosting Pro works with three main types of DNS records:

## Types of DNS Records Used by WordPress Hosting Pro

### 1. A Records

* **Meaning**: "A" stands for **Address Record**.
* **Purpose**: Points a domain name to a specific IP address.
* **Example**: An A Record for `mybusiness.com` might direct traffic to IP `216.239.38.21`.
* **In General**: "If you're looking for `mybusiness.com`, you should find it at IP address `216.239.38.21`."

### 2. CNAME Records

* **Meaning**: Stands for **Canonical Name Record** (here, "canonical" means "the rule that must be followed").
* **Purpose**: Points one domain name to another domain name.
* **Example**: Setting a CNAME for `www.mybusiness.com` will ensure it points to `mybusiness.com`. If configured incorrectly, this could override other records for subdomains like `smtp.mybusiness.com`.
* **In General**: "If you're looking for `www.mybusiness.com`, you should find it at `mybusiness.com`."

### 3. CAA Records

* **Meaning**: Stands for **Certificate Authority Authorization**.
* **Purpose**: Controls which Certificate Authorities (CAs) can issue SSL/TLS certificates for your domain, which verify your domain's identity and secure communication.
* **Example**: A CAA Record might specify that only certain CAs, like Let's Encrypt, can create SSL/TLS certificates for your domain.
* **In General**: "If you're an authorized Certificate Authority, you may issue SSL/TLS certificates for this domain."

If there is **no CAA Record** (or if it's empty), any Certificate Authority can issue certificates for the domain—this is the most common setup.

## When to Use Each Record Type

### When should I use an A Record?

Use an **A Record** when connecting your **primary/root domain**, such as `mybusiness.com`, directly to your WordPress Hosting Pro site.

### When should I use a CNAME Record?

Use a **CNAME Record** any time you want a subdomain (like `www` or `blog`) to point to your WordPress Hosting Pro site.

Examples:
* `www.business.com`
* `listings.business.com`

For the "Host" field in the record, only enter the subdomain part (e.g., `www` or `listings`).

### Do I need an A Record or CNAME or both?

To connect a domain to WordPress Hosting Pro, you'll need either an **A Record** or a **CNAME Record**, depending on what part of the domain you're connecting:

* Use an **A Record** to link the **root domain** (e.g., `mybusiness.com`).
* Use a **CNAME Record** to link a **subdomain** (e.g., `www.mybusiness.com`).

You must use at least one of these. It's common to use both: an A Record for the root and a CNAME for `www`.

## How to Configure DNS Records

To connect a domain to WordPress Hosting Pro:

**A Record**
* Host: `@`
* Points to: `34.149.86.124`

**CNAME Record**
* Host: `www`
* Points to: `host.websiteprohosting.com`

Additionally, be aware of **CAA Records**:
* If no CAA Record exists, any certificate authority (CA) can issue an SSL certificate.
* If using a CAA Record, you **must authorize** `letsencrypt.org` (used by WordPress Hosting Pro) to issue certificates.

For a complete guide on setting up these records and connecting your domain, see [Domain Setup](connect-a-custom-domain.md).

## DNS Propagation and Timing

### Why do DNS record changes take time to update?

DNS records are cached by Internet Service Providers (ISPs) to improve global internet performance. That's why changes don't take effect instantly.

**Two ways to influence DNS update speed:**

* **Adjust TTL (Time To Live):**
  * TTL tells systems how long to cache the record.
  * Set it to 5–60 minutes for quicker propagation (if your provider allows it).
* **Flush DNS manually:**
  * Use [Google's DNS Flush Tool](https://developers.google.com/speed/public-dns/cache) to refresh their cache for your domain.

Propagation can still take up to 24 hours depending on the ISP.

## IPv6 and AAAA Records

### Does WordPress Hosting Pro support AAAA Records or IPv6?

Currently, **AAAA Records (IPv6) are not supported.** WordPress Hosting Pro requires only an **A Record** that points to the IPv4 address: `34.149.86.124`.

## Other DNS Record Types

While A, CNAME, and CAA records are the primary types used for web hosting, you may also need to configure other DNS records for email:

* **[Merge multiple SPF records into a single record](merge-multiple-spf-records-into-a-single-record.md)**: SPF records are used for email authentication and preventing email spoofing.

## Frequently Asked Questions

<details>
<summary>What's the difference between an A record and a CNAME record?</summary>

An A record points a domain name directly to an IP address (e.g., `mybusiness.com` → `34.149.86.124`). A CNAME record points one domain name to another domain name (e.g., `www.mybusiness.com` → `mybusiness.com`). Use an A record for your root domain and a CNAME record for subdomains like `www`.

</details>

<details>
<summary>Can I use both an A record and CNAME record for the same domain?</summary>

Yes, it's common to use both. Use an A record for your root domain (`@` or `mybusiness.com`) and a CNAME record for the `www` subdomain. This ensures both `mybusiness.com` and `www.mybusiness.com` point to your WordPress Hosting site.

</details>

<details>
<summary>Why do DNS changes take so long to update?</summary>

DNS records are cached by Internet Service Providers (ISPs) around the world to improve performance. When you make a change, it needs to propagate through all these caches. You can speed this up by reducing the TTL (Time To Live) value before making changes, or by using tools like Google's DNS Flush Cache. However, full propagation can still take up to 24 hours.

</details>

<details>
<summary>What is a CAA record and do I need one?</summary>

A CAA (Certificate Authority Authorization) record controls which Certificate Authorities can issue SSL certificates for your domain. If you don't have a CAA record, any CA can issue certificates (this is the most common setup). If you do have a CAA record, you must authorize `letsencrypt.org` for WordPress Hosting Pro to automatically provision SSL certificates.

</details>

<details>
<summary>Can I use IPv6 (AAAA records) with WordPress Hosting?</summary>

No, WordPress Hosting Pro currently only supports IPv4 addresses. You should use an A record pointing to the IPv4 address `34.149.86.124`. Do not create AAAA records, as they are not supported and may cause connection issues.

</details>
