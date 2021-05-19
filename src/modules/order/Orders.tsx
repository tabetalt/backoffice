import React from 'react';
import { CellProps, LoaderIcon, Table } from '@tabetalt/kit';
import Layout from '../../components/layout/Layout';
import { Badge, Box, Button } from 'theme-ui';
import { useNavigate } from 'react-router-dom';
import { GetProductsQuery, useGetProductsQuery } from '../../generated/graphql';

export type ProductItem = GetProductsQuery['products']['items'][0];

const Orders: React.FC = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useGetProductsQuery();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Ordre',
        accessor: 'orderNumber',
      },
      {
        Header: 'Dato',
        accessor: 'orderDate',
      },
      {
        Header: 'Kunde',
        accessor: 'customer',
      },
      {
        Header: 'Ordrestatus',
        accessor: 'orderStatus',
      },
      {
        Header: 'Betaling',
        accessor: 'paymentStatus',
      },
      {
        Header: 'Totalsum',
        accessor: 'total',
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row: { original: product } }: CellProps<ProductItem>) => (
          <Box sx={{ textAlign: 'right' }}>
            <Button
              variant="outline"
              onClick={() => navigate(`/order/${product.id}`)}
            >
              Vis
            </Button>
          </Box>
        ),
      },
    ],
    []
  );

  let content = null;
  if (loading) {
    content = <LoaderIcon sx={{ width: 5, display: 'block', m: '0 auto' }} />;
  } else if (error) {
    content = <span>Error getting order list</span>; // TODO: improve error message
  } else {
    content = (
      <Table options={{ columns, data: data?.products?.items || [] }} />
    );
  }

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        {/* <Table options={{ columns, data }} /> */}
        {content}
      </Box>
    </Layout>
  );
};

export default Orders;
