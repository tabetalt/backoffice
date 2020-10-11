import React from 'react';
import Sidebar from './Sidebar';
import { Flex, Box } from 'theme-ui';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <Flex sx={{ alignItems: 'stretch', width: '100%' }}>
      <Sidebar />

      <Box sx={{ minHeight: '100vh', width: '100%' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
