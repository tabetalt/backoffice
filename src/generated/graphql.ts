import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['Int'];
  regionCode: Scalars['Int'];
  type: AddressType;
  languageCode: Scalars['String'];
  postalCode: Scalars['String'];
  sortingCode: Scalars['String'];
  administrativeArea: Scalars['String'];
  locality: Scalars['String'];
  addressLines: Scalars['String'];
  recipients: Scalars['String'];
  organization: Scalars['String'];
  current: Scalars['String'];
};

export enum AddressType {
  AddressTypeUnspecified = 'ADDRESS_TYPE_UNSPECIFIED',
  Invoice = 'INVOICE',
  Postal = 'POSTAL',
  Visitor = 'VISITOR',
}

export type Attachment = {
  __typename?: 'Attachment';
  id: Scalars['Int'];
  url: Scalars['String'];
  mime?: Maybe<Scalars['String']>;
  size: Scalars['Int'];
};

export type AttachmentCreateInput = {
  url: Scalars['String'];
  mime: Scalars['String'];
  size: Scalars['Int'];
};

export type AttachmentsListResponse = {
  __typename?: 'AttachmentsListResponse';
  items: Array<Attachment>;
};

export type Attribute = {
  __typename?: 'Attribute';
  id: Scalars['Int'];
  name: Scalars['String'];
  displayName: Scalars['String'];
  value: Scalars['String'];
  product: Product;
  variant?: Maybe<Variant>;
};

export type AttributeCreateInput = {
  name: Scalars['String'];
  displayName: Scalars['String'];
  value: Scalars['String'];
};

export type AttributeUpdateInput = {
  name: Scalars['String'];
  displayName: Scalars['String'];
  value: Scalars['String'];
};

export type AttributesListResponse = {
  __typename?: 'AttributesListResponse';
  items: Array<Attribute>;
};

export type CategoriesListResponse = {
  __typename?: 'CategoriesListResponse';
  items: Array<Category>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  status: CategoryStatus;
  title: Scalars['String'];
  showInMainMenu: Scalars['Boolean'];
  parentId?: Maybe<Scalars['Int']>;
  tenantId: Scalars['Int'];
  parent?: Maybe<Category>;
  children?: Maybe<Array<Category>>;
  products?: Maybe<Array<Product>>;
};

export type CategoryCreateInput = {
  status: CategoryStatus;
  title: Scalars['String'];
  showInMainMenu?: Maybe<Scalars['Boolean']>;
  parentId?: Maybe<Scalars['Int']>;
  tenantId: Scalars['Int'];
};

export enum CategoryStatus {
  CategoryStatusUnspecified = 'CATEGORY_STATUS_UNSPECIFIED',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type CategoryUpdateInput = {
  status: CategoryStatus;
  title: Scalars['String'];
  showInMainMenu?: Maybe<Scalars['Boolean']>;
  parentId?: Maybe<Scalars['Int']>;
  tenantId: Scalars['Int'];
};

/** Currency Code */
export enum CurrencyCode {
  Usd = 'USD',
  Cad = 'CAD',
  Eur = 'EUR',
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ars = 'ARS',
  Aud = 'AUD',
  Azn = 'AZN',
  Bam = 'BAM',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Eek = 'EEK',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Khr = 'KHR',
  Kmf = 'KMF',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kzt = 'KZT',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Ltl = 'LTL',
  Lvl = 'LVL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mop = 'MOP',
  Mur = 'MUR',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Sos = 'SOS',
  Syp = 'SYP',
  Thb = 'THB',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vef = 'VEF',
  Vnd = 'VND',
  Xaf = 'XAF',
  Xof = 'XOF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmk = 'ZMK',
  Zwl = 'ZWL',
}

export type EmailAddress = {
  __typename?: 'EmailAddress';
  id: Scalars['Int'];
  type: EmailAddressType;
  address: Scalars['String'];
  tenantId: Scalars['Int'];
  tenant: Tenant;
};

export enum EmailAddressType {
  EmailAddressTypeUnspecified = 'EMAIL_ADDRESS_TYPE_UNSPECIFIED',
  Primary = 'PRIMARY',
  CatchAll = 'CATCH_ALL',
  Order = 'ORDER',
  Announcement = 'ANNOUNCEMENT',
  Recovery = 'RECOVERY',
  CustomerFacing = 'CUSTOMER_FACING',
}

export type ImageCreateInput = {
  id?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
};

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Int'];
  currency?: Maybe<CurrencyCode>;
  precision?: Maybe<Scalars['Int']>;
};

