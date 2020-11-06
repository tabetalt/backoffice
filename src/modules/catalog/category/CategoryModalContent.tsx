import { useMutation, useQuery } from '@apollo/client';
import { LabeledSelect, Switch, Field } from '@tabetalt/kit';
import React, { useState } from 'react';
import { Box, Button } from 'theme-ui';
import {
  MUTATION_CREATE_PRODUCT_CATEGORY,
  MUTATION_UPDATE_PRODUCT_CATEGORY,
  QUERY_PRODUCT_CATEGORIES_WITH_PARENT,
} from '../../../api';
import { ProductCategoryStatus } from '../../../api/types/globalTypes';
import { ProductCategoryFields } from '../../../api/types/ProductCategoryFields';

export const CategoryModalContent: React.FC<{
  currentCategory: ProductCategoryFields | null;
  onRequestClose: () => void;
}> = ({ currentCategory, onRequestClose }) => {
  const { data } = useQuery(QUERY_PRODUCT_CATEGORIES_WITH_PARENT);
  const [category, setCategory] = useState<ProductCategoryFields | null>(
    currentCategory
  );
  const [updateCategory] = useMutation(MUTATION_UPDATE_PRODUCT_CATEGORY);
  const [createCategory] = useMutation(MUTATION_CREATE_PRODUCT_CATEGORY);

  let availableParentList = undefined;
  if (data) {
    availableParentList = data.productCategories.items.map(
      (item: ProductCategoryFields) =>
        ((category && category.id !== item.id) || !category) && (
          <option key={item.id}>{item.title}</option>
        )
    );
  }

  const onRequestSave = () => {
    if (currentCategory && category) {
      updateCategory({
        variables: category,
        refetchQueries: [{ query: QUERY_PRODUCT_CATEGORIES_WITH_PARENT }],
      });
    } else if (category) {
      createCategory({
        variables: category,
        refetchQueries: [{ query: QUERY_PRODUCT_CATEGORIES_WITH_PARENT }],
      });
    }

    onRequestClose();
  };

  return (
    <Box sx={{ maxWidth: 820, '> div': { mb: 3 }, mt: '32px' }}>
      <Field
        label="Navn på kategori"
        name="name"
        placeholder="Rabattnavn"
        value={category?.title}
      />
      <LabeledSelect
        label="Underkategori av"
        name="subcategory"
        defaultValue="Oppskrifter"
        value={category?.parentCategoryId ? category.parentCategoryId : ''}
      >
        {availableParentList}
      </LabeledSelect>
      <Field
        as={Switch}
        label="Hovedmeny"
        name="navigation"
        checked={category?.showInMainMenu}
      />
      <LabeledSelect
        label="Status"
        name="status"
        defaultValue={ProductCategoryStatus.ACTIVE}
        value={category?.status}
      >
        {Object.keys(ProductCategoryStatus).map((key) => (
          <option key={key}>{key}</option>
        ))}
      </LabeledSelect>
      <Box>
        <Button sx={{ mt: '188px', width: '130px' }} onClick={onRequestSave}>
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
  );
};
