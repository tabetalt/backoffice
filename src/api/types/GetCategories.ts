/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCategoryStatus } from './globalTypes';

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_productCategories_items {
  __typename: 'ProductCategory';
  id: string;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
  menuNavigation: boolean | null;
}

export interface GetCategories_productCategories {
  __typename: 'ProductCategoriesResponse';
  items: (GetCategories_productCategories_items | null)[] | null;
}

export interface GetCategories {
  productCategories: GetCategories_productCategories | null;
}
