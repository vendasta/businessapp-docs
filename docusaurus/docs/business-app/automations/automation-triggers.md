---
title: Triggers
sidebar_position: 1
---

Automation triggers are specific actions that start your workflows. There are numerous triggers to choose from, and we're frequently adding more.

Some triggers are simple and are ready out-of-the-box. For example, the **A contact is created** trigger will start whenever any contact is created. Other triggers may require specifying trigger options. For example, the **A sales order status is changed** trigger requires that you specify the sales order origin and status that it's changed to.

![Trigger options example](./img/trigger-options.jpg)

## Example: Company trigger

The **When a Company is created or modified** trigger is a good example of a trigger that requires options. Instead of firing on every company update, you can specify which fields must change for the automation to run.

**Step 1** – Go to **Business App** → **Automations**.

**Step 2** – Create an automation and set the trigger to **When a Company is created or modified**.

**Step 3** – In the side panel, choose the fields that must change for the automation to run. This prevents every company update from triggering the automation.

**Step 4** – Turn the automation on using the toggle at the top right.

![Company trigger configuration screen](./img/business-app/automations/update-company-trigger-1.png)

**Step 5** – You can also choose which updated field(s) trigger the automation.

<img src={require('./img/business-app/automations/update-company-trigger-2.png').default} alt="Company trigger field selection" width="50%" />

## Trigger Configuration Tips

Choose the most specific trigger that matches your use case and think about how often it will fire. If a trigger could fire many times at once, make sure your workflow can handle that scale. Always test with real data before going live.

### Common Trigger Patterns

1. **Welcome Sequences**: Use "contact created" or "user added" triggers
2. **Follow-up Workflows**: Use "campaign activity" or "task status changed" triggers
3. **Payment Processing**: Use "payment made" triggers with success/failure options
4. **Lead Nurturing**: Use "contact created" or "lead stage changed" triggers
