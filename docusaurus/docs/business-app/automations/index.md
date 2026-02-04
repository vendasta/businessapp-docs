---
title: Automations
sidebar_position: 1
---

Automations let you create workflows that run on their own when specific events happen. Use them to save time, improve consistency, and respond to customers faster—without manual effort.

## What you can automate

- Send SMS or plain-text emails when a contact is created or updated
- Apply tags, update CRM fields, or create tasks based on activity
- Notify your team or log sales activities when messages are sent/received
- Kick off follow-ups after meetings, orders, or invoices
- Trigger workflows when a conversation summary is created
- Create tasks, notes, and logged calls on opportunities
- Get a response from an AI Employee as part of a workflow

## How it works

Every automation includes:

- Trigger: The event that starts your workflow (for example, When a contact is created)
- Conditions: They are an optional part of an automation rule. After a trigger occurred, all conditions will be checked. The automation will be executed if all conditions are met.
- Actions: What happens next (for example, Send SMS, Send plain-text email, Update company)

Here's an example of a simple automation workflow. This example shows an automation that sends an email when a form is submitted for a contact.

![Automation workflow example showing trigger and action](./img/automation-example.png)

## Get started



**To build your own:**

1. Go to Business App > Administration > Automations
2. Select `Create Automation`
3. **Add a Trigger**: The event that starts your workflow
   - Example: "When a form is submitted for a contact", "Contact created", "Meeting booked"
   - Add **Conditions** if needed to filter when it runs
4. **Add an Action**: What happens when the trigger fires
   - Example: "Send a plain text email via Inbox", "Send SMS", "Create task"
5. Save and toggle your automation **On**

:::tip
New to automations? Start with a template and customize.
:::

## Builder and settings

Each automation has a Settings tab where you control how and when your workflow runs.

### Entry settings

![Entry settings options in automation settings](./img/automations-entry-settings.png)

- Only once per contact: Run a single time for each contact
- Multiple times per contact: Run every time the trigger conditions are met
- One at a time per contact: Ensure a new run starts only after the previous one finishes

:::warning
If your automation updates the same record (for example, applies tags or updates fields), prefer "One at a time per contact" to avoid overlapping runs and duplicate changes.
:::

### Error handling
![Error handling settings options in automation settings](./img/automations-error-handling-settings.png)
- Skip the step and continue: Recommended in most cases
- Stop the automation run: Use when later steps depend on earlier ones

:::tip
Use "Skip the step and continue" for non-critical actions like logging or tagging so the rest of the workflow can complete.
:::

### Review activity

Use the Activity tab on an automation to see what ran, when it ran, and whether it succeeded. This is helpful for verification and troubleshooting.

## Additional resources

- [Messaging actions](messaging.md)
- [Templates and recipes](templates-and-recipes.md)
- [Zapier integration](zapier.md)

## Frequently asked questions (FAQs)

<details>
<summary>Can I get a response from an AI Employee inside an automation?</summary>

Yes. Add the "Get a response from an AI Employee" action to send context (for example, a conversation summary or form submission) to your AI Employee and use the response later in the workflow.
</details>

<details>
<summary>How do I trigger automations for entire lists?</summary>

Use the **"Start automation for a list"** action in your automation builder. Select your target list (contacts, companies, or custom objects) and choose which automation to run. The automation will execute for each record in the list.
</details>

<details>
<summary>What are getter actions in automations?</summary>

Getter actions let you retrieve related data during automation runs. For example, "Get company from contact" retrieves company information when your automation is processing a contact record. This helps you work with connected data across your CRM.
</details>

<details>
<summary>What's the difference between regular automations and list automations?</summary>

Regular automations trigger based on events (like "when a contact is created"). List automations let you manually trigger a workflow for an entire existing list of records, making them ideal for bulk operations and targeted campaigns.
</details>
