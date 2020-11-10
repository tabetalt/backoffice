import React from 'react';
import { Box, Button } from 'theme-ui';
import {
  CheckboxList,
  Field,
  LabeledSelect,
  PrefilledInput,
  Switch,
} from '@tabetalt/kit';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { TextPosition } from '@tabetalt/kit/build/components/Input/components/prefilled-input-props';
import { ProductStatus } from '../../../../api/types/globalTypes';
import { Product } from '../../../../api/types/Product';
import { Error } from '../../../../components/common';

interface ProductBasicOptionsProps {
  product?: Product;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
  error?: boolean;
}

interface Values {
  title: string;
  slug: string;
  price: string;
  status: ProductStatus;
  isOnMainPage: boolean;
  categories?: string[];
  images?: string[];
}

const initialValues: Values = {
  title: '',
  slug: '',
  price: '',
  status: ProductStatus.ACTIVE,
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
    .oneOf([ProductStatus.ACTIVE, ProductStatus.INACTIVE])
    .required('Required!'),
  isOnMainPage: Yup.boolean().notRequired(),
  // TODO: categories:
  // TODO: images:
});

const ProductBasicOptions: React.FC<ProductBasicOptionsProps> = ({
  onSubmit,
  error,
  product,
}) => {
  const form = useFormik<Values>({
    initialValues,
    validationSchema: ProductSchema,
    onSubmit,
  });
  console.log(form);
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
          {form.touched && form.errors.title && (
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
            text={form.values.slug} // TODO: rename as value
            // onChange={form.handleChange}
            // onBlur={form.handleBlur}
          />
          {form.touched && form.errors.slug && (
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
            // type="number"
            text={form.values.price} // TODO: rename as value
            // onChange={form.handleChange}
            // onBlur={form.handleBlur}
          />
          {form.touched && form.errors.price && (
            <Error message={form.errors.slug} />
          )}
        </div>
        {/*
        <div>
          <Field
            as={CheckboxList}
            label="Kategori"
            options={[]}
            name="categories"
            value={form.values.categories}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched && form.errors.categories && (
            <Error message={form.errors.categories} />
          )}
        </div>
        <div>
          <Field
            label="Bilder"
            name="images"
            value={form.values.images}
            onChange={form.handleChange}
          />
          {form.touched && form.errors.images && (
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
          {form.touched && form.errors.isOnMainPage && (
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
            <option value={ProductStatus.ACTIVE}>Active</option>
            <option value={ProductStatus.INACTIVE}>Inaktiv</option>
          </LabeledSelect>
          {form.touched && form.errors.status && (
            <Error message={form.errors.status} />
          )}
        </div>
        <Button type="submit">Lagre</Button>
      </Box>
    </form>
  );
};

export default ProductBasicOptions;
