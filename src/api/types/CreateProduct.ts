/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateProduct
// ====================================================

export interface CreateProduct_createProduct_price_formatted {
  __typename: "FormattedPrice";
  vatAmount: number | null;
  grossAmount: number;
  netAmount: number;
}

export interface CreateProduct_createProduct_price {
  __typename: "Price";
  formatted: CreateProduct_createProduct_price_formatted;
}

export interface CreateProduct_createProduct {
  __typename: "Product";
  id: number;
  tenantId: number;
  status: string;
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
  price: CreateProduct_createProduct_price | null;
}

export interface CreateProduct {
  createProduct: CreateProduct_createProduct;
}

export interface CreateProductVariables {
  input: ProductCreateInput;
}
