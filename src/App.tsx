import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme, Skeleton } from '@tabetalt/kit';
import { getRoutes } from './routing';
import gqlClient from './api/client';
import { useAuth } from './context/AuthContext';
import { TenantProvider } from './context/TenantContext';

const renderLoader = () => <Skeleton />;

export const App: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const routes = useRoutes(getRoutes(isLoggedIn()));

  return (
    <ApolloProvider client={gqlClient}>
      <ThemeProvider theme={theme}>
        <TenantProvider>
          <Suspense fallback={renderLoader()}>{routes}</Suspense>
        </TenantProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};
