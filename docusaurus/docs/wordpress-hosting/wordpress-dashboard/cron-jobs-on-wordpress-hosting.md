---
title: "Cron Jobs on WordPress Hosting"
sidebar_label: "Cron Jobs"
description: "Learn about WordPress Hosting's automated scheduled tasks system that handles posts, backups, and emails automatically."
---

Cron jobs are scheduled tasks that run automatically on your website, handling things like publishing posts, running backups, and sending emails without you having to trigger them manually.

## What are cron jobs?

In simple terms, **cron jobs** are scheduled tasks that your WordPress site executes automatically at set intervals. Think of them as behind-the-scenes assistants handling repetitive chores like:

*   **Publishing posts** at scheduled times
*   **Checking for plugin and theme updates**
*   **Running backups** to keep your data safe
*   **Sending scheduled emails** to keep your audience engaged

With cron jobs, WordPress handles this routine work automatically while you focus on your website's content.

## Meet WP-Cron: The engine behind WordPress automation

WordPress uses a system called **WP-Cron** to manage these scheduled tasks. Unlike traditional system crons that rely on server time, WP-Cron simulates this functionality by triggering tasks when someone visits your site.

But here's the catch: **If your site experiences high traffic, WP-Cron can slow down page load times** because it processes pending tasks during those visits. That's where WordPress Hosting steps in to optimize performance.

## WordPress Hosting's optimized cron job setup

*   **Runs Every 20 Minutes:** Our cron job system processes pending tasks every 20 minutes, ensuring timely updates without overloading your server.
*   **Fixed Interval:** This interval is set to maintain peak performance, and while it cannot be adjusted, it strikes the perfect balance between efficiency and speed.
*   **Performance-First Approach:** By handling cron jobs externally, we reduce the load on your website, resulting in **faster page load times** and a **smoother user experience**.

## Why use WordPress Hosting's cron system?

*   **Reliability:** Scheduled tasks run on a fixed interval, so nothing is missed or delayed.
*   **Performance:** Cron jobs run in the background, without slowing down page loads for your visitors.
*   **Automation:** Once set up, cron jobs run without any manual intervention.

## Final thoughts

Cron jobs handle routine WordPress tasks automatically. WordPress Hosting's cron system is optimized to run these tasks reliably without affecting your site's performance.

## Related articles

For other WordPress Hosting platform features and advanced tools, see [Advanced Tools](../../advanced-tools/index.mdx).
