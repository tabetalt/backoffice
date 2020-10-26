import { Table, icons } from '@tabetalt/kit';
import React from 'react';
import { Box, Button, IconButton } from 'theme-ui';
import Layout from '../../components/Layout';

const Products: React.FC = () => {
  const data = Array(10).fill({
    productName: 'Testproduktnavn',
    price: '299,90 NOK',
    inventoryStatus: 'Ikke på lager',
    stats: '3 besøk / 0 salg',
    status: 'Aktiv',
    actions: (
      <Box sx={{ textAlign: 'right' }}>
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
    <Layout
      header={{
        links: [
          {
            name: 'Produkter',
            to: '/catalog/products',
          },
          {
            name: 'Kategorier',
            to: '/catalog/categories',
          },
        ],
        children: (
          <Box>
            <Button variant="outline">Eksporter</Button>
            <Button variant="outline" sx={{ ml: 3 }}>
              Importer
            </Button>
            <Button sx={{ ml: 3 }}>Legg til produkt</Button>
          </Box>
        ),
      }}
    >
      <Box sx={{ p: 5 }}>
        <Table
          columns={[
            {
              Header: 'Produkter',
              accessor: 'productName',
              minWidth: '50%',
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

export default Products;
