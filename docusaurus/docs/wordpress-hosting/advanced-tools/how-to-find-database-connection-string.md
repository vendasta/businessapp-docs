---
title: "How to find database connection string"
sidebar_label: "Database Connection String"
description: "Learn how to find your WordPress site's database connection credentials, including host, database name, username, and password."
---

If you need to find your WordPress site's database connection information (host, database name, username, and password), you can retrieve these credentials even though remote database connections are not supported.

## Why you might need this

You may need your database connection string for:
* Troubleshooting database-related issues
* Understanding your site's configuration
* Documentation purposes
* Migration planning

## How to find database credentials

Although you can't connect to the database remotely, you can display your site's database credentials by creating a temporary PHP file. Follow these steps:

### Step 1: Connect via SFTP

1. Connect to your WordPress Hosting Pro file system using an SFTP client (like FileZilla, Cyberduck, or WinSCP).
2. Navigate to your site's root directory (usually the `public_html` or `www` folder).

### Step 2: Create a temporary PHP file

1. Create a new file on your local computer with a name like `db-info.php`.
2. Add the following code to the file:

```php
<?php
echo "Database Host: " . DB_HOST . "<br>";
echo "Database Name: " . DB_NAME . "<br>";
echo "Database User: " . DB_USER . "<br>";
echo "Database Password: " . DB_PASSWORD . "<br>";
?>
```

3. Upload this file to your site's root directory via SFTP.

### Step 3: View the credentials

1. Open your web browser.
2. Navigate to the file using your domain name, for example: `http://yourdomain.com/db-info.php`
3. The page will display your database connection information.

### Step 4: Delete the file (Important!)

:::warning
This file exposes sensitive database credentials. You must delete it immediately after viewing the information to protect your site's security.
:::

1. Return to your SFTP client.
2. Delete the `db-info.php` file from your server.
3. Verify the file has been removed.

## Important notes

* **Remote connections not supported:** WordPress Hosting Pro databases are isolated in a secure network and cannot be accessed remotely using tools like MySQL Workbench or other database clients.
* **Use phpMyAdmin instead:** For database management, use phpMyAdmin through the WordPress Hosting Pro dashboard under **Advanced Tools**.
* **Keep credentials secure:** Never share your database credentials publicly or commit them to version control systems.

## Frequently Asked Questions

<details>
<summary>Can I use these credentials to connect to the database remotely?</summary>

No. WordPress Hosting Pro databases are isolated in a secure network and cannot be accessed remotely. Even with the connection credentials, remote database tools like MySQL Workbench will not work. Use phpMyAdmin through the WordPress Hosting Pro dashboard under **Advanced Tools** for database management.

</details>

<details>
<summary>What if I forget to delete the PHP file?</summary>

If you forget to delete the file, it remains accessible on your website and exposes your database credentials to anyone who knows the filename. This is a serious security risk. Delete it immediately via SFTP. If you're concerned the file may have been accessed, consider changing your database password through phpMyAdmin.

</details>

<details>
<summary>Is there another way to find my database credentials?</summary>

The database credentials are stored in your WordPress configuration file (`wp-config.php`). However, accessing them through a temporary PHP file is the safest method as it doesn't require editing core WordPress files. You can also view them in `wp-config.php` via SFTP, but be careful not to modify this file accidentally.

</details>

<details>
<summary>Can I use these credentials with phpMyAdmin?</summary>

You don't need these credentials to use phpMyAdmin. phpMyAdmin is accessed directly through the WordPress Hosting Pro dashboard under **Advanced Tools** and automatically connects to your database using the correct credentials. See [What is phpMyAdmin?](./what-is-phpmyadmin.md) for more information.

</details>
