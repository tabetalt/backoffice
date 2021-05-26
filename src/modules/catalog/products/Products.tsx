import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from 'theme-ui';
import { LoaderIcon } from '@tabetalt/kit';
import Layout from '../../../components/layout/Layout';
import ProductsListing from './ProductsListing';
import ProductsListingFilters from './ProductsListingFilters';
import {
  GetProductsQuery,
  useGetProductsQuery,
} from '../../../generated/graphql';

export type ProductItem = GetProductsQuery['products']['items'][0];

export const headerLinks = [
  {
    name: 'Produkter',
    to: '/catalog/products',
  },
  {
    name: 'Kategorier',
    to: '/catalog/categories',
  },
];

const Products: React.FC = () => {
  const navigate = useNavigate();
  // const { data, loading, error } = useQuery<GetProducts>(QUERY_GET_PRODUCTS);
  const { data, loading, error } = useGetProductsQuery();

  let content = null;
  if (loading) {
    content = <LoaderIcon sx={{ width: 5, display: 'block', m: '0 auto' }} />;
  } else if (error) {
    content = <span>Error getting product list</span>; // TODO: improve error message
  } else {
    content = <ProductsListing data={data?.products?.items} />;
  }
  const onExport = () => null;
  const onImport = () => null;
  const onAdd = () => navigate('/catalog/product/new/basic');

  return (
    <Layout
      header={{
        links: headerLinks,
        children: (
          <Box>
            <Button onClick={onExport} variant="outline">
              Eksporter
            </Button>
            <Button onClick={onImport} variant="outline" sx={{ ml: 3 }}>
              Importer
            </Button>
            <Button onClick={onAdd} sx={{ ml: 3 }}>
              Legg til produkt
            </Button>
          </Box>
        ),
      }}
    >
      <Box sx={{ p: 5 }}>
        <ProductsListingFilters />
        {content}
      </Box>
    </Layout>
  );
};

export default Products;
