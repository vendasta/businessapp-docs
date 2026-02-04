---
title: "WordPress Security Guide"
sidebar_label: "Security"
description: "Learn how to protect your WordPress site from hackers and cyber threats, including security best practices and understanding XML-RPC."
---

WordPress is popular, which makes it a target for hackers. While WordPress provides security updates, you also need to take extra steps to protect your site from cyberattacks.

## Common Threats & Risks

*   **Weak passwords** – Hackers try different password combinations to break in.
*   **Malicious code (XSS & SQL injection)** – Attackers insert harmful code into your site through plugins or forms.
*   **DDoS attacks** – Too much fake traffic slows or crashes your site.
*   **Outdated software** – Old WordPress versions, themes, and plugins can be exploited.

## How to Secure Your WordPress Site

### 1. Protect Your Login Page

*   Change the default WordPress login URL (e.g., from `/wp-admin` to something unique).
*   Use **multi-factor authentication (MFA)** for extra security.
*   Limit failed login attempts to stop brute force attacks.

### 2. Keep Everything Updated

*   Regularly update WordPress, themes, and plugins.
*   Only use trusted plugins and themes from the WordPress directory.

### 3. Install Security Plugins

Use security plugins like Wordfence or Sucuri to block threats, scan for malware, and enable firewalls.

### 4. Secure Your Website Data

*   Install an **SSL certificate** to encrypt data.
*   Hide your WordPress version to prevent attackers from exploiting known weaknesses.

### 5. Control User Access

*   Only give admin access to trusted users.
*   Delete inactive user accounts.
*   Log out inactive users automatically.

### 6. Regular Backups & Monitoring

*   Monitor site activity and scan for malware regularly.

## Understanding XML-RPC

**XML-RPC** (eXtensible Markup Language Remote Procedure Call) is a protocol that allows for remote communication between different systems. It enables external applications or devices to interact with your WordPress website without logging into the WordPress dashboard.

### Why Do You Need XML-RPC?

XML-RPC is useful for:

#### 1. Mobile App Integration

Many WordPress users manage their sites using mobile apps like the **WordPress iOS or Android app**. These apps rely on **XML-RPC** to send and receive data between your mobile device and your website.

**What it does:**  
XML-RPC allows you to **write posts**, **manage comments**, **upload media**, and more directly from your smartphone or tablet. Without XML-RPC, mobile apps wouldn't be able to communicate with your WordPress site.

#### 2. Remote Publishing and Management

XML-RPC enables **remote publishing** tools, like third-party writing apps or editorial platforms, to submit content to your WordPress site. For example, you can write posts using an external editor and send them directly to WordPress using XML-RPC without having to log into the dashboard.

**What it does:**  
If you're a content creator or manage multiple websites, XML-RPC can make remote publishing much easier and faster.

#### 3. Trackbacks and Pingbacks

Trackbacks and pingbacks are notifications that let you know when another website links to your posts. XML-RPC enables these notifications, which are useful for **tracking backlinks** and understanding the reach of your content.

**What it does:**  
Trackbacks and pingbacks are automatically sent through XML-RPC when another site links to yours, making it easier to manage external engagement and backlinks.

#### 4. Integration with Third-Party Services

Some **third-party services** and **plugins** (such as social media schedulers, SEO tools, or analytics platforms) use XML-RPC to **automate tasks** on your WordPress site. For example, some services allow you to schedule social media posts directly from your WordPress dashboard, or tools like **Jetpack** rely on XML-RPC for some of their features.

**What it does:**  
By enabling XML-RPC, you can use these external tools more effectively and improve your site's functionality.

### Why Doesn't WordPress Hosting Pro Enable XML-RPC by Default?

**WordPress Hosting Pro** does **not enable XML-RPC by default**. This is because **XML-RPC** can pose certain **security risks** if not properly managed. Here are some reasons why it's kept disabled by default:

1.  **Security Vulnerabilities** – XML-RPC has been historically targeted by **brute-force attacks** and **DDoS attacks**. Since it allows external services to communicate with your website, it opens a door that could potentially be exploited by attackers to gain unauthorized access or flood your site with malicious traffic.

2.  **Performance Concerns** – Enabling XML-RPC requires additional resources to handle incoming requests, which could **affect server performance** if not managed properly, especially on high-traffic sites. By disabling it by default, WordPress Hosting Pro ensures that unnecessary features do not consume server resources.

3.  **Minimal Use for Most Users** – Many WordPress users don't need XML-RPC for basic website management. If your site doesn't require remote publishing, mobile app integration, or external app interactions, leaving XML-RPC disabled can help reduce potential attack vectors.

### When Should You Enable XML-RPC?

If you need XML-RPC for any of the reasons mentioned above, such as using mobile apps or integrating third-party tools, you may want to have it **enabled**. Some cases where you might need XML-RPC include:

*   Using a **mobile app** to manage your site (e.g., WordPress app for Android/iOS).
*   **Remote content publishing** or **post scheduling** through third-party tools.
*   Integrating your WordPress site with **external services** or plugins that require XML-RPC, like **Jetpack** or **social media posting apps**.

### How to Enable XML-RPC on WordPress Hosting Pro

On **WordPress Hosting Pro**, XML-RPC is disabled by default, but it can easily be enabled upon **request**. If you need XML-RPC for any of the reasons mentioned, contact support. The team will review your request and enable XML-RPC for your site, ensuring that you have access to the features and integrations you need.

Once enabled, you'll be able to take full advantage of XML-RPC's capabilities without compromising your website's performance or security.

## Security Checklist

| Task | Status |
|------|--------|
| Use strong, unique passwords | ✅ |
| Enable multi-factor authentication | ✅ |
| Keep WordPress, themes, and plugins updated | ✅ |
| Install security plugins | ✅ |
| Use SSL certificate | ✅ |
| Limit admin access to trusted users | ✅ |
| Regular backups and monitoring | ✅ |
| Review XML-RPC needs (disable if not needed) | ✅ |

Following these steps can help keep your WordPress website safe from hackers and cyber threats.

## Related Articles

If you're experiencing login issues, see [Troubleshooting WordPress Login Issues](troubleshooting-wordpress-login-issues.md) for help resolving access problems.
