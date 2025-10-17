import React from 'react';
import clsx from 'clsx';
import ProductSwitcher from '@site/src/components/ProductSwitcher';

type Props = {
  className?: string;
  mobile?: boolean;
  position?: 'left' | 'right';
  [key: string]: unknown;
};

export default function ProductSwitcherNavbarItem({
  className,
  mobile = false,
}: Props) {
  if (mobile) {
    return (
      <li className={clsx('menu__list-item', className)}>
        <ProductSwitcher variant="mobile" />
      </li>
    );
  }

  return (
    <div className={clsx('navbar__item', 'navbar__item--product-switcher', className)}>
      <ProductSwitcher variant="navbar" />
    </div>
  );
}
