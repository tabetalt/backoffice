import React, { lazy } from 'react';
import { Navigate, PartialRouteObject } from 'react-router';
import { LoginPage } from './components/loginPage/LoginPage';

// Modules
const Account = lazy(() => import('./modules/account/Account'));
const Products = lazy(() => import('./modules/catalog/products/Products'));
const ProductCreate = lazy(
  () => import('./modules/catalog/product/ProductCreate')
);
const ProductUpdate = lazy(
  () => import('./modules/catalog/product/ProductUpdate')
);
const ProductCategories = lazy(
  () => import('./modules/catalog/category/ProductCategories')
);
// const Dashboard = lazy(() => import('./modules/dashboard/Dashboard'));  TODO: Enable after first release
const Orders = lazy(() => import('./modules/order/Orders'));
const Order = lazy(() => import('./modules/order/Order'));
const Pages = lazy(() => import('./modules/page/Pages'));
const Page = lazy(() => import('./modules/page/Page'));
const Settings = lazy(() => import('./modules/settings/Settings'));

const secureRoutes = [
  // { path: '/', element: <Dashboard /> }, TODO: Enable after first release
  { path: 'account', element: <Account /> },
  {
    path: 'catalog/*',
    children: [
      { path: 'products', element: <Products /> },
      { path: 'product/new/*', element: <ProductCreate /> },
      { path: 'product/:productId/*', element: <ProductUpdate /> },
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
  { path: '*', element: <Navigate to="catalog/products" /> },
];

export const getRoutes = (isLoggedIn: boolean): PartialRouteObject[] => {
  return isLoggedIn
    ? secureRoutes
    : [
        { path: '/login', element: <LoginPage /> },
        { path: '*', element: <Navigate to="/login" /> },
      ];
};