export type MoneyInput = {
  amount: Scalars['Int'];
  currency?: Maybe<CurrencyCode>;
  precision?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTenant: Tenant;
  updateTenant: Tenant;
  deleteTenant: Tenant;
  createCategory: Category;
  updateCategory: Category;
  deleteCategory: Scalars['Boolean'];
  createProduct: Product;
  updateProduct: Product;
  deleteProduct: Scalars['Boolean'];
  createVariant: Variant;
  updateVariant: Variant;
  deleteVariant: Scalars['Boolean'];
  createAttribute: Attribute;
  updateAttribute: Attribute;
  deleteAttribute: Scalars['Boolean'];
  createAttachments: AttachmentsListResponse;
};

export type MutationCreateTenantArgs = {
  input: TenantCreateInput;
};

export type MutationUpdateTenantArgs = {
  input: TenantUpdateInput;
  id: Scalars['Int'];
};

export type MutationDeleteTenantArgs = {
  id: Scalars['Int'];
};

export type MutationCreateCategoryArgs = {
  input: CategoryCreateInput;
};

export type MutationUpdateCategoryArgs = {
  input: CategoryUpdateInput;
  id: Scalars['Int'];
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['Int'];
};

export type MutationCreateProductArgs = {
  input: ProductCreateInput;
};

export type MutationUpdateProductArgs = {
  input: ProductUpdateInput;
  id: Scalars['Int'];
};

export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};

export type MutationCreateVariantArgs = {
  input: VariantCreateInput;
};

export type MutationUpdateVariantArgs = {
  input: VariantUpdateInput;
  id: Scalars['Int'];
};

export type MutationDeleteVariantArgs = {
  id: Scalars['Int'];
};

export type MutationCreateAttributeArgs = {
  input: AttributeCreateInput;
};

export type MutationUpdateAttributeArgs = {
  input: AttributeUpdateInput;
  id: Scalars['Int'];
};

export type MutationDeleteAttributeArgs = {
  id: Scalars['Int'];
};

export type MutationCreateAttachmentsArgs = {
  input: Array<AttachmentCreateInput>;
};

export type Price = {
  __typename?: 'Price';
  vatAmount: Money;
  grossAmount: Money;
  netAmount: Money;
};

export type PriceInput = {
  grossAmount: MoneyInput;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  title: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  isOnMainPage?: Maybe<Scalars['Boolean']>;
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  technicalDescription?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  count?: Maybe<Scalars['Int']>;
  status: ProductStatus;
  tenantId: Scalars['Int'];
  stockControl?: Maybe<Scalars['Boolean']>;
  inStockNum?: Maybe<Scalars['Int']>;
  price?: Maybe<Price>;
  vatRate?: Maybe<VatRate>;
  categories: Array<Category>;
  attributes: Array<Attribute>;
  variants: Array<Variant>;
  images: Array<Attachment>;
};

