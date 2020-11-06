import { gql } from '@apollo/client';

export const MUTATION_DELETE_PRODUCT_CATEGORY = gql`
  mutation DeleteProductCategory($id: ID!) {
    deleteProductCategory(id: $id)
  }
`;
