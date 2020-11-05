import React from 'react';
import { icons, Table } from '@tabetalt/kit';
import { Box, IconButton } from 'theme-ui';
import { ProductCategory } from '../../../api/types/ProductCategory';

export interface CategoriesListingProps {
  data: ProductCategory[];
  openModal: boolean;
  setOpenModal: (value: React.SetStateAction<boolean>) => void;
  setCurrentCategory: (
    value: React.SetStateAction<ProductCategory | null>
  ) => void;
}

const CategoriesListing: React.FC<CategoriesListingProps> = ({
  data,
  openModal,
  setOpenModal,
  setCurrentCategory,
}) => {
  const actions = ({ row }: { row: { [key: string]: any } }) => (
    <Box sx={{ textAlign: 'right' }}>
      <IconButton>
        <icons.OpenIcon />
      </IconButton>
      <IconButton>
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
      columns={[
        {
          Header: 'Kategori',
          accessor: 'title',
          minWidth: '50%',
        },
        {
          Header: 'Undergruppe av',
          accessor: 'parent',
        },
        {
          Header: 'Vis i meny',
          accessor: 'navigation',
        },
        {
          Header: '',
          accessor: 'actions',
          Cell: actions,
        },
      ]}
      data={data}
    />
  );
};

export default CategoriesListing;
