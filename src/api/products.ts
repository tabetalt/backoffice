import { gql } from '@apollo/client';
import { FRAGMENT_PRODUCT_SHORT } from './fragments';

export const QUERY_GET_PRODUCTS = gql`
  query GetProducts {
    products {
      items {
        ...ProductShort
      }
    }
  }
  ${FRAGMENT_PRODUCT_SHORT}
`;
