# What are DNS records?
The Domain Name System \[DNS\] refers to a collection of standards and internet infrastructure that allows a client (like Chrome, Safari, or Edge running on your laptop).  They allow us to use an easy-to-remember domain name to represent a server address.

It’s like being able to ask a Taxi Driver to take you to “the mall” instead of giving the exact street address. The Taxi Driver can look up a listing for the mall and find the address and directions.

DNS records act like listings for website addresses. They are set up on NameServers, whose purpose is to answer questions about domain names. Like “where do I find mybusiness.com?”

The standards are detailed and in general, require a lot of explanation. WordPress Hosting only concerns itself with 3 kinds of records:

1.  **A Records**
    *   The “A” stands for “Address Record”
    *   These are records that point from a domain name to a specific Internet Protocol \[IP\] address
    *   In general, an A Record says
        *   “if you’re looking for mybusiness.com you should be able to find it at the address 216.239.38.21”
2.  **CNAME Records**
    *   This stands for “Canonical Name Record” (_in this case_ _Canonical means “the rule that must be followed” and CNAME Records override some other records)_
    *   These are records that point from a domain name to another domain name
    *   For instance, if you set a CNAME Record for “mybusiness.com” then it will trump records set for subdomains like “www.mybusiness.com” or “smpt.mybusiness.com”. If these are configured incorrectly it can cause problems.
    *   In general, a CNAME Record says
        *   “if you’re looking for www.mybusiness.com you should be able to find it at mybusiness.com”

2.  **CAA Records**
    *   This stands for “Certificate Authority Authorization”
    *   A Certificate Authority is an organization that can give out the SSL/TLS Certificates
        *   Those certificates prove “I’m the website I claim to be”
        *   They are also used to make your communication with that website private
        *   This is what allows the giving you the “s” in “https://…”
    *   The CAA Record says:
        *   “If you are one of these authorities then you are allowed to make SSL/TLS certificates for this domain”
    *   If there is no CAA Record (or the record is empty) then anyone is allowed to generate certificates for that domain. This is the most common case.