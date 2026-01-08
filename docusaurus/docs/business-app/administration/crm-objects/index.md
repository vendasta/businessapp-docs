---
title: CRM Objects
description: Understand how contacts, companies, opportunities, and custom fields work together in Business App.
tags: [crm, administration]
keywords: [crm objects, custom objects, custom fields, data model, contacts, companies, opportunities]
---

CRM Objects are the building blocks of your customer data. Every contact, company, and opportunity in Business App is stored as an object. Administration controls in this section help you tailor those objects so the CRM mirrors how your business actually operates.

Use this space when you want to:

- Add or edit **custom fields** so records include the exact details your team needs
- Review the default system fields that power search, filters, and automations
- Plan how information flows between Contacts, Companies, Opportunities, and Activities

Keeping your objects organized makes every downstream workflow—Conversations, Automations, reporting, AI workflows, and integrations—much more reliable.

## Core CRM objects

- **Contacts** – Individual people you communicate with. Support phone, email, SMS, tasks, and marketing lists.
- **Companies** – Businesses, locations, or accounts that own contacts and opportunities.
- **Opportunities** – Optional pipeline stages for tracking sales deals or projects.

### Create custom objects

Beyond the standard Contacts, Companies, and Opportunities, you can create entirely new object types that fit your unique business needs. Custom objects allow you to model specialized data structures like:

- **Service Contracts** – Track service agreements, renewal dates, and terms
- **Equipment Assets** – Manage inventory, maintenance schedules, and warranties
- **Project Milestones** – Monitor deliverables, deadlines, and team assignments
- **Training Records** – Document certifications, courses, and compliance requirements

Custom objects come with a set of standard and system fields by default, including essential properties like Name, Created date, Updated date, Owner, and ID. You can add additional custom fields to capture the specific data your business needs.

To create a custom object:
1. Navigate to **Administration** > **CRM Objects**
2. Click **Create Custom Object**
3. Configure the singular and plural names for your object
4. Configure the default fields for your object

## Extend objects with custom fields

Need to store more than the default set of fields? Use [CRM Fields](app_settings_crm_fields.md) to introduce additional data points such as preferred services, contract numbers, or onboarding dates.

Custom fields allow you to:

- Build richer filters and segments for messaging and automations.
- Power AI workflows by supplying structured context about your customers.
- Keep internal team notes centralized instead of scattered across spreadsheets.

:::tip Keep fields purposeful
Before adding a new field, confirm when it will be captured, who will update it, and how it should be used in reports or workflows. Consistent data entry keeps automations accurate.
:::

## Frequently asked questions

<details>
<summary>Can I delete custom objects after creating them?</summary>

Yes, you can delete custom objects.

</details>

<details>
<summary>How many custom objects can I create?</summary>

You can create as many custom objects as you need.

</details>

<details>
<summary>Do custom objects support all the same features as built-in objects?</summary>

Custom objects support many of the same features as built-in objects in the CRM, such as search, filters, and automations. Support with other features will continue to be added in the future.

</details>
