/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories_items_parent {
  __typename: "Category";
  id: number;
  tenantId: number;
  title: string;
  status: CategoryStatus;
  parentId: number | null;
  showInMainMenu: boolean;
}

export interface GetCategories_categories_items {
  __typename: "Category";
  id: number;
  tenantId: number;
  title: string;
  status: CategoryStatus;
  parentId: number | null;
  showInMainMenu: boolean;
  parent: GetCategories_categories_items_parent | null;
}

export interface GetCategories_categories {
  __typename: "CategoriesListResponse";
  items: GetCategories_categories_items[];
}

export interface GetCategories {
  categories: GetCategories_categories;
}
