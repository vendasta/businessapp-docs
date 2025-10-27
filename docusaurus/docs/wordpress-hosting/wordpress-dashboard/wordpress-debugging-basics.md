---
title: "WordPress debugging basics"
sidebar_label: "WordPress debugging basics"
description: "How this Guide Works \n We hope after reading this guide that you have the basics on debugging some common problems that can occur within a website set up with"
---

### How this Guide Works

We hope after reading this guide that you have the basics on debugging some common problems that can occur within a website set up with WordPress, using tools offered by our WordPress Hosting Pro Platform. These can range from conflicting plugins preventing certain features from working, all the way to internal server errors that will bring the website down. 

### Let's get started

**![homepage.jpg](./img/4406960816663-cc2ec7f16e.png)**

The above is a site I will be using, I wanted to get this screenshot here so you would know what the site looks like when we start introducing different types of errors into it. Let's take a look at some of the tools we offer that will come in handy with fixing websites. 

### Tools

**Daily Backups in WordPress Hosting Pro**

![screenshot-www.websitepro.hosting-2021.11.03-15_22_34.png](./img/4406960816663-453505e265.png)

Within WordPress Hosting Pro under the Backups tab, you will see a list of backups that are created. By default on the creation of a WordPress Hosting Pro install there will be a base backup (clean install). Subsequent backups are created daily. We offer various information to help with the decision of which backup to restore a site to, like WordPress version, size of the database, size of the files, and the number of Posts, Pages, and Plugins. You can restore a backup by clicking the Restore link to the right of the backup you wish to use, and then confirm the restoration. 

**PHP Logs**

![screenshot-www.websitepro.hosting-2021.11.03-15_34_24.png](./img/4406960816663-bc47dc5a2b.png)

The logs here record the date of the error as well as a full trace of how the problem occurred. We do intend to improve the interface by adding features such as searching for specific logs.

**SFTP Access**

![screenshot-www.websitepro.hosting-2021.11.03-16_02_36.png](./img/4406960816663-9d0a28be81.png)

SFTP access can be found on the Advanced Tools tab, under the WordPress Dashboard button. This allows you to set up a key that can be used with an SFTP client. The most common one that I know is Filezilla, which allows you to access the website files directly.

### Staging Environment

![screenshot-www.websitepro.hosting-2021.11.03-16_04_11.png](./img/4406960816663-80676bd613.png)

When you first get to the Staging Environment tab you will need to enable it, which will take a copy of the live website. This tool is quite useful as it includes a toggle for WP\_Debug which will inline errors or warnings as they occur. You can find a wide array of uses with a staging environment:

1.  Notice a certain plugin having an issue, the warning or error will most likely display
2.  The front end of the site is up, but you cannot access the backend and it generates an error, WP\_debug will show you exactly what error
3.  Want to perform a large number of updates or changes, do it on the staging environment and ensure they work, then push it to the live site.

### Errors and General Debugging Steps

Let's get into some errors and typical steps to debug them. We will start with the ones that bring the site down first and then go into general debugging and testing steps later. 

**Internal server error**

**![blobid0.png](./img/4406960816663-1a47873035.png)**

Contrary to what this error message states, this issue isn't caused by the server itself, or the hosting company. This is an error that is usually when there is an issue with the code on the WordPress Site. Whether it is a plugin that didn't completely update or a theme that has an issue in it. There is some problem with the code that cannot be resolved and so the site goes down. 

Ways to Fix this:

1.  Roll back to before the error occurred by restoring a backup
2.  Go into the PHP logs to find the source of the problem and fix it using an SFTP connection to get access to the problem causing file
3.  Enable the staging environment and turn on WP\_Debug, then deal with the problem error as needed like in step 2.
4.  Disable any plugin or theme that is causing the issue. This can be done by renaming the folder of the plugin or theme using an SFTP connection, simply adding -dis to the end should suffice.

As an example, the error above can be seen in the PHP logs:

![screenshot-vendasta-support.zendesk.com-2021.11.03-16_05_23.png](./img/4406960816663-91cba3dbc7.png)

The theme I am using (Divi-child), has incorrect syntax on line 6 of functions.php. This can be fixed by rolling back to the backup I made before the change. We could also open the file with an SFTP connection and correct the syntax issue, I removed a ";" to generate the error on line 6, so it needs to be replaced. This error could also be seen by enabling the staging environment and turning on WP\_Debug.

**The site cannot be reached**

![Screen_Shot_2019-06-12_at_1.52.02_PM.png](./img/4406960816663-c666767cc2.png)

This one isn't actually a WordPress issue or an issue with the hosting of a site, but it comes up often enough that I should mention it, as it technically takes the website down. In this case, the domain itself is not pointing directly to your website host, I tried going to a random domain fehubugadersgos.com to get this screenshot, but you may also notice something like this if anything happens to the domain's connection to your hosting. Whether it is the domain is expired, or something happens with the nameservers for a domain. In this case, you need to contact whomever you registered the domain with or the company that has the nameservers. If you're looking for some more information on domain basics, or how to set it up with WordPress Hosting Pro, see [Set up your domain](../domains/set-up-your-domain).

### General Debugging Steps

Most of the time your site isn't going to be down, but you may notice some functionality not working. For instance, maybe your landing image slider isn't working, or a specific module is having issues. In these cases, it is more difficult to debug as there may not be a prevalent error in WP\_Debug or the Error logs. I recommend checking both of those locations first anyway as they tend to still be able to provide some insights on what is happening. Here are some things you can due to help diagnose or fix the problem. I recommend performing the following on the staging environment so that you don't cause further harm to the live site while testing.

*   Update Themes and Plugins - if these become outdated there could be conflicts or security concerns, as such make sure everything is up to date.
*   If a specific plugin is having an issue, try disabling every plugin other than that one. If it works you know you have a plugin conflict, you can then re-enable plugins and test. Once the issue returns you know that a conflict has happened, you then need to either find a new way to accomplish your objective or reach out to the plugin developer for a solution.
*   If you disabled all plugins but the one, and the functionality is still not working, try switching to a default theme, if it works then you know that the plugin is conflicting with your theme.

### Extra help

We recommend the following resource: [https://codex.wordpress.org/](https://codex.wordpress.org/)

The guides and help offered by codex.wordpress.org are quite useful. Whether it's troubleshooting, learning how to use WordPress, tutorials, or more advanced topics like Writing Plugins, it is a great resource.