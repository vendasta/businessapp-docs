---
title: Error Handling & Troubleshooting
sidebar_position: 5
unlisted: true
---

# Error Handling & Troubleshooting

Most generation problems are caught and fixed by Vibe automatically before you ever see them. This guide explains how that works, what's happening when you do see an error, and what to do if Vibe can't recover on its own.

## How Vibe handles errors

Vibe runs three layers of automatic error handling. Each layer catches a different kind of problem.

| Layer | What it catches | When it runs |
|---|---|---|
| **Type and compile checks** | TypeScript errors, missing imports, type mismatches | Inline, while Vibe is writing or editing files |
| **Build verification** | Errors that only show up when the project is bundled | After file changes are written, before the preview updates |
| **Runtime auto-fix** | Errors that happen in the live preview after the app loads | When the app crashes or throws while you're using it |

You don't have to enable any of this. It's the default behavior on every generation.

### Type and compile checks

While Vibe writes code, a TypeScript language server inside the project watches for type errors and missing imports. The errors are surfaced to the agent the moment they appear, so a missing import or a wrong type shape gets caught and corrected on the next step — usually before you see anything in the chat.

You'll know this layer ran when Vibe sends a follow-up edit immediately after a write, fixing something it just produced. That's the type checker handing it a problem and the agent resolving it.

### Build verification

After a batch of file changes, Vibe builds the project to confirm everything compiles. If the build fails, the agent reads the error, decides whether it can fix it, and edits the offending files autonomously. The chat shows what it tried and what it fixed.

You'll see status updates like "Building project," then either a success message and an updated preview, or a follow-up edit cycle that resolves the failure.

### Runtime auto-fix

If the live preview throws a runtime error after the build succeeds — a state bug, a missing prop, a crash on an interaction — the preview detects the error and offers to fix it. A small banner appears in the preview with the error and a "Fix it" action.

A few details to know:

- Auto-fix runs at most twice for the same error before stepping aside.
- There's a 10-second cooldown between attempts, so a tight crash loop doesn't spam the agent.
- If you'd rather diagnose runtime errors yourself, you can opt out — your browser remembers the choice for that project.

## When auto-fix can't recover

Sometimes the agent runs out of attempts, or the problem isn't something automated fixing can untangle. You'll see the error stay in the chat or preview without an obvious next step.

### Send the error back as a prompt

Copy the error text from the chat or preview and ask Vibe to look at it directly:

> The build failed with this error: "Cannot find module './components/HeroSection'". Can you fix it?

> The preview is showing a blank page after I added the contact form. Can you check what's happening?

Including the exact error text helps Vibe diagnose faster than a vague description.

Common patterns the agent handles well when prompted directly:

| Symptom | What to ask Vibe |
|---|---|
| Module not found | "Fix the missing import for `[component]`" |
| Type error | "Fix the type error in `[file]`" |
| Syntax error | "There's a syntax error, can you fix it?" |
| Missing package | "Add `[package]` as a dependency" |

### Roll back to a checkpoint

If the project has drifted somewhere it shouldn't be, restore a previous checkpoint from the toolbar:

1. Click the **checkpoint icon** in the top-right.
2. Browse the list of checkpoints (newest first).
3. Click **View diff** to confirm what changed between checkpoints.
4. Click **Restore** to roll back.

Checkpoints are your safety net — every generation creates one, so a known-good state is always one click away.

## Generation feels stuck

If the chat hasn't shown an update in a while:

- **Give it a moment.** Complex requests can take up to a couple of minutes, especially for new projects with many files. The chat shows status events as the agent works; if events are still arriving, things are still progressing.
- **Refresh the page.** If the chat genuinely stalled, refresh and re-send the prompt. Vibe reconnects to in-progress runs automatically when possible.
- **Simplify the request.** If a complex prompt keeps failing, break it into smaller steps. The first prompt scaffolds the structure; later prompts add detail.

## Vibe asks a question and waits

Vibe pauses to ask clarifying questions when your prompt has more than one reasonable interpretation. Questions come in three shapes:

- **Free text** — a one-line answer.
- **Choice** — pick one option from a short list.
- **Confirmation** — yes or no.

Answer in the chat and Vibe resumes the same conversation right where it stopped. There's no need to refresh or re-send your original prompt.

If you'd rather not be asked, give a more specific prompt up front. Naming the layout, the content, the tone, and the constraints reduces ambiguity.

## Preview isn't loading

A blank preview panel or a stuck loading spinner usually means one of:

- **The build is still running.** Wait a few seconds, especially after a large generation.
- **The preview lost connection.** Click the refresh button in the top-right toolbar.
- **There's a build error the chat missed.** Switch to Code mode to inspect files directly.
- **The dev server needs a kick.** Send Vibe a prompt: "The preview isn't loading, can you check the build?"

## Files don't seem to have changed

If Vibe says it finished but the preview looks the same:

- **Refresh the preview** with the toolbar refresh button.
- **Open Code mode** and confirm the files were actually updated.
- **Expand the "View files" section** in the chat to see exactly what changed in that generation.

## Common pitfalls

### Prompt too vague
If Vibe builds something that doesn't match your intent, the prompt was probably open-ended. Be more specific about what you want. See the [prompting guide](./prompting.md) for the principles, and the [prompting library](./prompting-library.md) for ready-made recipes.

### Conflicting changes
If you ask for something that contradicts the current app (e.g., "use a sidebar layout" after building a top-nav layout), Vibe reconciles the change but the result may need another pass. Cleaner approach: tell Vibe what you want the final state to look like, not the delta.

### Big rewrites
Asking for a full rebuild of a complex page in one prompt is harder than guiding Vibe through it in two or three. Use [planning](./plan-mode.md) — every generation produces a plan you can review before code is written, and that's the right moment to catch a misalignment.

## Getting help

If a problem persists after auto-fix, manual prompts, and a checkpoint restore:

- Refresh the page and re-send your prompt as a fresh attempt.
- Restore the last checkpoint where things were working and try a smaller step from there.
- Reach out to your trusted-tester program contact with what you tried and what error you saw.

## Next Steps

- [Planning](./plan-mode.md) — Understand how Vibe plans so you can catch misalignments early
- [Prompting Guide](./prompting.md) — Write clearer prompts that produce fewer errors
- [Getting Started](../getting-started.md) — Review the full generation flow end to end
