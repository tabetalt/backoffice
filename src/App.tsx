import React, { Suspense, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme, Skeleton, LoaderIcon } from '@tabetalt/kit';
import { getRoutes } from './routing';
import gqlClient from './api/client';
import { auth } from './config/authConfig';

const renderLoader = () => <Skeleton />;

export const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isInited, setInitApp] = React.useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      setInitApp(true);
       setLoggedIn(user ? true : false);
    });

    return function cleanup() {
      unsubscribe();
    };
  }, []);

  const routes = useRoutes(getRoutes(isLoggedIn));

  return (
    <ApolloProvider client={gqlClient}>
      <ThemeProvider theme={theme}>
        {!isInited ? (
          <LoaderIcon sx={{ width: 5, display: 'block', m: '10% auto' }} />
        ) : (
          <Suspense fallback={renderLoader()}>{routes}</Suspense>
        )}
      </ThemeProvider>
    </ApolloProvider>
  );
};
