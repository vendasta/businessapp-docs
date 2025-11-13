import React from 'react';
import clsx from 'clsx';
import {
  NavbarSecondaryMenuFiller,
  type NavbarSecondaryMenuComponent,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import DocSidebarItems from '@theme/DocSidebarItems';
import type {Props} from '@theme/DocSidebar/Mobile';

import ProductSwitcher from '@site/src/components/ProductSwitcher';
import styles from './styles.module.css';

const DocSidebarMobileSecondaryMenu: NavbarSecondaryMenuComponent<Props> = ({
  sidebar,
  path,
}) => {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <>
      <div className={styles.switcherContainer}>
        <ProductSwitcher variant="mobile" />
      </div>

      <ul
        className={clsx(
          ThemeClassNames.docs.docSidebarMenu,
          'menu__list',
          styles.menuList,
        )}
      >
        <DocSidebarItems
          items={sidebar}
          activePath={path}
          onItemClick={(item) => {
            if (item.type === 'category' && item.href) {
              mobileSidebar.toggle();
            }
            if (item.type === 'link') {
              mobileSidebar.toggle();
            }
          }}
          level={1}
        />
      </ul>
    </>
  );
};

function DocSidebarMobile(props: Props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default React.memo(DocSidebarMobile);
