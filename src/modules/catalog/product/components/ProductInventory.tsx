import { Field, Switch } from '@tabetalt/kit';
import React from 'react';
import { Box } from 'theme-ui';
import { ProductAttr } from '../Product';

const ProductInventory: React.FC<{ product: ProductAttr }> = ({ product }) => (
  <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
    <Field
      as={Switch}
      label="Lagervare"
      name="stockControl"
      checked={product.stockControl}
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
