import { gql } from '@apollo/client';
import { FRAGMENT_PRODUCT_CATEGORY } from '..';

export const QUERY_PRODUCT_CATEGORIES_WITH_PARENT = gql`
  query GetProductCategories {
    productCategories {
      items {
        ...ProductCategoryFields
        parentCategory {
          ...ProductCategoryFields
        }
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;
