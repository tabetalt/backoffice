import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme, Skeleton } from '@tabetalt/kit';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/client';

// Modules
const Account = lazy(() => import('./modules/account/Account'));
const Catalog = lazy(() => import('./modules/catalog/Catalog'));
const Dashboard = lazy(() => import('./modules/dashboard/Dashboard'));
const Orders = lazy(() => import('./modules/order/Orders'));
const Order = lazy(() => import('./modules/order/Order'));
const Pages = lazy(() => import('./modules/page/Pages'));
const Page = lazy(() => import('./modules/page/Page'));
const Settings = lazy(() => import('./modules/settings/Settings'));
const ShippingSettings = lazy(
  () => import('./modules/settings/ShippingSettings')
);
const GenericSettings = lazy(
  () => import('./modules/settings/GenericSettings')
);
const DiscountSettings = lazy(
  () => import('./modules/settings/DiscountSettings')
);
const PaymentMethodSettings = lazy(
  () => import('./modules/settings/PaymentMethodSettings')
);

const renderLoader = () => <Skeleton />;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="catalog/*" element={<Catalog />} />
          <Route path="order" element={<Orders />} />
          <Route path="order/*" element={<Order />} />
          <Route path="page" element={<Pages />} />
          <Route path="page/create" element={<Page />} />
          <Route path="settings" element={<Settings />} />
          <Route path="settings/shipping" element={<ShippingSettings />} />
          <Route path="settings/generic" element={<GenericSettings />} />
          <Route path="settings/discount" element={<DiscountSettings />} />
          <Route
            path="settings/payment-method"
            element={<PaymentMethodSettings />}
          />
        </Routes>
      </Suspense>
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
