/** @jsx jsx */
import React from 'react';
import { Box, Styled, jsx } from 'theme-ui';
import Layout from '../../components/Layout';

const NotFound: React.FC = () => (
  <Layout>
    <Box sx={{ m: 5 }}>
      <Styled.h2 sx={{ textAlign: 'center' }}>Page Not Found</Styled.h2>
    </Box>
  </Layout>
);

export default NotFound;
