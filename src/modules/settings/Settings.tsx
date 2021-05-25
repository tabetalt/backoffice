import React from 'react';
import { PartialRouteObject } from 'react-router';
import { useRoutes, Navigate } from 'react-router-dom';
import { Box } from 'theme-ui';
import ShippingSettings from './ShippingSettings';
import { GeneralSettings } from './GeneralSettings';
//import DiscountSettings from './DiscountSettings';
import PaymentMethodSettings from './PaymentMethodSettings';
import { useTenants } from '../../context/TenantsContext';

const Settings: React.FC = () => {
  const { currentTenant } = useTenants();
  const routes = useRoutes([
    {
      path: 'general',
      element: <GeneralSettings tenant={currentTenant} />,
    },
    { path: 'shipping', element: <ShippingSettings tenant={currentTenant} /> },
    { path: 'payment-method', element: <PaymentMethodSettings /> },
    { path: '*', element: <Navigate to="general" /> },
  ] as PartialRouteObject[]);

  return <Box>{routes}</Box>;
};

export default Settings;
