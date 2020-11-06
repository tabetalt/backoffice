import { Table, icons } from '@tabetalt/kit';
import React from 'react';
import { Box, IconButton } from 'theme-ui';
import Layout from '../../components/Layout';

const columns = [
  {
    Header: 'Sidenavn',
    accessor: 'name',
  },
  {
    Header: 'Lenke',
    accessor: 'link',
  },
  {
    Header: 'Vises i meny',
    accessor: 'navigation',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: '',
    accessor: 'actions',
  },
];

const Pages: React.FC = () => {
  const data = Array(10).fill({
    name: 'Om oss',
    link: 'butikknavn.no/',
    navigation: 'Hovedmeny',
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
    <Layout>
      <Box sx={{ p: 5 }}>
        <Table options={{ columns, data }} />
      </Box>
    </Layout>
  );
};

export default Pages;
