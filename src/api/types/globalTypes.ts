/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ProductCategoryStatus {
  ACTIVE = 'ACTIVE',
  CATEGORY_STATUS_UNSPECIFIED = 'CATEGORY_STATUS_UNSPECIFIED',
  DEACTIVATED = 'DEACTIVATED',
}

export enum ProductStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PRODUCT_STATUS_UNSPECIFIED = 'PRODUCT_STATUS_UNSPECIFIED',
}

export interface ProductCategoryInput {
  title?: string | null;
  showInMainMenu?: boolean | null;
  status: ProductCategoryStatus;
  parentCategoryId?: number | null;
  tenantId: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
