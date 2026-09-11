---
title: Text your on-call technician when a call is dispatched
sidebar_position: 3
sidebar_label: On-call dispatch SMS
description: Build an automation that texts the caller's name, issue, and location to your on-call technician whenever the AI Voice Receptionist dispatches a call.
tags: [automation, sms, ai, voice, dispatch]
keywords: [on-call dispatch SMS, AI voice receptionist automation, dispatch notification, after-hours emergency text, transferred call trigger, on-call technician alert]
---

An emergency call comes in after hours. Your AI Voice Receptionist screens it — gathering who is calling, what the emergency is, and where the service is needed — then dials your on-call technician. Sometimes the technician answers and hears the announcement; sometimes the call goes to voicemail or isn't picked up. Either way, your technician needs the details in hand to get on route: the caller's name, the issue, the location, and a number to call back.

This automation closes that gap. Whenever the AI dispatches a call, it texts the full call details to the on-call number — so the information arrives even when the live call didn't connect. The [On-call dispatch](../../ai/ai-workforce/on-call-dispatch.md) capability treats this automation as an essential part of setup: when the technician can't be reached live, the caller is told the on-call technician has been notified, and this text is that notification.

## When to use this

| Situation | Notification | Benefit |
|-----------|--------------|---------|
| Technician missed the dispatch call | SMS with caller, issue, location, and callback number | The technician can still respond without the live handoff |
| Technician answered the dispatch call | SMS with the same details | The spoken announcement is backed up in writing — no scribbling down an address |
| Multiple on-call numbers with different criteria | SMS to whichever number received the dispatch | Each technician gets the details for their own calls |
| You want a record of every transfer | SMS on every outcome | A complete, timestamped log of dispatches in one thread |

## Example: Text the call details to the on-call number

1. **Trigger:** Set the trigger to `An AI-handled call is transferred`. The trigger has a `Transfer outcome` multi-select filter with the options **Answered**, **Voicemail**, **No answer**, **Busy**, **Failed**, and **Unknown**. Leave it empty to fire on any transfer.
2. **Action:** Add the **Send an SMS message to a phone number** step. For the phone number, insert `{.WorkflowStep.trigger.transferred_to_number}` — the number the call was dispatched to. This is what makes the message follow whichever on-call number received the dispatch when you have more than one.
3. **Message:** Build the body from the trigger's dynamic fields:

```
After-hours dispatch: {.WorkflowStep.trigger.outcome}
Caller: {.WorkflowStep.trigger.caller_name}
Issue: {.WorkflowStep.trigger.reason_for_call}
Location: {.WorkflowStep.trigger.service_location}
Call back: {.WorkflowStep.trigger.caller_number}
```

When the automation runs, the placeholders are replaced with the real call details, and the text lands on the on-call phone moments after the dispatch.

## Available fields

The `An AI-handled call is transferred` trigger provides these dynamic fields. The supported way to insert them is the `Insert dynamic content` button in the message editor — see [dynamic content](../dynamic-content-in-automations.mdx) for how the syntax works.

| Field | Description | Example |
|-------|-------------|---------|
| `transferred_to_number` | The number the call was dispatched or transferred to | +15551234567 |
| `caller_number` | The caller's phone number, captured automatically from the call | +15559876543 |
| `outcome` | The transfer outcome: answered, voicemail, no_answer, busy, failed, unknown | no_answer |
| `caller_name` | The caller's name, as collected by the AI during screening | Jordan Smith |
| `reason_for_call` | The emergency or issue in the caller's own words | Burst pipe in the basement |
| `service_location` | The service location the AI confirmed with the caller | 123 Main St, Springfield |
| `contact_id` | The CRM contact, when matched | CON-12345 |
| `crm_contact_created` | Whether a CRM contact was created for the caller | true |
| `namespace` | Internal account identifier; rarely needed in messages | ABC123 |

## Choosing which outcomes to text

The `Transfer outcome` filter controls when the text goes out:

- **Leave it empty** to notify on every transfer. The technician gets the details in writing whether or not they answered, and the SMS thread doubles as a complete dispatch log.
- **Filter to Voicemail, No answer, Busy, and Failed** to text only when the technician missed the live call. There is one dispatch attempt per call, so this is the safety net that makes sure a missed call still carries the details.

:::caution Intake fields are filled only for dispatched calls
The intake fields — `caller_name`, `reason_for_call`, and `service_location` — are collected by the AI during dispatch screening, so they are present only for dispatched calls. For a standard call transfer, they are empty. If you use this trigger beyond dispatch, build your messages on the always-present fields (such as `caller_number`, `transferred_to_number`, and `outcome`), or keep the outcome filter scoped to your dispatch setup.
:::

## Tips

- Write your on-call criteria so the AI knows what counts as an emergency — the clearer the criteria, the more reliably the right calls dispatch. See [On-call dispatch](../../ai/ai-workforce/on-call-dispatch.md) for setup.
- Test the automation by placing a call that matches your criteria and confirming the text arrives with the details filled in.
- Keep the message scannable — the technician may read it while heading to their vehicle. Lead with the outcome and the issue.
- For the full list of triggers, see [Automation triggers](../automation-triggers.md#conversations-ai).
