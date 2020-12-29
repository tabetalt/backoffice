import { Modal, LoaderIcon } from '@tabetalt/kit';
import React, { useState } from 'react';
import { Box, Button } from 'theme-ui';
import Layout from '../../../components/layout/Layout';
import {
  GetCategoriesWithParentQuery,
  useGetCategoriesWithParentQuery,
} from '../../../generated/graphql';
import CategoriesListing from './CategoriesListing';
import { CategoryModalContent } from './CategoryModalContent';

export type CategoryItem = GetCategoriesWithParentQuery['categories']['items'][0];

const Categories: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<CategoryItem | null>(
    null
  );
  const { data, loading, error } = useGetCategoriesWithParentQuery();

  let content = null;
  if (loading) {
    content = <LoaderIcon sx={{ width: 5, display: 'block', m: '0 auto' }} />;
  } else if (error) {
    content = <span>Error getting categories list</span>;
  } else {
    content = (
      <CategoriesListing
        data={data?.categories?.items}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setCurrentCategory={setCurrentCategory}
      />
    );
  }

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
                setOpenModal(!openModal);
                setCurrentCategory(null);
              }}
            >
              Legg til ny kategori
            </Button>
          </Box>
        ),
      }}
    >
      <Box sx={{ p: 5 }}>
        {content}
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          header="Ny kategori"
        >
          <CategoryModalContent
            currentCategory={currentCategory}
            onRequestClose={() => {
              setOpenModal(false);
              setCurrentCategory(null);
            }}
          />
        </Modal>
      </Box>
    </Layout>
  );
};

export default Categories;
