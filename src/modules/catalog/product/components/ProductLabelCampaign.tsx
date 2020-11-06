import { LabeledSelect, PrefilledInput } from '@tabetalt/kit';
import { TextPosition } from '@tabetalt/kit/build/components/Input/components/prefilled-input-props';
import React from 'react';
import { Box } from 'theme-ui';

const ProductLabelCampaign: React.FC<{ product?: any }> = ({
  product,
}) => (
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
      value={product.compareablePrice}
    />
  </Box>
);

export default ProductLabelCampaign;
