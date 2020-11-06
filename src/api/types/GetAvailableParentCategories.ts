/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAvailableParentCategories
// ====================================================

export interface GetAvailableParentCategories_productCategories_items {
  __typename: "ProductCategory";
  id: string;
  title: string | null;
}

export interface GetAvailableParentCategories_productCategories {
  __typename: "ProductCategoriesResponse";
  items: (GetAvailableParentCategories_productCategories_items | null)[] | null;
}

export interface GetAvailableParentCategories {
  productCategories: GetAvailableParentCategories_productCategories | null;
}
