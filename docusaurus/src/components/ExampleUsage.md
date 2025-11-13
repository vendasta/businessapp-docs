# Page Actions Component Usage

## Direct Usage

You can use the `PageActions` component directly anywhere you want to add the "Open in ChatGPT" and "Copy as Markdown" functionality:

```tsx
import PageActions from '@site/src/components/PageActions';

function MyComponent() {
  return (
    <div>
      {/* Your content */}
      <PageActions direction="row" align="center" />
    </div>
  );
}
```

## Higher-Order Component Usage

Use the `withPageActions` HOC to wrap existing theme components:

```tsx
import withPageActions from '@site/src/components/withPageActions';
import OriginalTOC from '@theme/TOC';

// Wrap the original TOC component
const TOCWithActions = withPageActions(OriginalTOC, {
  position: 'bottom',
  direction: 'column',
  align: 'start'
});

export default TOCWithActions;
```

## Swizzling Other Theme Components

You can easily add page actions to other theme components by creating minimal swizzles:

### Example: Adding to DocItem

1. Swizzle the DocItem component:
```bash
npm run swizzle @docusaurus/theme-classic DocItem/Layout -- --wrap
```

2. Modify the swizzled component:
```tsx
import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import PageActions from '@site/src/components/PageActions';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <PageActions direction="row" align="end" />
    </>
  );
}
```

### Example: Adding to Sidebar

```tsx
import React from 'react';
import Sidebar from '@theme-original/DocSidebar';
import PageActions from '@site/src/components/PageActions';

export default function SidebarWrapper(props) {
  return (
    <div>
      <Sidebar {...props} />
      <PageActions />
    </div>
  );
}
```

## Props

### PageActions Props

- `direction`: 'row' | 'column' (default: 'column')
- `align`: 'start' | 'end' | 'center' (default: 'start')
- `className`: Additional CSS classes

### withPageActions Options

- `position`: 'top' | 'bottom' (default: 'bottom')
- `direction`: 'row' | 'column' (default: 'column')
- `align`: 'start' | 'end' | 'center' (default: 'start')
- `className`: Additional CSS classes
- `hideActions`: boolean (default: false)
