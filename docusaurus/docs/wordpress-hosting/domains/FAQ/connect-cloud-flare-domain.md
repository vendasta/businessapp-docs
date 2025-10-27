# How to connect a CloudFlare Managed Domain?
Cloudflare is a very popular and useful service at both paid and free subscription levels. Some businesses or agencies use it as a Content Delivery Network (CDN) to cache static files and get their site loading faster, others just prefer to have a single nameserver to manage their Domain Name System (DNS) configurations.

Because of some of it’s features there are some steps you’ll have to follow to add any Cloudflare managed domain to your site in WordPress Hosting:

1.  Ensure your DNS Records (relevant A and CNAME records) are configured as [explained here](https://help.websitepro.hosting/?p=12).
2.  In the “Crypto” tab of Cloudflare change the “SSL” to **Full**
3.  In the “Crypto” tab of Cloudflare change “Always use HTTPS” to **Off**
4.  In WordPress Hosting, add the domain(s) in the Domains tab. Note: There might be some propagation delay for those records. See the [DNS Record Caching](https://help.websitepro.hosting/?p=4) article for more information about that.
5.  In the “Crypto” tab of Cloudflare change “Always use HTTPS” to **On**, when the status of the domain(s) is “connected” in WordPress Hosting**.**

**Note**: Unfortunately CloudFlare has some technical limitations if you are using a four level domain (like “_www**.**your**.**business**.**com_“)  that can be solved in one of two ways:

1.  Turn off the **DNS and HTTP Proxy** mode for that domain, or
2.  Purchase additional SSL Certificates for CloudFlare under the “Crypto” tab under the “Edge Certificates > Order SSL Certificate” section.