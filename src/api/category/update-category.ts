import { gql } from '@apollo/client';
import { FRAGMENT_PRODUCT_CATEGORY } from '..';

export const MUTATION_UPDATE_PRODUCT_CATEGORY = gql`
  mutation UpdateProductCategory(
    $id: ID!
    $status: ProductCategoryStatus!
    $title: String
    $parentCategoryId: Int
    $showInMainMenu: Boolean
  ) {
    updateProductCategory(
      id: $id
      input: {
        status: $status
        title: $title
        showInMainMenu: $showInMainMenu
        parentCategoryId: $parentCategoryId
      }
    ) {
      ...ProductCategoryFields
      parentCategory {
        ...ProductCategoryFields
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;
