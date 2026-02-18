---
title: "Deferred Status"
sidebar_label: "Deferred Status"
description: "A deferred event, or deferral, is simply an event SendGrid has received back from the receiving server:  \n \n  What does it tell us?  \n \n   That the receiving"
---

A deferred event, or deferral, is simply an event SendGrid has received back from the receiving server:

### What does it tell us?

1.  That the receiving server has temporarily limited access to their system; somewhat like a busy signal.
2.  That your message will be delivered later.
3.  This can happen for a variety of reasons.

**Some of the most common reasons a message might be deferred at an inbox provider are:**

1.  That the inbox provider is seeing too many spam complaints for your email that has already been delivered or
2.  That the receiving server is having technical issues at that time.

SendGrid will continue to try to deliver an email that is being deferred at a particular inbox provider for up to 72 hours. If a message to a recipient is deferred for more than 72 hours, that deferral will turn into a block. Otherwise, it will result in a delivery event once the message has been accepted by the receiving server.