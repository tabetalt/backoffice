import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme } from '@tabetalt/kit'
import Layout from './components/Layout';


const Home = () => <Layout>Hei</Layout>;
const About = () => <div>Hallo</div>;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
