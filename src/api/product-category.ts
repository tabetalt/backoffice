import { gql } from '@apollo/client';
import { FRAGMENT_CATEGORY, FRAGMENT_PRODUCT_CATEGORY_SHORT } from '.';

export const MUTATION_CREATE_PRODUCT_CATEGORY = gql`
  mutation CreateCategory($input: CategoryCreateInput!) {
    createCategory(input: $input) {
      ...Category
      parent {
        ...Category
      }
    }
  }
  ${FRAGMENT_CATEGORY}
`;

export const MUTATION_UPDATE_PRODUCT_CATEGORY = gql`
  mutation UpdateCategory($id: Int!, $input: CategoryUpdateInput!) {
    updateCategory(id: $id, input: $input) {
      ...Category
      parent {
        ...Category
      }
    }
  }
  ${FRAGMENT_CATEGORY}
`;

export const MUTATION_DELETE_PRODUCT_CATEGORY = gql`
  mutation DeleteCategory($id: Int!) {
    deleteCategory(id: $id)
  }
`;

export const QUERY_PRODUCT_CATEGORIES_WITH_PARENT = gql`
  query GetCategories {
    categories {
      items {
        ...Category
        parent {
          ...Category
        }
      }
    }
  }
  ${FRAGMENT_CATEGORY}
`;

export const QUERY_PRODUCT_CATEGORIES_WITHOUT_PARENT = gql`
  query GetProductCategoriesShort {
    productCategories {
      items {
        ...ProductCategoryShort
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY_SHORT}
`;

export const QUERY_PRODUCT_CATEGORY_WITH_PARENT = gql`
  query GetCategory($id: Int!) {
    category(id: $id) {
      ...Category
      parent {
        ...Category
      }
    }
  }
  ${FRAGMENT_CATEGORY}
`;
