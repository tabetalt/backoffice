import { Table, icons } from '@tabetalt/kit';
import React from 'react';
import { Box, IconButton } from 'theme-ui';
import Layout from '../../components/Layout';

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
    <Layout>
      <Box sx={{ p: 5 }}>
        <Table
          columns={[
            {
              Header: 'Kategori',
              accessor: 'name',
              minWidth: '50%',
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
          ]}
          data={data}
        />
      </Box>
    </Layout>
  );
};

export default Categories;
