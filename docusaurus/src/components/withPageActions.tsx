import React, {type ComponentType, type ReactNode} from 'react';
import PageActions from './PageActions';

interface WithPageActionsOptions {
  position?: 'top' | 'bottom';
  direction?: 'row' | 'column';
  align?: 'start' | 'end' | 'center';
  className?: string;
  hideActions?: boolean;
}

/**
 * Higher-order component that wraps a theme component with page actions
 * (Open in ChatGPT and Copy as Markdown)
 */
export default function withPageActions<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithPageActionsOptions = {}
) {
  const {
    position = 'bottom',
    direction = 'column',
    align = 'start',
    className,
    hideActions = false
  } = options;

  return function WithPageActionsComponent(props: P): ReactNode {
    const actions = !hideActions ? (
      <PageActions
        direction={direction}
        align={align}
        className={className}
      />
    ) : null;

    return (
      <>
        {position === 'top' && actions}
        <WrappedComponent {...props} />
        {position === 'bottom' && actions}
      </>
    );
  };
}

// Convenience function for creating wrapped components
export function createPageActionsWrapper<P extends object>(
  WrappedComponent: ComponentType<P>,
  options?: WithPageActionsOptions
) {
  return withPageActions(WrappedComponent, options);
}
