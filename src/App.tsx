import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme, Skeleton } from '@tabetalt/kit';
import routing from './routing';

const renderLoader = () => <Skeleton />;

const App: React.FC = () => {
  const routes = useRoutes(routing);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={renderLoader()}>{routes}</Suspense>
    </ThemeProvider>
  );
};

export default App;
