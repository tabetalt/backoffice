/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCategoryStatus } from './globalTypes';

// ====================================================
// GraphQL fragment: ProductCategory
// ====================================================

export interface ProductCategory {
  __typename: 'ProductCategory';
  id: string;
  title: string | null;
  status: ProductCategoryStatus;
  parentCategoryId: number | null;
}