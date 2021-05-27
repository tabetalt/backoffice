import React, { useContext, useState, useEffect } from 'react';
import { GetTenantsQuery, useGetTenantsQuery } from '../generated/graphql';
import { useAuth } from './AuthContext';

export type TenantItem = GetTenantsQuery['tenants']['items'][0];

interface TenantContextValue {
  tenants: TenantItem[];
  currentTenant: TenantItem | null;
  updateRequired?: () => void;
}

export const TenantContext = React.createContext<TenantContextValue>({
  tenants: [],
  currentTenant: null,
} as TenantContextValue);

export function useTenant(): TenantContextValue {
  return useContext(TenantContext);
}

function useAuthContext() {
  const context = useAuth();
  return context;
}

export const TenantProvider: React.FC = ({ children }) => {
  const authContext = useAuthContext();
  const [, setUserId] = useState<string>();
  const [tenantUpdateState, updateTenant] = useState(true);

  useEffect(() => {
    setUserId(authContext.currentUser?.uid);
  }, [authContext]);

  const { data, loading, error } = useGetTenantsQuery(); // TODO: use currentUserId to retrive tenants only for current user
  const tenants =
    !loading && !error && authContext.isLoggedIn() && data
      ? data.tenants.items
      : [];
  // TODO: handle errors
  if (error) console.log(error);
  const currentTenant = tenants.length > 0 ? tenants[0] : null;

  function updateRequired() {
    updateTenant(!tenantUpdateState);
  }

  const context = {
    tenants,
    currentTenant,
    updateRequired,
  };
  return (
    <TenantContext.Provider value={context}>{children}</TenantContext.Provider>
  );
};
