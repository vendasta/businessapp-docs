---
title: Message queue
sidebar_label: Message queue
description: Queue up to three follow-up prompts while Vibe is generating, have them fire automatically when the current run finishes, or send one into the live run with Send now.
tags: [vibe, ai, message-queue, composer]
keywords: [vibe message queue, vibe follow-up prompts, vibe queue, vibe pause resume, vibe send now]
sidebar_position: 8
unlisted: false
brand: business-app
product: vibe
audience: smb
---

## What is the message queue?

The message queue lets you keep composing and sending follow-up prompts while Vibe is generating, instead of waiting for the current run to finish. Each message you send during a generation joins a queue, and Vibe automatically starts the next one as soon as the current generation completes.

You can queue up to three messages per project. Each queued message keeps everything you attached to it: the text, any images, and whichever mode (`Ask`, `Plan`, or `Build`) you had selected when you sent it.

## Why is the message queue important?

- **Keep your train of thought**: Describe a whole sequence of changes back-to-back ("add a hero → make it dark mode → add the footer") without waiting for each generation to finish before typing the next one.
- **Nothing is lost on refresh**: The queue is saved to your project, so it's still there if you reload the page or come back later.
- **Stay in control**: Pause the queue at any time to stop messages from firing automatically, and edit or remove any queued message before it runs.
- **Safe by default**: Stopping a run or a failed generation automatically pauses the queue, so a queued message never fires into a broken or unexpected state.

## What's included with the message queue?

- **Queue panel**: Appears above the chat input while any messages are queued. Expand or collapse it. The item count stays visible when it's collapsed.
- **Auto-fire**: The oldest queued message runs automatically as soon as the current generation finishes, as long as the queue isn't paused.
- **Edit and remove**: Change the text, images, or mode of any queued message, or remove it entirely, at any point before it fires.
- **Pause and resume**: Suspend auto-fire so queued messages wait for you, then resume when you're ready.
- **Send now**: Send a queued message into the run that's working so Vibe adjusts course without stopping or starting over.
- **Queue limit**: Up to three messages per project. Once the queue is full, sending is disabled with a "Queue full — remove a message to continue" message until a slot frees up.

## How to use the message queue

### Queue a follow-up message

1. Send a prompt to Vibe as usual.
2. While Vibe is generating, type your next message in the chat input and press `Enter` or click `Send`.
3. Your message appears in the queue panel above the chat input instead of interrupting the current run.
4. Repeat for up to three queued messages.

### Review, edit, or remove a queued message

1. Click the queue panel above the chat input to expand it.
2. Find the message you want to change.
3. Click the message to edit its text, images, or mode, or click remove to delete it from the queue.

### Pause and resume the queue

1. In the queue panel, click `Pause` to stop queued messages from firing automatically.
2. While paused, you can still add, edit, or remove messages. They just won't run until you resume.
3. Click `Resume` to pick up where you left off. If Vibe isn't generating, the oldest queued message fires as soon as you resume. If a generation is already in progress, it fires automatically when that generation completes.

### Send a queued message into the current run

1. While Vibe is generating, queue a message as described above.
2. In the queue panel, click `Send now` on that message.
3. The message leaves the queue and appears at the end of the conversation as a dimmed bubble with a `Move back to queue` button.
4. Vibe takes the message in before its next model call, never in the middle of a tool call, and adjusts course without starting over. The bubble becomes a normal message at the point where Vibe picked it up.

To cancel before Vibe picks the message up, click `Move back to queue`.

`Send now` appears only when:

- The queued message's mode (`Ask`, `Plan`, or `Build`) matches the mode of the current run.
- The run isn't paused for plan approval, a clarifying question, or a takeover.
- The run is yours, not a teammate's.
- Vibe isn't using a computer.

If the run pauses, stops, or ends before Vibe picks up the message, the message returns to the queue with a short note explaining why.

## Additional details

### How the queue interacts with Stop

Clicking `Stop` during a generation cancels the current run and pauses the queue. Your queued messages stay intact. Resume the queue when you're ready to continue.

### How the queue interacts with clarifying questions

If Vibe pauses to ask a clarifying question or request plan approval, the queue holds until you answer or approve. Auto-fire resumes normally once you respond. See [Planning](./plan-mode.md) for how clarifying questions work.

### When a generation fails

If a generation fails, the queue automatically pauses. Your queued messages remain untouched. Resolve the issue, then resume the queue to pick up where you left off. See [Error handling and troubleshooting](./troubleshooting.md).

### Who can queue and send

Each queued request runs with the sender's own permissions. On projects with multiple collaborators, this means a queued message fires with the access of the person who sent it, not whoever happens to be viewing the project when it runs.

### Sending while paused

If the queue is paused and Vibe isn't currently generating, sending a new message goes straight to Vibe instead of joining the queue. If Vibe is generating, your message still joins the queue even while paused.

## Frequently asked questions

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

The queue automatically pauses so a queued message doesn't fire into a broken state. Your messages remain in the queue. Resume once you've resolved the issue.
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

Yes. You can add, edit, or remove messages while paused. They just won't fire until you resume.
</details>

<details>
<summary>Whose permissions does a queued message use on a shared project?</summary>

The sender's. Each queued request runs with the permissions of the person who sent it, even if it fires while someone else is working in the project.
</details>

<details>
<summary>What happens if I send a message while paused and Vibe isn't generating?</summary>

It sends directly instead of joining the queue, since there's no active generation for it to wait behind.
</details>

<details>
<summary>What does Send now do?</summary>

It sends a queued message into the run that's in progress. Vibe takes it in before its next model call and adjusts course without starting over.
</details>

<details>
<summary>Why don't I see Send now on a queued message?</summary>

`Send now` appears only when the message's mode matches the current run's mode. It isn't available while the run is paused for plan approval, a question, or a takeover, for a teammate's run, or while Vibe is using a computer.
</details>

<details>
<summary>What happens to a sent-now message if the run stops or ends first?</summary>

The message returns to the queue with a short note explaining why.
</details>

## Next steps

- [Getting started](../getting-started.md): Walk through a full generation end to end
- [Error handling and troubleshooting](./troubleshooting.md): What to do when a generation doesn't go as planned
- [Planning](./plan-mode.md): Understand how Vibe plans before it builds
