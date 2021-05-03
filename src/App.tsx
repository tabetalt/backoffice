import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme, Skeleton } from '@tabetalt/kit';
import getRoutes from './routing';
import gqlClient from './api/client';
import { auth } from './config/authConfig';

const renderLoader = () => <Skeleton />;

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  auth.onAuthStateChanged(function (user) {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const routes = useRoutes(getRoutes(isLoggedIn));

  return (
    <ApolloProvider client={gqlClient}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={renderLoader()}>{routes}</Suspense>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
