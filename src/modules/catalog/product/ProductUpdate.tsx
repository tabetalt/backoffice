import React, { useCallback } from 'react';
import _ from 'lodash';
import { useMutation, useQuery } from '@apollo/client';
import { useRoutes, useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Heading } from 'theme-ui';
import { LoaderIcon } from '@tabetalt/kit';
import Layout from '../../../components/layout/Layout';
import ProductBasicOptions from './components/ProductBasicOptions';
import ProductDescription from './components/ProductDescription';
import ProductInventory, {
  ProductInventoryValues,
} from './components/ProductInventory';
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
import { ProductUpdateInput } from '../../../api/types/globalTypes';
import { GetProductVariables, GetProduct } from '../../../api/types/GetProduct';
import {
  UpdateProduct,
  UpdateProductVariables,
} from '../../../api/types/UpdateProduct';

const ProductUpdate: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const productId = parseInt(params.productId, 10);

  const { data, loading, error: errorGetProduct } = useQuery<
    GetProduct,
    GetProductVariables
  >(QUERY_GET_PRODUCT, { variables: { id: productId } });

  const [updateProduct, { error: errorUpdateProduct }] = useMutation<
    UpdateProduct,
    UpdateProductVariables
  >(MUTATION_UPDATE_PRODUCT, {
    refetchQueries: [
      { query: QUERY_GET_PRODUCTS },
      { query: QUERY_GET_PRODUCT, variables: { id: productId } },
    ],
  });

  const onSubmit = useCallback(
    async (values) => {
      const input = _.omit({ tenantId: 1, ...data?.product, ...values }, [
        'id',
        '__typename',
        'price',
      ]) as ProductUpdateInput;

      if (values.price) {
        input.price = values.price.replace(',', '.') * 100;
      }
      console.log('input', input);
      await updateProduct({ variables: { id: productId, input } });
    },
    [data, updateProduct]
  );

  const routes = useRoutes([
    {
      path: 'basic',
      element: (
        <ProductBasicOptions
          onSubmit={onSubmit}
          product={data?.product}
          error={!!errorUpdateProduct}
        />
      ),
    },
    {
      path: 'description',
      element: (
        <ProductDescription onSubmit={onSubmit} product={data?.product} />
      ),
    },
    {
      path: 'inventory',
      element: <ProductInventory onSubmit={onSubmit} product={data?.product} />,
    },
    {
      path: 'variants',
      element: <ProductVariants onSubmit={onSubmit} product={data?.product} />,
    },
    {
      path: 'label-campaign',
      element: <ProductCampaign onSubmit={onSubmit} product={data?.product} />,
    },
  ]);

  let content;
  if (loading) {
    content = <LoaderIcon sx={{ width: 5, display: 'block', m: '0 auto' }} />;
  } else if (errorGetProduct) {
    content = <Error message="Error getting product" />;
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