export type ProductCategoryCreateInput = {
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type ProductCreateInput = {
  title: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  isOnMainPage: Scalars['Boolean'];
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  technicalDescription?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  count?: Maybe<Scalars['Int']>;
  status: ProductStatus;
  tenantId: Scalars['Int'];
  stockControl?: Maybe<Scalars['Boolean']>;
  inStockNum?: Maybe<Scalars['Int']>;
  price?: Maybe<PriceInput>;
  vatRateId?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<ProductCategoryCreateInput>>;
  images?: Maybe<Array<ImageCreateInput>>;
};

export enum ProductStatus {
  ProductStatusUnspecified = 'PRODUCT_STATUS_UNSPECIFIED',
  Pending = 'PENDING',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type ProductUpdateInput = {
  title: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  isOnMainPage: Scalars['Boolean'];
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  technicalDescription?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  count?: Maybe<Scalars['Int']>;
  status: ProductStatus;
  tenantId: Scalars['Int'];
  stockControl?: Maybe<Scalars['Boolean']>;
  inStockNum?: Maybe<Scalars['Int']>;
  price?: Maybe<PriceInput>;
  vatRateId?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<ProductCategoryCreateInput>>;
  images?: Maybe<Array<ImageCreateInput>>;
};

export type ProductsListResponse = {
  __typename?: 'ProductsListResponse';
  items: Array<Product>;
};

export type Query = {
  __typename?: 'Query';
  tenants: TenantsListResponse;
  tenant: Tenant;
  categories: CategoriesListResponse;
  category: Category;
  products: ProductsListResponse;
  product: Product;
  variants: VariantsListResponse;
  variant: Variant;
  attributes: AttributesListResponse;
  attribute: Attribute;
  signedUrl: SignedUrl;
};

export type QueryTenantArgs = {
  id: Scalars['Int'];
};

export type QueryCategoryArgs = {
  id: Scalars['Int'];
};

export type QueryProductArgs = {
  id: Scalars['Int'];
};

export type QueryVariantArgs = {
  id: Scalars['Int'];
};

export type QueryAttributeArgs = {
  id: Scalars['Int'];
};

export type QuerySignedUrlArgs = {
  input: QuerySignedUrlInput;
};

export type QuerySignedUrlInput = {
  filename: Scalars['String'];
  contentType: Scalars['String'];
  contentLength: Scalars['Int'];
};

export type SignedUrl = {
  __typename?: 'SignedUrl';
  url: Scalars['String'];
  expires: Scalars['String'];
  accessUrl: Scalars['String'];
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  id: Scalars['Int'];
  type: SocialMediaType;
  url: Scalars['String'];
  tenantId: Scalars['Int'];
  tenant: Tenant;
};

export enum SocialMediaType {
  SocialMediaTypeUnspecified = 'SOCIAL_MEDIA_TYPE_UNSPECIFIED',
  Facebook = 'FACEBOOK',
  Twitter = 'TWITTER',
  Googleplus = 'GOOGLEPLUS',
  Instagram = 'INSTAGRAM',
  Linkedin = 'LINKEDIN',
  Pinterest = 'PINTEREST',
  Other = 'OTHER',
}

export type StoreUrl = {
  __typename?: 'StoreUrl';
  id: Scalars['Int'];
  type: StoreUrlType;
  url: Scalars['String'];
  tenantId: Scalars['Int'];
  tenant: Tenant;
};

export enum StoreUrlType {
  StoreUrlTypeUnspecified = 'STORE_URL_TYPE_UNSPECIFIED',
  CancellationForm = 'CANCELLATION_FORM',
  TermsAndConditions = 'TERMS_AND_CONDITIONS',
  PrivacyAgreement = 'PRIVACY_AGREEMENT',
}

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['Int'];
  status: TenantStatus;
  priceDisplay: TenantPriceDisplay;
  title: Scalars['String'];
  displayName: Scalars['String'];
  url: Scalars['String'];
  languageCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  emailAddresses?: Maybe<Array<EmailAddress>>;
  addresses?: Maybe<Array<Address>>;
  socialMedias?: Maybe<Array<SocialMedia>>;
  trackingTags?: Maybe<Array<TrackingTag>>;
  storeUrls?: Maybe<Array<StoreUrl>>;
};

export type TenantCreateInput = {
  status: Scalars['String'];
  priceDisplay: Scalars['String'];
  title: Scalars['String'];
  displayName: Scalars['String'];
  url: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
};

export enum TenantPriceDisplay {
  IncVat = 'INC_VAT',
  ExlVat = 'EXL_VAT',
}

export enum TenantStatus {
  TenantStatusUnspecified = 'TENANT_STATUS_UNSPECIFIED',
  Pending = 'PENDING',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type TenantUpdateInput = {
  status: Scalars['String'];
  priceDisplay: Scalars['String'];
  title: Scalars['String'];
  displayName: Scalars['String'];
  url: Scalars['String'];
  languageCode?: Maybe<Scalars['String']>;
};

export type TenantsListResponse = {
  __typename?: 'TenantsListResponse';
  items: Array<Tenant>;
};

export type TrackingTag = {
  __typename?: 'TrackingTag';
  id: Scalars['Int'];
  type: TrackingTagType;
  value: Scalars['String'];
  tenantId: Scalars['Int'];
  tenant: Tenant;
};

export enum TrackingTagType {
  TrackingTagTypeUnspecified = 'TRACKING_TAG_TYPE_UNSPECIFIED',
  GoogleAnalytics = 'GOOGLE_ANALYTICS',
  GoogleTagManager = 'GOOGLE_TAG_MANAGER',
  FacebookPixel = 'FACEBOOK_PIXEL',
  Hubspot = 'HUBSPOT',
  Other = 'OTHER',
}

export type Variant = {
  __typename?: 'Variant';
  id: Scalars['Int'];
  name: Scalars['String'];
  displayName: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  productId?: Maybe<Price>;
  product?: Maybe<Product>;
  attributes?: Maybe<Array<Attribute>>;
};

export type VariantCreateInput = {
  name: Scalars['String'];
  displayName: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
};

export type VariantUpdateInput = {
  name: Scalars['String'];
  displayName: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
};

export type VariantsListResponse = {
  __typename?: 'VariantsListResponse';
  items: Array<Variant>;
};

export type VatRate = {
  __typename?: 'VatRate';
  id: Scalars['Int'];
  value: Scalars['Int'];
  tenantId: Scalars['Int'];
};

export type CategoryFragment = { __typename?: 'Category' } & Pick<
  Category,
  'id' | 'tenantId' | 'title' | 'status' | 'parentId' | 'showInMainMenu'
>;

export type CategoryShortFragment = { __typename?: 'Category' } & Pick<
  Category,
  'id' | 'title'
>;

export type CreateCategoryMutationVariables = Exact<{
  input: CategoryCreateInput;
}>;

export type CreateCategoryMutation = { __typename?: 'Mutation' } & {
  createCategory: { __typename?: 'Category' } & {
    parent?: Maybe<{ __typename?: 'Category' } & CategoryFragment>;
  } & CategoryFragment;
};

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
  input: CategoryUpdateInput;
}>;

export type UpdateCategoryMutation = { __typename?: 'Mutation' } & {
  updateCategory: { __typename?: 'Category' } & {
    parent?: Maybe<{ __typename?: 'Category' } & CategoryFragment>;
  } & CategoryFragment;
};

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteCategoryMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'deleteCategory'
>;

export type GetCategoriesWithParentQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCategoriesWithParentQuery = { __typename?: 'Query' } & {
  categories: { __typename?: 'CategoriesListResponse' } & {
    items: Array<
      { __typename?: 'Category' } & {
        parent?: Maybe<{ __typename?: 'Category' } & CategoryFragment>;
      } & CategoryFragment
    >;
  };
};

export type GetCategoriesShortQueryVariables = Exact<{ [key: string]: never }>;

export type GetCategoriesShortQuery = { __typename?: 'Query' } & {
  categories: { __typename?: 'CategoriesListResponse' } & {
    items: Array<{ __typename?: 'Category' } & CategoryShortFragment>;
  };
};

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetCategoryQuery = { __typename?: 'Query' } & {
  category: { __typename?: 'Category' } & {
    parent?: Maybe<{ __typename?: 'Category' } & CategoryFragment>;
  } & CategoryFragment;
};

export type GetSignedUrlQueryVariables = Exact<{
  input: QuerySignedUrlInput;
}>;

export type GetSignedUrlQuery = { __typename?: 'Query' } & {
  signedUrl: { __typename?: 'SignedUrl' } & Pick<
    SignedUrl,
    'url' | 'expires' | 'accessUrl'
  >;
};

export type ProductShortFragment = { __typename?: 'Product' } & Pick<
  Product,
  | 'id'
  | 'tenantId'
  | 'status'
  | 'title'
  | 'slug'
  | 'isOnMainPage'
  | 'shortDescription'
  | 'description'
  | 'technicalDescription'
  | 'isAvailable'
  | 'count'
  | 'stockControl'
  | 'inStockNum'
>;

export type MoneyFragment = { __typename?: 'Money' } & Pick<
  Money,
  'amount' | 'currency' | 'precision'
>;

export type PriceFragment = { __typename?: 'Price' } & {
  vatAmount: { __typename?: 'Money' } & MoneyFragment;
  grossAmount: { __typename?: 'Money' } & MoneyFragment;
  netAmount: { __typename?: 'Money' } & MoneyFragment;
};

export type VariantFragment = { __typename?: 'Variant' } & Pick<Variant, 'id'>;

export type AttributeFragment = { __typename?: 'Attribute' } & Pick<
  Attribute,
  'id'
>;

export type ProductFragment = { __typename?: 'Product' } & {
  price?: Maybe<{ __typename?: 'Price' } & PriceFragment>;
  variants: Array<{ __typename?: 'Variant' } & VariantFragment>;
  attributes: Array<{ __typename?: 'Attribute' } & AttributeFragment>;
  categories: Array<{ __typename?: 'Category' } & CategoryFragment>;
  images: Array<{ __typename?: 'Attachment' } & Pick<Attachment, 'url'>>;
} & ProductShortFragment;

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = { __typename?: 'Query' } & {
  products: { __typename?: 'ProductsListResponse' } & {
    items: Array<
      { __typename?: 'Product' } & {
        price?: Maybe<{ __typename?: 'Price' } & PriceFragment>;
      } & ProductShortFragment
    >;
  };
};

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteProductMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'deleteProduct'
>;

export type GetProductQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetProductQuery = { __typename?: 'Query' } & {
  product: { __typename?: 'Product' } & {
    price?: Maybe<{ __typename?: 'Price' } & PriceFragment>;
    categories: Array<{ __typename?: 'Category' } & CategoryShortFragment>;
    images: Array<
      { __typename?: 'Attachment' } & Pick<Attachment, 'id' | 'url'>
    >;
  } & ProductShortFragment;
};

export type CreateProductMutationVariables = Exact<{
  input: ProductCreateInput;
}>;

export type CreateProductMutation = { __typename?: 'Mutation' } & {
  createProduct: { __typename?: 'Product' } & {
    price?: Maybe<{ __typename?: 'Price' } & PriceFragment>;
  } & ProductShortFragment;
};

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ProductUpdateInput;
}>;

