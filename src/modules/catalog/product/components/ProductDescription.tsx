import React from 'react';
import { Editor, Field } from '@tabetalt/kit';
import { Box } from 'theme-ui';
import { ProductAttr } from '../ProductUpdate';

const ProductDescription: React.FC<{ product?: ProductAttr }> = ({
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
