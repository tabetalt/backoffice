import React from 'react';
import { Route, Routes, useParams, NavLink } from 'react-router-dom';
import { Box, Heading } from 'theme-ui';
import Layout from '../../../components/Layout';
import ProductBasicOptions from './components/ProductBasicOptions';
import ProductDescription from './components/ProductDescription';
import ProductInventory from './components/ProductInventory';
import ProductLabelCampaign from './components/ProductLabelCampaign';
import ProductVariants from './components/ProductVariants';

const product = {
  id: '1337',
  name: 'Strikket genser',
  slug: 'strikket-genser',
  price: '280,00 NOK',
  categories: ['Alle produkter', 'Gensere'],
  images: ['https://via.placeholder.com/150'],
  showOnFrontpage: true,
  status: 'Inaktiv',
  shortDescription: 'Lorem Ipsum',
  description: 'Lorem Ipsum, sit Amet',
  technicalDescription: 'Lorem IT Ipsum',
  stockControl: true,
  inStockNum: 300,
  variantGroups: [
    {
      name: 'Størrelse',
      value: 'size',
      options: ['xl', 'small', 'xs'],
    },
    {
      name: 'Farger',
      value: 'color',
      options: ['Lilla', 'Burgunder rød'],
    },
  ],
  variants: [
    {
      size: 'XL',
      color: 'Lilla',
      price: '258.00 NOK',
      stock: '33',
      available: true,
    },
    {
      size: 'Small',
      color: 'Lilla',
      price: '258.00 NOK',
      stock: '33',
      available: true,
    },
  ],
  labels: ['Bestseller / Nyhet / Få igjen'],
  compareablePrice: '230 NOK',
};

export type ProductAttr = typeof product;

export const Product: React.FC = () => {
  const { productId } = useParams();
  product.id = productId;
  const baseUrl = `/catalog/product/${productId}`;
  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Heading>{product.name}</Heading>
        <Box
          sx={{
            mt: 3,
            mb: 5,
            '>a': {
              mr: 4,
              color: 'muted',
              fontWeight: 'normal',
              textDecoration: 'none',
              '&.active': { color: 'text' },
            },
          }}
        >
          <NavLink to={baseUrl}>Grunnleggende</NavLink>
          <NavLink to={`${baseUrl}/description`}>Beskrivelse</NavLink>
          <NavLink to={`${baseUrl}/inventory`}>Lagerbeholdning</NavLink>
          <NavLink to={`${baseUrl}/variants`}>Varianter</NavLink>
          <NavLink to={`${baseUrl}/label-campaign`}>Etikett og salg</NavLink>
        </Box>
        <Routes>
          <Route path="/" element={<ProductBasicOptions product={product} />} />
          <Route
            path="/description"
            element={<ProductDescription product={product} />}
          />
          <Route
            path="/inventory"
            element={<ProductInventory product={product} />}
          />
          <Route
            path="/variants"
            element={<ProductVariants product={product} />}
          />
          <Route
            path="/label-campaign"
            element={<ProductLabelCampaign product={product} />}
          />
        </Routes>
      </Box>
    </Layout>
  );
};
