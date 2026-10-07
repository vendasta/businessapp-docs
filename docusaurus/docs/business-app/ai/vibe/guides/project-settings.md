---
title: Project settings
sidebar_label: Project settings
description: Configure a Vibe project from one place — general details, dependencies, business knowledge, connectors, SEO and indexing controls, and code.
tags: [vibe, ai, project-settings, connectors, knowledge, seo, dependencies]
keywords: [vibe project settings, vibe settings sections, vibe knowledge section, vibe connectors section, vibe seo section, vibe dependencies]
sidebar_position: 10
unlisted: false
brand: business-app
product: vibe
audience: smb
---

# Project settings

## What are project settings?

Project settings are the per-project home for configuration in Vibe. Every project has its own settings, organized into navigable sections, so what you configure in one project doesn't affect any other. This is where you ground the AI in your business, enable connectors, control how your app appears to search engines and AI assistants, and work with your project's code.

## Why are project settings important?

- **One place to configure**: Everything that shapes how a project behaves — knowledge, connectors, indexing, code — lives in one set of sections.
- **Per-project control**: Each project carries its own configuration, so you can set up one project for lead capture and another for an internal dashboard without the two interfering.
- **Better generations**: The knowledge and connectors you configure here directly affect what Vibe builds — grounded content and live integrations instead of placeholders and mocks.

## What's included in project settings?

Project settings are organized into sections (availability depends on project runtime):

- **General** — the project's basic details. Includes the **Migrate** action for projects on the **static** runtime and the **Business App navigation** setting.
- **Dependencies** — see which packages your project uses, check for available updates, and review any security advisories.
- **Knowledge** — ground the AI in your business profile and knowledge, so generated content reflects your business instead of placeholder text. See [Business Knowledge](./business-knowledge.md).
- **Connectors** — enable the connectors your app uses: CRM, forms, analytics, web chat, meetings, and more. See [Connectors](../connectors/index.md).
- **SEO** — control how your app presents itself to search engines and AI assistants. Shown for projects on the **`node-server`** runtime. See [SEO & indexing](./seo-and-indexing.md).
- **Code** — work with the project's code.

## How to use project settings

1. From your project, open the project's settings.
2. Select the section you need — **General**, **Dependencies**, **Knowledge**, **Connectors**, **SEO**, or **Code**.
3. Make your changes. They apply to this project only.

## Migrate to server rendering

Projects on the **static** runtime can migrate to the server-rendered **node-server** runtime. The **Migrate** action in the **General** section walks you through the process: it explains the benefits of server rendering (better SEO, dynamic routes, server-side data fetching), shows the credit cost for the migration, and notes that you can restore the previous version from version history if needed.

Click **Migrate** in the **General** section to start. Vibe runs the migration as a build in the chat, and you can watch the progress like any other generation.

## Business App navigation

A generated app can use the real Business App navigation as its outer chrome. When enabled, your app appears inside the same navigation frame your users see elsewhere in Business App, including the location switcher.

The location switcher changes the active account or location at runtime, so one app can serve every location you can reach. There's no need to build separate apps for each location — the same project adapts based on which location is selected.

Enable this setting in the **General** section of project settings.

## Dependencies

The **Dependencies** section shows the packages your project uses and helps you keep them up to date.

### What you see

- **Package list** — every dependency in your project.
- **Updates available** — packages with newer versions waiting.
- **Security advisories** — packages with known vulnerabilities (checked against the npm registry).

### How updates work

Updates are user-triggered, not automatic. When you run an upgrade:

1. Vibe saves a restore point before making changes.
2. Minor and patch updates are applied together.
3. Major updates are applied one at a time.
4. Each update goes through install, build, and type-check gates.
5. Packages that fail to build are reverted and reported.
6. If the project can't be brought to a green state, Vibe restores to the starting point.

Security advisories skip the normal waiting period and offer the lowest version that fixes the issue.

### Running an upgrade

1. Open project settings and select **Dependencies**.
2. Review which packages have updates or advisories.
3. Start the upgrade. Vibe runs it as a build in the chat.
4. Watch the progress — Vibe reports which packages succeeded and which were reverted.

## Frequently Asked Questions

<details>
<summary>Where do I enable a connector?</summary>

Open your project's settings and select **Connectors**, then toggle on the connector you need. See [Connectors](../connectors/index.md) for what each one does.
</details>

<details>
<summary>Where does the AI learn about my business?</summary>

In the **Knowledge** section of your project's settings. It grounds the AI in your business profile, and you can extend it with URLs, files, and notes. See [Business Knowledge](./business-knowledge.md).
</details>

<details>
<summary>Where are the search engine and AI assistant indexing controls?</summary>

In the **SEO** section of your project's settings (available when the project runtime is `node-server`). See [SEO & indexing](./seo-and-indexing.md).
</details>

<details>
<summary>Do settings apply to all of my projects?</summary>

No. Project settings are per project — each project has its own knowledge, connectors, and SEO configuration.
</details>

<details>
<summary>How do I migrate my project to server rendering?</summary>

Open the **General** section in project settings and use the **Migrate** action. Vibe explains the benefits, shows the credit cost, and runs the migration in the chat. You can restore the previous version from version history if needed.
</details>

<details>
<summary>What happens if a dependency upgrade fails?</summary>

Vibe saves a restore point before starting. Packages that fail to build are reverted and reported. If the project can't reach a green state after all attempts, Vibe restores everything to the starting point.
</details>

<details>
<summary>Are dependency updates automatic?</summary>

No. Updates are user-triggered — you decide when to run them. Security advisories are flagged so you can address them promptly, but Vibe doesn't apply updates on its own.
</details>

<details>
<summary>What does Business App navigation do for my generated app?</summary>

When enabled, your app appears inside the same navigation frame users see elsewhere in Business App. The location switcher lets users change the active location at runtime, so one app can serve every location without building separate projects.
</details>

## Next Steps

- [Connectors](../connectors/index.md) — Enable live integrations for your app
- [Business Knowledge](./business-knowledge.md) — Ground generated content in your business
- [SEO & indexing](./seo-and-indexing.md) — Control how search engines and AI assistants see your app
