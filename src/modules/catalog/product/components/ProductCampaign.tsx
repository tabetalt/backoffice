import React from 'react';
import { Box } from 'theme-ui';
import { FormikHelpers } from 'formik';
import { LabeledSelect, PrefilledInput } from '@tabetalt/kit';
import { TextPosition } from '@tabetalt/kit/build/components/Input/components/prefilled-input-props';
import { GetProductQuery } from '../../../../generated/graphql';

export type Product = GetProductQuery['product'];

interface ProductCampaignProps {
  product?: Product | null;
  onSubmit: (
    values: ProductCampaignValues,
    formikHelpers: FormikHelpers<ProductCampaignValues>
  ) => void;
  error?: boolean;
}

export interface ProductCampaignValues {
  title: string;
}

// const defaultValues: ProductCampaignValues = {};

const ProductCampaign: React.FC<ProductCampaignProps> = () => (
  <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
    <LabeledSelect
      label="Lagervare"
      name="labels"
      // value={product.labels}
    >
      <option>{/* product.labels */}</option>
    </LabeledSelect>
    <PrefilledInput
      label="Sammenlignbar pris"
      name="compareablePrice"
      prefilledText="NOK"
      prefilledTextPosition={TextPosition.RIGHT}
      placeholder="230,00"
      // value={product.compareablePrice}
    />
  </Box>
);

export default ProductCampaign;
