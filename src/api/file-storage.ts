import { gql } from '@apollo/client';

export const QUERY_GET_SIGNED_URL = gql`
  query GetSignedUrl($input: QuerySignedUrlInput!) {
    signedUrl(input: $input) {
      url
      expires
      accessUrl
    }
  }
`;
