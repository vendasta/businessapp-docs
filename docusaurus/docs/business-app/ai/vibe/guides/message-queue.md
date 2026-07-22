---
title: Message Queue
sidebar_label: Message Queue
description: Queue up to three follow-up prompts while Vibe is generating, and have them fire automatically when the current run finishes.
tags: [vibe, ai, message-queue, composer]
keywords: [vibe message queue, vibe follow-up prompts, vibe queue, vibe pause resume]
sidebar_position: 8
unlisted: false
---

# Message Queue

## What is the Message Queue?

The message queue lets you keep composing and sending follow-up prompts while Vibe is generating, instead of waiting for the current run to finish. Each message you send during a generation joins a queue, and Vibe automatically starts the next one as soon as the current generation completes.

You can queue up to three messages per project. Each queued message keeps everything you attached to it — the text, any images, and whichever mode (Ask, Plan, or Build) you had selected when you sent it.

## Why is the Message Queue important?

- **Keep your train of thought**: Describe a whole sequence of changes back-to-back ("add a hero → make it dark mode → add the footer") without waiting for each generation to finish before typing the next one.
- **Nothing is lost on refresh**: The queue is saved to your project, so it's still there if you reload the page or come back later.
- **Stay in control**: Pause the queue at any time to stop messages from firing automatically, and edit or remove any queued message before it runs.
- **Safe by default**: Stopping a run or a failed generation automatically pauses the queue, so a queued message never fires into a broken or unexpected state.

## What's included with the Message Queue?

- **Queue panel**: Appears above the chat input while any messages are queued. Expand or collapse it — the item count stays visible when it's collapsed.
- **Auto-fire**: The oldest queued message runs automatically as soon as the current generation finishes, as long as the queue isn't paused.
- **Edit and remove**: Change the text, images, or mode of any queued message, or remove it entirely, at any point before it fires.
- **Pause and resume**: Suspend auto-fire so queued messages wait for you, then resume when you're ready.
- **Queue limit**: Up to three messages per project. Once the queue is full, sending is disabled with a "Queue full — remove a message to continue" message until a slot frees up.

## How to use the Message Queue

### Queue a follow-up message

1. Send a prompt to Vibe as usual.
2. While Vibe is generating, type your next message in the chat input and press **Enter** or click **Send**.
3. Your message appears in the queue panel above the chat input instead of interrupting the current run.
4. Repeat for up to three queued messages.

### Review, edit, or remove a queued message

1. Click the queue panel above the chat input to expand it.
2. Find the message you want to change.
3. Click the message to edit its text, images, or mode, or click remove to delete it from the queue.

### Pause and resume the queue

1. In the queue panel, click **Pause** to stop queued messages from firing automatically.
2. While paused, you can still add, edit, or remove messages — they just won't run until you resume.
3. Click **Resume** to pick up where you left off. If Vibe isn't generating, the oldest queued message fires as soon as you resume. If a generation is already in progress, it fires automatically when that generation completes.

## Additional details

### How the queue interacts with Stop

Clicking **Stop** during a generation cancels the current run and pauses the queue. Your queued messages stay intact — resume the queue when you're ready to continue.

### How the queue interacts with clarifying questions

If Vibe pauses to ask a clarifying question or request plan approval, the queue holds until you answer or approve. Auto-fire resumes normally once you respond. See [Planning](./plan-mode.md) for how clarifying questions work.

### When a generation fails

If a generation fails, the queue automatically pauses. Your queued messages remain untouched — resolve the issue, then resume the queue to pick up where you left off. See [Error handling and troubleshooting](./troubleshooting.md).

### Sending while paused

If the queue is paused and Vibe isn't currently generating, sending a new message goes straight to Vibe instead of joining the queue. If Vibe is generating, your message still joins the queue even while paused.

## Frequently Asked Questions

<details>
<summary>How many messages can I queue?</summary>

Up to three messages per project. Once you reach the limit, sending is disabled until you remove a message or one fires.
</details>

<details>
<summary>Does the queue survive a page refresh?</summary>

Yes. The queue is saved to your project, so refreshing or returning later doesn't lose queued messages.
</details>

<details>
<summary>Can I attach images to a queued message?</summary>

Yes. Queued messages keep any images you attached, along with the text and mode you selected.
</details>

<details>
<summary>What happens to the queue if I click Stop?</summary>

Stop cancels the in-flight generation and pauses the queue. Your queued messages stay intact until you resume.
</details>

<details>
<summary>What happens to the queue if a generation fails?</summary>

The queue automatically pauses so a queued message doesn't fire into a broken state. Your messages remain in the queue — resume once you've resolved the issue.
</details>

<details>
<summary>Can I reorder queued messages?</summary>

Messages fire in the order you sent them; you can't reorder the queue.
</details>

<details>
<summary>Can I edit a queued message before it fires?</summary>

Yes. Open the queue panel and click the message to change its text, images, or mode, or to remove it.
</details>

<details>
<summary>What happens if Vibe asks a clarifying question while messages are queued?</summary>

The queue holds until you answer the question or approve the plan. Auto-fire resumes normally afterward.
</details>

<details>
<summary>If I pause the queue, can I still add messages?</summary>

Yes. You can add, edit, or remove messages while paused — they just won't fire until you resume.
</details>

<details>
<summary>What happens if I send a message while paused and Vibe isn't generating?</summary>

It sends directly instead of joining the queue, since there's no active generation for it to wait behind.
</details>

## Next Steps

- [Getting Started](../getting-started.md) — Walk through a full generation end to end
- [Error handling and troubleshooting](./troubleshooting.md) — What to do when a generation doesn't go as planned
- [Planning](./plan-mode.md) — Understand how Vibe plans before it builds
