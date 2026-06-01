---
title: Supabase Backend
sidebar_label: Supabase Backend
sidebar_position: 5
draft: true
---

# Supabase Backend

Connect your Supabase project to Vibe so the app it builds runs against your actual database, authentication, and storage — not placeholder data.

When you link a Supabase project, Vibe builds directly against your real schema and data. The generated app is fully wired to your Supabase backend from the start, so there is no extra configuration step to connect it later.

## What you get

When you connect Supabase to Vibe, your project gains:

- **Real database access** — Vibe builds against your actual tables and relationships, not mock data.
- **Authentication** — Your app uses Supabase Auth, including any existing users and sign-in flows.
- **Storage** — File uploads and assets connect to your Supabase Storage buckets.

Because Vibe uses your own Supabase credentials, you stay in control of your data and access rules at all times.

## Before you begin

You need an existing Supabase project with three values ready:

- **Project URL** — found on your project's home page in the Supabase dashboard
- **Publishable Key** — found under **Project Settings > API Keys** in Supabase
- **Personal Access Token** — found under **Account > Access Tokens** in Supabase

## Connect your Supabase project

1. In Business App, go to **Administration**.
2. Under **App settings**, select **Integrations**.
3. On the Integrations page, select the **AI Tools** category in the left sidebar.
4. Select **Supabase** from the list of integrations.
5. Click **Connect**.
6. In the **Connect Supabase** dialog, enter your **Project URL**, **Personal Access Token**, and **Publishable Key**.
7. Click **Add Connection**.

Once connected, enable the Supabase connector in your Vibe settings to start building against your project.
