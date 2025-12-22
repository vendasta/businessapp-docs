---
title: "WordPress Hosting Staging Environment"
sidebar_label: "WordPress Hosting Staging Environment"
description: Use the WordPress Hosting staging environment to safely test changes before pushing them to your live production site.
tags: [wordpress-hosting, staging, development]
keywords: [WordPress staging site, test website changes, push to production, staging environment, safe website updates]
---

**WordPress Hosting** accounts can create a staging environment for their websites, make the necessary changes in the staging environment, and push the change to production with minimum downtime. Standard accounts can only edit their production websites directly. A staging site is separate from the production site, and you can even import All-In-One and WordPress Hosting backups to a staging environment.

When it comes to managing your website, ensuring it runs smoothly and without interruption is crucial. However, making updates or adding new features directly to your live site can often lead to unexpected issues. This is where a **staging website** becomes invaluable. A staging website is a safe, controlled environment where you can make changes without affecting your live site or your visitors.

Below is a staging view, for a site that hasn't created a staging environment:

![mceclip0.png](img/4406961488151-d5926f8a9e.png)

The site below has a staging environment:

![mceclip1.png](img/4406961488151-3adbd3a7b9.png)

In the staging environment, customers can test out their site updates, and once satisfied push to live.

Please Note: If you still want the staging files to be present after pushing the site to live, please checkbox "Preserve the Staging files" or they will be deleted. 

![mceclip2.png](img/4406961488151-d1e41336e3.png)

### Resetting a Staging Site

There are 3 ways to reset your staging site:

![blobid0.png](img/4406961488151-597243ad1e.png)

1) Reset to live site - This will reset the staging site and make an exact copy of the live site currently.

2) Reset from backup - This will reset the staging site from whichever backup you select from the backup list - this is a better approach when you need to compare the actual site vs the content of an older backup.

3) Reset from template - Reset the staging site from the template selection - this means the staging site will be different from your actual site, and it will install a fresh template from the template selections for you to work with.

## Frequently Asked Questions

<details>
<summary>Will search engines index my staging site?</summary>

By default, staging environments are usually set to "discourage search engines from indexing this site" in WordPress settings, or protected via a separate URL structure, to prevent duplicate content issues.

</details>

<details>
<summary>Does the staging site have its own URL?</summary>

Yes. The staging build will have a unique URL so you can view and share it without affecting your primary domain.

</details>