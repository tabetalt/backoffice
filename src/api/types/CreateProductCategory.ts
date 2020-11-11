/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCategoryInput, ProductCategoryStatus } from './globalTypes';

// ====================================================
// GraphQL mutation operation: CreateProductCategory
// ====================================================

export interface CreateProductCategory_createProductCategory_parentCategory {
  __typename: 'ProductCategory';
  id: string;
  tenantId: number;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  showInMainMenu: boolean | null;
}

export interface CreateProductCategory_createProductCategory {
  __typename: 'ProductCategory';
  id: string;
  tenantId: number;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  showInMainMenu: boolean | null;
  parentCategory: CreateProductCategory_createProductCategory_parentCategory | null;
}

export interface CreateProductCategory {
  createProductCategory: CreateProductCategory_createProductCategory | null;
}

export interface CreateProductCategoryVariables {
  input: ProductCategoryInput;
}
