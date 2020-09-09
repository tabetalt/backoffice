import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme } from '@tabetalt/kit'

// Modules
const Dashboard = lazy(() => import('./modules/dashboard/Dashboard'));

const About = () => <div>Hallo</div>;

const renderLoader = () => <p>Loading</p>;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
