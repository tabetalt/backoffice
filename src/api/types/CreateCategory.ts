/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryCreateInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: CreateCategory
// ====================================================

export interface CreateCategory_createCategory_parent {
  __typename: 'Category';
  id: number;
  tenantId: number;
  title: string;
  status: string;
  parentId: number | null;
  showInMainMenu: boolean;
}

export interface CreateCategory_createCategory {
  __typename: 'Category';
  id: number;
  tenantId: number;
  title: string;
  status: string;
  parentId: number | null;
  showInMainMenu: boolean;
  parent: CreateCategory_createCategory_parent | null;
}

export interface CreateCategory {
  createCategory: CreateCategory_createCategory;
}

export interface CreateCategoryVariables {
  input: CategoryCreateInput;
}
