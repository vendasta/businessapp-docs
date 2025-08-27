import React, {cloneElement, type ReactElement} from 'react';
import OriginalTOC from '@theme-original/TOC';
import type {Props} from '@theme/TOC';
import PageActions from '@site/src/components/PageActions';

export default function TOCWrapper(props: Props): ReactElement {
  const toc = <OriginalTOC {...props} />;
  return cloneElement(
    toc as ReactElement,
    toc.props,
    <>
      {toc.props.children}
      <PageActions />
    </>,
  );
}
