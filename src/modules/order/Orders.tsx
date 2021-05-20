import React from 'react';
import { CellProps, LoaderIcon, Table } from '@tabetalt/kit';
import Layout from '../../components/layout/Layout';
import { Box, Button } from 'theme-ui';
import { useNavigate } from 'react-router-dom';
import { GetOrdersQuery, useGetOrdersQuery } from '../../generated/graphql';
import * as DineroHelper from '../../helpers';
import moment from 'moment';
export type OrderItem = GetOrdersQuery['orders']['items'][0];

const Orders: React.FC = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useGetOrdersQuery();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Ordre',
        accessor: 'id',
      },
      {
        Header: 'Dato',
        accessor: 'orderTime',
        Cell: ({ row: { original: order } }: CellProps<OrderItem>) =>
          moment(order.orderTime).format('DD.MM.YYYY hh:mm'),
      },
      {
        Header: 'Kunde',
        accessor: 'tenantId',
      },
      {
        Header: 'Ordrestatus',
        accessor: 'status',
      },
      {
        Header: 'Betaling',
        accessor: 'paymentStatus',
      },
      {
        Header: 'Totalsum',
        accessor: 'totalSum.amount',
        Cell: ({ row: { original: order } }: CellProps<OrderItem>) =>
          DineroHelper.formatMoney(order?.totalSum),
      },

      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row: { original: order } }: CellProps<OrderItem>) => (
          <Box sx={{ textAlign: 'right' }}>
            <Button
              variant="outline"
              onClick={() => navigate(`/order/${order.id}`)}
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
    content = <Table options={{ columns, data: data?.orders.items || [] }} />;
  }

  return (
    <Layout>
      <Box sx={{ p: 5 }}>{content}</Box>
    </Layout>
  );
};

export default Orders;
