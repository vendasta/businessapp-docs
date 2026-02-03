---
title: "Add a Custom 404 Page in WordPress"
sidebar_label: "Custom 404 Page"
description: "A custom  404 error page  improves user experience by guiding visitors who land on a broken or non-existent page. Instead of showing a generic error, you can r"
---

A custom **404 error page** improves user experience by guiding visitors who land on a broken or non-existent page. Instead of showing a generic error, you can redirect them to helpful content, search options, or your homepage.

### Method 1: Using a Plugin (Easy & Recommended)

**Step 1: Install a 404 Page Plugin**

1.  Log in to your **WordPress Dashboard**.
2.  Navigate to **Plugins → Add New**.
3.  Search for **“404page – your smart custom 404 error page”**.
4.  Click **Install Now**, then **Activate** the plugin.

**Step 2: Create a Custom 404 Page**

1.  Go to **Pages → Add New**.
2.  Name the page **“404 - Page Not Found”**.
3.  Add a message like:
    
    > "Oops! The page you're looking for doesn’t exist. Try searching or go back to the homepage."
    
4.  Add a **search bar**, **homepage link**, or **popular posts** section.
5.  Click **Publish**.

**Step 3: Set It as the Default 404 Page**

1.  Go to **Appearance → 404 Error Page** (from the plugin settings).
2.  Select the page you just created.
3.  Click **Save Changes**.

### Method 2: Manually Editing the 404.php File (For Developers)

**Step 1: Access Your Theme Files**

1.  Go to **Appearance → Theme File Editor**.
2.  Select **404.php** from the right panel.

**Step 2: Edit the File**

Replace the existing code with:

`<?php get_header(); ?> <div class="error-page"> <h1>Oops! Page Not Found</h1> <p>Sorry, the page you are looking for doesn’t exist.</p> <a href="<?php echo home_url(); ?>">Return to Homepage</a> </div> <?php get_footer(); ?>`

**Step 3: Save and Test**

*   Click **Update File** and visit a non-existent URL (e.g., `yourwebsite.com/randompage`).
*   Your custom 404 page should now appear!

### Which Method Should You Choose?

*   **Use a plugin** if you want a quick and easy way to set up a custom 404 page.
*   **Manually edit the 404.php file** if you prefer a lightweight solution without extra plugins.