export type UpdateProductMutation = { __typename?: 'Mutation' } & {
  updateProduct: { __typename?: 'Product' } & {
    price?: Maybe<{ __typename?: 'Price' } & PriceFragment>;
  } & ProductShortFragment;
};

export type TenantFragment = { __typename?: 'Tenant' } & Pick<
  Tenant,
  | 'id'
  | 'status'
  | 'priceDisplay'
  | 'title'
  | 'displayName'
  | 'url'
  | 'languageCode'
>;

export type EmailAddressFragment = { __typename?: 'EmailAddress' } & Pick<
  EmailAddress,
  'id' | 'address'
>;

export type AddressFragment = { __typename?: 'Address' } & Pick<
  Address,
  'id' | 'addressLines'
>;

export type SocialMediaFragment = { __typename?: 'SocialMedia' } & Pick<
  SocialMedia,
  'id' | 'type' | 'url'
>;

export type GetTenantsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTenantsQuery = { __typename?: 'Query' } & {
  tenants: { __typename?: 'TenantsListResponse' } & {
    items: Array<
      { __typename?: 'Tenant' } & {
        emailAddresses?: Maybe<
          Array<{ __typename?: 'EmailAddress' } & EmailAddressFragment>
        >;
        addresses?: Maybe<Array<{ __typename?: 'Address' } & AddressFragment>>;
        socialMedias?: Maybe<
          Array<{ __typename?: 'SocialMedia' } & SocialMediaFragment>
        >;
      } & TenantFragment
    >;
  };
};

