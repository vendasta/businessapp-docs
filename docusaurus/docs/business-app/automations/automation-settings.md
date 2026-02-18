---
title: Automation Settings
sidebar_position: 1
description: Configure how and when your automations run with entry settings and error handling options.
tags: [automation, settings, configuration]
keywords: [automation settings, entry settings, error handling, automation configuration, workflow settings]
---

# Automation Settings

Each automation has a Settings tab where you control how and when your workflow runs. These settings help you avoid duplicate runs, manage errors gracefully, and ensure automations behave as expected.

## Where to find settings

1. Go to Business App > Administration > Automations
2. Open an automation
3. Select the **Settings** tab
4. Configure entry settings and error handling options

## Entry settings

Entry settings control how frequently an automation can run for the same contact or company.

![Entry settings options in automation settings](./img/automations-entry-settings.png)

| Setting | What It Does | When to Use | Example |
|---------|--------------|-------------|---------|
| **Only once per contact** | Runs a single time for each contact, ever | One-time actions that should never repeat | Send welcome email when contact is created |
| **Multiple times per contact** | Runs every time the trigger conditions are met | Recurring notifications or event responses | Log activity when email is opened |
| **One at a time per contact** | Ensures a new run starts only after the previous one finishes | Workflows that update the same fields or have dependencies | Update lead score based on multiple criteria |

:::warning
If your automation updates the same record (for example, applies tags or updates fields), prefer "One at a time per contact" to avoid overlapping runs and duplicate changes.
:::

## Error handling

Error handling settings determine what happens when a step in your automation fails (for example, if a required field is missing or an API call times out).

![Error handling settings options in automation settings](./img/automations-error-handling-settings.png)

| Setting | What It Does | When to Use | Example |
|---------|--------------|-------------|---------|
| **Skip the step and continue** (Recommended) | Automation continues to next step even if one fails. Failed steps are logged in Activity tab | Non-critical actions or independent steps that don't depend on each other | Send notification + update CRM field (if notification fails, field still updates) |
| **Stop the automation run** | Entire automation stops if any step fails. No further steps execute | When later steps depend on earlier ones completing successfully | Create opportunity → Add note → Assign to rep (can't add note if opportunity creation failed) |

:::tip
Use "Skip and continue" for non-critical actions like logging or tagging. Use "Stop on error" when steps must complete in sequence (for example, create opportunity → add note → assign to rep).
:::

## Frequently asked questions

<details>
<summary>What happens if I change entry settings after the automation is running?</summary>

The new settings apply to future runs only. Past runs are not affected. For example, if you switch from "Only once" to "Multiple times," contacts who already received the automation can receive it again on the next qualifying trigger.

</details>

<details>
<summary>Can I see which setting caused an automation to skip?</summary>

Yes. Check the Activity tab for the automation. If a run was skipped due to entry settings, you'll see a note indicating the contact already entered the automation (for "Only once" setting) or that another run is in progress (for "One at a time" setting).

</details>

<details>
<summary>How do I reset "Only once per contact" for testing?</summary>

You can't reset the entry history directly. Instead, create a new test contact or clone the automation for testing purposes. Once testing is complete, delete the test automation and use the original.

</details>

<details>
<summary>What counts as an "error" for error handling purposes?</summary>

Errors include: missing required fields (phone for SMS, email for email actions), API timeouts, invalid data formats, permission issues, or external service failures. Conditions not being met is not an error—the automation simply won't run.

</details>

<details>
<summary>Can different steps have different error handling?</summary>

No. Error handling is set at the automation level and applies to all steps. If you need different error handling for different actions, consider splitting them into separate automations.

</details>

## Related resources

- [Automation activity & history](automation-activity.md) - Monitor and troubleshoot automation runs
- [Messaging actions](workflows/action-messaging.md) - Configure SMS and email actions
- [Automations overview](index.mdx) - Learn the basics of creating automations
