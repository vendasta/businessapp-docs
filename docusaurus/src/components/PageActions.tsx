import React, {type ReactNode, useState} from 'react';
import clsx from 'clsx';
import ChatGPTLogo from '@site/static/img/chatgpt.svg';
import ClaudeLogo from '@site/static/img/claude.svg';
import PerplexityLogo from '@site/static/img/perplexity.svg';
import GeminiLogo from '@site/static/img/gemini.svg';
import GrokLogo from '@site/static/img/grok.svg';
import {MdContentCopy} from 'react-icons/md';
import TurndownService from 'turndown';
import styles from './PageActions.module.css';

// Conservative ceiling for the full prefilled-prompt URL (including the tool's
// base and the percent-encoded query). Long enough to embed most pages, short
// enough to stay under proxy/server URL limits across the supported tools.
const MAX_AI_URL_LENGTH = 8000;

const getArticleMarkdown = (): string => {
  if (typeof window === 'undefined') return '';
  const article = document.querySelector('article');
  if (!article) return '';
  const turndown = new TurndownService();
  return turndown.turndown(article.innerHTML);
};

// Derive the same-origin raw-Markdown URL for a page from its URL. Mirrors the
// raw-markdown plugin's permalink→file mapping:
//   'https://host/business-app/reviews/' -> 'https://host/business-app/reviews.md'
//   'https://host/'                       -> 'https://host/index.md'
// Because it is built from the page's own URL, it stays on whatever (gray-label)
// domain the reader is on and never references an internal repo or brand.
const toMdUrl = (pageUrl: string): string => {
  try {
    const url = new URL(pageUrl);
    const trimmed = url.pathname.replace(/\/+$/, '');
    url.pathname = `${trimmed === '' ? '/index' : trimmed}.md`;
    url.search = '';
    url.hash = '';
    return url.toString();
  } catch {
    return pageUrl;
  }
};

// Build a tool URL (base already includes the query param, e.g. ".../?q=") with
// the page content embedded as Markdown. If the fully-embedded prompt would push
// the encoded URL past MAX_AI_URL_LENGTH, fall back to referencing the page's
// complete same-origin .md file (see toMdUrl) instead of embedding a truncated
// slice — so the assistant always gets the full page.
const buildAIUrl = ({
  queryBase,
  pageUrl,
  markdown
}: {
  queryBase: string;
  pageUrl: string;
  markdown: string;
}): string => {
  const basePrompt = `You are assisting me with the Business App documentation page at ${pageUrl}. Summarize the content and be prepared to answer follow-up questions.`;
  const toUrl = (prompt: string) => `${queryBase}${encodeURIComponent(prompt)}`;
  const fits = (prompt: string) => toUrl(prompt).length <= MAX_AI_URL_LENGTH;

  if (markdown) {
    const sectionHeader = '\n\n---\nPage content (Markdown):\n';
    const fullPrompt = `${basePrompt}${sectionHeader}${markdown}`;
    if (fits(fullPrompt)) {
      return toUrl(fullPrompt);
    }
  }

  // The page is too long to embed inline (or has no scrapeable Markdown): point
  // the tool at the complete, same-origin raw Markdown file instead of sending a
  // truncated slice. The .md URL is served by the raw-markdown build plugin and
  // stays on the reader's own (gray-label) domain — no brand/repo leak.
  const mdUrl = toMdUrl(pageUrl);
  return toUrl(
    `${basePrompt}\n\nThe complete Markdown for this page is available at ${mdUrl}\n\nPlease read that file for the full content before helping me.`
  );
};

interface PageActionsProps {
  className?: string;
  direction?: 'row' | 'column';
  align?: 'start' | 'end' | 'center';
}

export default function PageActions({
  className,
  direction = 'column',
  align = 'start'
}: PageActionsProps): ReactNode {
  const [copied, setCopied] = useState(false);

  const openInAI = (queryBase: string) => {
    if (typeof window === 'undefined') return;
    const pageUrl = window.location.href;
    const markdown = getArticleMarkdown();
    const url = buildAIUrl({queryBase, pageUrl, markdown});
    window.open(url, '_blank');
  };

  const handleOpenChatGPT = () => openInAI('https://chatgpt.com/?q=');
  const handleOpenClaude = () => openInAI('https://claude.ai/new?q=');
  const handleOpenPerplexity = () =>
    openInAI('https://www.perplexity.ai/search/new?q=');
  const handleOpenGemini = () => openInAI('https://gemini.google.com/app?query=');
  const handleOpenGrok = () => openInAI('https://x.com/i/grok?text=');

  const handleCopyMarkdown = async () => {
    if (typeof window === 'undefined') return;
    const markdown = getArticleMarkdown();
    if (!markdown) return;
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy markdown', err);
    }
  };

  return (
    <div
      className={clsx(
        styles.pageActions,
        styles[`direction-${direction}`],
        styles[`align-${align}`],
        className
      )}
    >
      <button
        type="button"
        className={clsx(styles.openChatGPTLink, styles.pageAction)}
        onClick={handleOpenChatGPT}
      >
        <ChatGPTLogo
          className={styles.chatgptIcon}
          width="1em"
          height="1em"
          style={{verticalAlign: 'text-bottom'}}
          aria-label="ChatGPT logo"
        />
        Open in ChatGPT
      </button>
      <button
        type="button"
        className={clsx(styles.openAILink, styles.pageAction)}
        onClick={handleOpenClaude}
      >
        <ClaudeLogo
          className={styles.aiIcon}
          width="1em"
          height="1em"
          style={{verticalAlign: 'text-bottom'}}
          aria-label="Claude logo"
        />
        Open in Claude
      </button>
      <button
        type="button"
        className={clsx(styles.openAILink, styles.pageAction)}
        onClick={handleOpenPerplexity}
      >
        <PerplexityLogo
          className={styles.aiIcon}
          width="1em"
          height="1em"
          style={{verticalAlign: 'text-bottom'}}
          aria-label="Perplexity logo"
        />
        Open in Perplexity
      </button>
      <button
        type="button"
        className={clsx(styles.openAILink, styles.pageAction)}
        onClick={handleOpenGemini}
      >
        <GeminiLogo
          className={styles.aiIcon}
          width="1em"
          height="1em"
          style={{verticalAlign: 'text-bottom'}}
          aria-label="Gemini logo"
        />
        Open in Google AI
      </button>
      <button
        type="button"
        className={clsx(styles.openAILink, styles.pageAction)}
        onClick={handleOpenGrok}
      >
        <GrokLogo
          className={styles.aiIcon}
          width="1em"
          height="1em"
          style={{verticalAlign: 'text-bottom'}}
          aria-label="Grok logo"
        />
        Open in Grok
      </button>
      <button
        type="button"
        className={clsx(styles.copyMarkdownLink, styles.pageAction)}
        onClick={handleCopyMarkdown}
      >
        <MdContentCopy
          className={styles.copyIcon}
          size="1em"
          style={{verticalAlign: 'text-bottom'}}
          aria-label="Copy icon"
        />
        {copied ? 'Copied!' : 'Copy as Markdown'}
      </button>
    </div>
  );
}