export type DeleteTenantMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteTenantMutation = { __typename?: 'Mutation' } & {
  deleteTenant: { __typename?: 'Tenant' } & TenantFragment;
};

export type GetTenantQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetTenantQuery = { __typename?: 'Query' } & {
  tenant: { __typename?: 'Tenant' } & {
    emailAddresses?: Maybe<
      Array<{ __typename?: 'EmailAddress' } & EmailAddressFragment>
    >;
    addresses?: Maybe<Array<{ __typename?: 'Address' } & AddressFragment>>;
    socialMedias?: Maybe<
      Array<{ __typename?: 'SocialMedia' } & SocialMediaFragment>
    >;
  } & TenantFragment;
};

export type CreateTenantMutationVariables = Exact<{
  input: TenantCreateInput;
}>;

export type CreateTenantMutation = { __typename?: 'Mutation' } & {
  createTenant: { __typename?: 'Tenant' } & TenantFragment;
};

export type UpdateTenantMutationVariables = Exact<{
  id: Scalars['Int'];
  input: TenantUpdateInput;
}>;

export type UpdateTenantMutation = { __typename?: 'Mutation' } & {
  updateTenant: { __typename?: 'Tenant' } & {
    emailAddresses?: Maybe<
      Array<{ __typename?: 'EmailAddress' } & EmailAddressFragment>
    >;
    addresses?: Maybe<Array<{ __typename?: 'Address' } & AddressFragment>>;
    socialMedias?: Maybe<
      Array<{ __typename?: 'SocialMedia' } & SocialMediaFragment>
    >;
  } & TenantFragment;
};

export const CategoryShortFragmentDoc = gql`
  fragment CategoryShort on Category {
    id
    title
  }
`;
export const ProductShortFragmentDoc = gql`
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
  }
`;
export const MoneyFragmentDoc = gql`
  fragment Money on Money {
    amount
    currency
    precision
  }
`;
export const PriceFragmentDoc = gql`
  fragment Price on Price {
    vatAmount {
      ...Money
    }
    grossAmount {
      ...Money
    }
    netAmount {
      ...Money
    }
  }
  ${MoneyFragmentDoc}
`;
export const VariantFragmentDoc = gql`
  fragment Variant on Variant {
    id
  }
`;
export const AttributeFragmentDoc = gql`
  fragment Attribute on Attribute {
    id
  }
`;
export const CategoryFragmentDoc = gql`
  fragment Category on Category {
    id
    tenantId
    title
    status
    parentId
    showInMainMenu
  }
`;
export const ProductFragmentDoc = gql`
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
  ${ProductShortFragmentDoc}
  ${PriceFragmentDoc}
  ${VariantFragmentDoc}
  ${AttributeFragmentDoc}
  ${CategoryFragmentDoc}
`;
export const TenantFragmentDoc = gql`
  fragment Tenant on Tenant {
    id
    status
    priceDisplay
    title
    displayName
    url
    languageCode
  }
`;
export const EmailAddressFragmentDoc = gql`
  fragment EmailAddress on EmailAddress {
    id
    address
  }
`;
export const AddressFragmentDoc = gql`
  fragment Address on Address {
    id
    addressLines
  }
`;
export const SocialMediaFragmentDoc = gql`
  fragment SocialMedia on SocialMedia {
    id
    type
    url
  }
`;
export const CreateCategoryDocument = gql`
  mutation CreateCategory($input: CategoryCreateInput!) {
    createCategory(input: $input) {
      ...Category
      parent {
        ...Category
      }
    }
  }
  ${CategoryFragmentDoc}
`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >(CreateCategoryDocument, baseOptions);
}
export type CreateCategoryMutationHookResult = ReturnType<
  typeof useCreateCategoryMutation
