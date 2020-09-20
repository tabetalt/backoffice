import { Field, Table } from '@tabetalt/kit';
import React from 'react';
import { Box, Heading } from 'theme-ui';
import { ProductAttr } from '../Product';

const ProductVariants: React.FC<{ product: ProductAttr }> = ({ product }) => (
  <Box>
    <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
      <Heading as="h4">Variantgrupper</Heading>
      <Field label="Størrelser" name="size" value="XL, Small, XS" />
      <Field label="Farger" name="color" value="Lilla, Burgunder rød" />
    </Box>
    <Box sx={{ mt: 4 }}>
      <Heading as="h4">Variantinnstillinger</Heading>
      <Table
        columns={[
          {
            Header: 'Størrelse',
            accessor: 'size',
          },
          {
            Header: 'Farge',
            accessor: 'color',
          },
          {
            Header: 'Pris inkl. MVA',
            accessor: 'price',
          },
          {
            Header: 'Lagerbeholdning',
            accessor: 'stock',
          },
          {
            Header: 'Tilgjengelig',
            accessor: 'available',
          },
        ]}
        data={product.variants}
      />
    </Box>
  </Box>
);

export default ProductVariants;
