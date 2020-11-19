import React from 'react';
import { Table } from '@tabetalt/kit';
import Layout from '../../components/layout/Layout';
import { Badge, Box, Button } from 'theme-ui';
import { useNavigate } from 'react-router-dom';

const columns = [
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
  },
];

const Orders: React.FC = () => {
  const navigate = useNavigate();
  const data = Array(10).fill({
    orderNumber: '00001',
    orderDate: '26.05.2020',
    customer: 'Anne Matilde R. Fjeldstad',
    orderStatus: <Badge variant="success">Bekreftet</Badge>,
    paymentStatus: <Badge variant="success">Betalt</Badge>,
    total: '1229,00',
    actions: (
      <Box sx={{ textAlign: 'right' }}>
        <Button variant="outline" onClick={() => navigate('/order/1')}>
          Vis
        </Button>
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

export default Orders;
