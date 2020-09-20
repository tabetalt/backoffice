import { Field } from '@tabetalt/kit';
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
    <Field
      label="Sammenlignbar pris"
      name="compareablePrice"
      value={product.compareablePrice}
    />
  </Box>
);

export default ProductLabelCampaign;
