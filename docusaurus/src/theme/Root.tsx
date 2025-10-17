import React from 'react';
import { PermissionsProvider } from '../contexts/PermissionsContext';

// Wraps the entire application to provide the PermissionsContext
export default function Root({ children }: { children: React.ReactNode }) {
  return <PermissionsProvider>{children}</PermissionsProvider>;
}

