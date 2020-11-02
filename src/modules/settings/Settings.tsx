import React from 'react';
import { PartialRouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';
import { Box, Button } from 'theme-ui';
import Layout from '../../components/Layout';
import ShippingSettings from './components/ShippingSettings';
import GenericSettings from './components/GenericSettings';
import DiscountSettings from './components/DiscountSettings';
import PaymentMethodSettings from './components/PaymentMethodSettings';
import LayoutSettings from './components/LayoutSettings';

const Settings: React.FC = () => {
  const routes = useRoutes([
    // Doesn't work for now
    // https://github.com/ReactTraining/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/advanced-guides/migrating-5-to-6.md#use-useroutes-instead-of-react-router-config
    /* { path: '/', redirectTo: 'shipping' }, */
    { path: 'shipping', element: <ShippingSettings /> },
    { path: 'layout', element: <LayoutSettings /> },
    { path: 'generic', element: <GenericSettings /> },
    { path: 'discount', element: <DiscountSettings /> },
    { path: 'payment-method', element: <PaymentMethodSettings /> },
  ] as PartialRouteObject[]);

  return (
    <Layout
      header={{
        links: [
          {
            name: 'Innstillinger',
            to: '/settings/generic',
          },
        ],
        underLinks: [
          {
            name: 'Generelt',
            to: '/settings/generic',
          },
          {
            name: 'Utseende',
            to: '/settings/layout',
          },
          {
            name: 'Rabatter',
            to: '/settings/discount',
          },
          {
            name: 'Leveringsmetoder',
            to: '/settings/shipping',
          },
          {
            name: 'Betalingsmetoder',
            to: '/settings/payment-method',
          },
        ],
        children: (
          <Box>
            <Button>Lagre endringer</Button>
          </Box>
        ),
      }}
    >
      <Box sx={{ p: 5 }}>{routes}</Box>
    </Layout>
  );
};

export default Settings;
