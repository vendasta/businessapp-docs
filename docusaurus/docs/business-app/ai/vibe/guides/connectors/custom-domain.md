---
title: Custom Domain
sidebar_position: 4
draft: true
---

# Custom Domain

<!-- TODO: add detail once available -->

On the Professional plan, you can publish your Vibe app to a domain you own. After you add the domain and complete DNS verification, Vibe provisions an HTTPS certificate automatically and your app becomes available at that address.

<!-- screenshot needed -->

## Requirements

- **Professional plan** — Custom domains are only available on the Professional plan. Upgrade through the self-checkout flow in Business App before proceeding.

## Add a Custom Domain

1. Open your Vibe project.
2. Go to **Publish**.
3. Under **Custom Domain**, enter your domain name and save.
4. Copy the DNS records Vibe displays and add them to your domain registrar.
5. Wait for your DNS changes to propagate. Vibe validates the records automatically.
6. Once validation completes, Vibe provisions the HTTPS certificate and your app goes live at your custom domain.

:::note
If you add a `www` subdomain, Vibe redirects it to your main domain automatically. No extra configuration is required.
:::

## Remove a Custom Domain

To remove a custom domain, go to **Publish** and remove it with one click. Your project continues to be available at its default URL.
