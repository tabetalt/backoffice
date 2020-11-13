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
  PENDING = "PENDING",
  PRODUCT_STATUS_UNSPECIFIED = "PRODUCT_STATUS_UNSPECIFIED",
}

export interface PriceInput {
  value: number;
}

export interface ProductAttributeInput {
  tenantId: number;
  productId: number;
  name: string;
  displayType: string;
  value: string;
}

export interface ProductCategoryInput {
  id?: number | null;
  title?: string | null;
  showInMainMenu?: boolean | null;
  status: ProductCategoryStatus;
  parentCategoryId?: number | null;
  tenantId: number;
}

export interface ProductCreateInput {
  tenantId: number;
  status: ProductStatus;
  price?: number | null;
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

export interface ProductUpdateInput {
  tenantId: number;
  status: ProductStatus;
  price?: number | null;
  title: string;
  slug?: string | null;
  isOnMainPage?: boolean | null;
  shortDescription?: string | null;
  description?: string | null;
  technicalDescription?: string | null;
  isAvailable?: boolean | null;
  count?: number | null;
  stockControl?: boolean | null;
  inStockNum?: number | null;
  variants?: (ProductVariantInput | null)[] | null;
  attributes?: (ProductAttributeInput | null)[] | null;
  categories?: (ProductCategoryInput | null)[] | null;
  images?: (ProductImageInput | null)[] | null;
}

export interface ProductVariantInput {
  tenant: number;
  productId: number;
  name: string;
  displayName: string;
  price: PriceInput;
  count?: number | null;
  productAttribute: (ProductAttributeInput | null)[];
}

//==============================================================
// END Enums and Input Objects
//==============================================================
