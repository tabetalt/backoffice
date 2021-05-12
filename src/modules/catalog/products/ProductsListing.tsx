import React, { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Label } from 'theme-ui';
import { Table, StatusLabel, icons } from '@tabetalt/kit';
import type { CellProps } from 'react-table';
import * as DineroHelper from '../../../helpers';
import {
  GetProductsDocument,
  useDeleteProductMutation,
} from '../../../generated/graphql';

import { ProductItem } from './Products';

const { OpenIcon, TrashIcon, PencilIcon } = icons;

export interface ProductsListingActionsProps {
  product: ProductItem;
}

const ProductsListingActions = ({ product }: ProductsListingActionsProps) => {
  const { id: productId } = product;
  const navigate = useNavigate();

  const [deleteProduct, { loading }] = useDeleteProductMutation({
    refetchQueries: [{ query: GetProductsDocument }],
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
  data: (ProductItem | null)[] | null | undefined;
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
        Cell: ({ row: { original: product } }: CellProps<ProductItem>) =>
          DineroHelper.formatPrice(product?.price),
      },
      {
        Header: 'Lagerstatus',
        accessor: 'stockControl',
        Cell: ({ row: { original: product } }: CellProps<ProductItem>) => {
          const label =
            product.stockControl && product.inStockNum && product.inStockNum > 0
              ? 'På lager'
              : 'Ikke på lager';
          return <Label>{label}</Label>;
        },
      },
      {
        Header: 'Statistikk',
        accessor: 'stats',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ row: { original: product } }: CellProps<ProductItem>) => {
          const label = product.status === 'ACTIVE' ? 'Aktiv' : 'Inaktiv';
          return (
            <StatusLabel active={product.status === 'ACTIVE'} label={label} />
          );
        },
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row: { original: product } }: CellProps<ProductItem>) => (
          <ProductsListingActions product={product} />
        ),
      },
    ],
    []
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Table options={{ columns, data }} />;
};

export default ProductsListing;
