# How should I configure my DNS records to connect to WordPress Hosting?
DNS Records are an important and necessary part of of the web. You can learn more about them from the article [What are DNS records?](what-are-dns-records.md)

To connect your domain to WordPress Hosting, it must have either an **A Record**, or a **CNAME**:

1.  **A Records**
    * If an A Record is required then it should point to _34.149.86.124_
2.  **CNAME Records**
    * It is recommended that sites use a CNAME Record pointing to _host.websitepro.hosting_

You should also be aware that **CAA Records** (if present) can prevent WordPress Hosting from obtaining an SSL/TLS certificate and securely serving traffic:

*   You don’t need one at all. If there is no **CAA Record** then any issuer can provide valid SSL/TLS certificates
*   If you do want to a **CAA Record** (which is more secure) then you must allow _letsencrypt.org_ to be a certificate authority. Let’s Encrypt is the certificate authority WordPress Hosting uses to generate and renew SSL certificates.