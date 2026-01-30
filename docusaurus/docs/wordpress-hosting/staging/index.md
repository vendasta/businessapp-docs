---
title: "Staging"
sidebar_label: "Staging"
description: "Use the WordPress Hosting staging environment to safely test changes before pushing them to your live production site."
tags: [wordpress-hosting, staging, development]
keywords: [WordPress staging site, test website changes, push to production, staging environment, safe website updates]
---

The WordPress Hosting staging environment lets you test changes safely before pushing them to your live production site. Create a separate copy of your website where you can experiment, make updates, and verify everything works correctly—all without affecting your live site or visitors.

## What is Staging?

A staging environment is a **separate copy of your website** where you can:

* Test plugin and theme updates
* Make major content changes
* Experiment with new features
* Debug issues safely
* Preview changes before going live

Once you're satisfied with your changes in staging, you can push them to production with minimal downtime.

## Availability

**WordPress Hosting Pro**: Staging environments are available for all Pro accounts.

**WordPress Hosting Standard**: Staging is not available. Standard accounts edit production sites directly.

## Key Features

### Push to Production

After testing your changes in staging, you can push them to your live site with a single click. The push process minimizes downtime and ensures your changes go live smoothly.

:::tip
Use the "Preserve the Staging files" option if you want to keep your staging environment intact after pushing to production. Otherwise, staging files will be deleted after the push.
:::

### Reset Options

You have three flexible ways to reset your staging environment:

1. **Reset to Live Site** - Creates an exact copy of your current production site
2. **Reset from Backup** - Restore staging from any backup in your backup list
3. **Reset from Template** - Start fresh with a new template selection

### Import to Staging

You can import backups (including All-in-One WP Migration backups) directly into your staging environment, making it easy to test changes from different points in your site's history.

## How It Works

1. **Create a staging environment** from your WordPress Hosting Pro dashboard
2. **Make your changes** in the staging environment—test plugins, update content, modify themes
3. **Test thoroughly** to ensure everything works as expected
4. **Push to production** when you're ready to go live

## Staging URL

Your staging site has its own unique URL, separate from your production domain. This allows you to:

* View and test changes without affecting your live site
* Share the staging URL with team members or clients for review
* Work on updates without visitor interruption

## Best Practices

* **Create a staging environment** before making major updates or changes
* **Test thoroughly** in staging before pushing to production
* **Use staging for debugging** - enable WP_DEBUG to see errors and warnings inline
* **Preserve staging files** if you need to continue working after pushing to production
* **Reset staging regularly** to keep it in sync with your production site

## Frequently Asked Questions

<details>
<summary>Will search engines index my staging site?</summary>

By default, staging environments are usually set to "discourage search engines from indexing this site" in WordPress settings, or protected via a separate URL structure, to prevent duplicate content issues.

</details>

<details>
<summary>Does the staging site have its own URL?</summary>

Yes. The staging build will have a unique URL so you can view and share it without affecting your primary domain.

</details>

<details>
<summary>Why is my staging site taking a long time to create?</summary>

Staging creation time depends on more than just the site's file size—it also depends on how large and complex the site's **database** is.

**Examples:**

* A 4.5 GB eCommerce site with **10,000+ products** will take significantly longer than a 4.5 GB brochure site with 5 pages and large media files.
* This is because staging involves copying both the **file system** and performing **database writes**, which can be slow for content-heavy or highly dynamic sites.

If your staging site is taking longer than expected, give it additional time or reach out to support if it's stalled for an extended period.

</details>

<details>
<summary>Does WordPress Hosting Pro block SEO bots from crawling temporary URLs?</summary>

Yes. WordPress Hosting Pro automatically restricts SEO bots from indexing temporary URLs (e.g. `sitename.websitepro.hosting`).

**Why this matters:**

* Prevents premature indexing of incomplete or placeholder content
* Protects your SEO reputation
* Avoids duplicate content penalties from search engines

**Best practice:**  
Connect your **custom domain** before launching your site or beginning any SEO efforts. Only custom domains allow full indexing and visibility by search engine bots.

> Temporary URLs are not intended for public visibility or long-term use. SEO bots are blocked by design until a custom domain is in place.

</details>
