import { Field, Switch } from '@tabetalt/kit';
import React from 'react';
import { Box, Button } from 'theme-ui';
import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';
import { GetProduct_product } from '../../../../api/types/GetProduct';
import { Error } from '../../../../components/common';

interface ProductInventoryProps {
  product?: GetProduct_product | null;
  onSubmit: (
    values: ProductInventoryValues,
    formikHelpers: FormikHelpers<ProductInventoryValues>
  ) => void;
  error?: boolean;
}

export interface ProductInventoryValues {
  stockControl: boolean;
  inStockNum: number;
}

const ProductInventorySchema = Yup.object().shape({
  inStockNum: Yup.number().positive('Value need to be positive').notRequired(),
  stockControl: Yup.boolean().notRequired(),
});

const ProductInventory: React.FC<ProductInventoryProps> = ({
  onSubmit,
  error,
  product,
}) => {
  const form = useFormik<ProductInventoryValues>({
    initialValues: {
      stockControl: product ? product.stockControl : false,
      inStockNum: product ? product.inStockNum : 0,
    } as ProductInventoryValues,
    validationSchema: ProductInventorySchema,
    onSubmit,
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
        {error && <Error message="Filed to save product." />}
        <Field
          as={Switch}
          label="Lagervare"
          name="stockControl"
          checked={form.values.stockControl}
          onChange={form.handleChange}
        />
        {form.errors.inStockNum && <Error message={form.errors.inStockNum} />}
        {form.values.stockControl && (
          <Field
            label="Lagerbeholdning"
            name="inStockNum"
            type="number"
            value={form.values.inStockNum}
            onChange={form.handleChange}
          />
        )}
        <Button type="submit">Lagre</Button>
      </Box>
    </form>
  );
};

export default ProductInventory;
