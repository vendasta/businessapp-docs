# WordPress Dashboard Login
WordPress Hosting provides a secure login to the WordPress Admin Dashboard (simply by clicking on the “WordPress Dashboard” button on the Overview page) to make your site safer and easier to use.

Our custom WordPress integration intercepts all attempts to access your WordPress Dashboard and directs unauthenticated traffic to your homepage or our custom login page. This helps us secure your site from password attacks and provide access to your site with more control. It will also allow you to unify your user management and access control for WordPress Hosting and other software solutions.

When a valid user in the WordPress Hosting platform clicks on the “WordPress Dashboard” button the login mechanisms of WordPress will create a new WordPress user to match.

Plugins that attempt to intercept traffic that is normally used for login or WordPress Dashboard are not recommended. There is a high probability that they will interfere with WordPress Hosting’s login mechanisms. _Some plugins, like [Rename wp-login.php](https://en-ca.wordpress.org/plugins/rename-wp-login/), introduce errors or render the WordPress Dashboard inaccessible. These plugins **should not be installed** and they should be **disabled prior to importing your site**._ If you’re unable to access the WordPress dashboard due to a plugin that has taken over the login process, you can still access the file system directly by [connecting through SFTP](https://help.wordpress.hosting/?p=202). This will allow you to remove the problem plugin and access the WordPress dashboard again.

WordPress Hosting’s login system is designed to provide an added layer of security and usability for your WordPress site.
## Frequently Asked Questions

<details>
<summary>How do I log into the WordPress Dashboard using WordPress Hosting Pro?</summary>

Accessing your WordPress Dashboard is handled securely through the WordPress Hosting Pro platform.

**Clients:**

* Log into **Business App**
* Go to **My Products > WordPress Hosting Pro**
* Click **WordPress Dashboard**

**Partners (Admins):**

1. Log into **Partner Center**
2. Navigate to the client's account
3. Click **WordPress Hosting Pro** to launch the product
4. Click **WordPress Dashboard**

</details>

<details>
<summary>How does WordPress Hosting Pro handle WordPress login?</summary>

WordPress Hosting Pro uses a **custom SSO (Single Sign-On) integration** to provide secure access to the WordPress Admin Dashboard:

* Clicking the "WordPress Dashboard" button generates a WordPress user that matches the Business App user.
* Unauthenticated access attempts to `/wp-admin` are redirected or denied.
* This login method enhances site security and centralizes user management.

> **Note:** Plugins that alter or override login behavior—such as _Rename wp-login.php_—can interfere with WordPress Hosting Pro's login system and **should not be used**. If a plugin locks you out, you can use **SFTP access** to remove it from your file system.

To disable the WordPress Hosting Pro login override, toggle off **Hide Advanced Login** under **Advanced Tools** in the WordPress Hosting Pro dashboard.

</details>

<details>
<summary>How do I change a user's role in WordPress?</summary>

There are two supported methods for updating a WordPress user's role:

**Option 1: Create via Business App**

1. Create a Business App user.
2. Log in to WordPress as that user.
3. Navigate to **Users > Edit User > Role**, and assign a new role.

**Option 2: Create in WordPress first**

1. In WordPress, create a user **with the same email** as their Business App account.
2. Assign the desired role under **Users > Role**.

> **Important:** The email addresses **must match** exactly between Business App and WordPress. If they differ, a duplicate user will be created.

</details>

<details>
<summary>Can I edit the `.htaccess` file on WordPress Hosting Pro?</summary>

WordPress Hosting Pro is hosted on **NGINX**, which does not use `.htaccess` files (an Apache-only feature). While you can **view** the `.htaccess` file via SFTP, any changes made to it **will have no effect**.

This ensures platform-wide performance and security consistency.

</details>

<details>
<summary>Is the `robots.txt` file accessible?</summary>

Yes, but only when using a **custom domain**.

* The `robots.txt` file is **not accessible** on:
  * The default WordPress Hosting Pro domain (`yourbusiness.websitepro.hosting`)
  * The staging domain (`yourbusiness-staging.websitepro.hosting`)
* The file **is accessible** when the site is live on a **custom domain** (e.g., `www.yourbusiness.com/robots.txt`)

This behavior supports white-labeling and privacy during development.

</details>
