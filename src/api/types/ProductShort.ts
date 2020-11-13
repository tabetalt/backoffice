/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: ProductShort
// ====================================================

export interface ProductShort {
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
}
