import React, {type ReactNode, useState} from 'react';
import clsx from 'clsx';
import ChatGPTLogo from '@site/static/img/chatgpt.svg';
import {MdContentCopy} from 'react-icons/md';
import TurndownService from 'turndown';
import styles from './PageActions.module.css';

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

  const handleOpenChatGPT = () => {
    if (typeof window === 'undefined') return;
    const query = encodeURIComponent(`open ${window.location.href}`);
    const chatUrl = `https://chat.openai.com/?q=${query}&hints=search`;
    window.open(chatUrl, '_blank');
  };

  const handleCopyMarkdown = async () => {
    if (typeof window === 'undefined') return;
    const article = document.querySelector('article');
    if (!article) return;
    const turndown = new TurndownService();
    const markdown = turndown.turndown(article.innerHTML);
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
