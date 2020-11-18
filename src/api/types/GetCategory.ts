/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategory
// ====================================================

export interface GetCategory_category_parent {
  __typename: 'Category';
  id: number;
  tenantId: number;
  title: string;
  status: string;
  parentId: number | null;
  showInMainMenu: boolean;
}

export interface GetCategory_category {
  __typename: 'Category';
  id: number;
  tenantId: number;
  title: string;
  status: string;
  parentId: number | null;
  showInMainMenu: boolean;
  parent: GetCategory_category_parent | null;
}

export interface GetCategory {
  category: GetCategory_category;
}

export interface GetCategoryVariables {
  id: number;
}
