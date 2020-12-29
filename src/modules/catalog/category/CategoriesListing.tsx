import React from 'react';
import { icons, Table } from '@tabetalt/kit';
import { Box, IconButton, Label } from 'theme-ui';
import {
  GetCategoriesWithParentDocument,
  useDeleteCategoryMutation,
} from '../../../generated/graphql';
import type { CategoryItem } from './ProductCategories';

export interface CategoriesListingProps {
  data: any;
  openModal: boolean;
  setOpenModal: (value: React.SetStateAction<boolean>) => void;
  setCurrentCategory: (
    value: React.SetStateAction<CategoryItem | null>
  ) => void;
}

const CategoriesListing: React.FC<CategoriesListingProps> = ({
  data,
  openModal,
  setOpenModal,
  setCurrentCategory,
}) => {
  const [deleteCategory] = useDeleteCategoryMutation();

  const actions = ({ row }: { row: { original: CategoryItem } }) => (
    <Box sx={{ textAlign: 'right' }}>
      <IconButton
        onClick={() => {
          deleteCategory({
            variables: { id: row.original.id },
            refetchQueries: [{ query: GetCategoriesWithParentDocument }],
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

  const menuText = ({ row }: { row: { [key: string]: any } }) => (
    <Box>
      <Label
        sx={{ color: row.original.showInMainMenu ? '#1B202E' : '#9AA0B5' }}
      >
        Hovedmeny
      </Label>
    </Box>
  );

  const parentCategoryTitle = ({
    row,
  }: {
    row: { original: CategoryItem };
  }) => (
    <Box>
      <Label>{row.original.parent?.title}</Label>
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
            accessor: 'parentCategory',
            Cell: parentCategoryTitle,
          },
          {
            Header: 'Vis i meny',
            accessor: 'showInMainMenu',
            Cell: menuText,
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
