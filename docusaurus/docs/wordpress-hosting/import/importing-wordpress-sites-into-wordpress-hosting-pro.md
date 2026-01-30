---
title: "Importing WordPress sites into WordPress Hosting Pro"
sidebar_label: "Importing WordPress sites into WordPress Hosting Pro"
description: "To import your WordPress sites into WordPress Hosting Pro, follow these steps:  \n  1. Create an Account  \n  Go to the   Accounts   tab in Partner Center and c"
---

To import your WordPress sites into WordPress Hosting Pro, follow these steps:

**1\. Create an Account**

Go to the [Accounts](https://partners.vendasta.com/manage-accounts) tab in Partner Center and create an account for each of your clients. All you’ll need is a single piece of business information—like their business name—and our system will find the rest. ([Instructions](https://support.vendasta.com/hc/en-us/articles/4406959813911))

*   If you are on any of the paid subscriptions, you can also import your accounts via the [Lists](https://partners.vendasta.com/action-lists/manage?marketId=default) tab in Partner Center. ([Instructions](https://support.vendasta.com/hc/en-us/articles/4406958467607))

**2\. Activate WordPress Hosting**

Select the account in Partner Center and activate WordPress Hosting Pro. ([Instructions](https://support.vendasta.com/hc/en-us/articles/4406958134807))

*   You can use the Lists tab in Partner Center to do this for every account at once (if you're on a paid subscription).

**3\. Create a New Site**

For each account in Partner Center, launch WordPress Hosting and create a site. All you’ll need is their name, tagline, and domain.

**4\. Migrate the Old Site**

**Option A: DIY**

Use a plugin like [All-in-One WP Migration](https://en-ca.wordpress.org/plugins/all-in-one-wp-migration/) to migrate your WordPress sites. ([Instructions](https://help.websitepro.hosting/?p=302))

**Option B: Do It For Me**

If you'd like migration assistance:

1.  Submit **[this form](https://website-pro-migration.websitepro.hosting/)** to provide us with key details about your migration.
2.  A member of our WordPress Hosting team will email you to begin the migration.
3.  We'll move a copy of each site to WordPress Hosting and put it on a temporary domain.
4.  You’ll repoint the domains and DNS records to WordPress Hosting.
## Frequently Asked Questions

<details>
<summary>Can I import a WordPress site into WordPress Hosting Pro?</summary>

Yes! There are two main ways to import a WordPress site:

**Option 1: Use All-in-One WP Migration Plugin**

* This is the easiest option for most users.
* Export your site from the original host and import it into WordPress Hosting Pro via the plugin.
* WordPress Hosting Pro templates already include the plugin by default.

**Option 2: Manual Import (for advanced users)**

You can manually import your site if:
* The backup file is too large
* You're using a format not supported by plugins

</details>

<details>
<summary>How do I import a WordPress site using the All-in-One WP Migration plugin?</summary>

WordPress Hosting Pro makes migrating an existing WordPress site easy using the **All-in-One WP Migration** plugin.

Here's how to do it:

1. **On your original site:**
   * Install and activate the **All-in-One WP Migration** plugin.
   * Go to **All-in-One WP Migration > Export**.
   * Choose your export destination (e.g., File) and download the full export. This includes your database, media, plugins, and themes.

2. **In WordPress Hosting Pro:**
   * Launch the WordPress Dashboard.
   * Install and activate the **All-in-One WP Migration** plugin again.
   * Navigate to **All-in-One WP Migration > Import**.
   * Upload the `.wpress` file you just exported from your old site.

3. **That's it!**  
   Once the import finishes, your WordPress site will be fully restored inside WordPress Hosting Pro — content, design, and functionality included.

**Steps for manual import:**

1. Backup your files and database from your old host.
2. Upload files via **SFTP** to WordPress Hosting Pro.
3. Import your `.sql` database via **phpMyAdmin** in Advanced Tools.
4. Use a tool like **Search and Replace** to update any domain references in the database.
5. Connect your domain to WordPress Hosting Pro via the Domains tab.

</details>

<details>
<summary>What if my backup file is larger than 512MB?</summary>

The free version of **All-in-One WP Migration** supports up to 64MB. If your file is larger:

**Option 1: Use the extended plugin version**

* Download the 512MB-capable version and upload it manually to your WordPress site.

**Option 2: Upgrade to Unlimited**

* Buy the **Unlimited Extension** ($69 one-time, use on unlimited sites)
* Or contact Support and we'll upload it for you at no cost.

**Option 3: Use another migration plugin**

Other WordPress migration plugins are also supported if you prefer an alternative.

</details>

<details>
<summary>Can I import a Squarespace website into WordPress Hosting Pro?</summary>

Yes — **with limitations**. Squarespace allows exporting into a WordPress-compatible format, but some features and styles may not fully transfer.

**Steps to migrate:**

1. In Squarespace, go to **Settings > Advanced > Import/Export**
2. Choose **Export**, then click the **WordPress** icon
3. In WordPress, go to **Tools > Import**, and choose the Squarespace file
4. Run the importer and complete the process

Expect to re-style or rebuild elements that do not transfer exactly.

</details>

<details>
<summary>Can I import or migrate a Wix website to WordPress Hosting Pro?</summary>

**No.** Wix is a proprietary website builder and does not support exporting into WordPress-compatible formats.

If your client is on Wix:
* You'll need to **rebuild their site manually** in WordPress using WordPress Hosting Pro
* Consider using similar themes or recreating layouts with page builders like Divi or Elementor

</details>

<details>
<summary>Can I import a `.zip` backup file (e.g., from Duplicator) directly?</summary>

No. WordPress Hosting Pro supports `.wpress` files used by **All-in-One WP Migration**, but **.zip files cannot be converted** to `.wpress`.

**Alternative:**  
Follow the manual import process using SFTP and phpMyAdmin.

</details>

<details>
<summary>What happens to WordPress users after a site import?</summary>

By default, users from the imported WordPress site **won't be able to log in**. To preserve access:

**Option 1:**
* Delete existing users and create **Business App users** for everyone who needs access.
* When they log in via Business App, a matching WordPress user will be created automatically.

**Option 2:**
* Create a Business App user **with the same email** as each WordPress user you want to preserve.

> Emails must match exactly. `bob@email.com` and `robert@email.com` are considered different users.

</details>
