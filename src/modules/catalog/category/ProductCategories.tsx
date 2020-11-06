import { useQuery } from '@apollo/client';
import { Modal, LoaderIcon } from '@tabetalt/kit';
import React, { useState } from 'react';
import { Box, Button } from 'theme-ui';
import { QUERY_GET_CATEGORIES } from '../../../api/category/get-categories';
import { ProductCategoryFields } from '../../../api/types/ProductCategoryFields';
import Layout from '../../../components/Layout';
import CategoriesListing from './CategoriesListing';
import { CategoryModalContent } from './CategoryModalContent';

const Categories: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [
    currentCategory,
    setCurrentCategory,
  ] = useState<ProductCategoryFields | null>(null);
  const { data, loading, error } = useQuery(QUERY_GET_CATEGORIES);

  let content = null;
  if (loading) {
    content = <LoaderIcon sx={{ width: 5, display: 'block', m: '0 auto' }} />;
  } else if (error) {
    content = <span>Error getting categories list</span>;
  } else {
    content = (
      <CategoriesListing
        data={data.productCategories.items}
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
            category={currentCategory}
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
