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

export const QUERY_GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      ...ProductShort
    }
  }
  ${FRAGMENT_PRODUCT_SHORT}
`;

export const MUTATION_DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;

export const MUTATION_CREATE_PRODUCT = gql`
  mutation CreateProduct($input: ProductCreateInput!) {
    createProduct(input: $input) {
      ...ProductShort
    }
  }
  ${FRAGMENT_PRODUCT_SHORT}
`;
