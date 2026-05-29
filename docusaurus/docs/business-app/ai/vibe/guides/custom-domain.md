---
title: Custom Domains
sidebar_position: 4
unlisted: false
---

# Custom Domains

Every Vibe project gets a default published URL automatically. On the Professional plan, you can also publish to a domain you own. TLS is provisioned automatically for both your default URL and any custom domain — you don't need to purchase or manage certificates.

## Your default domain

Every project includes a default URL that's ready as soon as you publish. You can view and edit this URL in the **Publish** section of your project. No DNS setup is required — it's provisioned and secured automatically.

Visiting the bare domain (without `www`) redirects to the full URL automatically.

## Requirements for custom domains

Custom domains require the Professional plan. If you're on a different plan, upgrade first through the self-checkout flow in Business App. See [Credits](../credits.md) for information on plan upgrades.

## Add a Custom Domain

1. Open your Vibe project.
2. Go to **Project Settings**.
3. Under **Custom Domain**, enter your domain name and save.
4. Follow the DNS verification steps — Vibe displays the records you need to add with your domain registrar.
5. Once your DNS records propagate and verification completes, Vibe provisions the SSL certificate automatically.

<!-- screenshot needed: custom domain field in Project Settings -->
<!-- screenshot needed: DNS verification records panel -->

Your app becomes available at your custom domain after the certificate is provisioned.
