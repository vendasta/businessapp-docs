---
title: "Merge multiple SPF records into a single record"
sidebar_label: "Merge SPF Records"
description: "Learn how to merge multiple SPF records into a single record by combining all mechanisms without repeating any parts."
---

# Merge multiple SPF records into a single record

To merge SPF values, include all parts into one single record without repeating any mechanisms. Here's how to merge the following example SPF records for Outlook and MailerLite:

**Example SPF records:**

* `v=spf1 a include:spf.protection.outlook.com -all`
* `v=spf1 a mx include:_spf.mlsend.com ~all`

## Steps to merge SPF records

1. **The SPF record always begins with the version prefix:**

   ```
   v=spf1
   ```

2. **Both records contain an "a" mechanism and the MailerLite SPF record contains an "mx" mechanism, so include both in the new record:**

   ```
   v=spf1 a mx
   ```

3. **Then add both "include" mechanisms into the record:**

   ```
   v=spf1 a mx include:spf.protection.outlook.com include:_spf.mlsend.com
   ```

4. **Lastly, define how emails should be treated if they don't comply with the set rules.** Use the **all** mechanism. The last part must be either `?all`, `-all`, or `~all`. It's not possible to have more than one, so choose which declaration of **all** your domain will use.

## The merged SPF record

The merged SPF record would look like this:

```
v=spf1 a mx include:spf.protection.outlook.com include:_spf.mlsend.com ~all
```
