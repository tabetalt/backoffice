import { gql } from '@apollo/client';
import { FRAGMENT_PRODUCT_CATEGORY } from '../fragments';

export const QUERY_PRODUCT_CATEGORY_WITH_PARENT = gql`
  query GetProductCategory($id: ID!) {
    productCategory(id: $id) {
      ...ProductCategoryFields
      parentCategory {
        ...ProductCategoryFields
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;
