---
title: "Import"
sidebar_label: "Import"
description: "Learn how to import your existing WordPress sites into WordPress Hosting using migration plugins or manual methods."
---

To import your WordPress sites into WordPress Hosting, follow these steps:

1. **Activate WordPress Hosting**: Contact your account manager to activate WordPress Hosting for your account.
2. **Create a New Site**: Launch WordPress Hosting and create a site. You'll need your business name, tagline, and domain.
3. **Migrate the Old Site**: Use one of the two options below.

**Option A: DIY**

Use the **All-in-One WP Migration** plugin to move your site yourself:

On your original site:
1. Install and activate the **All-in-One WP Migration** plugin.
2. Go to **All-in-One WP Migration > Export**.
3. Choose your export destination (e.g., File) and download the full export. This includes your database, media, plugins, and themes.

In WordPress Hosting:
1. Launch the WordPress Dashboard.
2. Install and activate the **All-in-One WP Migration** plugin again.
3. Navigate to **All-in-One WP Migration > Import**.
4. Upload the `.wpress` file you exported from your old site.

Once the import finishes, your site is fully restored in WordPress Hosting — content, design, and functionality included.

**Option B: Do It For Me**

Contact your account manager to request migration assistance. Here's what happens next:

1. A member of the WordPress Hosting team will email you to begin the migration.
2. We'll move a copy of your site to WordPress Hosting and put it on a temporary domain.
3. You'll repoint the domain and DNS records to WordPress Hosting.

## Frequently Asked Questions (FAQs)

<details>
<summary>Can I import a WordPress site into WordPress Hosting?</summary>

Yes! There are two main ways to import a WordPress site:

**Option 1: Use the All-in-One WP Migration Plugin**

* This is the easiest option for most users — see the migration steps above.
* WordPress Hosting templates already include the plugin by default.

**Option 2: Manual Import (for advanced users)**

You can manually import your site if the backup file is too large or you're using a format not supported by plugins:

1. Backup your files and database from your old host.
2. Upload files via **SFTP** to WordPress Hosting.
3. Import your `.sql` database via **phpMyAdmin** in Advanced Tools.
4. Use a tool like **Search and Replace** to update any domain references in the database.
5. Connect your domain to WordPress Hosting via the Domains tab.

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
<summary>Can I import a Squarespace website into WordPress Hosting?</summary>

Yes — **with limitations**. Squarespace allows exporting into a WordPress-compatible format, but some features and styles may not fully transfer.

**Steps to migrate:**

1. In Squarespace, go to **Settings > Advanced > Import/Export**
2. Choose **Export**, then click the **WordPress** icon
3. In WordPress, go to **Tools > Import**, and choose the Squarespace file
4. Run the importer and complete the process

Expect to re-style or rebuild elements that do not transfer exactly.

</details>

<details>
<summary>Can I import or migrate a Wix website to WordPress Hosting?</summary>

**No.** Wix is a proprietary website builder and does not support exporting into WordPress-compatible formats.

If you're currently on Wix:
* You'll need to **rebuild your site manually** in WordPress using WordPress Hosting
* Consider using similar themes or recreating layouts with page builders like Divi or Elementor

</details>

<details>
<summary>Can I import a `.zip` backup file (e.g., from Duplicator) directly?</summary>

No. WordPress Hosting supports `.wpress` files used by **All-in-One WP Migration**, but **.zip files cannot be converted** to `.wpress`.

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
