import React from 'react';
import { icons, Table } from '@tabetalt/kit';
import { Box, IconButton } from 'theme-ui';
import { ProductCategoryFields } from '../../../api/types/ProductCategoryFields';
import { useMutation } from '@apollo/client';
import { MUTATION_DELETE_PRODUCT_CATEGORY } from '../../../api/category/delete-category';
import { QUERY_PRODUCT_CATEGORIES_WITH_PARENT } from '../../../api';

export interface CategoriesListingProps {
  data: ProductCategoryFields[];
  openModal: boolean;
  setOpenModal: (value: React.SetStateAction<boolean>) => void;
  setCurrentCategory: (
    value: React.SetStateAction<ProductCategoryFields | null>
  ) => void;
}

const CategoriesListing: React.FC<CategoriesListingProps> = ({
  data,
  openModal,
  setOpenModal,
  setCurrentCategory,
}) => {
  const [deleteCategory] = useMutation(MUTATION_DELETE_PRODUCT_CATEGORY);

  const actions = ({ row }: { row: { [key: string]: any } }) => (
    <Box sx={{ textAlign: 'right' }}>
      <IconButton>
        <icons.OpenIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          deleteCategory({
            variables: { id: row.original.id },
            refetchQueries: [{ query: QUERY_PRODUCT_CATEGORIES_WITH_PARENT }],
          });
        }}
      >
        <icons.TrashIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          const modalState = !openModal;
          setOpenModal(modalState);
          if (modalState) {
            setCurrentCategory(row.original);
          }
        }}
      >
        <icons.PencilIcon />
      </IconButton>
    </Box>
  );
  return (
    <Table
      options={{
        columns: [
          {
            Header: 'Kategori',
            accessor: 'title',
          },
          {
            Header: 'Undergruppe av',
            accessor: 'parentCategory.title',
          },
          {
            Header: 'Vis i meny',
            accessor: 'showInMainMenu',
          },
          {
            Header: '',
            accessor: 'actions',
            Cell: actions,
          },
        ],
        data,
      }}
    />
  );
};

export default CategoriesListing;
