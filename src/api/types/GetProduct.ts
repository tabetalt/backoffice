/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProduct
// ====================================================

export interface GetProduct_product_price {
  __typename: "Price";
  vatAmount: number | null;
  grossAmount: number;
  netAmount: number;
}

export interface GetProduct_product {
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
  stockControl: boolean | null;
  inStockNum: number | null;
  price: GetProduct_product_price | null;
}

export interface GetProduct {
  product: GetProduct_product | null;
}

export interface GetProductVariables {
  id: number;
}
