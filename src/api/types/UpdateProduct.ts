/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductUpdateInput, ProductStatus } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateProduct
// ====================================================

export interface UpdateProduct_updateProduct {
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
}

export interface UpdateProduct {
  updateProduct: UpdateProduct_updateProduct | null;
}

export interface UpdateProductVariables {
  id: string;
  input: ProductUpdateInput;
}
