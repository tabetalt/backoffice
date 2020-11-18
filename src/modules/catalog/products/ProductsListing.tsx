import React, { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Box, IconButton, Label } from 'theme-ui';
import { Table, StatusLabel, icons } from '@tabetalt/kit';
import type { CellProps } from 'react-table';
import {
  DeleteProduct,
  DeleteProductVariables,
} from '../../../api/types/DeleteProduct';
import { GetProducts_products_items } from '../../../api/types/GetProducts';
import { MUTATION_DELETE_PRODUCT, QUERY_GET_PRODUCTS } from '../../../api';
import { formatPrice } from '../../../helpers';
import { GetProduct_product } from '../../../api/types/GetProduct';

const { OpenIcon, TrashIcon, PencilIcon } = icons;

export interface ProductsListingActionsProps {
  product: GetProduct_product;
}

const ProductsListingActions = ({ product }: ProductsListingActionsProps) => {
  const { id: productId } = product;

  const navigate = useNavigate();
  const [deleteProduct, { loading }] = useMutation<
    DeleteProduct,
    DeleteProductVariables
  >(MUTATION_DELETE_PRODUCT, {
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
  data: (GetProducts_products_items | null)[] | null | undefined;
}

const ProductsListing: React.FC<ProductsListingProps> = ({ data }) => {
  console.log(data);
  const columns = useMemo(
    () => [
      {
        Header: 'Produkter',
        accessor: 'title',
      },
      {
        Header: 'Produktpris',
        accessor: 'price',
        Cell: ({ row: { original: product } }: CellProps<GetProduct_product>) =>
          formatPrice(product?.price?.formatted),
      },
      {
        Header: 'Lagerstatus',
        accessor: 'stockControl',
        Cell: ({
          row: { original: product },
        }: CellProps<GetProduct_product>) => {
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
        Cell: ({
          row: { original: product },
        }: CellProps<GetProduct_product>) => {
          const label = product.status === 'ACTIVE' ? 'Aktiv' : 'Inaktiv';
          return (
            <StatusLabel active={product.status === 'ACTIVE'} label={label} />
          );
        },
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({
          row: { original: product },
        }: CellProps<GetProduct_product>) => (
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
