---
title: Plan Mode
sidebar_position: 3
unlisted: true
---

# Plan Mode

Plan mode gives you more control over complex changes by letting you review and approve Vibe's implementation plan before any code is written.

## How Plan Mode Works

By default, Vibe starts generating code as soon as it understands your request. With Plan mode enabled, Vibe pauses after the planning phase and shows you a detailed plan of what it intends to do. You can then:

- **Approve** the plan as-is and let Vibe proceed
- **Edit** the plan to adjust the approach before code is generated
- **Cancel** to discard the plan and start over

## Enabling Plan Mode

Click the **Plan** toggle at the bottom-left of the chat input. When active, the button appears highlighted. The setting is remembered across sessions.

## The Plan Mode Flow

1. **Send your prompt** — Describe what you want as usual
2. **Review the plan** — Vibe shows a draft plan in the chat. The plan outlines which files will be created or modified and what changes will be made.
3. **Edit if needed** — The plan appears in an editable text area. You can modify it to change the approach, remove steps, or add instructions.
4. **Approve** — Click the Approve button to start code generation based on the plan.

Once approved, Vibe executes the plan. The plan appears as read-only while generation is in progress.

## When to Use Plan Mode

Plan mode is most valuable when:

- **Making large changes** — Restructuring navigation, adding multiple pages, or reworking a major section
- **You want to understand the approach** — Before Vibe writes code, you can see exactly what it plans to do
- **Complex multi-file edits** — When changes span many files, reviewing the plan helps catch issues early
- **You have a specific implementation preference** — Edit the plan to steer Vibe toward your preferred approach

For simple changes like tweaking text, adjusting colors, or adding a small element, you can leave Plan mode off. Vibe handles these quickly without needing a plan.

## Editing a Plan

When a draft plan appears, the content is editable. You can:

- **Remove steps** you don't want
- **Add instructions** for things Vibe missed
- **Reorder priorities** so the most important changes happen first
- **Clarify specifics** like exact text, colors, or layout preferences

For example, if Vibe's plan says "Add a testimonials section with placeholder content," you could edit it to: "Add a testimonials section with these three real quotes: [quote 1], [quote 2], [quote 3]."

## Clarifying Questions

Whether Plan mode is on or off, Vibe may ask clarifying questions before proceeding with generation. This happens when your prompt is ambiguous or when there are important decisions that could go multiple ways.

### How Clarifying Questions Work

1. **You send a prompt** — e.g., "Add an authentication system"
2. **Vibe analyzes** your request and identifies ambiguities
3. **Questions appear** in the chat as interactive cards with:
   - **Choice questions** — Pick one option from a set of chips
   - **Confirm questions** — Yes/No buttons
   - **Text questions** — Free-form text input
4. **You answer** all questions (or skip any you don't have a preference for)
5. **Click Continue** — Vibe proceeds with your answers incorporated

### Example

If you prompt "Add a contact section," Vibe might ask:

- **Where should the contact section go?** → Before footer / After hero / New page
- **What fields should the form include?** → Name + Email only / Name + Email + Phone + Message / Custom

Your answers guide the generation, resulting in output that matches your intent rather than the AI's assumptions.

### When Does Vibe Ask Questions?

Vibe asks questions when:

- The request has multiple valid interpretations
- Important design decisions need user input (e.g., layout choice, content structure)
- The scope of the change is unclear

Specific, detailed prompts result in fewer questions. If Vibe is confident it understands your request, it proceeds directly.

## Next Steps

- [Prompting Guide](./prompting.md) — Write clearer prompts to reduce ambiguity
- [Visual Editor & Themes](./visual-editor.md) — Make quick visual adjustments without prompts
- [Troubleshooting](./troubleshooting.md) — Handle build errors and other issues
