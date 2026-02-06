---
title: "Existing Users After Import"
sidebar_label: "Existing Users"
sidebar_position: 4
description: "Learn how to handle existing WordPress users after importing a site into WordPress Hosting. Two options for maintaining user access."
---

# Existing Users After Import

When you import an existing site into WordPress Hosting, your WordPress users will not initially be able to log in. To maintain your users' ability to log in, you have two options:

## Option 1: Delete and Recreate Users

1. Delete all existing WordPress users
2. Create Business App users for each person who needs access to the site
3. The first time they access the WordPress Dashboard, a WordPress user with Administrator access will be automatically created using their email address

## Option 2: Match Existing Users

Create a Business App user for each of your existing WordPress users with **the same email address**. Existing WordPress users will need a Business App user created with the matching email to be able to log in.

:::info
Email addresses must match exactly between WordPress and Business App users. For example, if Bob is a WordPress user with the email `robert@email.com`, the Business App user must also use `robert@email.com`, not `bob@email.com`. If the emails don't match, a new WordPress user will be created, resulting in duplicate users.
:::
