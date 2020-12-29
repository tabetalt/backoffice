import React, { useCallback } from 'react';
import { useRoutes, useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Heading } from 'theme-ui';
import { LoaderIcon } from '@tabetalt/kit';
import Layout from '../../../components/layout/Layout';
import ProductBasicOptions, {
  ProductBasicOptionsValues,
} from './components/ProductBasicOptions';
import ProductDescription, {
  ProductDescriptionValues,
} from './components/ProductDescription';
import ProductInventory, {
  ProductInventoryValues,
} from './components/ProductInventory';
import ProductCampaign, {
  ProductCampaignValues,
} from './components/ProductCampaign';
import ProductVariants, {
  ProductVariantsValues,
} from './components/ProductVariants';
import ProductNavigation from './components/ProductNavigation';
import { Error } from '../../../components/common';
import { headerLinks } from '../products';
import { TagProps } from '@tabetalt/kit/build/components/InputTags/types';
import {
  GetCategoriesShortDocument,
  GetProductDocument,
  GetProductsDocument,
  useGetProductQuery,
  useUpdateProductMutation,
  ProductUpdateInput,
  GetProductQuery,
} from '../../../generated/graphql';

export type Product = GetProductQuery['product'];
export type InputProductValues =
  | ProductBasicOptionsValues
  | ProductDescriptionValues
  | ProductInventoryValues
  | ProductVariantsValues
  | ProductCampaignValues;

const ProductUpdate: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const productId = Number(params.productId);

  const { data, loading, error: errorGetProduct } = useGetProductQuery({
    variables: {
      id: productId,
    },
  });

  const [
    updateProduct,
    { error: errorUpdateProduct },
  ] = useUpdateProductMutation({
    refetchQueries: [
      { query: GetProductsDocument },
      { query: GetProductDocument, variables: { id: productId } },
      { query: GetCategoriesShortDocument },
    ],
  });

  const onSubmit = useCallback(
    async (values: Partial<ProductBasicOptionsValues>) => {
      const { id: _id, __typename, price, categories, ...inputVars } = {
        ...data?.product,
        ...values,
      };

      const input = inputVars as ProductUpdateInput;

      if (values.price && typeof values.price === 'string') {
        // TODO: This is not the way we should handle monetary values.
        input.price = Number(values.price.replace(',', '.')) * 100;
      }
      if (values.categories) {
        input.categories = ((values.categories as unknown) as TagProps[]).map(
          ({ id, name }) => ({ id: id as number, title: name })
        );
      }
      if (values.images) {
        input.images = values.images.map(({ url }: { url: string }) => ({
          url,
        }));
      }
      await updateProduct({ variables: { id: productId, input } });
    },
    [productId, data, updateProduct]
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

  const onCopy = useCallback(() => null, []);
  const onCancel = () => navigate('/catalog/products');
  const onDraft = useCallback(() => null, []);
  const onPublish = useCallback(() => null, []);

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
