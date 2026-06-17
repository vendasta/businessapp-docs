import React, { createContext, useContext, type ReactNode } from 'react';

export interface UserIdentity {
  userId: string;
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  jobRole?: string;
  persona: string;
  partnerId: string;
  accountId: string;
  site: string;
  sites?: string[];
}

interface AuthContextValue {
  user: UserIdentity | null;
  token: string | null;
  loading: boolean;
  login: (credential: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  token: null,
  loading: false,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={{ user: null, token: null, loading: false, login: async () => {}, logout: () => {} }}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}
