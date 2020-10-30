import React from 'react';
import { Box, Button } from 'theme-ui';
import Layout from '../../components/Layout';

const Dashboard: React.FC = () => (
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
          <Button sx={{ ml: 3 }}>Logg ut</Button>
        </Box>
      ),
    }}
  >
    Hei
  </Layout>
);

export default Dashboard;
