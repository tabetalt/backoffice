import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import ProductCategories from './ProductCategories';

const Catalog = () => {
    return (
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<ProductCategories />} />
      </Routes>
    );
}

export default Catalog
