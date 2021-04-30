import React from 'react';
import { Box, Flex } from 'theme-ui';
import { Logo } from '@tabetalt/kit';
import LoginButtons from './LoginButtons';

const LoginPage: React.FC = () => (
  <Flex
    sx={{ width: '100%', justifyContent: 'center' }}
    style={{ marginTop: '100px' }}
  >
    <Box>
      <Box style={{ width: '191px', margin: '0 auto' }}>
        <Logo />
      </Box>

      <p>Logg inn ved å klikke på knappene nedenfor.</p>
      {/* <Button>Google</Button>

      */}
      <LoginButtons />
    </Box>
  </Flex>
);

export default LoginPage;
