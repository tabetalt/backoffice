import React from 'react';
import _ from 'lodash';
import { useMutation, useQuery } from '@apollo/client';
import { LabeledSelect, Switch, Field } from '@tabetalt/kit';
import { useFormik } from 'formik';
import { Box, Button } from 'theme-ui';
import {
  MUTATION_CREATE_PRODUCT_CATEGORY,
  MUTATION_UPDATE_PRODUCT_CATEGORY,
  QUERY_PRODUCT_CATEGORIES_WITH_PARENT,
} from '../../../api';
import { GetCategories } from '../../../api/types/GetCategories';
import {
  CategoryCreateInput,
  CategoryUpdateInput,
  CategoryStatus,
} from '../../../api/types/globalTypes';
import { Category } from '../../../api/types/Category';

export const CategoryModalContent: React.FC<{
  currentCategory: Category | null;
  onRequestClose: () => void;
}> = ({ currentCategory, onRequestClose }) => {
  const { data } = useQuery<GetCategories>(
    QUERY_PRODUCT_CATEGORIES_WITH_PARENT
  );
  const [updateCategory] = useMutation(MUTATION_UPDATE_PRODUCT_CATEGORY);
  const [createCategory] = useMutation(MUTATION_CREATE_PRODUCT_CATEGORY);

  const onSubmit = async (
    values: CategoryUpdateInput | CategoryCreateInput
  ) => {
    const input = _.pick(
      {
        ...values,
        parentId: values.parentId ? Number(values.parentId) : null,
      },
      ['status', 'title', 'showInMainMenu', 'parentId', 'tenantId']
    );

    if (currentCategory) {
      await updateCategory({
        variables: { id: currentCategory.id, input },
        refetchQueries: [{ query: QUERY_PRODUCT_CATEGORIES_WITH_PARENT }],
      });
    } else {
      await createCategory({
        variables: { input },
        refetchQueries: [{ query: QUERY_PRODUCT_CATEGORIES_WITH_PARENT }],
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
        <Field
          name="title"
          label="Navn på kategori"
          placeholder="Rabattnavn"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
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
