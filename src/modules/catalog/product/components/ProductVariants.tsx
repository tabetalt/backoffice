import React from 'react';
import { Box, Heading } from 'theme-ui';
import { FormikHelpers } from 'formik';
import { Table, InputTags, Switch, PrefilledInput } from '@tabetalt/kit';
import { TextPosition } from '@tabetalt/kit/build/components/Input/components/prefilled-input-props';
import { GetProductQuery } from '../../../../generated/graphql';

export type Product = GetProductQuery['product'];

const columns = [
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
    Cell: ({ cell: { value } }: { cell: { value: string } }) => (
      <PrefilledInput
        prefilledText="NOK"
        prefilledTextPosition={TextPosition.RIGHT}
        placeholder="258,00"
        value={value}
      />
    ),
  },
  {
    Header: 'Lagerbeholdning',
    accessor: 'stock',
  },
  {
    Header: 'Tilgjengelig',
    accessor: 'available',
    Cell: ({ cell: { value } }: { cell: { value: boolean } }) => (
      <Switch checked={value} />
    ),
  },
];

interface ProductVariantsProps {
  product?: Product | null;
  onSubmit: (
    values: ProductVariantsValues,
    formikHelpers: FormikHelpers<ProductVariantsValues>
  ) => void;
  error?: boolean;
}

export interface ProductVariantsValues {
  title: string;
}

// const defaultValues: ProductVariantsValues = {};

const ProductVariants: React.FC<ProductVariantsProps> = () => (
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
      <Table options={{ columns, data: [] }} />
    </Box>
  </Box>
);

export default ProductVariants;
