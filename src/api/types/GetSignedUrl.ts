/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { QuerySignedUrlInput } from './globalTypes';

// ====================================================
// GraphQL query operation: GetSignedUrl
// ====================================================

export interface GetSignedUrl_signedUrl {
  __typename: 'SignedUrl';
  url: string;
  expires: string;
  accessUrl: string;
}

export interface GetSignedUrl {
  signedUrl: GetSignedUrl_signedUrl;
}

export interface GetSignedUrlVariables {
  input: QuerySignedUrlInput;
}
