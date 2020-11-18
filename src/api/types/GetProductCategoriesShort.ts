/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductCategoriesShort
// ====================================================

export interface GetProductCategoriesShort_productCategories_items {
  __typename: "ProductCategory";
  id: number;
  title: string | null;
}

export interface GetProductCategoriesShort_productCategories {
  __typename: "ProductCategoriesResponse";
  items: (GetProductCategoriesShort_productCategories_items | null)[] | null;
}

export interface GetProductCategoriesShort {
  productCategories: GetProductCategoriesShort_productCategories | null;
}
