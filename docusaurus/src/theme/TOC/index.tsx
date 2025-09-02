import React from 'react';
import TOC from '@theme-original/TOC';
import withPageActions from '@site/src/components/withPageActions';
import pageActionsStyles from '@site/src/components/PageActions.module.css';
import type {Props} from '@theme/TOC';

export default withPageActions<Props>(TOC, {
  position: 'top',
  direction: 'row',
  align: 'end',
  className: pageActionsStyles.sticky,
});
