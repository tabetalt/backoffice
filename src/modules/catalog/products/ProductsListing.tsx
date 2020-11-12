import React, { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Box, IconButton } from 'theme-ui';
import { Table, StatusLabel, icons } from '@tabetalt/kit';
import type { CellProps } from 'react-table';
import { Product } from '../../../api/types/Product';
import { MUTATION_DELETE_PRODUCT, QUERY_GET_PRODUCTS } from '../../../api';
import { formatPrice } from '../../../helpers';

const { OpenIcon, TrashIcon, PencilIcon } = icons;

const ProductsListingActions = ({ product }: { product: Product }) => {
  const { id: productId } = product;

  const navigate = useNavigate();
  const [deleteProduct, { loading }] = useMutation(MUTATION_DELETE_PRODUCT, {
    refetchQueries: [{ query: QUERY_GET_PRODUCTS }],
  });

  const onRemove = useCallback(async () => {
    if (!window.confirm('Are you sure?')) return;
    await deleteProduct({ variables: { id: productId } });
  }, [productId, deleteProduct]);

  const onOpen = () => navigate(`/catalog/product/${productId}/basic`);

  return (
    <Box sx={{ textAlign: 'right' }}>
      <IconButton aria-label="Open" onClick={onOpen} disabled={loading}>
        <OpenIcon />
      </IconButton>
      <IconButton aria-label="Remove" onClick={onRemove} disabled={loading}>
        <TrashIcon />
      </IconButton>
      <IconButton aria-label="Edit" onClick={onOpen} disabled={loading}>
        <PencilIcon />
      </IconButton>
    </Box>
  );
};

export interface ProductsListingProps {
  data: Product[];
}

const ProductsListing: React.FC<ProductsListingProps> = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Produkter',
        accessor: 'title',
      },
      {
        Header: 'Produktpris',
        accessor: 'price',
        Cell: ({ row: { original: product } }: CellProps<Product>) =>
          formatPrice(product.price),
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
          return (
            <StatusLabel active={product.status === 'ACTIVE'} label={label} />
          );
        },
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row: { original: product } }: CellProps<Product>) => (
          <ProductsListingActions product={product} />
        ),
      },
    ],
    []
  );

  return <Table options={{ columns, data }} />;
};

export default ProductsListing;
