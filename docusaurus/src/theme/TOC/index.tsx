/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import type {Props} from '@theme/TOC';

import styles from './styles.module.css';
import ChatGPTLogo from '@site/static/img/chatgpt.svg';
import {useDoc} from '@docusaurus/theme-common';

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function TOC({className, ...props}: Props): ReactNode {
  const handleOpenChatGPT = () => {
    if (typeof window === 'undefined') return;
    const query = encodeURIComponent(`open ${window.location.href}`);
    const chatUrl = `https://chat.openai.com/?q=${query}&hints=search`;
    window.open(chatUrl, '_blank');
  };

  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
      <div className={styles.tocActions}>
        <button
          type="button"
          className={clsx(styles.openChatGPTLink, styles.tocAction)}
          onClick={handleOpenChatGPT}
        >
          <ChatGPTLogo className={styles.chatgptIcon} />
          Open this page in ChatGPT
        </button>
      </div>
    </div>
  );
}
