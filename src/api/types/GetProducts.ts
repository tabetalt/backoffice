/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products_items_price {
  __typename: "Price";
  vatAmount: number | null;
  grossAmount: number;
  netAmount: number;
}

export interface GetProducts_products_items {
  __typename: "Product";
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
  price: GetProducts_products_items_price | null;
}

export interface GetProducts_products {
  __typename: "ProductsResponse";
  items: (GetProducts_products_items | null)[] | null;
}

export interface GetProducts {
  products: GetProducts_products | null;
}
