---
title: Campaign exports – limits and workarounds
sidebar_label: Exports: limits and workarounds
description: Learn about the 10,000-row export limit for Campaigns and how to segment results to get unique opens or other activity.
tags: [campaigns, exports, analytics, email]
keywords: [export, campaign-activity, opened, csv, limits, 10k, filter]
---

## What are campaign exports?
Campaign exports let you download activity from a single campaign (for example, email activity) as a CSV file so you can analyze results or follow up outside the app.

## Why are campaign exports important?
- You can review engagement offline and share results with your team.
- You can combine multiple exports to build targeted follow-up lists.

## What’s included in a campaign export?
Exports include the columns shown in your current campaign activity view. If you change filters in the view before exporting, the CSV reflects those filters.

:::warning
Campaign exports are limited to 10,000 records per export. When more than 10,000 records match your filters, only the first 10,000 are included.
:::

## How to export campaign activity
1. Open Campaigns and select the campaign you want to review.
2. Go to the activity view you want to export.
3. Apply any available filters (for example, set `Email activity` to `Opened`).
4. Select `Export` and download the CSV file.

## Export limits and recommended workarounds
If your campaign has more than 10,000 matching records, use these options to get a complete list:

- Slice the export into smaller batches
  - Apply available filters (for example, email activity, account, or user—when present) to keep each export under 10,000 records.
  - Run multiple exports for each slice and combine the CSV files.

- De‑duplicate after combining files
  - After you merge multiple CSVs, use your spreadsheet tool’s `Remove duplicates` or similar feature to keep only unique entries.

- Ask Support for a full export
  - If the view does not offer filters that let you reduce results below 10,000, contact Support and request a full export for the specific campaign.

:::info
The campaign activity view does not provide pagination for “next 10,000.” To retrieve activity beyond the first 10,000 results, you must segment with filters and export in batches or contact Support.
:::

## Frequently asked questions (FAQs)
<details>
<summary>Is there a hard limit on campaign exports?</summary>
Yes. Exports are limited to 10,000 records per export from the campaign activity view.
</details>

<details>
<summary>Can I export everyone who opened an email in a large campaign?</summary>
Yes, but you may need to export in batches using available filters so that each export is below 10,000 results. Then combine and de‑duplicate the CSV files.
</details>

<details>
<summary>Does the export include only unique email addresses?</summary>
The CSV reflects the rows visible in your activity view. If the view shows unique rows per address for your selected activity, the export will match that.
</details>

<details>
<summary>Can I filter by date, user, or account before exporting?</summary>
Filtering options vary by activity view. Some views offer only `Email activity`. If a filter is not available in the view, it cannot be applied to the export.
</details>

<details>
<summary>Is there a way to page to the next 10,000 records?</summary>
No. The campaign activity export does not offer pagination to retrieve records beyond the first 10,000.
</details>

<details>
<summary>What’s the best way to combine multiple exports?</summary>
Open each CSV in a spreadsheet tool, stack them into one sheet, and run a de‑duplication step to remove duplicate rows.
</details>

<details>
<summary>My CSV is missing records—why?</summary>
If more than 10,000 records match your filters, the export stops at 10,000. Reduce the result set with filters, export in batches, or contact Support for a full export.
</details>

<details>
<summary>Can Support provide a one-time full export for a campaign?</summary>
Yes. If you cannot segment results below 10,000 using in‑app filters, contact Support and request a full export for the campaign.
</details>

<details>
<summary>Will changing filters after I export update the CSV?</summary>
No. The CSV reflects the filters at the time you selected `Export`. Change filters and export again to get a different set.
</details>

<details>
<summary>What file format is used?</summary>
Exports download as CSV files, which you can open in any spreadsheet tool.
</details>
