import React from 'react';
import { Table } from '@tabetalt/kit';
import Layout from '../../components/Layout';
import {icons} from '@tabetalt/kit';
import { Box, IconButton } from 'theme-ui';

const Orders = () => {
  const data = Array(10).fill({
    productName: 'Testproduktnavn',
    price: '299,90 NOK',
    inventoryStatus: 'Ikke på lager',
    stats: '3 besøk / 0 salg',
    status: 'Aktiv',
    actions: (
      <Box sx={{textAlign: 'right'}}>
        <IconButton>
          <icons.OpenIcon />
        </IconButton>
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
        <Table
          columns={[
            {
              Header: 'Produkter',
              accessor: 'productName',
              minWidth: '50%'
            },
            {
              Header: 'Produktpris',
              accessor: 'price',
            },
            {
              Header: 'Lagerstatus',
              accessor: 'inventoryStatus',
            },
            {
              Header: 'Statistikk',
              accessor: 'stats',
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

export default Orders;
