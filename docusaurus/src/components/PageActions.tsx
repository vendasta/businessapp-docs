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

const CLAUDE_PROMPT_MAX_LENGTH = 7000;

const getArticleMarkdown = (): string => {
  if (typeof window === 'undefined') return '';
  const article = document.querySelector('article');
  if (!article) return '';
  const turndown = new TurndownService();
  return turndown.turndown(article.innerHTML);
};

const buildClaudePrompt = ({
  pageUrl,
  markdown
}: {
  pageUrl: string;
  markdown: string;
}): string => {
  const basePrompt = `You are assisting me with the Business App documentation page at ${pageUrl}. Summarize the content and be prepared to answer follow-up questions.`;

  if (markdown) {
    const sectionHeader = '\n\n---\nPage content (Markdown):\n';
    const fullPrompt = `${basePrompt}${sectionHeader}${markdown}`;
    if (fullPrompt.length <= CLAUDE_PROMPT_MAX_LENGTH) {
      return fullPrompt;
    }

    const truncationNote = `\n\n(Content truncated. Open ${pageUrl} for the full page.)`;
    const available =
      CLAUDE_PROMPT_MAX_LENGTH -
      basePrompt.length -
      sectionHeader.length -
      truncationNote.length;
    if (available > 0) {
      return `${basePrompt}${sectionHeader}${markdown.slice(0, available)}${truncationNote}`;
    }
  }

  return `${basePrompt}\n\nPlease open the page above to read the full content before helping me.`;
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

  const getPrompt = () => {
    if (typeof window === 'undefined') return '';
    const url = window.location.href;
    return `Please open ${url} and summarize the information for me. I will ask you questions afterwards about my specific situation.`;
  };

  const handleOpenChatGPT = () => {
    if (typeof window === 'undefined') return;
    const prompt = getPrompt();
    const chatUrl = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
    window.open(chatUrl, '_blank');
  };

  const handleOpenClaude = () => {
    if (typeof window === 'undefined') return;
    const pageUrl = window.location.href;
    const markdown = getArticleMarkdown();
    const prompt = buildClaudePrompt({
      pageUrl,
      markdown
    });
    const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
    window.open(claudeUrl, '_blank');
  };

  const handleOpenPerplexity = () => {
    if (typeof window === 'undefined') return;
    const prompt = getPrompt();
    const perplexityUrl = `https://www.perplexity.ai/search/new?q=${encodeURIComponent(prompt)}`;
    window.open(perplexityUrl, '_blank');
  };

  const handleOpenGemini = () => {
    if (typeof window === 'undefined') return;
    const prompt = getPrompt();
    const geminiUrl = `https://gemini.google.com/app?query=${encodeURIComponent(prompt)}`;
    window.open(geminiUrl, '_blank');
  };

  const handleOpenGrok = () => {
    if (typeof window === 'undefined') return;
    const prompt = getPrompt();
    const grokUrl = `https://x.com/i/grok?text=${encodeURIComponent(prompt)}`;
    window.open(grokUrl, '_blank');
  };

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
