---
title: "Guide to Creating 301 Redirects in WordPress"
sidebar_label: "Guide to Creating 301 Redirects in WordPress"
description: "Encountering a  \"Page Not Found\" (404 error)  can frustrate users and harm your website’s credibility, leading visitors to abandon your site. Broken links also"
---

Encountering a **"Page Not Found" (404 error)** can frustrate users and harm your website’s credibility, leading visitors to abandon your site. Broken links also negatively impact **SEO and user experience**.

A **301 redirect** is a permanent redirection that automatically sends users to a new URL when the original page has moved or been deleted. This ensures that visitors and search engines are directed to the correct content instead of encountering errors.

Using tools like **All in One SEO**, you can easily set up 301 redirects to prevent broken links, retain **backlinks**, and maintain **keyword rankings**. They are particularly useful when changing **permalinks**, restructuring a website, or removing outdated pages. Proper redirection helps preserve **SEO value**, improves **user experience**, and ensures a seamless browsing experience for visitors.

Now, let’s take a look at how you can create 301 redirects in WordPress. We will show you how to do that easily with several [WordPress redirect plugins](https://www.wpbeginner.com/showcase/6-best-free-404-plugins-for-wordpress/ "Best Free 404 Redirect Plugins for WordPress") and manually using code.

1.  1.  [Creating 301 Redirects With AIOSEO Plugin](https://www.wpbeginner.com/beginners-guide/beginners-guide-to-creating-redirects-in-wordpress/#Creating-301-Redirects-With-AIOSEO-Plugin)
        
    2.  [Creating 301 Redirects With Redirection Plugin](https://www.wpbeginner.com/beginners-guide/beginners-guide-to-creating-redirects-in-wordpress/#Creating-301-Redirects-With-Redirection-Plugin)
        
    3.  [Creating 301 Redirects With Simple 301 Redirects Plugin](https://www.wpbeginner.com/beginners-guide/beginners-guide-to-creating-redirects-in-wordpress/#Creating-301-Redirects-With-Simple-301-Redirects-Plugin)
        
    4.  [Redirecting Existing Pages With Page Links To Plugin](https://www.wpbeginner.com/beginners-guide/beginners-guide-to-creating-redirects-in-wordpress/#Creating-301-Redirects-With-Page-Links-To-Plugin)
        

### Video Tutorial

Subscribe to WPBeginner

  
  

  
If you prefer written instructions, keep reading!

### [Method 1: Creating 301 Redirects With AIOSEO Plugin](https://aioseo.com/ "All in One SEO (AIOSEO)")

The simplest way to manage and create 301 redirects is with the [All in One SEO](https://aioseo.com/ "All in One SEO (AIOSEO)") (AIOSEO) WordPress plugin. It’s the [best SEO plugin for WordPress](https://www.wpbeginner.com/showcase/9-best-wordpress-seo-plugins-and-tools-that-you-should-use/ "Best WordPress SEO Plugins and Tools That You Should Use") and is used by over 3 million professionals to improve their site’s SEO.

AIOSEO offers a powerful redirection manager addon that makes it very easy to find broken links on your website and set up 301 redirections to fix them.

Note: You will need [AIOSEO Pro](https://aioseo.com/ "AIOSEO Pro Version") to use the redirection manager. There is also a [free version](https://wordpress.org/plugins/all-in-one-seo-pack/ "AIOSEO Free Version") of AIOSEO, but it doesn’t include 301 redirects.

First, you need to install and configure the AIOSEO Pro plugin on your website. For more information, please refer to our step-by-step guide on [how to set up All in One SEO correctly](https://www.wpbeginner.com/plugins/users-guide-for-all-in-one-seo-pack/ "How to Setup All in One SEO for WordPress Correctly (Ultimate Guide)").

Once the plugin is active, you will need to go to All in One SEO » Redirects in your WordPress dashboard and then click the ‘Activate Redirects’ button![Activate AIOSEO Redirects](https://www.wpbeginner.com/wp-content/uploads/2015/03/303aioseoactivateredirects.png "Activate AIOSEO redirects")

Next, you can click the ‘Settings’ tab and select ‘PHP’ as the Redirect Method.

This is the simplest method for creating redirects and doesn’t require any server-side configuration.

![Select the Redirect Method](https://www.wpbeginner.com/wp-content/uploads/2015/03/303aioseosettingsphp.png "Select the Redirect Method")

AIOSEO also lets you select the Web Server redirect method. However, it requires configuring [Apache](https://www.wpbeginner.com/glossary/apache/ "What Is Apache in WordPress?") or [NGINX](https://www.wpbeginner.com/glossary/nginx/ "NGINX") on your web server. This requires technical knowledge and is not recommended for beginners.

**Creating 301 Redirects**

Now you are ready to create 301 redirections. To get started, head over to the ‘Redirect’ tab.

First, you need to enter the link you’d like to redirect in the ‘Source URL’ field. After that, you should enter the new destination for the link in the ‘Target URL’ field.

![Enter Source URL and Target URL](https://www.wpbeginner.com/wp-content/uploads/2015/03/303aioseo301redirect.png "Enter Source URL and Target URL")Now make sure that the Redirect Type is ‘301 Moved Permanently,’ and then click the ‘Add Redirect’ button.

If you want to redirect multiple URLs to a new location, then simply click the ‘Add URL’ button under the Source URLs field.

Next, you can scroll down to view the logs of the redirects you have created. It shows the number of people who visited the redirected link under the ‘Hits’ column and a toggle option to enable or disable individual 301 redirects.![View Redirect Logs in AIOSEO](https://www.wpbeginner.com/wp-content/uploads/2015/03/303aioseoredirectlog.png "View redirect logs in AIOSEO")**Adding 301 Redirects to Fix 404 Errors**

AIOSEO can also help you [track 404 error pages and fix them](https://www.wpbeginner.com/plugins/how-to-track-404-pages-and-redirect-them-in-wordpress/ "How to Easily Track 404 Pages and Redirect Them in WordPress").

To turn this option on, you have to scroll down to the ‘Redirect Logs’ section in the Settings tab. Then enable the options for ‘404 Logs’ and ‘Redirect Logs.’

You can also select the time period to keep the logs. We recommend keeping them for a maximum of one month for smooth and fast server performance.![Enable 404 Logs](https://www.wpbeginner.com/wp-content/uploads/2015/03/303aioseosettingslogs.png "Enable 404 logs")After enabling these options, make sure to click the ‘Save Changes’ button.

You should now see a new ‘404 Logs’ tab appear in the Redirects section. This is where AIOSEO will track and show your broken links and allow you to set up redirections. You will also see the number of visits to the link under ‘Hits’ and the last accessed date and time.![404 Logs Under Redirects](https://www.wpbeginner.com/wp-content/uploads/2015/03/303aioseo404logs.png "404 Logs Under Redirects")**Note:** You won’t find any data when you first enable the 404 logs. The plugin only starts to record 404 error pages after the setting is enabled.

Next, click the ‘Add Redirect’ link next to the 404 error URL you’d like to redirect. This is not the button at the bottom.

You will now see options to enter a Target URL and select the Redirect Type from the dropdown menu.

![Redirecting a 404 Error Using AIOSEO](https://www.wpbeginner.com/wp-content/uploads/2015/03/303aioaseoredirectinga404error.png "Redirecting a 404 Error Using AIOSEO")

Go ahead and enter your new URL and choose ‘301 Moved Permanently’ as your redirection type. Now you should click the ‘Add Redirect’ button.

AIOSEO will now create a 301 redirect for your broken link. To see if the redirection is working properly, simply visit the old URL to check if you’re taken to the new target destination.

**Adding 301 Redirects Directly From a Post or Page**

AIOSEO also lets you redirect a published post or page while you are editing it.

If you scroll to the bottom of the page in the WordPress editor, you will find an AIOSEO Settings section. You need to click on the ‘Redirects’ tab.![Redirect a Post From the WordPress Editor](https://www.wpbeginner.com/wp-content/uploads/2015/03/303aioseoredirectfrompost.png "Redirect a Post From the WordPress Editor")The source URL has been filled in for you. Simply enter the new URL in the ‘Target URL’ field, and select ‘301 Moved Permanently’ from the Redirect Type drop-down menu.

Also, if you change the permalink of a post while editing, AIOSEO will offer to redirect the old URL to the new one.

Either way, click the ‘Add Redirect’ button, and you are done.

**Redirecting Full Websites**

If you move your website to a new [domain name](https://www.wpbeginner.com/beginners-guide/beginners-guide-what-is-a-domain-name-and-how-do-domains-work/ "Beginner’s Guide: What is a Domain Name and How Do Domains Work?"), then your visitors may encounter broken links, and your site SEO may suffer.

You can use AIOSEO to move your entire website to a new location without losing traffic or search engine rankings. This is a full site 301 redirect.![AIOSEO Full Site Redirect](https://www.wpbeginner.com/wp-content/uploads/2015/03/303aioseofullsiteredirect.png "AIOSEO Full Site Redirect")It’s important that you do this the right way, so we have created a step-by-step beginner’s guide on [how to do a full site redirect with WordPress](https://www.wpbeginner.com/plugins/how-to-do-a-full-site-redirect-in-wordpress-beginners-guide/ "How to Do a Full Site Redirect in WordPress (Beginner’s Guide)").

### [Method 2: Creating 301 Redirects With Redirection Plugin](https://wordpress.org/plugins/redirection/ "Redirection")

Another way to add and manage redirects in WordPress is with the [Redirection](https://wordpress.org/plugins/redirection "Redirection") plugin.

First, you need to install and activate the plugin. You can follow our detailed guide on [how to install a WordPress plugin](https://www.wpbeginner.com/beginners-guide/step-by-step-guide-to-install-a-wordpress-plugin-for-beginners/ "How to Install a WordPress Plugin – Step by Step for Beginners").

**Note:** While setting up 301 redirects using a WordPress plugin is easy, it has some minor performance setbacks. Depending on your [WordPress hosting provider](https://www.wpbeginner.com/wordpress-hosting/ "How to Choose the Best WordPress Hosting?"), your redirects may be a few microseconds slower than other methods.

If you want to make your redirects as fast as possible, then you can do so by editing your .htaccess file using Method 5 below.

Once activated, visit **Tools » Redirection** and then click the ‘Start Setup’ button.![ Start Setup of Redirection Plugin](https://www.wpbeginner.com/wp-content/uploads/2015/03/303redirectionstartsetup.png "Start setup of Redirection plugin")Next, you can select options to monitor permalink changes in WordPress and keep a log of all your redirects and 404 errors.

You can simply enable these options and click the ‘Continue Setup’ button.![Basic Setup Redirection Plugin](https://www.wpbeginner.com/wp-content/uploads/2015/03/303redirectionbasicsetup-1.png "Basic setup Redirection plugin")

The plugin will now automatically test the Rest API.

When the status comes back as Good, go ahead and click the ‘Finish Setup’ button![Rest API Test in Redirection](https://www.wpbeginner.com/wp-content/uploads/2015/03/303redirectionrestapi.png "Rest API test in Redirection")The redirection plugin will perform a few more tasks to complete its setup. When the progress bar reaches 100%, you can click the ‘Continue’ button and then the ‘Ready to Begin’ button.

# The plugin is now ready for you to create your 301 redirects. To get started, navigate to the **Tools » Redirection** section of your WordPress panel. You should look at the ‘Add new redirection’ section at the bottom of the screen.![Add a New Redirection at the Bottom of the Screen](https://www.wpbeginner.com/wp-content/uploads/2015/03/303redirectionaddnewredirection-1.png "Add a New Redirection at the Bottom of the Screen")You will see the basic settings to add a redirection. However, if you click the gear icon, you’ll see more options to choose your redirection type.

Simply enter the Source URL of your old page and add the ‘Target URL’ you want to redirect to. You should also make sure the HTTP code option is set to ‘301 – Moved Permanently.![Add New Redirection to Your Website](https://www.wpbeginner.com/wp-content/uploads/2015/03/303redirectionaddinga301redirect.png "Add new redirection to your website")

Once you have entered all the details, go ahead and click the ‘Add Redirect’ button.

### [Method 3: Creating 301 Redirects With Simple 301 Redirects Plugin](https://wordpress.org/plugins/simple-301-redirects "Simple 301 Redirects")

One of the easiest ways to create 301 redirects is with the [Simple 301 Redirects](https://wordpress.org/plugins/simple-301-redirects "Simple 301 Redirects") plugin. As the name suggests, it makes 301 redirects really simple.

To start, you will have to [install and activate the plugin](https://www.wpbeginner.com/beginners-guide/step-by-step-guide-to-install-a-wordpress-plugin-for-beginners/ "How to Install a WordPress Plugin – Step by Step for Beginners") on your website.

After that, you need to visit **Settings » 301 Redirects**. Here you can enter the old URL in the ‘Request’ field and your target URL in the ‘Destination’ field.![Simple 301 Redirects](https://www.wpbeginner.com/wp-content/uploads/2015/03/303simple301redirects.png "Simple 301 Redirects")

Once you’ve done that, click the ‘Add New’ button to create the 301 redirect. That’s it.

Simple 301 Redirects will begin working immediately.

### [Method 4: Redirecting Existing Pages With Page Links To Plugin](https://wordpress.org/plugins/page-links-to/ "Page Links to")

Sometimes you may want to keep a post in your site’s feed or a page listed a certain way on your site but have the content hosted elsewhere. This is where the [Page Links To](https://wordpress.org/plugins/page-links-to/ "Page Links To") plugin comes in handy.

Once you [install and activate the plugin](https://www.wpbeginner.com/beginners-guide/step-by-step-guide-to-install-a-wordpress-plugin-for-beginners/ "How to Install a WordPress Plugin – Step by Step for Beginners"), it adds a meta box to your [WordPress editor](https://www.wpbeginner.com/beginners-guide/how-to-use-the-new-wordpress-block-editor/ "How to Use the WordPress Block Editor (Gutenberg Tutorial)"). Here you can enter the address of the new location where you want to send your users.![Page Links To in WordPress Editor](https://www.wpbeginner.com/wp-content/uploads/2015/03/303pagelinksto.png "Page Links to in WordPress editor")When you press ‘Update’ or ‘Publish,’ WordPress will treat the post or page as normal, but when someone visits it, they will instead be redirected to the custom URL you chose.

For example, you might have a [blog](https://www.wpbeginner.com/start-a-wordpress-blog/ "How to Start a WordPress Blog (Beginner’s Guide)") where you occasionally create downloadable content, but you want users in your [online store](https://www.wpbeginner.com/wp-tutorials/how-to-start-an-online-store/ "How to Start an Online Store (Step by Step)") site to see certain posts as products. You can use this plugin to do that without risking duplicate content penalties from Google or splitting your user base.