---
title: Prompting Library
sidebar_label: Prompting Library
sidebar_position: 2
unlisted: true
---

# Prompting library

Concrete prompts you can paste into Vibe, organized by intent. These are starting points, not recipes you have to follow exactly. Edit any prompt with your own business name, content, and constraints, and Vibe will adapt.

For the principles behind why these work, see the [prompting guide](./prompting.md). For the connectors several of these activate, see the [connectors guide](./connectors/index.md).

## Scaffolding a new app

Use these to start from scratch. Each one produces a multi-page app you can then refine with smaller follow-up prompts.

### Marketing landing page

> Build a modern landing page for "CloudSync," a file synchronization service. Include a hero section with headline and call to action, a features grid with six features and icons, a pricing section with Free, Pro, and Enterprise tiers, a customer logos bar, and a footer with links.

What to expect: a single-page site with the seven sections in order, themed in shadcn/ui's default palette. Replace "CloudSync" with your business name to start.

### Multi-page small business site

> Create a website for a dental clinic called "Bright Smile Dental." Include a home page with services, a team page with dentist bios and photos, an FAQ page with common questions, and a booking page with a contact form.

What to expect: four pages with shared navigation, a generated team-photo placeholder set, and a contact form that activates the [Forms connector](./connectors/forms.md).

### Service business with multi-location

> Build a customer-facing site for a multi-location HVAC service business called "Atlas Heating & Air." Three locations: downtown, north end, and west end. Marketing landing with hero and services, a pricing section, a testimonials section, and a "Book an appointment" form on the services page. Use a clean professional theme: navy and slate with a warm accent.

What to expect: a multi-page service business site themed to your description. Activates the Forms connector for the booking form.

### Portfolio site

> Build a minimalist photography portfolio. Full-screen hero with the photographer's name "Elena Voss" and a tagline. Below, a masonry-style image gallery. Include an About page with a bio and a Contact page with a form.

What to expect: a single-photographer-style portfolio with placeholder gallery images. Ask for [generated images](./image-generation.md) in a follow-up prompt to fill the gallery.

### E-commerce listing page

> Create a product listing page for a sneaker store. Show a grid of eight product cards, each with an image placeholder, name, price, and "Add to Cart" button. Include filters on the left for brand, size, and price range. Add a header with logo, search bar, and cart icon.

What to expect: a single-page listing layout with filters and product cards. Add follow-up prompts for cart functionality, product detail pages, or checkout.

## Refining an existing app

Use these once you've scaffolded something and want to adjust it.

### Add a section to an existing page

> Add a frequently asked questions section before the footer. Include six questions with expandable answers about pricing, features, and getting started. Use an accordion component.

What to expect: a new section inserted in the right place, styled to match the rest of the page.

### Change overall styling

> Make the entire site feel more premium: increase font sizes, add more whitespace between sections, use a serif font for headings, and add subtle animations when sections scroll into view.

What to expect: a styling pass that touches multiple files. Vibe will produce a plan first because the change spans the whole app, so you can review the approach before it edits.

### Fix mobile layout

> The navigation menu items are too close together on mobile. Add more spacing between them, increase the font size, and turn the menu into a hamburger drawer below 640px.

What to expect: a focused change to the navigation component with mobile-specific behavior.

### Adjust copy on a specific element

(After clicking the element in design mode.)

> Change this headline to "Built for service businesses who hate paperwork" and make it slightly bolder.

What to expect: the design-mode element selection sends source-mapped context with the prompt, so Vibe edits exactly the heading you clicked. See the [visual editor guide](./visual-editor.md) for more on this flow.

## Cloning a reference site

When you have a website you want to start from, paste its URL.

### URL only

> Build me a similar site to https://example.com

What to expect: Vibe captures the page (screenshot, branding, layout, content), extracts colors and typography, and scaffolds a faithful clone. See the dedicated [clone-from-URL guide](./clone-from-url.md) for what gets captured and how.

### URL with brand override

> Build me a similar site to https://example.com but use my own brand: navy and copper accent colors, sans-serif headings.

What to expect: the layout and structure of the reference site with your brand applied. Useful when you like a competitor's structure but want to look distinctly different.

### URL with content override

> Build me a similar site to https://example.com but with content for a coffee shop chain called "Bean & Brew" with three locations.

