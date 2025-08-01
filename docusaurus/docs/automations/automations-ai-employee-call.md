---
title: automations-call-an-ai-employee
sidebar_label: Call an AI Employee
---

# Automations: Call an AI Employee



The AI Employee automation adds a step to `Automations` that allows you to send a request, or prompt, to an AI Employee. The AI's response can then be used in other steps within the same automation, such as sending a follow-up SMS or email message via `Conversations`.

![automations call to ai receptionist](../ai/img/automations-call-ai-receptionist.png)
***

## Why is this important?

Using an AI Employee in your automations allows you to provide immediate, helpful responses to customer actions. For example, when a contact submits a form on your website, the AI can instantly analyze their message and reply to their inquiry using its trained knowledge. This ensures the contact knows their submission was received and can even get their questions answered without waiting for a person to reply.

## How to set it up

The fastest way to use this feature is by starting with the pre-built automation template.

### Step 1: Select the Template

1.  Navigate to `Automations`.
2.  Click `Create automation`.
3.  From the `Automation templates` screen, select `Form submission - Auto-reply with AI Chat Receptionist...`.

### Step 2: Customize the Automation

The template is designed to work out of the box, but you can customize it to fit your exact needs.

* In the `Call an AI employee` step, you can select which AI Employee to use and edit the `Prompt` that provides instructions to the AI.
* The template includes steps to send both an SMS and an email. You can keep both, or remove one if you only want to reply on a single channel.
* You can edit the content of the SMS or email message steps that follow the AI action.

:::info
To edit any step in the workflow, the automation must be turned off.
:::

### Step 3: Enable the Automation

Once you are happy with your settings, enable the automation. Ensure it is configured to `run multiple times` so that it can trigger for every new form submission.

***

## Frequently Asked Questions

<details><summary>Can I use this for actions other than form submissions?</summary>
Yes. While the template is built for form submissions, the `Call an AI Employee` action can be added to any automation you create from scratch. This allows you to use the AI's capabilities based on various triggers.
</details>
<details><summary>Can I change the instructions given to the AI?</summary>
Yes. You can edit the `Prompt` field within the `Call an AI Employee` step to customize the instructions the AI receives for generating its response.
</details>
<details><summary>Do I have to reply with both an SMS and an email?</summary>
No. The template includes both actions by default, but you can customize the workflow to remove either the SMS or the email step.
</details>
<details><summary>Can I choose which AI Employee is used in the automation?</summary>
Yes. The `Call an AI Employee` step includes a required `Employee` field, allowing you to select the specific AI Employee you want to handle the request.
</details>
<details><summary>Is the `Call an AI Employee` step available in Partner Center?</summary>
Yes, this step is also available in Partner Center automations. Note that while you can send an SMS via conversations, the email action is not available at this time.
</details>