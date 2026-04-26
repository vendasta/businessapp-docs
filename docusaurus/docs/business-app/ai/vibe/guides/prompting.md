---
title: Prompting Guide
sidebar_position: 1
unlisted: true
---

# Prompting Guide

Writing effective prompts is the most important skill for getting great results from Vibe. This guide covers the principles behind effective prompts: be specific, iterate in small steps, reference visual style, describe what you want rather than how to build it.

> Looking for ready-made prompts you can paste? See the [prompting library](./prompting-library.md) for recipes organized by intent (scaffold, refine, clone, connect, debug).

## Prompting Principles

### 1. Describe What You Want, Not How to Build It

Focus on the outcome you want, not the implementation details. Vibe knows which components, layouts, and patterns to use.

**Good:**
> Build a pricing page with three tiers: Starter at $9/mo, Pro at $29/mo, and Enterprise with custom pricing. Highlight the Pro tier as recommended.

**Less effective:**
> Create a div with flexbox that contains three Card components from shadcn/ui, each with a CardHeader containing an h3 for the tier name...

### 2. Be Specific About Content

Use real content instead of placeholders. The more specific you are about text, data, and structure, the better the result.

**Good:**
> Create a team page showing four team members: Sarah Chen (CEO), Marcus Johnson (CTO), Priya Patel (Head of Design), and Alex Rivera (Lead Engineer). Each person should have a photo placeholder, their name, role, and a short bio.

**Less effective:**
> Create a team page with some team members.

### 3. Reference Visual Style

When you have a design direction in mind, describe it with concrete terms. Reference well-known design styles, specific colors, or attach an image.

**Good:**
> Make the hero section feel minimal and editorial — large serif typography for the headline, lots of whitespace, and a muted color palette. Think Apple product page meets newspaper front page.

**Also good:**
> Attach a screenshot of a website you like and say: "Make my landing page look similar to this style"

### 4. Iterate in Focused Steps

Rather than cramming everything into one massive prompt, build up your application in stages. Each prompt should focus on one area or feature.

**Good flow:**
1. "Build a landing page for a SaaS product with a hero, features section, and footer"
2. "Add a testimonials carousel between features and footer with three customer quotes"
3. "Make the navigation sticky and add a mobile hamburger menu"
4. "Add a dark mode toggle to the header"

**Less effective:**
> Build a complete SaaS landing page with hero, features, testimonials, pricing, FAQ, footer, dark mode, mobile nav, animations, contact form, blog section, and team page all at once.

### 5. Describe Changes Surgically

When editing an existing application, be precise about what you want changed and where.

**Good:**
> In the hero section, change the headline to "Ship Faster with AI" and make the CTA button blue instead of green.

**Less effective:**
> Update the page to look different.

## Example Prompts

### Starting a New Project

**Landing page:**
> Build a modern landing page for "CloudSync", a file synchronization service. Include: a hero section with headline and CTA, a features grid with 6 features using icons, a pricing section with Free/Pro/Enterprise tiers, customer logos bar, and a footer with links.

**Multi-page site:**
> Create a website for a dental clinic called "Bright Smile Dental". Include a home page with services, a team page with dentist bios and photos, an FAQ page with common questions, and a booking page with a contact form.

**Portfolio:**
> Build a minimalist photography portfolio. Full-screen hero with the photographer's name "Elena Voss" and a tagline. Below, a masonry-style image gallery. Include an About page with a bio and a Contact page with a form.

**E-commerce:**
> Create a product listing page for a sneaker store. Show a grid of 8 product cards, each with an image placeholder, name, price, and "Add to Cart" button. Include filters on the left for brand, size, and price range. Add a header with logo, search bar, and cart icon.

### Modifying an Existing Project

**Adding a section:**
> Add a FAQ section before the footer. Include 6 questions with expandable answers about pricing, features, and getting started. Use an accordion component.

**Changing styling:**
> Make the entire site feel more premium: increase font sizes, add more whitespace between sections, use a serif font for headings, and add subtle animations when sections scroll into view.

**Adding functionality:**
> Add a contact form to the footer with fields for Name, Email, and Message. Style it to match the rest of the site. Include a "Send Message" button.

**Fixing specific elements:**
> The navigation menu items are too close together on mobile. Add more spacing between them and make the font size slightly larger.

### Using Images in Prompts

You can attach screenshots or mockups to your prompt to show Vibe what you're looking for:

> I attached a screenshot of a design I like. Recreate this layout for my landing page but use my existing color theme and content.

> Here's a wireframe sketch I drew. Build this page layout — the boxes at the top are stat cards, the large area is a chart, and the table at the bottom shows recent transactions.

### Using Voice Input

Click the microphone button to dictate your prompt. This is especially useful when you want to quickly describe changes while looking at the preview:

> "I'm looking at the pricing section and the cards feel too cramped. Can you add more padding inside each card and put some space between them? Also the prices should be bigger and bolder."

## Prompt Patterns

### The "Build + Refine" Pattern

Start broad, then narrow in:

1. **Build:** "Create a restaurant website with a menu, reservations, and about page"
2. **Refine layout:** "Move the reservation form to its own page and add a hero image to the menu page"
3. **Refine style:** "Use a warm, rustic color palette — deep browns, cream, and gold accents"
4. **Refine details:** "Add the restaurant hours to the footer and a Google Maps embed on the contact page"

### The "Reference + Customize" Pattern

Use a reference point and customize from there:

> "Build a pricing page similar to Stripe's pricing page — clean, minimal, with toggle between monthly and annual billing. Use my app's blue theme."

### The "Before and After" Pattern

Describe what's wrong and what you want instead:

> "The features section currently shows all 6 features in a single column. Instead, arrange them in a 3x2 grid on desktop and a single column on mobile."

### The "Role + Context" Pattern

Give Vibe context about who the audience is:

> "This is a landing page for small business owners who aren't tech-savvy. Keep the language simple, use large text, and make the CTA buttons very prominent. The main goal is to get them to sign up for a free trial."

## Things to Avoid

### Overly Vague Prompts
> "Make it look better" / "Improve the design" / "Fix the layout"

These don't give Vibe enough direction. Instead, specify *what* should look better and *how*.

### Implementation-Level Detail
> "Use a useState hook with an array of objects containing id, name, and price fields, then map over them with a CardComponent..."

Trust Vibe to handle the implementation. Focus on what you want the user to see and experience.

### Massive All-at-Once Prompts
Trying to build an entire complex application in a single prompt usually leads to worse results than building iteratively. Break it into logical pieces.

## Next Steps

- [Plan Mode](./plan-mode.md) — Use Plan mode for complex changes to review the approach before code is written
- [Visual Editor & Themes](./visual-editor.md) — Make visual adjustments directly without writing prompts
- [Connectors](./connectors/index.md) — Add forms, sign-in, and analytics to your application
- [Image generation](./image-generation.md) — Add hosted images to your application from a prompt
