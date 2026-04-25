---
title: Planning
sidebar_position: 3
unlisted: true
---

# Planning

Every Vibe generation starts with a plan. You see what Vibe intends to do before any code is written, and you choose whether to approve, edit, or cancel. There's no toggle to enable — planning is the default flow on every request.

## How plans work

When you send a prompt, Vibe analyzes the request and produces a structured plan. The plan describes which files will be created or modified, what changes will be made, and how the parts fit together. The plan appears in the chat in a `PLAN` container with three actions:

- **Approve** — Vibe begins code generation using the plan as its instruction set.
- **Edit** — adjust the plan in place before approving.
- **Cancel** — discard the plan; the conversation returns to idle so you can try a different prompt.

While the plan is waiting, the chat shows an "Awaiting approval" state with step-dots indicating progress through the conversation. Vibe pauses here until you act.

For a small change — tweaking text, recoloring a button, swapping a single image — Vibe still produces a plan, but the plan is short and approving it is usually a single click.

## Approving a plan

Click **Approve**. The same conversation continues into generation; you don't move to a new screen, refresh, or wait for a new run to start. The plan stays visible (read-only) so you can scroll up and see what was approved while generation runs below it.

When generation finishes, a `COMPLETED` block appears at the bottom of the conversation, with collapsible details for the plan that ran and the files that were touched.

## Editing a plan before approval

Click into the plan body and edit it like any other document. Useful edits:

- **Remove steps** Vibe proposed but you don't want.
- **Add instructions** for things Vibe missed.
- **Reorder** so the most important changes happen first.
- **Replace placeholders** with specifics — exact copy, exact colors, exact data.

For example, a plan that says "Add a testimonials section with placeholder content" can be edited to "Add a testimonials section with these three real quotes: …, …, …" before you approve.

After editing, click **Approve** to run the modified plan.

## Cancelling a plan

Click **Cancel** if the plan is going somewhere you don't want. Vibe terminates the run, the chat returns to idle, and you can send a new prompt without anything from the cancelled plan persisting.

Cancel is the right move when:

- Vibe misunderstood the request and the plan reflects the wrong intent.
- The proposed scope is bigger than you wanted.
- You realize you want to approach the problem differently.

If you'd rather steer Vibe than start over, edit the plan instead.

## Clarifying questions

When a prompt has more than one reasonable interpretation, Vibe pauses and asks before producing a plan. Questions arrive in three shapes:

- **Choice** — pick one option from a short list of chips.
- **Confirmation** — yes / no.
- **Free text** — a one-line answer for things that don't fit a small option set.

You answer in the chat, and Vibe resumes the same conversation. There's no new run, no refresh, no reconnect — it's the same exchange paused and continued.

### Example

For the prompt "Add a contact section," Vibe might ask:

- **Where should the contact section go?** → *Before footer* · *After hero* · *New page*
- **What fields should the form include?** → *Name + email* · *Name + email + phone + message* · *Custom*

Answer those and Vibe proceeds straight to a plan that reflects your choices.

### When Vibe asks questions vs. proposes a plan straight away

Vibe asks questions when the prompt has genuine ambiguity. Specific prompts get a plan immediately; vague prompts get questions first.

A few patterns that produce fewer questions:

- **Be specific about content.** "Add a team page with these four members…" beats "Add a team page."
- **Name the layout.** "Sticky top nav with hamburger on mobile" beats "navigation."
- **Describe the audience.** "For small business owners who aren't tech-savvy" gives Vibe enough context to choose tone, density, and copy without asking.

If Vibe is confident it understands the request, it skips the questions and shows you a plan directly. You can still edit or cancel from there.

## Next steps

- [Prompting guide](./prompting.md) — write prompts that produce strong plans.
- [Prompting library](./prompting-library.md) — concrete plan-friendly prompts you can paste.
- [Visual editor and themes](./visual-editor.md) — make targeted changes without going through a full plan cycle.
- [Error handling and troubleshooting](./troubleshooting.md) — what to do when something goes sideways during generation.
