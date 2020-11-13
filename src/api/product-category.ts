import { gql } from '@apollo/client';
import { FRAGMENT_PRODUCT_CATEGORY } from '.';

export const MUTATION_CREATE_PRODUCT_CATEGORY = gql`
  mutation CreateProductCategory($input: ProductCategoryInput!) {
    createProductCategory(input: $input) {
      ...ProductCategory
      parentCategory {
        ...ProductCategory
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;

export const MUTATION_UPDATE_PRODUCT_CATEGORY = gql`
  mutation UpdateProductCategory($id: Int!, $input: ProductCategoryInput!) {
    updateProductCategory(id: $id, input: $input) {
      ...ProductCategory
      parentCategory {
        ...ProductCategory
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;

export const MUTATION_DELETE_PRODUCT_CATEGORY = gql`
  mutation DeleteProductCategory($id: Int!) {
    deleteProductCategory(id: $id)
  }
`;

export const QUERY_PRODUCT_CATEGORIES_WITH_PARENT = gql`
  query GetProductCategories {
    productCategories {
      items {
        ...ProductCategory
        parentCategory {
          ...ProductCategory
        }
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;

export const QUERY_PRODUCT_CATEGORY_WITH_PARENT = gql`
  query GetProductCategory($id: Int!) {
    productCategory(id: $id) {
      ...ProductCategory
      parentCategory {
        ...ProductCategory
      }
    }
  }
  ${FRAGMENT_PRODUCT_CATEGORY}
`;
