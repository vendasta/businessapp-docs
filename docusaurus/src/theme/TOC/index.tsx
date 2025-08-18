import React from 'react';
import OriginalTOC from '@theme-original/TOC';
import PageActions from '@site/src/components/PageActions';
import type {Props} from '@theme/TOC';

export default function TOCWrapper(props: Props) {
  return (
    <>
      <OriginalTOC {...props} />
      <PageActions />
    </>
  );
}
