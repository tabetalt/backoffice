import { Table, InputTags } from '@tabetalt/kit';
import React from 'react';
import { Box, Heading } from 'theme-ui';
import { ProductAttr } from '../Product';

const ProductVariants: React.FC<{ product: ProductAttr }> = ({ product }) => (
  <Box>
    <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
      <Heading as="h4" sx={{ mb: '17px' }}>
        Variantgrupper
      </Heading>
      <InputTags
        prefix="Størrelser"
        tags={[
          {
            id: 1,
            name: 'XL',
          },
          {
            id: 2,
            name: 'Small',
          },
          {
            id: 3,
            name: 'XS',
          },
        ]}
      />
      <InputTags
        prefix="Farger"
        tags={[
          {
            id: 1,
            name: 'Lilla',
          },
          {
            id: 2,
            name: 'Burgunder rød',
          },
        ]}
      />
    </Box>
    <Box sx={{ mt: 4 }}>
      <Heading as="h4" sx={{ mb: '30px' }}>
        Variantinnstillinger
      </Heading>
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
