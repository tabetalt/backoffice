/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCategoryStatus } from './globalTypes';

// ====================================================
// GraphQL query operation: GetProductCategories
// ====================================================

export interface GetProductCategories_productCategories_items_parentCategory {
  __typename: 'ProductCategory';
  id: string;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  showInMainMenu: boolean | null;
}

export interface GetProductCategories_productCategories_items {
  __typename: 'ProductCategory';
  id: string;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  showInMainMenu: boolean | null;
  parentCategory: GetProductCategories_productCategories_items_parentCategory | null;
}

export interface GetProductCategories_productCategories {
  __typename: 'ProductCategoriesResponse';
  items: (GetProductCategories_productCategories_items | null)[] | null;
}

export interface GetProductCategories {
  productCategories: GetProductCategories_productCategories | null;
}
