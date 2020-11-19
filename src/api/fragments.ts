import { gql } from '@apollo/client';

export const FRAGMENT_TENANT = gql`
  fragment Tenant on Tenant {
    id
  }
`;

export const FRAGMENT_PRICE = gql`
  fragment Price on Price {
    formatted {
      vatAmount
      grossAmount
      netAmount
    }
  }
`;

export const FRAGMENT_VARIANT = gql`
  fragment Variant on Variant {
    id
  }
`;

export const FRAGMENT_ATTRIBUTE = gql`
  fragment Attribute on Attribute {
    id
  }
`;

export const FRAGMENT_CATEGORY = gql`
  fragment Category on Category {
    id
    tenantId
    title
    status
    parentId
    showInMainMenu
  }
`;

export const FRAGMENT_CATEGORY_SHORT = gql`
  fragment CategoryShort on Category {
    id
    title
  }
`;

export const FRAGMENT_PRODUCT_SHORT = gql`
  fragment ProductShort on Product {
    id
    tenantId
    status
    title
    slug
    isOnMainPage
    shortDescription
    description
    technicalDescription
    isAvailable
    count
    stockControl
    inStockNum
    priceId
  }
`;

export const FRAGMENT_PRODUCT = gql`
  fragment Product on Product {
    ...ProductShort
    price {
      ...Price
    }
    variants {
      ...Variant
    }
    attributes {
      ...Attribute
    }
    categories {
      ...Category
    }
    images {
      url
    }
  }
  ${FRAGMENT_PRODUCT_SHORT}
  ${FRAGMENT_PRICE}
  ${FRAGMENT_VARIANT}
  ${FRAGMENT_ATTRIBUTE}
  ${FRAGMENT_CATEGORY}
`;
