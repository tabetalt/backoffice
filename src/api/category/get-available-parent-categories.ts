import { gql } from '@apollo/client';
import { FRAGMENT_PARENT_PRODUCT_CATEGORY } from '../fragments';

export const QUERY_GET_AVAILABLE_PARENT_CATEGORIES = gql`
  query GetAvailableParentCategories {
    productCategories {
      items {
        ...ParentCategoryFields
      }
    }
  }
  ${FRAGMENT_PARENT_PRODUCT_CATEGORY}
`;
