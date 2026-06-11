---
title: Time-based triggers
description: Learn how to set up workflows that run on a schedule using the On a schedule trigger.
sidebar_position: 7
sidebar_label: Time-based triggers
tags: [workflows, scheduled, triggers, recurring, time-based]
keywords: [scheduled workflow, recurring workflow, daily workflow, weekly workflow, monthly workflow, time-based trigger, on a schedule]
---

Run workflows on a recurring schedule without waiting for an event to trigger them. The **On a schedule** trigger is useful for routine tasks like sending team reminders, weekly notifications, or monthly check-ins.

## How time-based triggers work

Unlike event-based triggers that run when something happens (like a company or contact creation), time-based triggers run at times you define. You set the frequency, time of day, and date range, and the workflow runs automatically.

**Key benefits:**
- Automate recurring tasks without manual intervention
- Run workflows at optimal times for your audience
- Set start and end dates to control when the schedule is active

## Set up the On a schedule trigger

**Step 1** — Go to `Business App` > `Workflows`.

**Step 2** — Click `Create workflow` or open an existing workflow.

**Step 3** — In the trigger selection, find **Time-based** and select **On a schedule**.

**Step 4** — Configure the schedule options (see below).

**Step 5** — Add your automation steps and save.

![On a schedule trigger configuration](./img/time-based-trigger-config.png)

## Schedule options

### Daily

Run the automation at the same time every day.

| Setting | Description |
| --- | --- |
| **Time** | The time of day to run (in your configured timezone) |

### Weekly

Run the automation on specific days of the week.

| Setting | Description |
| --- | --- |
| **Time** | The time of day to run |
| **Days of week** | Select one or more days (Sunday through Saturday) |

### Monthly

Run the automation on specific days of the month.

| Setting | Description |
| --- | --- |
| **Time** | The time of day to run |
| **Days of month** | Select one or more days (1-31) |
| **End of month** | Run on the last day of the month, regardless of how many days it has |

:::tip
Use the **End of month** option for consistent month-end notifications. This ensures the workflow runs on the 28th, 30th, or 31st depending on the month.
:::

## Date boundaries

Control when your time-based automation is active.

| Setting | Description |
| --- | --- |
| **Start date** | The earliest date the automation can run. The schedule becomes active on this date. |
| **End date** | (Optional) The latest date the automation can run. After this date, the schedule stops. |

## Timezone

The schedule runs based on your workflow's timezone setting. All times you enter are interpreted in this timezone.

## Example use cases

### Weekly sales task for client check-ins

Create a recurring task to reach out to a key client:
- **Frequency:** Weekly
- **Day:** Wednesday
- **Time:** 10:00 AM
- **Steps:**
  1. Find the contact
  2. Create a sales task to check in with the client

### Invoke an AI employee on a schedule

Invoke an AI employee to generate insights and share them with your team:
- **Frequency:** Daily
- **Time:** 8:00 AM
- **Steps:**
  1. Send a request to an AI employee with your prompt
  2. Send the AI response to Slack or Google Chat

## Troubleshooting

### Workflow did not run at the scheduled time

- Verify the workflow is turned **on** (running state)
- Check that the current date is within the **Start date** and **End date** range
- Confirm the timezone is set correctly in workflow settings

### Schedule options not appearing correctly

- Ensure you have selected at least one day for weekly or monthly frequencies
- For monthly schedules, remember that selecting day 31 only runs in months with 31 days

### Workflow runs at unexpected times

- Double-check your timezone configuration
- Remember that daylight saving time changes may affect the actual run time in your local time

## Related resources

- [Triggers](automation-triggers.md)
- [Workflow conditions](automation-conditions.md)
- [Workflow settings](automation-settings.md)
