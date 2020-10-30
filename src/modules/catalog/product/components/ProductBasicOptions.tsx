import {
  CheckboxList,
  Field,
  LabeledSelect,
  PrefilledInput,
  Switch,
} from '@tabetalt/kit';
import { CheckboxOption } from '@tabetalt/kit/build/components/CheckboxList/checkbox-list-props';
import { TextPosition } from '@tabetalt/kit/build/components/Input/components/prefilled-input-props';
import React from 'react';
import { Box } from 'theme-ui';
import { ProductAttr } from '../Product';

export interface CategoriesAttr {
  value: ProductAttr['categories'];
}

const ProductBasicOptions: React.FC<{ product: ProductAttr }> = ({
  product,
}) => (
  <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
    <Field
      label="Produktnavn"
      name="name"
      placeholder="Strikket genser"
      value={product.name}
    />
    <PrefilledInput
      label="URL"
      name="slug"
      prefilledText="Butikknavn.tabetalt.no/produkt/"
      prefilledTextPosition={TextPosition.LEFT}
      placeholder="strikket-genser"
      text={product.slug}
    />
    <PrefilledInput
      label="Pris inkl. MVA"
      name="price"
      prefilledText="NOK"
      prefilledTextPosition={TextPosition.RIGHT}
      placeholder="258,00"
      text={product.price}
    />
    <Field
      as={CheckboxList}
      label="Kategori"
      name="categories"
      options={product.categories.map(
        (value) => ({ value: value, checked: false } as CheckboxOption)
      )}
    />
    <Field label="Bilder" name="images" value={product.images} />
    <Field
      as={Switch}
      label="Vis på forsiden"
      name="showOnFrontpage"
      checked={product.showOnFrontpage}
    />
    <LabeledSelect
      label="Status"
      name="status"
      defaultValue="Active"
      value={product.status}
    >
      <option>Active</option>
      <option>Inaktiv</option>
    </LabeledSelect>
  </Box>
);

export default ProductBasicOptions;
