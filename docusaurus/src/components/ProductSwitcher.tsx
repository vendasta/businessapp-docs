import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import { usePermissions } from '../contexts/PermissionsContext';
import { getProductByPath } from '../config/products';
import styles from './ProductSwitcher.module.css';

const ProductSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const { getAllowedProducts } = usePermissions();
  const history = useHistory();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allowedProducts = getAllowedProducts();

  useEffect(() => {
    const product = getProductByPath(location.pathname);
    setCurrentProduct(product || allowedProducts[0]);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductChange = (productId: string) => {
    const product = allowedProducts.find(p => p.id === productId);
    if (product) {
      history.push(product.path);
      setIsOpen(false);
    }
  };

  if (!currentProduct || allowedProducts.length === 0) {
    return null;
  }

  return (
    <div className={styles.productSwitcher} ref={dropdownRef}>
      <button
        className={styles.switcherButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select product"
      >
        <img 
          src={currentProduct.logo} 
          alt={currentProduct.name} 
          className={styles.productLogo}
        />
        <span className={styles.productName}>{currentProduct.name}</span>
        <svg 
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M2.5 4.5L6 8L9.5 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>Select your product</div>
          {allowedProducts.map((product) => (
            <button
              key={product.id}
              className={`${styles.dropdownItem} ${
                currentProduct.id === product.id ? styles.dropdownItemActive : ''
              }`}
              onClick={() => handleProductChange(product.id)}
            >
              <img 
                src={product.logo} 
                alt={product.name} 
                className={styles.dropdownLogo}
              />
              <div className={styles.dropdownItemContent}>
                <div className={styles.dropdownItemName}>{product.name}</div>
                {product.tagline && (
                  <div className={styles.dropdownItemTagline}>{product.tagline}</div>
                )}
              </div>
              {currentProduct.id === product.id && (
                <svg 
                  className={styles.checkmark}
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M13.3337 4L6.00033 11.3333L2.66699 8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSwitcher;

