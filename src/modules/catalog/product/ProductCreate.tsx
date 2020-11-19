import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading } from 'theme-ui';
import { useMutation } from '@apollo/client';
import {
  MUTATION_CREATE_PRODUCT,
  QUERY_GET_PRODUCTS,
  QUERY_PRODUCT_CATEGORIES,
} from '../../../api';
import {
  CreateProduct,
  CreateProductVariables,
} from '../../../api/types/CreateProduct';
import Layout from '../../../components/layout/Layout';
import { headerLinks } from '../products';
import ProductBasicOptions from './components/ProductBasicOptions';
import ProductNavigation from './components/ProductNavigation';
import { TagProps } from '@tabetalt/kit/build/components/InputTags/types';

const ProductCreate: React.FC = () => {
  const navigate = useNavigate();
  const [createProduct, { error }] = useMutation<
    CreateProduct,
    CreateProductVariables
  >(MUTATION_CREATE_PRODUCT, {
    refetchQueries: [
      { query: QUERY_GET_PRODUCTS },
      { query: QUERY_PRODUCT_CATEGORIES },
    ],
  });

  const onSubmitBasic = useCallback(
    async (values) => {
      const input = {
        tenantId: 1,
        ...values,
        price: values.price.replace(',', '.') * 100,
      };
      if (values.categories) {
        input.categories = (values.categories as TagProps[]).map(
          ({ id, name }) => ({ id, title: name })
        );
      }
      if (values.images) {
        input.images = values.images.map(({ url }: { url: string }) => ({
          url,
        }));
      }

      const res = await createProduct({ variables: { input } });
      navigate(`/catalog/product/${res.data?.createProduct?.id}/basic`, {
        replace: true,
      });
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
