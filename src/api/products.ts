import { gql } from '@apollo/client';
import {
  FRAGMENT_PRODUCT_SHORT,
  FRAGMENT_PRICE,
  FRAGMENT_CATEGORY_SHORT,
} from './fragments';

export const QUERY_GET_PRODUCTS = gql`
  query GetProducts {
    products {
      items {
        ...ProductShort
        price {
          ...Price
        }
      }
    }
  }
  ${FRAGMENT_PRODUCT_SHORT}
  ${FRAGMENT_PRICE}
`;

export const QUERY_GET_PRODUCT = gql`
  query GetProduct($id: Int!) {
    product(id: $id) {
      ...ProductShort
      price {
        ...Price
      }
      categories {
        ...CategoryShort
      }
    }
  }
  ${FRAGMENT_PRODUCT_SHORT}
  ${FRAGMENT_PRICE}
  ${FRAGMENT_CATEGORY_SHORT}
`;

export const MUTATION_DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;

export const MUTATION_CREATE_PRODUCT = gql`
  mutation CreateProduct($input: ProductCreateInput!) {
    createProduct(input: $input) {
      ...ProductShort
      price {
        ...Price
      }
    }
  }
  ${FRAGMENT_PRODUCT_SHORT}
  ${FRAGMENT_PRICE}
`;

export const MUTATION_UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: Int!, $input: ProductUpdateInput!) {
    updateProduct(id: $id, input: $input) {
      ...ProductShort
      price {
        ...Price
      }
    }
  }
  ${FRAGMENT_PRODUCT_SHORT}
  ${FRAGMENT_PRICE}
`;
