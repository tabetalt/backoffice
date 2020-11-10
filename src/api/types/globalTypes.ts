/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ProductCategoryStatus {
  ACTIVE = "ACTIVE",
  CATEGORY_STATUS_UNSPECIFIED = "CATEGORY_STATUS_UNSPECIFIED",
  DEACTIVATED = "DEACTIVATED",
}

export enum ProductStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PRODUCT_STATUS_UNSPECIFIED = "PRODUCT_STATUS_UNSPECIFIED",
}

export interface PriceInput {
  value: number;
}

export interface ProductAttributeInput {
  tenantId: string;
  productId: string;
  name: string;
  displayType: string;
  value: string;
}

export interface ProductCategoryInput {
  title?: string | null;
  showInMainMenu?: boolean | null;
  status: ProductCategoryStatus;
  parentCategoryId?: number | null;
  tenantId: number;
}

export interface ProductCreateInput {
  tenantId: string;
  status: ProductStatus;
  price: number;
  title: string;
  slug?: string | null;
  isOnMainPage?: boolean | null;
  shortDescription?: string | null;
  description?: string | null;
  technicalDescription?: string | null;
  isAvailable?: boolean | null;
  count?: number | null;
  variants?: (ProductVariantInput | null)[] | null;
  attributes?: (ProductAttributeInput | null)[] | null;
  categories?: (ProductCategoryInput | null)[] | null;
  images?: (ProductImageInput | null)[] | null;
}

export interface ProductImageInput {
  url?: string | null;
  title?: string | null;
}

export interface ProductVariantInput {
  tenant: string;
  productId: string;
  name: string;
  displayName: string;
  price: PriceInput;
  count?: number | null;
  productAttribute: (ProductAttributeInput | null)[];
}

//==============================================================
// END Enums and Input Objects
//==============================================================
