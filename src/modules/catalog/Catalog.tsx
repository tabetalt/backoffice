import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import ProductCategories from './ProductCategories';
import { Product } from './product/Product';

const Catalog = () => {
    return (
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="product/:productId/*" element={<Product />} />
        <Route path="categories" element={<ProductCategories />} />
      </Routes>
    );
}

export default Catalog
