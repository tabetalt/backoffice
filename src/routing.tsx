import React, { lazy } from 'react';

// Modules
const Account = lazy(() => import('./modules/account/Account'));
const Products = lazy(() => import('./modules/catalog/Products'));
const Product = lazy(() => import('./modules/catalog/product/Product'));
const ProductCategories = lazy(
  () => import('./modules/catalog/ProductCategories')
);
const Dashboard = lazy(() => import('./modules/dashboard/Dashboard'));
const Orders = lazy(() => import('./modules/order/Orders'));
const Order = lazy(() => import('./modules/order/Order'));
const Pages = lazy(() => import('./modules/page/Pages'));
const Page = lazy(() => import('./modules/page/Page'));
const Settings = lazy(() => import('./modules/settings/Settings'));
const NotFound = lazy(() => import('./modules/errors/NotFound'));

export default [
  { path: '/', element: <Dashboard /> },
  { path: 'account', element: <Account /> },
  {
    path: 'catalog/*',
    children: [
      { path: 'products', element: <Products /> },
      { path: 'product/:productId/*', element: <Product /> },
      { path: 'categories', element: <ProductCategories /> },
    ],
  },
  {
    path: 'order/*',
    element: <Orders />,
    children: [{ path: ':orderId', element: <Order /> }],
  },
  {
    path: 'page/*',
    children: [
      { path: '', element: <Pages /> },
      { path: 'create', element: <Page /> },
    ],
  },
  { path: 'settings/*', element: <Settings /> },
  { path: '*', element: <NotFound /> },
];
