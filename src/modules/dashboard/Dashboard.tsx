import React from 'react';
import { Box, Button } from 'theme-ui';
import Layout from '../../components/layout/Layout';
import { useFirebase } from '../../config/authConfig';

const Dashboard: React.FC = () => {
  const contextFirebase = useFirebase();
  console.log(contextFirebase.auth);

  return (
    <Layout
      header={{
        links: [
          {
            name: 'Dashbord',
            to: '/',
          },
        ],
        children: (
          <Box>
            <Button variant="outline">Gå til butikken</Button>
            <Button
              sx={{ ml: 3 }}
              onClick={() => {
                contextFirebase.auth.signOut();
                localStorage.setItem('user', '');
                window.location.reload();
              }}
            >
              Logg ut
            </Button>
          </Box>
        ),
      }}
    >
      Hei
    </Layout>
  );
};

export default Dashboard;
