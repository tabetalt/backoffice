import React from 'react';
import { PartialRouteObject } from 'react-router';
import { NavLink, useRoutes } from 'react-router-dom';
import { Box } from 'theme-ui';
import Layout from '../../components/layout/Layout';
import ShippingSettings from './ShippingSettings';
import GenericSettings from './GenericSettings';
import DiscountSettings from './DiscountSettings';
import PaymentMethodSettings from './PaymentMethodSettings';

const Settings: React.FC = () => {
  const routes = useRoutes([
    // Doesn't work for now
    // https://github.com/ReactTraining/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/advanced-guides/migrating-5-to-6.md#use-useroutes-instead-of-react-router-config
    /* { path: '/', redirectTo: 'shipping' }, */
    { path: 'shipping', element: <ShippingSettings /> },
    { path: 'generic', element: <GenericSettings /> },
    { path: 'discount', element: <DiscountSettings /> },
    { path: 'payment-method', element: <PaymentMethodSettings /> },
  ] as PartialRouteObject[]);

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Box
          sx={{
            mt: 3,
            mb: 5,
            '>a': {
              mr: 4,
              color: 'muted',
              fontWeight: 'normal',
              textDecoration: 'none',
              '&.active': { color: 'text' },
            },
          }}
        >
          <NavLink to="shipping">Leveringsmetoder</NavLink>
          <NavLink to="generic">Butikkinformasjon</NavLink>
          <NavLink to="discount">Rabatter</NavLink>
          <NavLink to="payment-method">Betalingsmetoder</NavLink>
        </Box>
        {routes}
      </Box>
    </Layout>
  );
};

export default Settings;
