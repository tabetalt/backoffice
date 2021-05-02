import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme, Skeleton } from '@tabetalt/kit';
import getRoutes from './routing';
import gqlClient from './api/client';
import { auth } from './config/authConfig';

const renderLoader = () => <Skeleton />;

function checkAuth(): boolean {
  const user = localStorage.getItem('user');
  if (user && user === auth.currentUser?.uid) return true;
  return false;
}

const App: React.FC = () => {
  const routes = useRoutes(getRoutes(checkAuth()));

  return (
    <ApolloProvider client={gqlClient}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={renderLoader()}>{routes}</Suspense>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
