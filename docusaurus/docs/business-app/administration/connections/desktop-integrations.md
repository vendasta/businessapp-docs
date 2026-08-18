---
title: Desktop Integrations
description: Connect desktop-based software to Business App using the Broadly Upload Client to sync customer and invoice data automatically.
sidebar_position: 4
tags: [integrations, desktop, connections, quickbooks, upload-client]
keywords: [desktop integration, Broadly Upload Client, QuickBooks Desktop, Mitchell Manager, RO Writer, Napa TRACS, Dentrix, access key]
---

Desktop-based software connects to Business App through the **Broadly Upload Client**, a lightweight application installed on your computer that syncs customer and invoice data automatically.

Integrations that use this method include **QuickBooks Desktop**, **Mitchell Manager**, **RO Writer**, **Napa TRACS**, **Napa TRACS Enterprise**, and **Dentrix**.

## Connect a desktop integration

### Step 1: Find the integration

1. Go to **Administration** → **Connections** in Business App.
2. Click the **Browse** tab.
3. Find the integration card for your application and click it.

### Step 2: Review the marketing page and connect

The marketing page describes what the integration does. Click **Connect** to start the setup process.

### Step 3: Complete the pre-connect form

The pre-connect form outlines the steps required to set up the integration. Click **Add Connection** to continue.

### Step 4: Copy your access key

After submitting the form, you are taken to the Connection Settings page. Copy the **Access Key** shown — you will need it during the Broadly Upload Client installation.

## Install the Broadly Upload Client

### Step 1: Download and install

Download the Broadly Upload Client and run the installer:

[Download Broadly Upload Client](https://clients.upload.broadly.com/stable/Broadly_Upload_Client_Installer.msi)

Click **Next** through the installation prompts. Ignore any "Time Remaining" pop-up that appears during the process.

### Step 2: Enter your access key

When prompted, paste the Access Key you copied from the Connection Settings page.

### Step 3: Select your integration

Choose the desktop application you are connecting (for example, **QuickBooks Desktop**).

### Step 4: Set filters for review requests (QuickBooks Desktop)

By default, all invoices and sales receipts are eligible to trigger review requests. You can narrow this:

- **Only paid invoices**: Check **Only upload invoices with $0 balance** to wait until an invoice is fully paid before triggering a review request.
- **Filter by Invoice Class**: Enter one or more exact Class names (case-sensitive) to upload invoices for specific classes only. When a class filter is active, all other classes — including unclassified invoices — are excluded.

### Step 5: Grant data access in QuickBooks

During installation, QuickBooks may show a pop-up requesting permission for the Broadly Upload Client to read your data. Select:

> **Yes, always allow access even when QuickBooks isn't running**

### Step 6: Complete installation

Continue through the prompts until the **All Done** screen appears.

### Step 7: Test the connection

Send a test invoice that matches your filter criteria. It should appear in Business App the next time the hourly sync runs.

## Troubleshooting

<details>
<summary>Initial upload hangs and does not complete</summary>

**Symptom**: The Broadly Upload Client freezes on the upload screen and eventually times out.

**Cause**: The Upload Client does not have permission to read data in your QuickBooks file.

**Fix**: In QuickBooks, go to **Edit** → **Preferences** → **Integrated Applications** → **Company Preferences** → **Broadly Upload Client** → **Preferences**, then check **Allow access for this application even when QuickBooks isn't running**.

</details>

<details>
<summary>Scheduled task execution failed during initial upload</summary>

**Symptom**: The initial upload fails with a "Scheduled Task execution failed" error.

**Fix**:
1. Verify that **QBFC 13.0** is installed. If not, [download it here](https://clients.upload.broadly.com/stable/QBFC13_0Installer.exe).
2. Make sure QuickBooks Desktop is open in **single-user mode** during setup.

</details>

## Frequently Asked Questions (FAQs)

<details>
<summary>How often does the Upload Client sync data?</summary>

The Broadly Upload Client runs an automatic sync every hour. Data from qualifying invoices or records appears in Business App after the next scheduled sync.

</details>

<details>
<summary>What happens if I set an Invoice Class filter?</summary>

Only invoices matching the exact Class name you entered are uploaded. All other invoices — including those with no class assigned — are excluded. Class names are case-sensitive, so make sure they match exactly as they appear in QuickBooks.

</details>

<details>
<summary>Can I use this on multiple computers?</summary>

The Broadly Upload Client should be installed on the computer that runs your desktop application. Each business location requires its own Access Key generated from that location's Business App account.

</details>
