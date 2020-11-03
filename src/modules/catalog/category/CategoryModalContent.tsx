import { LabeledSelect, Switch, Field } from '@tabetalt/kit';
import React from 'react';
import { Box, Button } from 'theme-ui';

export interface CategoriesAttr {
  id?: string;
  name?: string;
  parent?: string;
  navigation?: boolean;
  status?: string;
}

export const CategoryModalContent: React.FC<{ category: CategoriesAttr }> = ({
  category,
}) => {
  return (
    <Box sx={{ maxWidth: 820, '> div': { mb: 3 }, mt: '32px' }}>
      <Field
        label="Navn på kategori"
        name="name"
        placeholder="Rabattnavn"
        value={category.name}
      />
      <LabeledSelect
        label="Underkategori av"
        name="subcategory"
        defaultValue="Oppskrifter"
        value={category.parent}
      >
        <option>Oppskrifter</option>
        <option>ingen</option>
      </LabeledSelect>
      <Field
        as={Switch}
        label="Hovedmeny"
        name="navigation"
        checked={category.navigation}
      />
      <Field
        label="Underkategori av"
        name="status"
        placeholder="Rabattnavn"
        value={category.status}
      />
      <Box>
        <Button sx={{ mt: '188px', width: '130px' }}>Lagre</Button>
        <Button variant="outline" sx={{ ml: 3, width: '130px' }}>
          Avbryt
        </Button>
      </Box>
    </Box>
  );
};
