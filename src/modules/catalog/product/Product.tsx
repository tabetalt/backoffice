import React from 'react';
import { useRoutes, useParams, NavLink } from 'react-router-dom';
import { Box, Button, Heading } from 'theme-ui';
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
  price: '280,00',
  categories: ['Alle produkter', 'Hekleoppskrifter', 'Gensere'],
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

const Product: React.FC = () => {
  const routes = useRoutes([
    { path: 'basic', element: <ProductBasicOptions product={product} /> },
    { path: 'description', element: <ProductDescription product={product} /> },
    { path: 'inventory', element: <ProductInventory product={product} /> },
    { path: 'variants', element: <ProductVariants product={product} /> },
    {
      path: 'label-campaign',
      element: <ProductLabelCampaign product={product} />,
    },
  ]);

  const { productId } = useParams();
  product.id = productId;

  return (
    <Layout
      header={{
        links: [
          {
            name: 'Produkter',
            to: '/catalog/product/1',
          },
          {
            name: 'Kategorier',
            to: '/catalog/categories',
          },
        ],
        children: (
          <Box>
            <Button variant="outline">Kopier</Button>
            <Button variant="outline" sx={{ ml: 3 }}>
              Avbryt
            </Button>
            <Button variant="outline" sx={{ ml: 3 }}>
              Lagre utkast
            </Button>
            <Button sx={{ ml: 3 }}>Publiser</Button>
          </Box>
        ),
      }}
    >
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
          <NavLink
            activeStyle={{
              color: '#1D1D1D',
            }}
            style={{ color: '#9AA0B5' }}
            to="basic"
          >
            Grunnleggende
          </NavLink>
          <NavLink
            activeStyle={{
              color: '#1D1D1D',
            }}
            style={{ color: '#9AA0B5' }}
            to="description"
          >
            Beskrivelse
          </NavLink>
          <NavLink
            activeStyle={{
              color: '#1D1D1D',
            }}
            style={{ color: '#9AA0B5' }}
            to="inventory"
          >
            Lagerbeholdning
          </NavLink>
          <NavLink
            activeStyle={{
              color: '#1D1D1D',
            }}
            style={{ color: '#9AA0B5' }}
            to="variants"
          >
            Varianter
          </NavLink>
          <NavLink
            activeStyle={{
              color: '#1D1D1D',
            }}
            style={{ color: '#9AA0B5' }}
            to="label-campaign"
          >
            Etikett og salg
          </NavLink>
        </Box>
        {routes}
      </Box>
    </Layout>
  );
};

export default Product;