What to expect: the reference site's structure and visual style, with your business's content swapped in throughout.

## Connecting to Forms

### Contact form on the landing page

> Add a contact form at the bottom of the landing page. Collect name, email, and message. Style it to match the rest of the page.

What to expect: a form rendered in your theme, wired through the [Forms connector](./connectors/forms.md) so submissions are captured automatically.

### Lead capture popup

> Add a lead capture popup that appears once after a visitor scrolls past the hero. It should ask for name, email, and company size, with a clear "Get started" button.

What to expect: a modal-style form with show-once behavior and the same Forms connector wiring.

### Multi-step booking form

> Replace the single-page contact form with a three-step booking form: step 1 is service type (heating, cooling, plumbing), step 2 is preferred date and time, step 3 is contact information. Show progress indicators between steps.

What to expect: a stepped form component with state preserved across steps. Submission still goes through the Forms connector at the final step.

## Connecting to Analytics

### Multi-location dashboard

> Build an owner dashboard showing service requests per location for the last 30 days, top three services this month, and a bar chart of weekly revenue.

What to expect: a dashboard page that activates the [Analytics connector](./connectors/analytics.md). The numbers are wired to live data, not placeholders.

### Single-metric tile

> Add a metrics tile to the homepage that shows total leads this week, with a small trend arrow comparing to last week.

What to expect: a small KPI tile drawing from the same analytics connector.

### Custom date-range comparison

> Build a comparison view: one row per location, columns for monthly visits, bookings, and average ticket size. Add a date-range picker at the top so the manager can compare any two months.

What to expect: a comparison table tied to the analytics connector with a working date-range control.

## Connecting to SSO

### Member sign-in area

> Add a "Members" area with a sign-in screen. After signing in, members see their loyalty points, recent orders, and a profile section with their name and email.

What to expect: a gated area wired through the [Single sign-on connector](./connectors/single-sign-on.md). The sign-in itself completes once Single sign-on is enabled in Project Settings, which provisions the OAuth client for your project.

### Gated content

> Gate the booking page behind a sign-in screen. Visitors can browse services freely, but the "Book an appointment" page requires sign-in.

What to expect: a route-level guard that redirects unauthenticated visitors to sign in, then back to the booking page.

### Profile page

> Add a profile page for signed-in members showing their name, email, phone, and a list of their last five service appointments with date and service type.

What to expect: a profile route that pulls from the signed-in member's identity and connects to recent activity. Pairs naturally with the analytics connector for the appointments list.

## Generating images

### Hero photography

> Add a hero image of a service technician working on an HVAC unit, warm afternoon lighting, professional but approachable. 16:9 aspect ratio.

What to expect: a generated image hosted on the platform and embedded as the hero. Iterate by asking for regenerations with adjusted descriptions.

### Logo

> Generate a logo for "Atlas Heating & Air": a minimalist mountain-peak icon with a subtle wind motif. Use the project's primary navy color.

What to expect: a generated logo image set as the brand mark in the header.

### Style-consistent set

> Generate a set of three illustrations for the services section: heating, cooling, and plumbing tune-ups. All three should share the same flat-illustration style with a navy and slate palette so they read as a set.

What to expect: a coordinated illustration set, useful when you want visual consistency across multiple feature cards.

## Debugging when something goes wrong

### Diagnose a build that auto-fix didn't solve

> The preview is showing this error: "Cannot find module './components/HeroSection'." Auto-fix tried twice and stopped. Can you take a look?

What to expect: Vibe reads the error in context, identifies what's missing, and produces a fix. See the [troubleshooting guide](./troubleshooting.md) for how the auto-fix layers work.

### Undo a recent change

> Undo the last change. The hero looked better before.

What to expect: Vibe reverts the most recent edit. For a precise rollback, use the checkpoint browser in the toolbar instead.

### Compare against a checkpoint

> Show me what changed between the current version and the checkpoint from before I added the contact form. I want to keep some of the older styling.

What to expect: Vibe surfaces the diff in chat. From there you can ask for a partial restore (keep one component from the checkpoint, leave the rest as-is).

## Next Steps

- [Prompting Guide](./prompting.md) — The principles behind why these prompts work
- [Cloning a Reference Site](./clone-from-url.md) — Use a URL as your starting point instead of a prompt
- [Connectors](./connectors/index.md) — Understand the connectors several of these prompts activate

