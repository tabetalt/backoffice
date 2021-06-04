import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading } from 'theme-ui';
import Layout from '../../../components/layout/Layout';
import { headerLinks } from '../products';
import ProductBasicOptions from './components/ProductBasicOptions';
import ProductNavigation from './components/ProductNavigation';
import { TagProps } from '@tabetalt/kit/build/components/InputTags/types';
import {
  ProductCreateInput,
  GetProductsDocument,
  GetCategoriesShortDocument,
  useCreateProductMutation,
  ProductCategoryCreateInput,
  TenantPriceDisplay,
} from '../../../generated/graphql';
import * as DineroHelper from '../../../helpers';
import { DineroObject } from 'dinero.js';
import { useTenant } from '../../../context/TenantContext';

const ProductCreate: React.FC = () => {
  const { currentTenant } = useTenant();
  const navigate = useNavigate();
  const [createProduct, { error }] = useCreateProductMutation({
    refetchQueries: [
      { query: GetProductsDocument },
      { query: GetCategoriesShortDocument },
    ],
  });

  const onSubmitBasic = useCallback(
    async (values) => {
      const input: ProductCreateInput = {
        tenantId: currentTenant?.id,
        ...values,
        price: {
          grossAmount:
            currentTenant?.priceDisplay === TenantPriceDisplay.ExlVat
              ? DineroHelper.moneyFromString(values.price)
              : DineroHelper.moneyFromString(
                  DineroHelper.priceWithoutRate(
                    currentTenant?.vatRate?.value as DineroObject,
                    values.price
                  )
                ),
        },
        stockControl: true,
        inStockNum: 0,
        vatRateId: currentTenant?.vatRate?.id,
      };

      if (values.categories) {
        input.categories = (values.categories as TagProps[]).map(
          ({ id, name }) => ({ id, title: name } as ProductCategoryCreateInput)
        );
      }
      if (values.images) {
        input.images = values.images.map(({ url }: { url: string }) => ({
          url,
        }));
      }

      await createProduct({ variables: { input } });
      navigate(`/catalog/products`, {
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
