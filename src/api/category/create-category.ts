import { gql } from '@apollo/client';
import { FRAGMENT_PRODUCT_CATEGORY } from '..';

export const MUTATION_CREATE_PRODUCT_CATEGORY = gql`
  mutation CreateProductCategory(
    $status: ProductCategoryStatus!
    $title: String
    $parentCategoryId: Int
    $showInMainMenu: Boolean
  ) {
    createProductCategory(
      input: {
        status: $status
        title: $title
        parentCategoryId: $parentCategoryId
        showInMainMenu: $showInMainMenu
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
