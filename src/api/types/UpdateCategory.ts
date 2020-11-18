/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryUpdateInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: UpdateCategory
// ====================================================

export interface UpdateCategory_updateCategory_parent {
  __typename: 'Category';
  id: number;
  tenantId: number;
  title: string;
  status: string;
  parentId: number | null;
  showInMainMenu: boolean;
}

export interface UpdateCategory_updateCategory {
  __typename: 'Category';
  id: number;
  tenantId: number;
  title: string;
  status: string;
  parentId: number | null;
  showInMainMenu: boolean;
  parent: UpdateCategory_updateCategory_parent | null;
}

export interface UpdateCategory {
  updateCategory: UpdateCategory_updateCategory;
}

export interface UpdateCategoryVariables {
  id: number;
  input: CategoryUpdateInput;
}
