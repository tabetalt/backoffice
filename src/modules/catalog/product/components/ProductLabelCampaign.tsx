import { Field, PrefilledInput } from '@tabetalt/kit';
import { TextPosition } from '@tabetalt/kit/build/components/Input/components/prefilled-input-props';
import React from 'react';
import { Box, Select } from 'theme-ui';
import { ProductAttr } from '../Product';

const ProductLabelCampaign: React.FC<{ product: ProductAttr }> = ({
  product,
}) => (
  <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
    <Field as={Select} label="Lagervare" name="labels" value={product.labels}>
      <option>{product.labels}</option>
    </Field>
    <PrefilledInput
      label="Sammenlignbar pris"
      name="compareablePrice"
      prefilledText="NOK"
      prefilledTextPosition={TextPosition.RIGHT}
      placeholder="230,00"
      text={product.compareablePrice}
    />
  </Box>
);

export default ProductLabelCampaign;
