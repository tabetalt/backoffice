import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme } from '@tabetalt/kit'

// Modules
const Dashboard = lazy(() => import('./modules/dashboard/Dashboard'));

const About = () => <div>Hallo</div>;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
