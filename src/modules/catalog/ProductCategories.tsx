import { Table, icons } from '@tabetalt/kit';
import React from 'react';
import { Box, Button, IconButton } from 'theme-ui';
import Layout from '../../components/layout/Layout';

const columns = [
  {
    Header: 'Kategori',
    accessor: 'name',
  },
  {
    Header: 'Undergruppe av',
    accessor: 'parent',
  },
  {
    Header: 'Vis i meny',
    accessor: 'navigation',
  },
  {
    Header: '',
    accessor: 'actions',
  },
];

const Categories: React.FC = () => {
  const data = Array(10).fill({
    name: 'Alle produkter',
    parent: '',
    navigation: 'Hovedmeny',
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
            <Button variant="outline">Rediger navigasjon</Button>
            <Button sx={{ ml: 3 }}>Legg til ny kategori</Button>
          </Box>
        ),
      }}
    >
      <Box sx={{ p: 5 }}>
        <Table options={{ columns, data }} />
      </Box>
    </Layout>
  );
};

export default Categories;
