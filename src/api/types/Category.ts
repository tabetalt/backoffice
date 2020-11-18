/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryStatus } from './globalTypes';

// ====================================================
// GraphQL fragment: Category
// ====================================================

export interface Category {
  __typename: 'Category';
  id: number;
  tenantId: number;
  title: string;
  status: CategoryStatus;
  parentId: number | null;
  showInMainMenu: boolean;
}
