import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { products, Product } from '../config/products';

interface PermissionsContextType {
  allowedProducts: string[];
  hasProductAccess: (productId: string) => boolean;
  getAllowedProducts: () => Product[];
  setAllowedProducts: (productIds: string[]) => void;
}

const PermissionsContext = createContext<PermissionsContextType | undefined>(undefined);

const STORAGE_KEY = 'docs_allowed_products';

export const PermissionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize with all products by default
  const [allowedProducts, setAllowedProductsState] = useState<string[]>(() => {
    if (typeof window === 'undefined') {
      return products.map(p => p.id);
    }
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error reading permissions from localStorage:', e);
    }
    
    // Default to all products
    return products.map(p => p.id);
  });

  // Sync to localStorage when permissions change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allowedProducts));
      } catch (e) {
        console.error('Error saving permissions to localStorage:', e);
      }
    }
  }, [allowedProducts]);

  const hasProductAccess = (productId: string): boolean => {
    return allowedProducts.includes(productId);
  };

  const getAllowedProducts = (): Product[] => {
    return products.filter(product => hasProductAccess(product.id));
  };

  const setAllowedProducts = (productIds: string[]): void => {
    setAllowedProductsState(productIds);
  };

  return (
    <PermissionsContext.Provider
      value={{
        allowedProducts,
        hasProductAccess,
        getAllowedProducts,
        setAllowedProducts,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};

export const usePermissions = (): PermissionsContextType => {
  const context = useContext(PermissionsContext);
  if (context === undefined) {
    throw new Error('usePermissions must be used within a PermissionsProvider');
  }
  return context;
};

// Helper hook to check if current page product is accessible
export const useCurrentProductAccess = (): { 
  hasAccess: boolean; 
  currentProduct: Product | undefined;
} => {
  const { hasProductAccess } = usePermissions();
  const [currentProduct, setCurrentProduct] = useState<Product | undefined>(undefined);
  const [hasAccess, setHasAccess] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const pathname = window.location.pathname;
    const product = products.find(p => pathname.startsWith(p.path));
    
    setCurrentProduct(product);
    setHasAccess(product ? hasProductAccess(product.id) : true);
  }, [hasProductAccess]);

  return { hasAccess, currentProduct };
};

