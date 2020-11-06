/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductStatus, ProductCategoryStatus } from './globalTypes';

// ====================================================
// GraphQL fragment: ProductFields
// ====================================================

export interface ProductFields_price {
  __typename: 'Price';
  vatAmount: number;
  grossAmount: number;
  netAmount: string;
}

export interface ProductFields_variants {
  __typename: 'ProductVariant';
  id: string;
}

export interface ProductFields_attributes {
  __typename: 'ProductAttribute';
  id: string;
}

export interface ProductFields_categories {
  __typename: 'ProductCategory';
  id: string;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  menuNavigation: boolean | null;
}

export interface ProductFields_tenant {
  __typename: 'Tenant';
  id: string;
}

export interface ProductFields {
  __typename: 'Product';
  id: string;
  status: ProductStatus;
  title: string;
  slug: string | null;
  isOnMainPage: boolean | null;
  shortDescription: string | null;
  description: string | null;
  technicalDescription: string | null;
  isAvailable: boolean | null;
  count: number | null;
  price: ProductFields_price;
  variants: (ProductFields_variants | null)[] | null;
  attributes: (ProductFields_attributes | null)[] | null;
  categories: (ProductFields_categories | null)[];
  tenant: ProductFields_tenant;
}
