# How to connect a custom domain?

### Part 1: Your domain and its Records

1.  Purchase a domain from a Domain Registrar.
2.  Find the Domain Registrar’s page for managing the DNS Records of your new domain
3.  Edit or create a DNS Record for your new domain
    *   We recommend setting a CNAME Record with a value of **_host.websiteprohosting.com_**
    *   If you require an A Record then the value should be **_34.149.86.124_**

### Part 2: Configuring your WordPress Hosting Site

1.  Log into WordPress Hosting and navigate to the **Domains** tab
2.  Click **Connect a Domain**
3.  Enter the domain name you purchased. Click **Add Domain.**
4.  WordPress Hosting will mark the new domain as **Pending** while it verifies that the DNS records are correct. Once the DNS records have been verified (WordPress Hosting checks for this automatically), your domain will show as **Connected.** 
5.  You will receive an email and see a notification in the **Recent** **Activity** stream of **Business Center**.
6.  You can also **Delete** added domains from this tab.
7.  Once it has been **connected** requests for your new domain will be redirected to the **Primary Domain**.

You have the ability to set any of your **connected** domains to be the **Primary Domain**.

1.  On the **Domains** tab
2.  Find the domain in the list, expand the options menu on the right side, then click **Make Primary**.
3.  All of your domains will then redirect to this domain.

### How to connect without using Google Cloud Armor?

WordPress Hosting ingress point by default goes through Google Cloud Armor to provide additional security for our traffic. If you are planning on using your own firewall, you will risk a “Too Many Redirects” error if you pass traffic through both your own firewall and Google Cloud Armor. To bypass the safety provided by Google Cloud Armor, you can direct traffic directly to the NGINX web server using the IP below for your A record on your domain.

**34.149.86.124**