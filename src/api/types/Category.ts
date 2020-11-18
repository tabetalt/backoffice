/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Category
// ====================================================

export interface Category {
  __typename: "Category";
  id: number;
  tenantId: number;
  title: string;
  status: string;
  parentId: number | null;
  showInMainMenu: boolean;
}
