import { useQuery } from '@apollo/client';
import { Modal, LoaderIcon } from '@tabetalt/kit';
import React, { useState } from 'react';
import { Box, Button } from 'theme-ui';
import { QUERY_PRODUCT_CATEGORIES_WITH_PARENT } from '../../../api';
import {
  GetCategories,
  GetCategories_categories_items,
} from '../../../api/types/GetCategories';
import Layout from '../../../components/layout/Layout';
import CategoriesListing from './CategoriesListing';
import { CategoryModalContent } from './CategoryModalContent';

const Categories: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [
    currentCategory,
    setCurrentCategory,
  ] = useState<GetCategories_categories_items | null>(null);
  const { data, loading, error } = useQuery<GetCategories>(
    QUERY_PRODUCT_CATEGORIES_WITH_PARENT
  );

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
