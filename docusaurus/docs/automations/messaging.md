---
title: Messaging actions
---

Automate outbound messages from your workflows using SMS or plain‑text email. Great for confirmations, reminders, and follow‑ups.

## Send SMS

:::note
Sending SMS via automations requires Conversations Pro.
:::

1. Go to Business App > Administration > Automations
2. Create a new automation (or open an existing one)
3. Choose a Trigger (for example, When a contact is created)
4. Add Action > Send SMS
5. Write your message and include dynamic fields as needed
6. Save and toggle the automation On

Tips:
- Keep messages short and actionable
- Include your business name the first time you text a contact
- Respect consent preferences and opt‑out rules
- Use Conditions to limit frequency (for example, only for new leads)

## Send plain‑text email

:::note
Sending plain‑text emails via automations requires Conversations Pro.
:::

1. Go to Business App > Administration > Automations
2. Create a new automation (or open an existing one)
3. Choose a Trigger (for example, When a contact is created)
4. Add Action > Send a plain text email
5. Set Subject and Body; include dynamic fields if needed
6. Save and toggle the automation On

Tips:
- Use clear subjects and one primary call‑to‑action
- Personalize with the contact’s name and relevant details
- Combine with Conditions to target the right audience

<details>
<summary>What if messages fail to send?</summary>

Check the Activity tab for the run. Make sure required fields (for example, phone for SMS or email for plain‑text email) are present. If you see frequent failures, consider switching Error handling to "Skip the step and continue" in Settings so other steps can still complete.

</details>

