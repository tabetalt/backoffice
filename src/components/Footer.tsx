import React from 'react';
import { Logo } from '@tabetalt/kit';
import { Flex } from 'theme-ui';

const Footer: React.FC = () => (
  <Flex sx={{ width: '100%', justifyContent: 'center' }}>
    <Logo size={112} />
  </Flex>
);

export default Footer;
