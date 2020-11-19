/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategoriesShort
// ====================================================

export interface GetCategoriesShort_categories_items {
  __typename: "Category";
  id: number;
  title: string;
}

export interface GetCategoriesShort_categories {
  __typename: "CategoriesListResponse";
  items: GetCategoriesShort_categories_items[];
}

export interface GetCategoriesShort {
  categories: GetCategoriesShort_categories;
}
