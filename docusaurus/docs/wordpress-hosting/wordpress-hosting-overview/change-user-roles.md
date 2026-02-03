---
title: "Change User Roles"
sidebar_label: "Change User Roles"
description: "Learn how to change a user's WordPress role from Administrator to a different role using two different methods."
---

# Change User Roles

To change a user's WordPress role from Administrator to a different role, you have two options:

## Option 1: Create User in Business App First

1. Create a user in Business App.
2. Log in to WordPress as that user.
3. Navigate to **Users > Role** in the WordPress dashboard.
4. Select the desired role.

## Option 2: Create User in WordPress First

1. Create a WordPress user with the same email address you'll use for the Business App user.
2. Navigate to **Users > Role** in the WordPress dashboard.
3. Change the user role to the desired role.
4. Create the corresponding Business App user with the same email address.

:::warning
Email addresses must match exactly between WordPress and Business App users. For example, if Bob is a WordPress user with the email `robert@email.com`, the Business App user must also use `robert@email.com`, not `bob@email.com`. If the emails don't match, a new WordPress user will be created, resulting in duplicate users.
:::
