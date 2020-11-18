/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductStatus, CategoryStatus } from './globalTypes';

// ====================================================
// GraphQL fragment: Product
// ====================================================

export interface Product_price_formatted {
  __typename: 'FormattedPrice';
  vatAmount: number | null;
  grossAmount: number;
  netAmount: number;
}

export interface Product_price {
  __typename: 'Price';
  formatted: Product_price_formatted;
}

export interface Product_variants {
  __typename: 'Variant';
  id: number;
}

export interface Product_attributes {
  __typename: 'Attribute';
  id: number;
}

export interface Product_categories {
  __typename: 'Category';
  id: number;
  tenantId: number;
  title: string;
  status: CategoryStatus;
  parentId: number | null;
  showInMainMenu: boolean;
}

export interface Product {
  __typename: 'Product';
  id: number;
  tenantId: number;
  status: ProductStatus;
  title: string;
  slug: string | null;
  isOnMainPage: boolean | null;
  shortDescription: string | null;
  description: string | null;
  technicalDescription: string | null;
  isAvailable: boolean | null;
  count: number | null;
  stockControl: boolean | null;
  inStockNum: number | null;
  priceId: number | null;
  price: Product_price | null;
  variants: Product_variants[];
  attributes: Product_attributes[];
  categories: Product_categories[];
}
