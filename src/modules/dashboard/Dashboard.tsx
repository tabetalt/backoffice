import React from 'react';
import { Box, Button } from 'theme-ui';
import Layout from '../../components/layout/Layout';
import { useAuth } from '../../context/AuthContext';

const Dashboard: React.FC = () => {
  const { auth } = useAuth();
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
                auth?.signOut();
                localStorage.setItem('user', '');
                localStorage.setItem('token', '');
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
