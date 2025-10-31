import React, {type ReactElement} from 'react';
import OriginalTOC from '@theme-original/TOC';
import type {Props} from '@theme/TOC';
import PageActions from '@site/src/components/PageActions';
import styles from './styles.module.css';

export default function TOCWrapper(props: Props): ReactElement {
  return (
    <div className={styles.tocContainer}>
      <div className={styles.tocContent}>
        <OriginalTOC {...props} />
      </div>
      <div className={styles.pageActionsContainer}>
        <PageActions />
      </div>
    </div>
  );
}