>;
export type CreateCategoryMutationResult =
  Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;
export const UpdateCategoryDocument = gql`
  mutation UpdateCategory($id: Int!, $input: CategoryUpdateInput!) {
    updateCategory(id: $id, input: $input) {
      ...Category
      parent {
        ...Category
      }
    }
  }
  ${CategoryFragmentDoc}
`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >(UpdateCategoryDocument, baseOptions);
}
export type UpdateCategoryMutationHookResult = ReturnType<
  typeof useUpdateCategoryMutation
>;
export type UpdateCategoryMutationResult =
  Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;
export const DeleteCategoryDocument = gql`
  mutation DeleteCategory($id: Int!) {
    deleteCategory(id: $id)
  }
`;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >(DeleteCategoryDocument, baseOptions);
}
export type DeleteCategoryMutationHookResult = ReturnType<
  typeof useDeleteCategoryMutation
>;
export type DeleteCategoryMutationResult =
  Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>;
export const GetCategoriesWithParentDocument = gql`
  query GetCategoriesWithParent {
    categories {
      items {
        ...Category
        parent {
          ...Category
        }
      }
    }
  }
  ${CategoryFragmentDoc}
`;

/**
 * __useGetCategoriesWithParentQuery__
 *
 * To run a query within a React component, call `useGetCategoriesWithParentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesWithParentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesWithParentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesWithParentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoriesWithParentQuery,
    GetCategoriesWithParentQueryVariables
  >
) {
  return Apollo.useQuery<
    GetCategoriesWithParentQuery,
    GetCategoriesWithParentQueryVariables
  >(GetCategoriesWithParentDocument, baseOptions);
}
export function useGetCategoriesWithParentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoriesWithParentQuery,
    GetCategoriesWithParentQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetCategoriesWithParentQuery,
    GetCategoriesWithParentQueryVariables
  >(GetCategoriesWithParentDocument, baseOptions);
}
export type GetCategoriesWithParentQueryHookResult = ReturnType<
  typeof useGetCategoriesWithParentQuery
>;
export type GetCategoriesWithParentLazyQueryHookResult = ReturnType<
  typeof useGetCategoriesWithParentLazyQuery
>;
export type GetCategoriesWithParentQueryResult = Apollo.QueryResult<
  GetCategoriesWithParentQuery,
  GetCategoriesWithParentQueryVariables
>;
export const GetCategoriesShortDocument = gql`
  query GetCategoriesShort {
    categories {
      items {
        ...CategoryShort
      }
    }
  }
  ${CategoryShortFragmentDoc}
`;

/**
 * __useGetCategoriesShortQuery__
 *
 * To run a query within a React component, call `useGetCategoriesShortQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesShortQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesShortQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesShortQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoriesShortQuery,
    GetCategoriesShortQueryVariables
  >
) {
  return Apollo.useQuery<
    GetCategoriesShortQuery,
    GetCategoriesShortQueryVariables
  >(GetCategoriesShortDocument, baseOptions);
}
export function useGetCategoriesShortLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoriesShortQuery,
    GetCategoriesShortQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetCategoriesShortQuery,
    GetCategoriesShortQueryVariables
  >(GetCategoriesShortDocument, baseOptions);
}
export type GetCategoriesShortQueryHookResult = ReturnType<
  typeof useGetCategoriesShortQuery
>;
export type GetCategoriesShortLazyQueryHookResult = ReturnType<
  typeof useGetCategoriesShortLazyQuery
>;
export type GetCategoriesShortQueryResult = Apollo.QueryResult<
  GetCategoriesShortQuery,
  GetCategoriesShortQueryVariables
>;
export const GetCategoryDocument = gql`
  query GetCategory($id: Int!) {
    category(id: $id) {
      ...Category
      parent {
        ...Category
      }
    }
  }
  ${CategoryFragmentDoc}
`;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCategoryQuery,
    GetCategoryQueryVariables
  >
) {
  return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(
    GetCategoryDocument,
    baseOptions
  );
}
export function useGetCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoryQuery,
    GetCategoryQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(
    GetCategoryDocument,
    baseOptions
  );
}
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<
  typeof useGetCategoryLazyQuery
>;
export type GetCategoryQueryResult = Apollo.QueryResult<
  GetCategoryQuery,
  GetCategoryQueryVariables
>;
export const GetSignedUrlDocument = gql`
  query GetSignedUrl($input: QuerySignedUrlInput!) {
    signedUrl(input: $input) {
      url
      expires
      accessUrl
    }
  }
`;

/**
 * __useGetSignedUrlQuery__
 *
 * To run a query within a React component, call `useGetSignedUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSignedUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSignedUrlQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSignedUrlQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSignedUrlQuery,
    GetSignedUrlQueryVariables
  >
) {
  return Apollo.useQuery<GetSignedUrlQuery, GetSignedUrlQueryVariables>(
    GetSignedUrlDocument,
    baseOptions
  );
}
export function useGetSignedUrlLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSignedUrlQuery,
    GetSignedUrlQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetSignedUrlQuery, GetSignedUrlQueryVariables>(
    GetSignedUrlDocument,
    baseOptions
  );
}
export type GetSignedUrlQueryHookResult = ReturnType<
  typeof useGetSignedUrlQuery
>;
export type GetSignedUrlLazyQueryHookResult = ReturnType<
  typeof useGetSignedUrlLazyQuery
>;
export type GetSignedUrlQueryResult = Apollo.QueryResult<
  GetSignedUrlQuery,
  GetSignedUrlQueryVariables
>;
export const GetProductsDocument = gql`
  query GetProducts {
    products {
      items {
        ...ProductShort
        price {
          ...Price
        }
      }
    }
  }
  ${ProductShortFragmentDoc}
  ${PriceFragmentDoc}
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    baseOptions
  );
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    baseOptions
  );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<
  typeof useGetProductsLazyQuery
>;
export type GetProductsQueryResult = Apollo.QueryResult<
  GetProductsQuery,
  GetProductsQueryVariables
>;
export const DeleteProductDocument = gql`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;
export type DeleteProductMutationFn = Apollo.MutationFunction<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >(DeleteProductDocument, baseOptions);
}
export type DeleteProductMutationHookResult = ReturnType<
  typeof useDeleteProductMutation
>;
export type DeleteProductMutationResult =
  Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;
export const GetProductDocument = gql`
  query GetProduct($id: Int!) {
    product(id: $id) {
      ...ProductShort
      price {
        ...Price
      }
      categories {
        ...CategoryShort
      }
      images {
        id
        url
      }
    }
  }
  ${ProductShortFragmentDoc}
  ${PriceFragmentDoc}
  ${CategoryShortFragmentDoc}
`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >
) {
  return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    baseOptions
  );
}
export function useGetProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    baseOptions
  );
}
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<
  typeof useGetProductLazyQuery
>;
export type GetProductQueryResult = Apollo.QueryResult<
  GetProductQuery,
  GetProductQueryVariables
>;
export const CreateProductDocument = gql`
  mutation CreateProduct($input: ProductCreateInput!) {
    createProduct(input: $input) {
      ...ProductShort
      price {
        ...Price
      }
    }
  }
  ${ProductShortFragmentDoc}
  ${PriceFragmentDoc}
`;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, baseOptions);
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>;
export type CreateProductMutationResult =
  Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const UpdateProductDocument = gql`
  mutation UpdateProduct($id: Int!, $input: ProductUpdateInput!) {
    updateProduct(id: $id, input: $input) {
      ...ProductShort
      price {
        ...Price
      }
    }
  }
  ${ProductShortFragmentDoc}
  ${PriceFragmentDoc}
`;
export type UpdateProductMutationFn = Apollo.MutationFunction<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(UpdateProductDocument, baseOptions);
}
export type UpdateProductMutationHookResult = ReturnType<
  typeof useUpdateProductMutation
>;
export type UpdateProductMutationResult =
  Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
export const GetTenantsDocument = gql`
  query GetTenants {
    tenants {
      items {
        ...Tenant
        emailAddresses {
          ...EmailAddress
        }
        addresses {
          ...Address
        }
        socialMedias {
          ...SocialMedia
        }
      }
    }
  }
  ${TenantFragmentDoc}
  ${EmailAddressFragmentDoc}
  ${AddressFragmentDoc}
  ${SocialMediaFragmentDoc}
`;

/**
 * __useGetTenantsQuery__
 *
 * To run a query within a React component, call `useGetTenantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTenantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTenantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTenantsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTenantsQuery,
    GetTenantsQueryVariables
  >
) {
  return Apollo.useQuery<GetTenantsQuery, GetTenantsQueryVariables>(
    GetTenantsDocument,
    baseOptions
  );
}
export function useGetTenantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTenantsQuery,
    GetTenantsQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetTenantsQuery, GetTenantsQueryVariables>(
    GetTenantsDocument,
    baseOptions
  );
}
export type GetTenantsQueryHookResult = ReturnType<typeof useGetTenantsQuery>;
export type GetTenantsLazyQueryHookResult = ReturnType<
  typeof useGetTenantsLazyQuery
>;
export type GetTenantsQueryResult = Apollo.QueryResult<
  GetTenantsQuery,
  GetTenantsQueryVariables
>;
export const DeleteTenantDocument = gql`
  mutation DeleteTenant($id: Int!) {
    deleteTenant(id: $id) {
      ...Tenant
    }
  }
  ${TenantFragmentDoc}
`;
export type DeleteTenantMutationFn = Apollo.MutationFunction<
  DeleteTenantMutation,
  DeleteTenantMutationVariables
>;

/**
 * __useDeleteTenantMutation__
 *
 * To run a mutation, you first call `useDeleteTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTenantMutation, { data, loading, error }] = useDeleteTenantMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTenantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTenantMutation,
    DeleteTenantMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteTenantMutation,
    DeleteTenantMutationVariables
  >(DeleteTenantDocument, baseOptions);
}
export type DeleteTenantMutationHookResult = ReturnType<
  typeof useDeleteTenantMutation
>;
export type DeleteTenantMutationResult =
  Apollo.MutationResult<DeleteTenantMutation>;
export type DeleteTenantMutationOptions = Apollo.BaseMutationOptions<
  DeleteTenantMutation,
  DeleteTenantMutationVariables
>;
export const GetTenantDocument = gql`
  query GetTenant($id: Int!) {
    tenant(id: $id) {
      ...Tenant
      emailAddresses {
        ...EmailAddress
      }
      addresses {
        ...Address
      }
      socialMedias {
        ...SocialMedia
      }
    }
  }
  ${TenantFragmentDoc}
  ${EmailAddressFragmentDoc}
  ${AddressFragmentDoc}
  ${SocialMediaFragmentDoc}
`;

/**
 * __useGetTenantQuery__
 *
 * To run a query within a React component, call `useGetTenantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTenantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTenantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTenantQuery(
  baseOptions: Apollo.QueryHookOptions<GetTenantQuery, GetTenantQueryVariables>
) {
  return Apollo.useQuery<GetTenantQuery, GetTenantQueryVariables>(
    GetTenantDocument,
    baseOptions
  );
}
export function useGetTenantLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTenantQuery,
    GetTenantQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetTenantQuery, GetTenantQueryVariables>(
    GetTenantDocument,
    baseOptions
  );
}
export type GetTenantQueryHookResult = ReturnType<typeof useGetTenantQuery>;
export type GetTenantLazyQueryHookResult = ReturnType<
  typeof useGetTenantLazyQuery
>;
export type GetTenantQueryResult = Apollo.QueryResult<
  GetTenantQuery,
  GetTenantQueryVariables
>;
export const CreateTenantDocument = gql`
  mutation CreateTenant($input: TenantCreateInput!) {
    createTenant(input: $input) {
      ...Tenant
    }
  }
  ${TenantFragmentDoc}
`;
export type CreateTenantMutationFn = Apollo.MutationFunction<
  CreateTenantMutation,
  CreateTenantMutationVariables
>;

/**
 * __useCreateTenantMutation__
 *
 * To run a mutation, you first call `useCreateTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTenantMutation, { data, loading, error }] = useCreateTenantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTenantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTenantMutation,
    CreateTenantMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateTenantMutation,
    CreateTenantMutationVariables
  >(CreateTenantDocument, baseOptions);
}
export type CreateTenantMutationHookResult = ReturnType<
  typeof useCreateTenantMutation
>;
export type CreateTenantMutationResult =
  Apollo.MutationResult<CreateTenantMutation>;
export type CreateTenantMutationOptions = Apollo.BaseMutationOptions<
  CreateTenantMutation,
  CreateTenantMutationVariables
>;
export const UpdateTenantDocument = gql`
  mutation UpdateTenant($id: Int!, $input: TenantUpdateInput!) {
    updateTenant(input: $input, id: $id) {
      ...Tenant
      emailAddresses {
        ...EmailAddress
      }
      addresses {
        ...Address
      }
      socialMedias {
        ...SocialMedia
      }
    }
  }
  ${TenantFragmentDoc}
  ${EmailAddressFragmentDoc}
  ${AddressFragmentDoc}
  ${SocialMediaFragmentDoc}
`;
export type UpdateTenantMutationFn = Apollo.MutationFunction<
  UpdateTenantMutation,
  UpdateTenantMutationVariables
>;

/**
 * __useUpdateTenantMutation__
 *
 * To run a mutation, you first call `useUpdateTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTenantMutation, { data, loading, error }] = useUpdateTenantMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTenantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTenantMutation,
    UpdateTenantMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateTenantMutation,
    UpdateTenantMutationVariables
  >(UpdateTenantDocument, baseOptions);
}
export type UpdateTenantMutationHookResult = ReturnType<
  typeof useUpdateTenantMutation
>;
export type UpdateTenantMutationResult =
  Apollo.MutationResult<UpdateTenantMutation>;
export type UpdateTenantMutationOptions = Apollo.BaseMutationOptions<
  UpdateTenantMutation,
  UpdateTenantMutationVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
