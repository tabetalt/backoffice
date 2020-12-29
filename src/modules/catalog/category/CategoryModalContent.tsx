import React from 'react';
import * as Yup from 'yup';
import { LabeledSelect, Switch, Field } from '@tabetalt/kit';
import { useFormik } from 'formik';
import { Box, Button } from 'theme-ui';
import { Error } from '../../../components/common';
import {
  GetCategoriesWithParentDocument,
  useCreateCategoryMutation,
  useGetCategoriesWithParentQuery,
  useUpdateCategoryMutation,
  CategoryUpdateInput,
  CategoryCreateInput,
  CategoryStatus,
  Category,
} from '../../../generated/graphql';

const CategorySchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(255, 'Too Long!')
    .required('Required!'),
});

export const CategoryModalContent: React.FC<{
  currentCategory: Category | null;
  onRequestClose: () => void;
}> = ({ currentCategory, onRequestClose }) => {
  const { data } = useGetCategoriesWithParentQuery();
  const [updateCategory, { error: updateError }] = useUpdateCategoryMutation();
  const [createCategory, { error: createError }] = useCreateCategoryMutation();

  const onSubmit = async (
    values: CategoryUpdateInput | CategoryCreateInput
  ) => {
    const input = {
      status: values.status,
      title: values.title,
      showInMainMenu: values.showInMainMenu,
      tenantId: values.tenantId,
      parentId: values.parentId ? Number(values.parentId) : null,
    };

    if (currentCategory) {
      await updateCategory({
        variables: { id: currentCategory.id, input },
        refetchQueries: [{ query: GetCategoriesWithParentDocument }],
      });
    } else {
      await createCategory({
        variables: { input },
        refetchQueries: [{ query: GetCategoriesWithParentDocument }],
      });
    }
    onRequestClose();
  };

  const initialValues = currentCategory
    ? currentCategory
    : {
        title: '',
        status: CategoryStatus.Active,
        parentId: null,
        showInMainMenu: false,
        tenantId: 1,
      };

  const formik = useFormik({
    initialValues: initialValues as CategoryCreateInput,
    validationSchema: CategorySchema,
    onSubmit,
  });

  let categories: (false | JSX.Element)[] = [];

  if (data && data.categories && data.categories.items) {
    categories = data.categories.items.map(
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
        {createError && updateError && (
          <Error message="Failed to save category." />
        )}
        <div>
          <Field
            name="title"
            label="Navn på kategori"
            placeholder="Rabattnavn"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <Error message={formik.errors.title} />
          )}
        </div>
        <LabeledSelect
          name="parentId"
          defaultValue={0}
          label="Underkategori av"
          onChange={formik.handleChange}
          value={formik.values.parentId ? formik.values.parentId : 0}
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
          defaultValue={CategoryStatus.Active}
          onChange={formik.handleChange}
          value={formik.values.status}
        >
          {Object.keys(CategoryStatus).map((key) => (
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
