import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import ProductSwitcher from '@site/src/components/ProductSwitcher';
import styles from './styles.module.css';

export default function Navbar(props) {
  return (
    <>
      <OriginalNavbar {...props} />
      <div className={styles.productSwitcherBar}>
        <div className={styles.productSwitcherContainer}>
          <ProductSwitcher />
        </div>
      </div>
    </>
  );
}

