---
title: Automation Activity & History
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

- Entity: The record the run acted on (for example, Contact or Company)
- Automation: The workflow name
- Starting user: Who initiated the run (system or a user)
- Time: When the last step in the run occurred
- Stage: Current status of the run

### Run stages

- Completed: The run finished successfully
- Running: The workflow is in progress and steps update in real time
- Canceled: The run was stopped before completion


## Troubleshooting tips

- Check data requirements: Make sure required fields (for example, phone for SMS) exist
- Review error handling: In Settings, choose whether to continue on step error or stop the run
- Reduce noise: Add Conditions so the automation runs only when needed
- Avoid duplicates: Use the Entry settings (Only once / Multiple / One at a time) appropriately

## Pro tips

- Test first: Trigger the automation with a test record before enabling broadly
- Monitor early: Review Activity after enabling to confirm expected behavior
- Log context: Use tags or fields so you can filter runs and outcomes later

## Frequently Asked Questions

<details>
<summary>Why is my automation stuck in "Running"?</summary>

A "Running" status usually means the automation is waiting for a step to complete (like a delay or web request). If it stays stuck for an unusually long time, check specifically for steps that might be timing out or waiting on external systems.

</details>

