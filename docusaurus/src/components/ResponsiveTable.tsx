import React from 'react';

/**
* A lightweight wrapper component that adds the global
* `.responsive-table` class around its children. This lets Markdown
* authors write:
*
* ```mdx
* import ResponsiveTable from '@site/src/components/ResponsiveTable';
*
* <ResponsiveTable>
* | Header | Header |
* |--------|--------|
* | Cell   | Cell   |
* </ResponsiveTable>
* ```
*
* The accompanying CSS (see `src/css/custom.css`) handles the actual
* responsive behaviour – horizontal scrolling on small screens while
* keeping markup totally semantic.
*/
export interface ResponsiveTableProps {
  /** Table or arbitrary content to render inside the responsive wrapper. */
  children: React.ReactNode;
  /** Optional additional class names to merge with the base class. */
  className?: string;
}

export default function ResponsiveTable({
  children,
  className,
}: ResponsiveTableProps): JSX.Element {
  return (
    <div className={['responsive-table', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
