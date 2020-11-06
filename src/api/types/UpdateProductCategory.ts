/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCategoryStatus } from './globalTypes';

// ====================================================
// GraphQL mutation operation: UpdateProductCategory
// ====================================================

export interface UpdateProductCategory_updateProductCategory_parentCategory {
  __typename: 'ProductCategory';
  id: string;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  showInMainMenu: boolean | null;
}

export interface UpdateProductCategory_updateProductCategory {
  __typename: 'ProductCategory';
  id: string;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  showInMainMenu: boolean | null;
  parentCategory: UpdateProductCategory_updateProductCategory_parentCategory | null;
}

export interface UpdateProductCategory {
  updateProductCategory: UpdateProductCategory_updateProductCategory | null;
}

export interface UpdateProductCategoryVariables {
  id: string;
  status: ProductCategoryStatus;
  title?: string | null;
  parentCategoryId?: number | null;
  showInMainMenu?: boolean | null;
}
