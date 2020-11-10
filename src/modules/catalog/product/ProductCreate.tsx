import React, { useCallback } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import { Box, Button, Heading } from 'theme-ui';
import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_PRODUCT, QUERY_GET_PRODUCTS } from '../../../api';
import Layout from '../../../components/layout/Layout';
import { headerLinks } from '../products';
import ProductBasicOptions from './components/ProductBasicOptions';
import ProductDescription from './components/ProductDescription';
import ProductInventory from './components/ProductInventory';
import ProductLabelCampaign from './components/ProductLabelCampaign';
import ProductVariants from './components/ProductVariants';
import ProductNavigation from './components/ProductNavigation';

const ProductCreate: React.FC = () => {
  const [createProduct, { error }] = useMutation(MUTATION_CREATE_PRODUCT, {
    refetchQueries: [{ query: QUERY_GET_PRODUCTS }],
  });

  const onSubmitBasic = useCallback(
    async (values, actions) => {
      const input = {
        tenantId: 1,
        ...values,
        price: values.price.replace(',', '.') * 100,
      };
      await createProduct({ variables: { input } });
      actions.setSubmitting(false);
    },
    [createProduct]
  );

  const routes = useRoutes([
    {
      path: 'basic',
      element: <ProductBasicOptions onSubmit={onSubmitBasic} error={!!error} />,
    },
    { path: 'description', element: <ProductDescription /> },
    { path: 'inventory', element: <ProductInventory /> },
    { path: 'variants', element: <ProductVariants /> },
    { path: 'label-campaign', element: <ProductLabelCampaign /> },
  ]);

  const navigate = useNavigate();
  const onCancel = () => navigate('/catalog/products');
  const onPublish = useCallback(() => null, []);

  return (
    <Layout
      header={{
        links: headerLinks,
        children: (
          <Box>
            <Button disabled variant="outline">
              Kopier
            </Button>
            <Button onClick={onCancel} variant="outline" sx={{ ml: 3 }}>
              Avbryt
            </Button>
            <Button disabled variant="outline" sx={{ ml: 3 }}>
              Lagre utkast
            </Button>
            <Button onClick={onPublish} sx={{ ml: 3 }}>
              Publiser
            </Button>
          </Box>
        ),
      }}
    >
      <Box sx={{ p: 5 }}>
        <Heading>Add product</Heading>
        <ProductNavigation creation />
        {routes}
      </Box>
    </Layout>
  );
};

export default ProductCreate;
