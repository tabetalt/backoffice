import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme, Skeleton } from '@tabetalt/kit';
import getRoutes from './routing';
import gqlClient from './api/client';
import { useFirebase } from './config/authConfig';

const renderLoader = () => <Skeleton />;

const App: React.FC = () => {
  const contextFirebase = useFirebase();
  const routes = useRoutes(
    getRoutes(
      localStorage.getItem('user')?.length &&
        localStorage.getItem('user') != 'null'
        ? true
        : false
    )
  );
  console.log(contextFirebase.auth.currentUser);

  return (
    <ApolloProvider client={gqlClient}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={renderLoader()}>{routes}</Suspense>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
