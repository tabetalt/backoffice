/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductStatus, ProductCategoryStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: Product
// ====================================================

export interface Product_price {
  __typename: "Price";
  vatAmount: number | null;
  grossAmount: number;
  netAmount: number;
}

export interface Product_variants {
  __typename: "ProductVariant";
  id: number;
}

export interface Product_attributes {
  __typename: "ProductAttribute";
  id: number;
}

export interface Product_categories {
  __typename: "ProductCategory";
  id: number;
  tenantId: number;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  showInMainMenu: boolean | null;
}

export interface Product_tenant {
  __typename: "Tenant";
  id: number;
}

export interface Product {
  __typename: "Product";
  id: number;
  status: ProductStatus;
  title: string;
  slug: string | null;
  isOnMainPage: boolean | null;
  shortDescription: string | null;
  description: string | null;
  technicalDescription: string | null;
  isAvailable: boolean | null;
  count: number | null;
  price: Product_price | null;
  variants: (Product_variants | null)[] | null;
  attributes: (Product_attributes | null)[] | null;
  categories: (Product_categories | null)[];
  tenant: Product_tenant;
}
