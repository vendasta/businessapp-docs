---
title: Email Configuration
sidebar_position: 2
---
Getting your emails to reach people's inboxes shows that you are sending the right messages at the right time. If people open, click, or complain about your emails, it can affect whether your emails are seen as good or spam. More positive actions mean your emails are more likely to be seen!

## Authenticate your custom email domain

By default, when you are sending any email through the Business App platform, you will be using the Business App shared domain. This is fine to begin with, but it’s better to set up your own custom email domain which will allow you to build a sending reputation on your brand's own domain, and limit any negative impact to your domain reputation and deliverability from shared senders.

Setting up SPF, DKIM, and DMARC is like showing an ID for your emails. It proves to email companies that you are genuine, making them more likely to trust and deliver your emails.

Configure your email settings via Business App > Settings > Email Configuration.

:::info
Business App uses HTTPS link branding for tracking links in campaign emails, which helps reduce deliverability warnings from some providers. Authenticating your domain further improves inbox placement and reputation.
::::

## Warm up your email domain

Once you've established your custom email domain, it's important to allocate a period for warming it up. Without properly warming up your domain, your emails risk being filtered out by various email service providers.

Email domain warm-up means you begin with a few emails and gradually increase the number over time. This process helps email providers get used to your typical email volume, improving your chances of successful delivery. Although warming up can take up to 60 days, many manage it in 30 days or even within a week. Your email performance can guide the pace—if you're doing well, you can speed up. If you hit snags, slow down. Early on, focus on engagement; low interest from recipients can make providers stricter.

It’s recommended to start with 50 emails and increase slowly, avoiding more than a 10x jump each day. As long as your emails perform well, you can gradually increase the volume. For example, you might go from 50 emails to 250, then 1,500, to 5,000 and keep growing to your desired sending amount.

## Write trustworthy subject lines

Subject lines are key elements that influence whether someone will open your emails or not. While email service providers are getting better at filtering emails, it's still a good idea to steer clear of phrases commonly associated with spam.

:::tip[Examples of phrases to avoid]

* Urgent!
* FREE!!!
* Act now
:::

There aren't specific words that will always ensure your emails land in the inbox, and it's possible to use the above phrases in legitimate emails. When crafting your subject lines, aim to convey the real value of your email without coming across as overly aggressive or sales-oriented.

## Keep Your Email List Clean

Don’t let your ego get in the way of your email deliverability. If someone hasn't opened or clicked on your emails for a long time, it might be time to stop sending to them.

Consider not sending email campaigns to contacts that haven’t interacted and engaged with any of your campaign emails in a long period by filtering on “Last campaign opened date” and “Last campaign clicked date” in the CRM. Cleaning your email list often keeps it healthy with only the people who really read your emails.

## Avoid spam traps
Spam traps are email addresses created by email service providers to catch spammers sending unwanted emails. If you send an email to one of these traps, you'll be quickly blocked and added to a deny list. Getting off this list can be very hard, so it's best to avoid getting on it altogether. Email marketers can steer clear of spam traps by maintaining a list of active users and never, ever, purchase an email list.

## Send emails that your contacts love

When your contacts open and click on your emails, it shows you're delivering content they find valuable. On the flip side, spam complaints, high bounce rates, and unsubscribes can harm your reputation as a sender. By monitoring your email performance, you can discover which content appeals to your audience and decide which contacts to focus on in future campaigns.

## Frequently Asked Questions (FAQs)

<details>
<summary>What’s the difference between the shared sending domain and a custom domain?</summary>

The shared sending domain is the default domain used by Business App for outbound campaigns. Many senders share it. A custom domain is your own authenticated domain (via SPF/DKIM/DMARC) that you connect to build reputation for your brand. For best deliverability and control, set up a custom domain. See [Authenticate your custom email domain](#authenticate-your-custom-email-domain).
</details>

<details>
<summary>Which should I use—shared domain or custom domain?</summary>

Use the shared domain to get started quickly. For ongoing sending, we strongly recommend a custom domain to build your own sender reputation and reduce the impact of other senders. Link tracking uses HTTPS by default and works with both.
</details>
