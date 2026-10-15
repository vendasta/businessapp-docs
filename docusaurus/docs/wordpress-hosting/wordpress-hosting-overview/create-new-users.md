---
title: "Managing Users"
sidebar_label: "Managing Users"
sidebar_position: 2
description: "Learn how to create WordPress users through Business App and change their roles. Users are automatically created in WordPress when you create them in Business App."
brand: business-app
product: wordpress-hosting
audience: smb
---

## Create new users

To create WordPress users using WordPress Hosting, you must create a Business App user. A WordPress user is automatically created when you create the Business App user.

### How it works

* Users are identified by their email address
* The Business App email address is used for WordPress login
* All users created in Business App are assigned the **Administrator** role in WordPress by default

### Example

You want to give Bob access to your WordPress website:

1. Create a Business App user for Bob with the email `bob@email.com`
2. When Bob accesses the WordPress dashboard via WordPress Hosting, he is automatically logged in as an Administrator with the email `bob@email.com`

## Change user roles

If you need to change a user's WordPress role from Administrator to a different role, you have two options:

### Option 1: Create user in Business App first

1. Create a user in Business App.
2. Log in to WordPress as that user.
3. Navigate to `Users` → `All Users` in the WordPress dashboard and edit the user.
4. Select the desired role.

### Option 2: Create user in WordPress first

1. Create a WordPress user with the same email address you'll use for the Business App user.
2. Navigate to `Users` → `All Users` in the WordPress dashboard and edit the user.
3. Change the user role to the desired role.
4. Create the corresponding Business App user with the same email address.

:::warning
Email addresses must match exactly between WordPress and Business App users. For example, if Bob is a WordPress user with the email `robert@email.com`, the Business App user must also use `robert@email.com`, not `bob@email.com`. If the emails don't match, a new WordPress user will be created, resulting in duplicate users.
:::
