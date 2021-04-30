import React from 'react';
import { Box, Flex } from 'theme-ui';
import { Logo } from '@tabetalt/kit';
import LoginButtons from './LoginButtons';

const LoginPage: React.FC = () => (
  <Flex sx={{ width: '100%', justifyContent: 'center' }}>
    <Box>
      <Logo size={191} />
      <p>Logg inn ved å klikke på knappene nedenfor.</p>
      {/* <Button>Google</Button>

      */}
      <LoginButtons />
    </Box>
  </Flex>
);

export default LoginPage;
