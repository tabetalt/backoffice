import { Field } from '@tabetalt/kit';
import React from 'react';
import { Box } from 'theme-ui';
import { ProductAttr } from '../Product';

const ProductDescription: React.FC<{ product: ProductAttr }> = ({
  product,
}) => (
  <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
    <Field
      label="Kort beskrivelse"
      name="shortDescription"
      value={product.shortDescription}
    />
    <Field
      label="Produktbeskrivelse"
      name="description"
      value={product.description}
    />
    <Field
      label="Teknisk beskrivelse"
      name="technicalDescription"
      value={product.technicalDescription}
    />
  </Box>
);

export default ProductDescription;
