/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products_items_price_formatted {
  __typename: "FormattedPrice";
  vatAmount: number | null;
  grossAmount: number;
  netAmount: number;
}

export interface GetProducts_products_items_price {
  __typename: "Price";
  formatted: GetProducts_products_items_price_formatted;
}

export interface GetProducts_products_items {
  __typename: "Product";
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
  price: GetProducts_products_items_price | null;
}

export interface GetProducts_products {
  __typename: "ProductsListResponse";
  items: GetProducts_products_items[];
}

export interface GetProducts {
  products: GetProducts_products;
}
