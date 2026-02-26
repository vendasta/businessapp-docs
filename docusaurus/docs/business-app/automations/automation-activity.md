---
title: Automation activity
sidebar_position: 5
description: View and troubleshoot past automation runs using the Activity and History logs.
tags: [automation, troubleshooting]
keywords: [automation history, automation logs, troubleshoot workflows, automation success rate]
---

Use Automation Activity to see what ran, when it ran, and whether it succeeded. This helps you verify outcomes and troubleshoot issues.

## Where to find it

1. Go to **Administration** > **Automations**
2. Open an automation
3. Select the **Activity** tab to review recent runs

![Automation activity tab showing recent runs](./img/automations-activity%20tab.png)

## Understanding the Activity log

The Activity tab displays a log of every time your automation runs. Each row represents a step in the workflow and shows:

- **Contact** - The person or company record that triggered this automation run.
- **Step** - Which part of the workflow executed (e.g., Trigger, Send a webhook, Create an opportunity).
- **Activity** - The outcome of that step. This tells you what actually happened and whether it succeeded. 
- **Started Time** - When this step began executing.

### Key features in Automation Activity

- **Track all automation runs**: View the status of every execution, whether it succeeded, failed, is in progress, or is waiting for a delay.
- **Drill into specific runs**: Click on a specific run to see detailed step-by-step results and error messages.
- **Access trigger details**: See exactly what event initiated the automation (e.g., which contact was created or which form was submitted).
- **Filter activity**: Narrow down results by date, status, or business/account for easier troubleshooting.
- **Retry failed automations**: If a run fails, you can retry it from a specific step so you don?t have to start over from the beginning.

## Troubleshooting

### "My automation didn't fire"

Check these in order:

1. **Is the automation running?** In the automation list, the state must be `Running`, not `Stopped` or `Paused`. Turn it on if needed.
2. **Did the trigger event actually occur?** Confirm the event happened at the time you expected.
3. **Do your conditions match?** Review the filter conditions on your trigger. The data might not meet the criteria.
4. **Is the trigger configured correctly?** Ensure you chose the right event type and mapped required fields.
5. **Was there an error?** Open the **Activity** tab for this automation and look for steps that errored or were skipped.

### "Automation ran but step failed"

1. **Check the Activity tab** for the automation. Find the run that failed and look at each step?s Activity.
2. **Identify the step that errored or was skipped.** Read the Activity details for that step; they usually explain what went wrong.
3. **Retry from a specific step.** Once you have identified and fixed the issue (like a missing field or disconnected integration), use the `Retry` button to resume the automation from the step that failed.

### Common causes for failures:
- **Missing required data** ? A field the step needs was empty or missing.
- **Permission or sign-in** ? The connection or account used by the step may need to be re-authenticated.
- **External service issue** ? The external app or service was unavailable or timed out.
- **Invalid data format** ? The value passed to the step was in the wrong format.

### "Automation is stuck"

An automation may stay in `Running` when:

- **It?s waiting for a "Wait For" condition** ? The workflow is paused until something happens (e.g., a meeting is booked).
- **A delay step is still counting down** ? If you added a "Wait" or delay, the run will continue after the delay ends.
- **Rate limiting** ? The system may temporarily pause runs during heavy use.

## Pro tips

- **Test first**: Trigger the automation with a test record before enabling it for everyone.
- **Monitor early**: Review the **Activity** tab after enabling to confirm it is working as expected.
- **Filter for focus**: Use the status filters (like `Error`) to quickly find and fix issues.

## Frequently asked questions

<details>
<summary>Why is my automation stuck in "Running"?</summary>

A `Running` status usually means the workflow is waiting for something?for example, a delay step, a "Wait For" condition, or an external service. See [Automation is stuck](#automation-is-stuck) above for causes and what to check.

</details>

<details>
<summary>Can I retry a failed automation?</summary>

Yes! If an automation run fails, you can select it in the **Activity** tab and click `Retry`. You can choose to retry from the beginning or from a specific step where the failure occurred.
</details>

<details>
<summary>What should I have ready when I contact support?</summary>

When asking for help with an automation, have the **automation name**, **when** the issue happened, and **what you see in the Activity tab** (a screenshot helps). 
</details>
