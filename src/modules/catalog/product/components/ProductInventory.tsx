import { Field } from '@tabetalt/kit';
import React from 'react';
import { Box, Checkbox } from 'theme-ui';
import { ProductAttr } from '../Product';

const ProductInventory: React.FC<{ product: ProductAttr }> = ({ product }) => (
  <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
    <Field
      as={Checkbox}
      label="Lagervare"
      name="stockControl"
      value={product.stockControl}
    />
    {product.stockControl && (
      <Field
        label="Lagerbeholdning"
        name="inStockNum"
        type="number"
        value={product.inStockNum}
      />
    )}
  </Box>
);

export default ProductInventory;
