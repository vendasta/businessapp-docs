# How to point your GoDaddy domain from your old host to WordPress Hosting?
If your domain is currently pointing to a site on another host, then these instructions should allow you to point your domain to your WordPress Hosting site, with zero downtime. These less specific [Domain Transfer Instructions](./connect-custom-domain.md) might be more helpful if your [DNS records](./what-are-dns-records.md) are not managed in GoDaddy. Follow these [new domain connection instructions](./new-godaddy-domain.md) if you are not transfering your domain from a previous host.

* * *

Part 1: Configuring your WordPress Hosting Site
-----------------------------------------

1.  Log into WordPress Hosting and navigate to the **Domains** tab
2.  Click **Connect a Domain**
3.  Enter the domain name you purchased. Click **Add Domain.**
4.  Your domain will show up in the table and it will be marked **p****ending** while WordPress Hosting gets ready to handle requests on that domain. This should take a minute.
5.  When it can handle requests on that domain it will appear **disconnected** because WordPress Hosting can detect that your DNS records have not been updated. Once you followed the steps in Part 2 it should become **connected**.
    *   Your SSL Certificate will also be **pending** at this point. Once the domain is **connected** it takes several more minutes to obtain an SSL Certificate.
6.  Expand **Advanced Settings** and disable **Redirect to HTTPS** temporarily (Part 3 will enable it again). _It is very important to re-enable this setting_ because serving traffic on **HTTPS** is much safer and it improves your site’s ranking in Search Engines.
7.  Click **Make Primary** on the domain that you want all your visitors to be redirected to from the alternate domains.

Part 2: Editing your DNS settings on GoDaddy
--------------------------------------------

1.  On GoDaddy, go to Domains > All Domains
2.  Select your domain name from the list to access the **Domain Settings** page
3.  Scroll down to **Additional Settings** and select **Manage DNS**  

![](../img/dns-additional-settings.png)

4.  On the **DNS Management** page, find the **Records** section
5.  Click the pencil icon at the right side of the row with the **Name** “**@”,** make sure it is an “**A”** record, and change the value to be **_34.149.86.124_**
6.  If you have a **www** record click the pencil icon at the right side of the row with the **Name** “**www”**, make sure it is a “**CNAME**” record and change the value to be **_host.websiteprohosting.com_**
7.  Click **Save** to complete the process
8.  To encourage the DNS system on the internet to update quickly you can flush Google’s DNS cache using their [Google Public DNS Flush Cache](https://developers.google.com/speed/public-dns/cache) tool.
9.  Allow up to 24 hours for all changes to take full effect. During this time your old host may still be serving your site’s traffic. You can check on the status of your DNS Settings using tools like [MxToolbox DNS Lookup](https://mxtoolbox.com/DNSLookup.aspx) or viewing the **Domains** tab in **WordPress Hosting.**

Part 3: Finalizing your WordPress Hosting Configuration
-------------------------------------------------

_It is very important to re-enable this setting_ because serving traffic on **HTTPS** is much safer and it improves your site’s ranking in Search Engines.

1.  Log into WordPress Hosting and navigate to the **Domains** tab
2.  Expand **Advanced Settings**
3.  Enable **Redirect to HTTPS**