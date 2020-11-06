import React from 'react';
import { Box, IconButton } from 'theme-ui';
import { Table, StatusLabel, icons } from '@tabetalt/kit';
import type { CellProps } from 'react-table';
import { Product } from '../../../api/types/Product';

const columns = [
  {
    Header: 'Produkter',
    accessor: 'title',
  },
  {
    Header: 'Produktpris',
    accessor: 'price',
  },
  {
    Header: 'Lagerstatus',
    accessor: 'inventoryStatus',
  },
  {
    Header: 'Statistikk',
    accessor: 'stats',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ row: { original: product } }: CellProps<Product>) => {
      const label = product.status === 'ACTIVE' ? 'Aktiv' : 'Inaktiv';
      return <StatusLabel active={product.status === 'ACTIVE'} label={label} />;
    },
  },
  {
    Header: '',
    accessor: 'actions',
    Cell: () => (
      <Box sx={{ textAlign: 'right' }}>
        <IconButton>
          <icons.OpenIcon />
        </IconButton>
        <IconButton>
          <icons.TrashIcon />
        </IconButton>
        <IconButton>
          <icons.PencilIcon />
        </IconButton>
      </Box>
    ),
  },
];

export interface ProductsListingProps {
  data: any[];
}

const ProductsListing: React.FC<ProductsListingProps> = ({ data }) => (
  <Table options={{ columns, data }} />
);

export default ProductsListing;
