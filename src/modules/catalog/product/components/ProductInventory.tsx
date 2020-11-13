import { Field, Switch } from '@tabetalt/kit';
import React from 'react';
import { Box } from 'theme-ui';
import { FormikHelpers } from 'formik';
import { GetProduct_product } from '../../../../api/types/GetProduct';

interface ProductInventoryProps {
  product?: GetProduct_product | null;
  onSubmit: (
    values: ProductInventoryValues,
    formikHelpers: FormikHelpers<ProductInventoryValues>
  ) => void;
  error?: boolean;
}

interface ProductInventoryValues {
  title: string;
}

// const defaultValues: ProductInventoryValues = {};

const ProductInventory: React.FC<ProductInventoryProps> = ({
  onSubmit,
  error,
  product,
}) => (
  <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
    <Field
      as={Switch}
      label="Lagervare"
      name="stockControl"
      //checked={product.stockControl}
    />
    {
      /* product.stockControl */ 1 && (
        <Field
          label="Lagerbeholdning"
          name="inStockNum"
          type="number"
          // value={product.inStockNum}
        />
      )
    }
  </Box>
);

export default ProductInventory;
