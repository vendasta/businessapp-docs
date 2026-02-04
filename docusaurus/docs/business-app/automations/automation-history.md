---
title: Automation activity & history
sidebar_position: 1
description: View and troubleshoot past automation runs using the Activity and History logs.
tags: [automation, troubleshooting]
keywords: [automation history, automation logs, troubleshoot workflows, automation success rate]
---

Use Automation Activity to see what ran, when it ran, and whether it succeeded. This helps you verify outcomes and troubleshoot issues.

## Where to find it

1. Go to Business App > Administration > Automations
2. Open an automation
3. Select the Activity tab to review recent runs

## What you’ll see

- **Contact**: The person or company the automation ran for
- **Step**: The specific action in the workflow (e.g., "Send a webhook", "Create an opportunity", "Trigger")
- **Activity**: What happened in that step (e.g., "Automation completed", "Sent webhook", "Opportunity was created")
- **Started Time**: When the step occurred

### Activity statuses

- **Automation completed**: The run finished successfully
- **Running**: The workflow is in progress and steps update in real time
- **Entered automation**: The automation was triggered and started
- **Sent webhook / Created opportunity**: Specific actions that completed successfully


## Troubleshooting tips

- Check data requirements: Make sure required fields (for example, phone for SMS) exist
- Review error handling: In Settings, choose whether to continue on step error or stop the run
- Reduce noise: Add Conditions so the automation runs only when needed
- Avoid duplicates: Use the Entry settings (Only once / Multiple / One at a time) appropriately

## Pro tips

- Test first: Trigger the automation with a test record before enabling broadly
- Monitor early: Review Activity after enabling to confirm expected behavior
- Log context: Use tags or fields so you can filter runs and outcomes later

## Frequently asked questions

<details>
<summary>Why is my automation stuck in "Running"?</summary>

A "Running" status usually means the automation is waiting for a step to complete (like a delay or web request). If it stays stuck for an unusually long time, check specifically for steps that might be timing out or waiting on external systems.

</details>

