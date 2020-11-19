/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Price
// ====================================================

export interface Price_formatted {
  __typename: "FormattedPrice";
  vatAmount: number | null;
  grossAmount: number;
  netAmount: number;
}

export interface Price {
  __typename: "Price";
  formatted: Price_formatted;
}
