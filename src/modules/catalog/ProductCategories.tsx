import { Table, icons, Modal } from '@tabetalt/kit';
import React, { useState } from 'react';
import { Box, Button, IconButton } from 'theme-ui';
import Layout from '../../components/Layout';
import { CategoryModalContent } from './category/CategoryModalContent';

const Categories: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState({});

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
          const modalState = !open;
          setOpen(modalState);
          if (modalState) {
            setCategory(row.original);
          }
        }}
      >
        <icons.PencilIcon />
      </IconButton>
    </Box>
  );

  const data = Array(10).fill({
    id: 1,
    name: 'Alle produkter',
    parent: '',
    navigation: 'Hovedmeny',
  });

  return (
    <Layout
      header={{
        links: [
          {
            name: 'Produkter',
            to: '/catalog/products',
          },
          {
            name: 'Kategorier',
            to: '/catalog/categories',
          },
        ],
        children: (
          <Box>
            <Button variant="outline">Rediger navigasjon</Button>
            <Button
              sx={{ ml: 3 }}
              onClick={() => {
                setOpen(!open);
                setCategory({});
              }}
            >
              Legg til ny kategori
            </Button>
          </Box>
        ),
      }}
    >
      <Box sx={{ p: 5 }}>
        <Table
          columns={[
            {
              Header: 'Kategori',
              accessor: 'name',
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
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          header="Ny kategori"
        >
          <CategoryModalContent category={category} />
        </Modal>
      </Box>
    </Layout>
  );
};

export default Categories;
