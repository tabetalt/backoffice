import React from 'react';
import { Box, Flex } from 'theme-ui';
import { Logo } from '@tabetalt/kit';
import LoginButtons from './LoginButtons';

const LoginPage: React.FC = () => (
  <Flex
    sx={{ width: '100%', justifyContent: 'center' }}
    style={{ marginTop: '100px' }}
  >
    <Box style={{ width: '250px' }}>
      <Box style={{ margin: '0 auto' }}>
        <Logo />
      </Box>

      <p style={{ textAlign: 'center' }}>
        Logg inn ved å klikke på knappene nedenfor.
      </p>
      <LoginButtons />
    </Box>
  </Flex>
);

export default LoginPage;
