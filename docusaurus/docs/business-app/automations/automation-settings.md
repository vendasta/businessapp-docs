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

### Available options

**Only once per contact**
- Runs a single time for each contact, ever
- Best for: Welcome emails, one-time onboarding tasks, initial setup workflows

**Multiple times per contact**
- Runs every time the trigger conditions are met
- Best for: Recurring notifications, activity logging, event-based responses

**One at a time per contact**
- Ensures a new run starts only after the previous one finishes
- Best for: Workflows that update the same fields, complex multi-step processes

:::warning
If your automation updates the same record (for example, applies tags or updates fields), prefer "One at a time per contact" to avoid overlapping runs and duplicate changes.
:::

### When to use each setting

| Setting | Use When | Example |
|---------|----------|---------|
| Only once | You want something to happen exactly one time per contact | Send welcome email when contact is created |
| Multiple times | You need to respond every time an event occurs | Log activity when email is opened |
| One at a time | Steps modify the same data or depend on previous completion | Update lead score based on multiple criteria |

## Error handling

Error handling settings determine what happens when a step in your automation fails (for example, if a required field is missing or an API call times out).

![Error handling settings options in automation settings](./img/automations-error-handling-settings.png)

### Available options

**Skip the step and continue** (Recommended)
- The automation continues to the next step even if one step fails
- Failed steps are logged in the Activity tab
- Best for most scenarios

**Stop the automation run**
- The entire automation stops if any step fails
- No further steps are executed
- Use when later steps depend on earlier ones completing successfully

:::tip
Use "Skip the step and continue" for non-critical actions like logging or tagging so the rest of the workflow can complete. Use "Stop the automation run" when steps must complete in sequence (for example, create opportunity → add note → assign to rep).
:::

### Choosing the right error handling

| Scenario | Recommended Setting | Why |
|----------|-------------------|-----|
| Send notification + update CRM field | Skip and continue | If notification fails, you still want the field updated |
| Create record → Add note to record | Stop on error | Can't add note if record creation failed |
| Multiple independent actions | Skip and continue | Each action stands alone |
| Sequential dependent steps | Stop on error | Later steps need earlier data |

## Best practices

### Test before enabling broadly

1. Create a test contact or company
2. Manually trigger your automation
3. Check the Activity tab to verify expected behavior
4. Review any messages or data changes
5. Adjust settings if needed

### Start conservative, then optimize

- Begin with "Only once per contact" if unsure
- Monitor the Activity tab after enabling
- Switch to "Multiple times" if you see missing runs
- Add "One at a time" if you notice race conditions

### Handle errors gracefully

- Use "Skip and continue" for most workflows
- Add conditions to prevent errors (for example, check if phone number exists before sending SMS)
- Review failed runs regularly in the Activity tab
- Update your automation based on common errors

### Document complex workflows

- Add clear names to your automations
- Use descriptive trigger and action labels
- Note any dependencies in your internal documentation
- Consider creating templates for reusable patterns

## Common scenarios

### Scenario 1: Welcome sequence for new customers

**Entry setting:** Only once per contact  
**Error handling:** Skip and continue  
**Why:** Each customer should receive the welcome email exactly once. If an optional step fails (like adding a tag), the main email should still send.

### Scenario 2: Activity logging for sales team

**Entry setting:** Multiple times per contact  
**Error handling:** Skip and continue  
**Why:** You want to log every interaction. If one log entry fails, others should still succeed.

### Scenario 3: Multi-step lead qualification

**Entry setting:** One at a time per contact  
**Error handling:** Stop on error  
**Why:** Steps update the same lead score field and depend on each other. Running multiple instances simultaneously could cause incorrect scoring.

### Scenario 4: Review request after service completion

**Entry setting:** Multiple times per contact  
**Error handling:** Skip and continue  
**Why:** Customers can have multiple services, so they might get multiple review requests. If one email fails, don't block the automation.

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

- [Automation activity & history](automation-history.md) - Monitor and troubleshoot automation runs
- [Messaging actions](messaging.md) - Configure SMS and email actions
- [Automations overview](index.mdx) - Learn the basics of creating automations
