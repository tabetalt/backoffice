import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from 'theme-ui';
import { LoaderIcon } from '@tabetalt/kit';
import Layout from '../../../components/Layout';
import ProductsListing from './ProductsListing';
import ProductsListingFilters from './ProductsListingFilters';
import { QUERY_GET_PRODUCTS } from '../../../api';

const Products: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(QUERY_GET_PRODUCTS);
  console.log({ data, loading, error });

  let content = null;
  if (loading) {
    content = <LoaderIcon sx={{ width: 5, display: 'block', m: '0 auto' }} />;
  } else if (error) {
    content = <span>Error getting product list</span>; // TODO: improve error message
  } else {
    content = <ProductsListing data={data.products.items} />;
  }

  return (
    <Layout
      header={{
        links: [
          {
            name: 'Produkter',
            to: '/catalog/products',
          },
          {
            name: 'Kategorier',
            to: '/catalog/categories',
          },
        ],
        children: (
          <Box>
            <Button variant="outline">Eksporter</Button>
            <Button variant="outline" sx={{ ml: 3 }}>
              Importer
            </Button>
            <Button
              sx={{ ml: 3 }}
              onClick={() => navigate('/catalog/product/1/basic')}
            >
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
