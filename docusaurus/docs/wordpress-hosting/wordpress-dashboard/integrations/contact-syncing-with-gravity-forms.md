---
title: "Contact Syncing with Gravity Forms"
sidebar_label: "Gravity Forms Sync"
description: "Gravity Forms is a powerful tool for capturing leads, but to ensure those leads sync correctly with your CRM, certain configurations must be set up properly. T"
---

Gravity Forms is a powerful tool for capturing leads, but to ensure those leads sync correctly with your CRM, certain configurations must be set up properly. This article walks you through the **essential steps** to ensure contact form submissions are parsed and recorded accurately.

### 1\. Ensure Proper Form Field Mapping

When using Gravity Forms with CRM integration (like WordPress Hosting CRM), form fields must be set to dynamically pass data. This includes:

*   Mapping fields like **Name**, **Email**, **Phone**, etc., using the correct **merge tags**.
    
*   Using dynamic shortcodes in your form-to-CRM configuration to ensure that field data is parsed and passed along correctly.
    

> If fields are not mapped correctly, contact entries may not appear in the CRM.  
>   
> ![](../img/32998786914583-e631d12edc.png)

### 2\. Configure Email Notifications Correctly

To prevent emails from being flagged as spam or failing delivery, you must configure both the "From Email" and the "Reply-To Email" correctly.

**From Email**

Set the **From Email** address to one that matches your website’s domain.

**Example:**  
If your website is `example.com`, use:

    admin@example.com
    

**Avoid:**  
Using emails like `yourname@gmail.com` or `contact@yahoo.com`, as these can fail DMARC/DNS checks and get flagged or blocked.

**Reply-To Email**

To ensure the **user’s email** is captured and used for CRM contact creation:

*   Go to: `Form > Settings > Notifications`
    
*   In the **Reply-To** field, click on the **merge tag selector** `{..}`
    
*   Choose the form field that collects the user’s **Email**
    

This ensures that the CRM picks up the correct contact email from the form submission.

### 3\. Troubleshooting Form Sync Issues

If contact sync isn’t working, verify the following:

*   The form fields haven’t changed recently (which could break existing mappings).
    
*   The correct merge tags are still in place.
    
*   The email notification settings match what’s outlined above.
    

> **Note:** This issue has been confirmed on AGID instances `AG-NFJKB35TT3` and `AG-FSJ3Z47NXP` due to recent field changes.

### 4\. Updating Other Sites

If similar syncing issues are occurring on other AGIDs or partner sites:

*   Check the **email notification settings**.
    
*   Confirm field mapping and dynamic tag usage.
    
*   Coordinate with the partner to apply the necessary fixes.
    

![Notification Settings](https://chatgpt.com/c/image-20250403-092650.png)

### Summary Checklist

Task

Status

Use domain-matching **From Email**

✅

Set **Reply-To** to dynamic Email field

✅

Use correct form merge tags

✅

Validate fields haven’t changed recently

✅

Test form submission and CRM contact creation

✅