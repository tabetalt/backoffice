/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CategoryStatus {
  ACTIVE = 'ACTIVE',
  CATEGORY_STATUS_UNSPECIFIED = 'CATEGORY_STATUS_UNSPECIFIED',
  INACTIVE = 'INACTIVE',
}

export enum ProductStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  PRODUCT_STATUS_UNSPECIFIED = 'PRODUCT_STATUS_UNSPECIFIED',
}

export interface CategoryCreateInput {
  status: CategoryStatus;
  title: string;
  showInMainMenu?: boolean | null;
  parentId?: number | null;
  tenantId: number;
  children?: CategoryCreateInput[] | null;
}

export interface CategoryUpdateInput {
  status: CategoryStatus;
  title: string;
  showInMainMenu?: boolean | null;
  parentId?: number | null;
  tenantId: number;
  children?: CategoryCreateInput[] | null;
}

export interface ImageCreateInput {
  url: string;
}

export interface ProductCategoryCreateInput {
  id: number;
  title: string;
}

export interface ProductCreateInput {
  title: string;
  slug?: string | null;
  isOnMainPage: boolean;
  shortDescription?: string | null;
  description?: string | null;
  technicalDescription?: string | null;
  isAvailable?: boolean | null;
  count?: number | null;
  status: ProductStatus;
  priceId?: number | null;
  tenantId: number;
  stockControl?: boolean | null;
  inStockNum?: number | null;
  price?: number | null;
  categories?: ProductCategoryCreateInput[] | null;
  images?: ImageCreateInput[] | null;
}

export interface ProductUpdateInput {
  title: string;
  slug?: string | null;
  isOnMainPage: boolean;
  shortDescription?: string | null;
  description?: string | null;
  technicalDescription?: string | null;
  isAvailable?: boolean | null;
  count?: number | null;
  status: ProductStatus;
  priceId?: number | null;
  tenantId: number;
  stockControl?: boolean | null;
  inStockNum?: number | null;
  price?: number | null;
  categories?: ProductCategoryCreateInput[] | null;
  images?: ImageCreateInput[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
