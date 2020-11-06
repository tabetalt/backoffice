import { useQuery } from '@apollo/client';
import { LabeledSelect, Switch, Field } from '@tabetalt/kit';
import React from 'react';
import { Box, Button } from 'theme-ui';
import { QUERY_GET_AVAILABLE_PARENT_CATEGORIES } from '../../../api';
import { ProductCategoryStatus } from '../../../api/types/globalTypes';
import { ParentCategoryFields } from '../../../api/types/ParentCategoryFields';
import { ProductCategoryFields } from '../../../api/types/ProductCategoryFields';

// TODO: add parent list of components
// TODO: add navigation field
export const CategoryModalContent: React.FC<{
  category: ProductCategoryFields | null;
  onRequestClose: () => void;
}> = ({ category, onRequestClose }) => {
  const { data } = useQuery(QUERY_GET_AVAILABLE_PARENT_CATEGORIES);

  let availableParentList = undefined;
  if (data) {
    availableParentList = data.productCategories.items.map(
      (item: ParentCategoryFields) => (
        <option key={item.id}>{item.title}</option>
      )
    );
  }

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
        checked={category?.menuNavigation}
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
        <Button sx={{ mt: '188px', width: '130px' }}>Lagre</Button>
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
