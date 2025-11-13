# How does WordPress Hosting log me in to the WordPress Dashboard?
WordPress Hosting provides a secure login to the WordPress Admin Dashboard (simply by clicking on the “WordPress Dashboard” button on the Overview page) to make your site safer and easier to use.

Our custom WordPress integration intercepts all attempts to access your WordPress Dashboard and directs unauthenticated traffic to your homepage or our custom login page. This helps us secure your site from password attacks and provide access to your site with more control. It will also allow you to unify your user management and access control for WordPress Hosting and other software solutions.

When a valid user in the WordPress Hosting platform clicks on the “WordPress Dashboard” button the login mechanisms of WordPress will create a new WordPress user to match.

Plugins that attempt to intercept traffic that is normally used for login or WordPress Dashboard are not recommended. There is a high probability that they will interfere with WordPress Hosting’s login mechanisms. _Some plugins, like [Rename wp-login.php](https://en-ca.wordpress.org/plugins/rename-wp-login/), introduce errors or render the WordPress Dashboard inaccessible. These plugins **should not be installed** and they should be **disabled prior to importing your site**._ If you’re unable to access the WordPress dashboard due to a plugin that has taken over the login process, you can still access the file system directly by [connecting through SFTP](https://help.wordpress.hosting/?p=202). This will allow you to remove the problem plugin and access the WordPress dashboard again.

WordPress Hosting’s login system is designed to provide an added layer of security and usability for your WordPress site.