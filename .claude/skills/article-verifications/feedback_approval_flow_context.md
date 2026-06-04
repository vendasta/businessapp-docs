---
name: feedback-approval-flow-context
description: When running the article-verifications approval flow, always write a full conversational explanation in chat before calling AskUserQuestion — don't rely on the question widget alone for context
metadata:
  type: feedback
---

When running the approval flow in the article-verifications skill, always write a full explanatory paragraph in the chat *before* calling AskUserQuestion. The question widget alone (Issue/Location/Current/Proposed) doesn't give enough context for the user to answer confidently.

**Why:** User found the bare question widget without surrounding chat context hard to answer — they couldn't tell why it mattered or what the full picture was.

**How to apply:** Before each AskUserQuestion call, write 2–4 sentences in chat that explain: what the issue is in plain language, where it appears, why it matters, and what each option would result in. Then call the widget. The widget is for the yes/no/custom choice; the chat is for the understanding.

Also update MEMORY.md index after writing this file.
