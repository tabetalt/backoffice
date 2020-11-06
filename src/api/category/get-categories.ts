import { gql } from '@apollo/client';
import { FRAGMENT_PRODUCT_CATEGORY } from '../fragments';

export const QUERY_GET_CATEGORIES = gql`
  query GetCategories {
    productCategories {
      items {
        ...ProductCategoryFields
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;
