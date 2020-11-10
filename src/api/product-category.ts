import { gql } from '@apollo/client';
import { FRAGMENT_PRODUCT_CATEGORY } from '.';

export const MUTATION_CREATE_PRODUCT_CATEGORY = gql`
  mutation CreateProductCategory($input: ProductCategoryInput!) {
    createProductCategory(input: $input) {
      ...ProductCategoryFields
      parentCategory {
        ...ProductCategoryFields
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;

export const MUTATION_UPDATE_PRODUCT_CATEGORY = gql`
  mutation UpdateProductCategory($id: ID!, $input: ProductCategoryInput!) {
    updateProductCategory(id: $id, input: $input) {
      ...ProductCategoryFields
      parentCategory {
        ...ProductCategoryFields
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;

export const MUTATION_DELETE_PRODUCT_CATEGORY = gql`
  mutation DeleteProductCategory($id: ID!) {
    deleteProductCategory(id: $id)
  }
`;

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
