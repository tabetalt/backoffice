import React from 'react';
import Sidebar from './Sidebar';
import { Flex, Box } from 'theme-ui';
import Header, { HeaderProps } from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  header?: HeaderProps;
}

const Layout: React.FC<LayoutProps> = ({ children, header }) => {
  return (
    <Flex sx={{ alignItems: 'stretch', width: '100%' }}>
      <Sidebar />

      <Box sx={{ minHeight: '100vh', width: '100%' }}>
        <Header {...header} />
        <main>{children}</main>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
