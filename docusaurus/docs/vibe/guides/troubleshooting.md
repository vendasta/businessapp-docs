---
title: Error Handling & Troubleshooting
sidebar_position: 5
unlisted: true
---

# Error Handling & Troubleshooting

You may encounter issues during generation or building. This guide explains what to expect and how to recover.

## Build Errors

After Vibe generates code, it runs a build step (TypeScript compilation + Vite bundling). If the build fails, you'll see an error displayed in the preview panel.

### What Happens When a Build Fails

Vibe **does not have an automated error recovery loop**. When a build error occurs:

1. The error message is displayed in the preview area
2. Vibe shows the error details in the chat
3. **You need to tell Vibe to fix it** — send a follow-up prompt asking it to resolve the error

### How to Fix Build Errors

Copy the error message from the preview or chat and send it back to Vibe with context:

> The build failed with this error: "Cannot find module './components/HeroSection'". Can you fix it?

Or more simply:

> Fix the build error

Vibe will analyze the error, identify the root cause, and generate corrected code. Common build errors include:

| Error Type | Common Cause | What to Tell Vibe |
|-----------|-------------|-------------------|
| Module not found | Missing import or file wasn't created | "Fix the missing import for [component]" |
| Type error | TypeScript type mismatch | "Fix the type error in [file]" |
| Syntax error | Malformed JSX or TypeScript | "There's a syntax error, can you fix it?" |
| Missing dependency | Package not in package.json | "Add [package] as a dependency" |

### Tips for Recovering from Errors

- **Don't panic** — Build errors are common during AI code generation. A single follow-up prompt usually fixes it.
- **Include the error text** — Giving Vibe the exact error message helps it diagnose the issue faster.
- **Use checkpoints** — If things go wrong after several iterations, you can restore a previous checkpoint from the toolbar.

## Preview Not Loading

If the preview panel shows a blank page or loading spinner:

- **Wait a moment** — Builds can take a few seconds, especially after large changes
- **Click the refresh button** in the top-right toolbar
- **Check for build errors** — Switch to Code view to see if there are any issues in the file explorer
- **Send a prompt** — Ask Vibe: "The preview isn't loading, can you check the build?"

## Generation Seems Stuck

If the generation appears to hang (no status updates for more than a minute):

- **Wait** — Complex requests can take up to 2 minutes, especially for new projects with many files
- **Refresh the page** — If generation genuinely stalled, refreshing and re-sending the prompt usually works
- **Simplify the request** — If a complex prompt keeps failing, break it into smaller pieces

## Files Aren't Changing

If Vibe says it completed but nothing seems different in the preview:

- **Click the refresh button** in the toolbar to reload the preview
- **Check Code view** — Switch to Code mode and verify the files were actually updated
- **Check the generation summary** — Expand the "View files" section to see which files were modified

## Common Pitfalls

### Prompt Too Vague
If Vibe generates something that doesn't match your expectations, the prompt may have been too open-ended. Be more specific about what you want. See the [Prompting Guide](./prompting.md) for tips.

### Conflicting Changes
If you ask Vibe to do something that conflicts with a previous generation (e.g., "use a sidebar layout" after building a top-nav layout), Vibe will attempt to reconcile the changes, but the result may need further iteration.

### Large Rewrites
Asking Vibe to completely redo a complex page in one prompt can sometimes introduce errors. If you need a major overhaul, consider using [Plan Mode](./plan-mode.md) to review the approach first.

## Using Checkpoints to Recover

Vibe creates checkpoints as you iterate. If a generation goes wrong:

1. Click the **checkpoint icon** in the top-right toolbar
2. Browse available checkpoints (sorted by date, newest first)
3. Click **View diff** to see what changed between checkpoints
4. Click **Restore** to roll back to a previous version

This is your safety net — you can always go back to a working state.

## Getting Help

If you encounter persistent issues:

- Try refreshing the page and re-sending your prompt
- Use checkpoints to restore a known good state
- Break complex requests into simpler steps
- Report issues to the Vibe team with details about what you were trying to do and what error you saw
