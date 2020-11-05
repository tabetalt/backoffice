import { gql } from '@apollo/client';

export const FRAGMENT_TENANT_FIELDS = gql`
  fragment TenantFields on Tenant {
    id
  }
`;

export const FRAGMENT_PRICE_FIELDS = gql`
  fragment PriceFields on Price {
    vatAmount
    grossAmount
    netAmount
  }
`;

export const FRAGMENT_PRODUCT_VARIANT_FIELDS = gql`
  fragment ProductVariantFileds on ProductVariant {
    id
  }
`;

export const FRAGMENT_PRODUCT_ATTRIBUTE_FIELDS = gql`
  fragment ProductAttributeFields on ProductAttribute {
    id
  }
`;

export const FRAGMENT_PRODUCT_CATEGORY_FIELDS = gql`
  fragment ProductCategory on ProductCategory {
    id
    title
    status
    parentCategoryId
    menuNavigation
  }
`;

export const FRAGMENT_PRODUCT_FIELDS_SHORT = gql`
  fragment ProductFieldsShort on Product {
    id
    status
    title
    slug
    isOnMainPage
    shortDescription
    description
    technicalDescription
    isAvailable
    count
  }
`;

export const FRAGMENT_PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    ...ProductFieldsShort
    price {
      ...PriceFields
    }
    variants {
      ...ProductVariantFileds
    }
    attributes {
      ...ProductAttributeFields
    }
    categories {
      ...ProductCategory
    }
    tenant {
      ...TenantFields
    }
  }
  ${FRAGMENT_PRODUCT_FIELDS_SHORT}
  ${FRAGMENT_PRICE_FIELDS}
  ${FRAGMENT_PRODUCT_VARIANT_FIELDS}
  ${FRAGMENT_PRODUCT_ATTRIBUTE_FIELDS}
  ${FRAGMENT_PRODUCT_CATEGORY_FIELDS}
  ${FRAGMENT_TENANT_FIELDS}
`;
