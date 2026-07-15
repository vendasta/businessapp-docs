---
title: Form field reference
sidebar_label: Field reference
sidebar_position: 4
description: Full list of contact, company, and generic field types supported in Business App forms.
---

When building a form, you can add fields that map to Contact or Company records, or use generic field types not mapped to either.

Contact fields and Company fields write to two different record types. A form with only Contact fields creates or updates a Contact record and doesn't touch a Company record. If you want a submission to also create or update a Company record, such as a business name or address, add fields from the Company fields group as well. Choosing the wrong group is a common reason a submission doesn't appear where you expect it.

## Contact fields

- First name, Last name, Email, Phone number, Additional phone number
- Message, Job title, Role, Seniority
- LinkedIn URL
- Lifecycle stage
- Record source, Record source drill down 1, Record source drill down 2
- Original source, Original source drill down 1, Original source drill down 2
- Street address line 1, Street address line 2, City/locality, State/province/region, Zip/postal code, Country
- Timezone, Birth year, Gender
- UTM Campaign, UTM Medium, UTM Source, UTM Content, UTM Term
- Market ID, Owner, External ID

## Company fields

- Company name, Company website, Phone number, Fax number
- Street address line 1–2, City/locality, State/province/region, Zip/postal code, Country
- Number of employees, Legal structure
- Lifecycle stage
- Record/Original source (and drill downs)
- Timezone
- Facebook, X, Instagram, LinkedIn, TikTok, Pinterest URLs
- UTM fields
- Market ID, Owner, External ID, Google Place ID

:::note
`Company name` is required whenever you add the Company fields group to a form and can't be made optional, similar to how `Email` is always required for Contact fields. If you don't need to capture company data, use Contact fields only and leave out the Company fields group.
:::

## Generic field types

These types can be added to any form and are not mapped to a specific Contact or Company field:

- Text, Paragraph, Number
- Dropdown, Radio button, Checkbox
- Date

There's no dedicated multi-select field type. To offer several selectable options, add the `Checkbox` field once for each option and label each one clearly. See [Build and publish a form](form-builder.md#adding-multiple-checkbox-options).

For how to add and configure fields (required, hidden, defaults, dynamic URL parameters), see [Build and publish a form](form-builder.md).
