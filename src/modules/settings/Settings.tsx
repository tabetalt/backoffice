import React, { useCallback } from 'react';
import { PartialRouteObject } from 'react-router';
import { useRoutes, Navigate, useLocation } from 'react-router-dom';
import { Box, Button } from 'theme-ui';
import Layout from '../../components/layout/Layout';
import ShippingSettings from './ShippingSettings';
import { GeneralSettings } from './GeneralSettings';
//import DiscountSettings from './DiscountSettings';
import { SettingsNavigation } from './SettingsNavigation';
import PaymentMethodSettings from './PaymentMethodSettings';
import { useTenants } from '../../context/TenantsContext';

const Settings: React.FC = () => {
  const { currentTenant } = useTenants();

  const routes = useRoutes([
    {
      path: 'general',
      element: <GeneralSettings tenant={currentTenant} />,
    },
    { path: 'shipping', element: <ShippingSettings /> },
    { path: 'payment-method', element: <PaymentMethodSettings /> },
    { path: '*', element: <Navigate to="general" /> },
  ] as PartialRouteObject[]);

  return (
    <Layout
      header={{
        links: [
          {
            name: 'Innstillinger',
            to: 'general',
          },
        ],
      }}
    >
      <Box sx={{ p: 5 }}>
        <SettingsNavigation />
        {routes}
      </Box>
    </Layout>
  );
};

export default Settings;
