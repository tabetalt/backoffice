import React from 'react';
import { Editor, Field } from '@tabetalt/kit';
import { Box, Button } from 'theme-ui';
import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';
import { Error } from '../../../../components/common';
import { GetProduct_product } from '../../../../api/types/GetProduct';

interface ProductDescriptionProps {
  product?: GetProduct_product | null;
  onSubmit: (
    values: ProductDescriptionValues,
    formikHelpers: FormikHelpers<ProductDescriptionValues>
  ) => void;
  error?: boolean;
}

interface ProductDescriptionValues {
  shortDescription: string | null;
  description: string | null;
  technicalDescription: string | null;
}

const ProductDescriptionSchema = Yup.object().shape({
  shortDescription: Yup.array().required('Required!'),
  description: Yup.array().required('Required!'),
  technicalDescription: Yup.array().required('Required!'),
});

const defaultValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  onSubmit,
  error,
  product,
}) => {
  const form = useFormik<ProductDescriptionValues>({
    initialValues: {
      shortDescription: product?.shortDescription
        ? JSON.parse(product?.shortDescription)
        : defaultValue,
      description: product?.description
        ? JSON.parse(product?.description)
        : defaultValue,
      technicalDescription: product?.technicalDescription
        ? JSON.parse(product?.technicalDescription)
        : defaultValue,
    } as ProductDescriptionValues,
    validationSchema: ProductDescriptionSchema,
    onSubmit,
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <Box sx={{ width: '911px', '> div': { mb: 3 } }}>
        {error && <Error message="Filed to save product." />}
        {form.touched.shortDescription && form.errors.shortDescription && (
          <Error message={form.errors.shortDescription} />
        )}
        <Field
          as={Editor}
          label="Kort beskrivelse"
          name="shortDescription"
          text={form.values.shortDescription}
        />
        {form.touched.description && form.errors.description && (
          <Error message={form.errors.description} />
        )}
        <Field
          as={Editor}
          label="Produktbeskrivelse"
          name="description"
          text={form.values.description}
        />
        {form.touched.technicalDescription &&
          form.errors.technicalDescription && (
            <Error message={form.errors.technicalDescription} />
          )}
        <Field
          as={Editor}
          label="Teknisk beskrivelse"
          name="technicalDescription"
          text={form.values.technicalDescription}
        />
        <Button type="submit">Lagre</Button>
      </Box>
    </form>
  );
};

export default ProductDescription;
