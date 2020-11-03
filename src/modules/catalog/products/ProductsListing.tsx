import React from 'react';
// import { Box, IconButton } from 'theme-ui';
import { Table } from '@tabetalt/kit';

/*
const data = Array(10).fill({
  productName: 'Testproduktnavn',
  price: '299,90 NOK',
  inventoryStatus: 'Ikke på lager',
  stats: '3 besøk / 0 salg',
  status: 'Aktiv',
  actions: (
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
});
*/

const columns = [
  {
    Header: 'Produkter',
    accessor: 'title',
    minWidth: '50%',
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
  },
  {
    Header: '',
    accessor: 'actions',
  },
];

export interface ProductsListingProps {
  data: any[];
}

const ProductsListing: React.FC<ProductsListingProps> = ({ data }) => (
  <Table columns={columns} data={data} />
);

export default ProductsListing;
