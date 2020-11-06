import { useMutation, useQuery } from '@apollo/client';
import { LabeledSelect, Switch, Field } from '@tabetalt/kit';
import { useFormik } from 'formik';
import React from 'react';
import { Box, Button } from 'theme-ui';
import {
  MUTATION_CREATE_PRODUCT_CATEGORY,
  MUTATION_UPDATE_PRODUCT_CATEGORY,
  QUERY_PRODUCT_CATEGORIES_WITH_PARENT,
} from '../../../api';
import { GetProductCategories } from '../../../api/types/GetProductCategories';
import {
  ProductCategoryInput,
  ProductCategoryStatus,
} from '../../../api/types/globalTypes';
import { ProductCategory } from '../../../api/types/ProductCategory';

export const CategoryModalContent: React.FC<{
  currentCategory: ProductCategory | null;
  onRequestClose: () => void;
}> = ({ currentCategory, onRequestClose }) => {
  const { data } = useQuery<GetProductCategories>(
    QUERY_PRODUCT_CATEGORIES_WITH_PARENT
  );
  const [updateCategory] = useMutation(MUTATION_UPDATE_PRODUCT_CATEGORY);
  const [createCategory] = useMutation(MUTATION_CREATE_PRODUCT_CATEGORY);

  const onSubmit = (values: ProductCategory) => {
    const parentId =
      values.parentCategoryId && Number(values.parentCategoryId) !== 0
        ? Number(values.parentCategoryId)
        : null;
    if (currentCategory) {
      updateCategory({
        variables: {
          id: values.id,
          input: {
            title: values.title,
            status: values.status,
            parentCategoryId: parentId,
            showInMainMenu: values.showInMainMenu,
            tenantId: values.tenantId,
          } as ProductCategoryInput,
        },
        refetchQueries: [{ query: QUERY_PRODUCT_CATEGORIES_WITH_PARENT }],
      });
    } else {
      createCategory({
        variables: {
          input: { ...values, parentCategoryId: parentId },
        },
        refetchQueries: [{ query: QUERY_PRODUCT_CATEGORIES_WITH_PARENT }],
      });
    }
    onRequestClose();
  };

  const initialValues = currentCategory
    ? currentCategory
    : ({
        title: null,
        status: ProductCategoryStatus.ACTIVE,
        parentCategoryId: null,
        showInMainMenu: false,
        tenantId: 1,
      } as ProductCategory);

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  let categories: (false | JSX.Element)[] = [];

  if (data && data.productCategories && data.productCategories.items) {
    categories = data.productCategories.items.map(
      (item) =>
        ((currentCategory && currentCategory.id !== item?.id) ||
          !currentCategory) && (
          <option key={item?.id} value={item?.id}>
            {item?.title}
          </option>
        )
    );
  }
  categories.push(
    <option key="0" value={0}>
      none
    </option>
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ maxWidth: 820, '> div': { mb: 3 }, mt: '32px' }}>
        <Field
          name="title"
          label="Navn på kategori"
          placeholder="Rabattnavn"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <LabeledSelect
          name="parentCategoryId"
          defaultValue={0}
          label="Underkategori av"
          onChange={formik.handleChange}
          value={
            formik.values.parentCategoryId ? formik.values.parentCategoryId : 0
          }
        >
          {categories}
        </LabeledSelect>
        <Field
          name="showInMainMenu"
          as={Switch}
          label="Hovedmeny"
          onChange={formik.handleChange}
          checked={formik.values.showInMainMenu}
        />
        <LabeledSelect
          name="status"
          label="Status"
          defaultValue={ProductCategoryStatus.ACTIVE}
          onChange={formik.handleChange}
          value={formik.values.status}
        >
          {Object.keys(ProductCategoryStatus).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </LabeledSelect>
        <Box>
          <Button sx={{ mt: '188px', width: '130px' }} type="submit">
            Lagre
          </Button>
          <Button
            variant="outline"
            sx={{ ml: 3, width: '130px' }}
            onClick={onRequestClose}
          >
            Avbryt
          </Button>
        </Box>
      </Box>
    </form>
  );
};
