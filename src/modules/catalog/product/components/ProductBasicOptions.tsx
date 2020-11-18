import React, { useEffect, useState } from 'react';
import { Box, Button } from 'theme-ui';
import {
  // CheckboxList,
  Field,
  InputTags,
  LabeledSelect,
  PrefilledInput,
  Switch,
} from '@tabetalt/kit';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { TextPosition } from '@tabetalt/kit/build/components/Input/components/prefilled-input-props';
import { Error } from '../../../../components/common';
import { formatPrice } from '../../../../helpers';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT_CATEGORIES_WITHOUT_PARENT } from '../../../../api';
import { TagProps } from '@tabetalt/kit/build/components/InputTags/types';
import {
  GetProduct_product,
  GetProduct_product_categories,
} from '../../../../api/types/GetProduct';
import { ProductStatus } from '../../../../api/types/globalTypes';
import { GetCategoriesShort } from '../../../../api/types/GetCategoriesShort';

interface ProductBasicOptionsProps {
  product?: GetProduct_product | null;
  onSubmit: (
    values: ProductBasicOptionsValues,
    formikHelpers: FormikHelpers<ProductBasicOptionsValues>
  ) => void;
  error?: boolean;
}

interface ProductBasicOptionsValues {
  title: string;
  slug: string;
  price: string;
  status: ProductStatus;
  isOnMainPage: boolean;
  categories?: TagProps[];
  images?: string[];
}

const defaultValues: ProductBasicOptionsValues = {
  title: '',
  slug: '',
  price: '',
  status: ProductStatus.Active,
  isOnMainPage: false,
  categories: [],
  images: [],
};

const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(255, 'Too Long!')
    .required('Required!'),
  slug: Yup.string()
    .min(2, 'Too Short!')
    .max(255, 'Too Long!')
    .required('Required!'),
  price: Yup.number().positive().required('Required!'),
  status: Yup.string()
    .oneOf([ProductStatus.Active, ProductStatus.Inactive])
    .required('Required!'),
  isOnMainPage: Yup.boolean().notRequired(),
  // TODO: images:
});

const ProductBasicOptions: React.FC<ProductBasicOptionsProps> = ({
  onSubmit,
  error,
  product,
}) => {
  const [inputTagsSuggetions, setInputTagsSuggetions] = useState<TagProps[]>(
    []
  );
  const form = useFormik<ProductBasicOptionsValues>({
    initialValues: {
      ...defaultValues,
      ...product,
      price: formatPrice(product?.price?.formatted, null),
      categories: product?.categories.map(
        (category: GetProduct_product_categories | null) => ({
          id: category?.id,
          title: category?.title,
        })
      ),
    } as ProductBasicOptionsValues,
    validationSchema: ProductSchema,
    onSubmit,
  });

  const { data: productCategoriesSuggestions } = useQuery<GetCategoriesShort>(
    QUERY_PRODUCT_CATEGORIES_WITHOUT_PARENT
  );

  useEffect(() => {
    if (
      productCategoriesSuggestions &&
      productCategoriesSuggestions.categories &&
      productCategoriesSuggestions.categories.items
    ) {
      productCategoriesSuggestions.categories.items.map((item) => {
        if (item && item.title) {
          inputTagsSuggetions.push({
            id: item.id,
            name: item.title,
          });
        }
      });
    }
  }, [productCategoriesSuggestions, inputTagsSuggetions]);

  return (
    <form onSubmit={form.handleSubmit}>
      <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
        {error && <Error message="Filed to save product." />}
        <div>
          <Field
            label="Produktnavn"
            placeholder="Strikket genser"
            name="title"
            value={form.values.title}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.title && form.errors.title && (
            <Error message={form.errors.title} />
          )}
        </div>
        <div>
          <PrefilledInput
            label="URL"
            prefilledText="Butikknavn.tabetalt.no/produkt/"
            prefilledTextPosition={TextPosition.LEFT}
            placeholder="strikket-genser"
            name="slug"
            value={form.values.slug}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.slug && form.errors.slug && (
            <Error message={form.errors.slug} />
          )}
        </div>
        <div>
          <PrefilledInput
            label="Pris inkl. MVA"
            prefilledText="NOK"
            prefilledTextPosition={TextPosition.RIGHT}
            placeholder="258,00"
            name="price"
            type="number"
            value={form.values.price}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.price && form.errors.price && (
            <Error message={form.errors.price} />
          )}
        </div>
        <div>
          <Field
            as={InputTags}
            label="Kategori"
            suggestions={inputTagsSuggetions}
            name="categories"
            tags={form.values.categories}
            onChange={(tagProps: TagProps[]) =>
              form.setFieldValue('categories', tagProps)
            }
          />
          {form.touched.categories && form.errors.categories && (
            <Error message={form.errors.categories} />
          )}
        </div>
        {/*
        <div>
          <Field
            label="Bilder"
            name="images"
            value={form.values.images}
            onChange={form.handleChange}
          />
          {form.touched.images && form.errors.images && (
            <Error message={form.errors.images} />
          )}
        </div>
        */}
        <div>
          <Field
            as={Switch}
            label="Vis på forsiden"
            name="isOnMainPage"
            checked={form.values.isOnMainPage}
            onChange={form.handleChange}
          />
          {form.touched.isOnMainPage && form.errors.isOnMainPage && (
            <Error message={form.errors.isOnMainPage} />
          )}
        </div>
        <div>
          <LabeledSelect
            label="Status"
            name="status"
            value={form.values.status}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          >
            <option value={ProductStatus.Active}>Active</option>
            <option value={ProductStatus.Inactive}>Inaktiv</option>
          </LabeledSelect>
          {form.touched.status && form.errors.status && (
            <Error message={form.errors.status} />
          )}
        </div>
        <Button type="submit">Lagre</Button>
      </Box>
    </form>
  );
};

export default ProductBasicOptions;
