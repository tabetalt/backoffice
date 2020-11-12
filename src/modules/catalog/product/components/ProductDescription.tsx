import React from 'react';
import { Editor, Field } from '@tabetalt/kit';
import { Box } from 'theme-ui';
import { FormikHelpers } from 'formik';
import { Product } from '../../../../api/types/Product';

interface ProductDescriptionProps {
  product?: Product;
  onSubmit: (
    values: ProductDescriptionValues,
    formikHelpers: FormikHelpers<ProductDescriptionValues>
  ) => void;
  error?: boolean;
}

interface ProductDescriptionValues {
  title: string;
}

// const defaultValues: ProductDescriptionValues = {};

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  onSubmit,
  error,
  product,
}) => (
  <Box sx={{ width: '911px', '> div': { mb: 3 } }}>
    <Field
      as={Editor}
      label="Kort beskrivelse"
      name="shortDescription"
      text={[
        {
          type: 'paragraph',
          children: [{ text: '' }],
        },
      ]}
    />
    <Field
      as={Editor}
      label="Produktbeskrivelse"
      name="description"
      text={[
        {
          type: 'paragraph',
          children: [{ text: '' }],
        },
      ]}
    />
    <Field
      as={Editor}
      label="Teknisk beskrivelse"
      name="technicalDescription"
      text={[
        {
          type: 'paragraph',
          children: [{ text: '' }],
        },
      ]}
    />
  </Box>
);

export default ProductDescription;
