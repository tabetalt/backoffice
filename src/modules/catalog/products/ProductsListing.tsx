import React from 'react';
import { Table } from '@tabetalt/kit';

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
