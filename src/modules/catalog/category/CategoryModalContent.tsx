import { LabeledSelect, Switch, Field } from '@tabetalt/kit';
import React from 'react';
import { Box, Button } from 'theme-ui';
import { ProductCategoryStatus } from '../../../api/types/globalTypes';
import { ProductCategory } from '../../../api/types/ProductCategory';

// TODO: add parent list of components
// TODO: add navigation field
export const CategoryModalContent: React.FC<{
  category: ProductCategory | null;
}> = ({ category }) => {
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
        <option>Oppskrifter</option>
        <option>ingen</option>
      </LabeledSelect>
      <Field
        as={Switch}
        label="Hovedmeny"
        name="navigation"
        // checked={category?.menuNavigation}
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
        <Button variant="outline" sx={{ ml: 3, width: '130px' }}>
          Avbryt
        </Button>
      </Box>
    </Box>
  );
};
