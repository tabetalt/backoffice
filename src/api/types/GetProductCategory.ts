/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCategoryStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProductCategory
// ====================================================

export interface GetProductCategory_productCategory_parentCategory {
  __typename: "ProductCategory";
  id: number;
  tenantId: number;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  showInMainMenu: boolean | null;
}

export interface GetProductCategory_productCategory {
  __typename: "ProductCategory";
  id: number;
  tenantId: number;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  showInMainMenu: boolean | null;
  parentCategory: GetProductCategory_productCategory_parentCategory | null;
}

export interface GetProductCategory {
  productCategory: GetProductCategory_productCategory | null;
}

export interface GetProductCategoryVariables {
  id: number;
}
