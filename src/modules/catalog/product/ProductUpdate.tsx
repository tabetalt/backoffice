import React, { useCallback } from 'react';
import _ from 'lodash';
import { useMutation, useQuery } from '@apollo/client';
import { useRoutes, useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Heading } from 'theme-ui';
import { LoaderIcon } from '@tabetalt/kit';
import Layout from '../../../components/layout/Layout';
import ProductBasicOptions from './components/ProductBasicOptions';
import ProductDescription from './components/ProductDescription';
import ProductInventory from './components/ProductInventory';
import ProductCampaign from './components/ProductCampaign';
import ProductVariants from './components/ProductVariants';
import ProductNavigation from './components/ProductNavigation';
import { Error } from '../../../components/common';
import { headerLinks } from '../products';
import {
  MUTATION_UPDATE_PRODUCT,
  QUERY_GET_PRODUCT,
  QUERY_GET_PRODUCTS,
} from '../../../api';

/*
const product = {
  id: '1337',
  name: 'Strikket genser',
  slug: 'strikket-genser',
  price: '280,00',
  categories: ['Alle produkter', 'Hekleoppskrifter', 'Gensere'],
  images: ['https://via.placeholder.com/150'],
  showOnFrontpage: true,
  status: 'Inaktiv',
  shortDescription: 'Lorem Ipsum',
  description: 'Lorem Ipsum, sit Amet',
  technicalDescription: 'Lorem IT Ipsum',
  stockControl: true,
  inStockNum: 300,
  variantGroups: [
    {
      name: 'Størrelse',
      value: 'size',
      options: ['xl', 'small', 'xs'],
    },
    {
      name: 'Farger',
      value: 'color',
      options: ['Lilla', 'Burgunder rød'],
    },
  ],
  variants: [
    {
      size: 'XL',
      color: 'Lilla',
      price: '',
      stock: '33',
      available: true,
    },
    {
      size: 'Small',
      color: 'Lilla',
      price: '258.00',
      stock: '33',
      available: false,
    },
  ],
  labels: ['Bestseller / Nyhet / Få igjen'],
  compareablePrice: '230',
};

export type ProductAttr = typeof product;
*/

const ProductUpdate: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const { data, loading, error: errorGetProduct } = useQuery(
    QUERY_GET_PRODUCT,
    {
      variables: { id: productId },
    }
  );
  const [updateProduct, { error: errorUpdateProduct }] = useMutation(
    MUTATION_UPDATE_PRODUCT,
    {
      refetchQueries: [
        { query: QUERY_GET_PRODUCTS },
        { query: QUERY_GET_PRODUCT, variables: { id: productId } },
      ],
    }
  );

  const onSubmitBasic = useCallback(async (values) => {
    const input = _.omit(
      {
        tenantId: 1,
        ...data?.product,
        ...values,
        price: values.price.replace(',', '.') * 100,
      },
      ['id', '__typename']
    );
    await updateProduct({ variables: { id: productId, input } });
  }, []);

  const onSubmitDescription = () => null;
  const onSubmitInventory = () => null;
  const onSubmitVariants = () => null;
  const onSubmitCampaign = () => null;

  const routes = useRoutes([
    {
      path: 'basic',
      element: (
        <ProductBasicOptions
          onSubmit={onSubmitBasic}
          product={data?.product}
          error={!!errorUpdateProduct}
        />
      ),
    },
    {
      path: 'description',
      element: (
        <ProductDescription
          onSubmit={onSubmitDescription}
          product={data?.product}
        />
      ),
    },
    {
      path: 'inventory',
      element: (
        <ProductInventory
          onSubmit={onSubmitInventory}
          product={data?.product}
        />
      ),
    },
    {
      path: 'variants',
      element: (
        <ProductVariants onSubmit={onSubmitVariants} product={data?.product} />
      ),
    },
    {
      path: 'label-campaign',
      element: (
        <ProductCampaign onSubmit={onSubmitCampaign} product={data?.product} />
      ),
    },
  ]);

  let content;
  if (loading) {
    content = <LoaderIcon sx={{ width: 5, display: 'block', m: '0 auto' }} />;
  } else if (errorGetProduct) {
    content = <Error message="Error getting product" />; // TODO: improve error message
  } else {
    content = (
      <>
        <Heading>{data?.product?.title}</Heading>
        <ProductNavigation />
        {routes}
      </>
    );
  }

  const onCopy = useCallback(() => null, [productId]);
  const onCancel = () => navigate('/catalog/products');
  const onDraft = useCallback(() => null, [productId]);
  const onPublish = useCallback(() => null, [productId]);

  return (
    <Layout
      header={{
        links: headerLinks,
        children: (
          <Box>
            <Button onClick={onCopy} variant="outline">
              Kopier
            </Button>
            <Button onClick={onCancel} variant="outline" sx={{ ml: 3 }}>
              Avbryt
            </Button>
            <Button onClick={onDraft} variant="outline" sx={{ ml: 3 }}>
              Lagre utkast
            </Button>
            <Button onClick={onPublish} sx={{ ml: 3 }}>
              Publiser
            </Button>
          </Box>
        ),
      }}
    >
      <Box sx={{ p: 5 }}>{content}</Box>
    </Layout>
  );
};

export default ProductUpdate;
