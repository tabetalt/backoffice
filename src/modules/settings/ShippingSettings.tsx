import { Table, icons } from '@tabetalt/kit';
import React from 'react';
import { Box, Heading, IconButton, Text } from 'theme-ui';
import Layout from '../../components/Layout';

const Shipping: React.FC = () => {
  const data = Array(4).fill({
    name: 'PostNord',
    price: '299,90 NOK',
    status: 'Aktiv',
    actions: (
      <Box sx={{ textAlign: 'right' }}>
        <IconButton>
          <icons.TrashIcon />
        </IconButton>
        <IconButton>
          <icons.PencilIcon />
        </IconButton>
      </Box>
    ),
  });
  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Heading>Leveringsmetoder</Heading>
        <Text sx={{ mb: 4 }}>
          Hvilke leveringsmetoder vil du tilby? Her kan du administrere,
          sortere, legge til eller slette leveringsmetoder som kundene dine kan
          bruke.
        </Text>
        <Table
          columns={[
            {
              Header: 'Leveringsmetode',
              accessor: 'name',
              minWidth: '50%',
            },
            {
              Header: 'Pris',
              accessor: 'price',
            },
            {
              Header: 'Status',
              accessor: 'status',
            },
            {
              Header: '',
              accessor: 'actions',
            },
          ]}
          data={data}
        />
      </Box>
    </Layout>
  );
};

export default Shipping;
