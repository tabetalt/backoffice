import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading } from 'theme-ui';
import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_PRODUCT, QUERY_GET_PRODUCTS } from '../../../api';
import Layout from '../../../components/layout/Layout';
import { headerLinks } from '../products';
import ProductBasicOptions from './components/ProductBasicOptions';
import ProductNavigation from './components/ProductNavigation';

const ProductCreate: React.FC = () => {
  const navigate = useNavigate();
  const [createProduct, { error }] = useMutation(MUTATION_CREATE_PRODUCT, {
    refetchQueries: [{ query: QUERY_GET_PRODUCTS }],
  });

  const onSubmitBasic = useCallback(
    async (values) => {
      const input = {
        tenantId: 1,
        ...values,
        price: values.price.replace(',', '.') * 100,
      };
      const {
        data: {
          createProduct: { id },
        },
      } = await createProduct({ variables: { input } });
      navigate(`/catalog/product/${id}/basic`, { replace: true });
    },
    [createProduct, navigate]
  );

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
        <ProductBasicOptions onSubmit={onSubmitBasic} error={!!error} />
      </Box>
    </Layout>
  );
};

export default ProductCreate;
