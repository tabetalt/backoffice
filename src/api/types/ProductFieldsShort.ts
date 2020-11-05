/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductStatus } from './globalTypes';

// ====================================================
// GraphQL fragment: ProductFieldsShort
// ====================================================

export interface ProductFieldsShort {
  __typename: 'Product';
  id: string;
  status: ProductStatus;
  title: string;
  slug: string | null;
  isOnMainPage: boolean | null;
  shortDescription: string | null;
  description: string | null;
  technicalDescription: string | null;
  isAvailable: boolean | null;
  count: number | null;
}
