import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme, Skeleton } from '@tabetalt/kit';
import routing from './routing';
import gqlClient from './api/client';

const renderLoader = () => <Skeleton />;

const App: React.FC = () => {
  const routes = useRoutes(routing);

  return (
    <ApolloProvider client={gqlClient}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={renderLoader()}>{routes}</Suspense>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
