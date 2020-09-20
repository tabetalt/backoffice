import { Field } from '@tabetalt/kit';
import React from 'react';
import { Box, Checkbox, Flex, Label, Select } from 'theme-ui';
import { ProductAttr } from '../Product';

export interface CategoriesAttr {
  value: ProductAttr['categories'];
}
// TODO: Consider moving this to @tabetalt/kit
const Categories: React.FC<CategoriesAttr> = ({ value }) => (
  <Flex sx={{ width: '100%', height: '51' }}>
    {value.map((c) => (
      <Label>
        <Checkbox />
        {c}
      </Label>
    ))}
  </Flex>
);

const ProductBasicOptions: React.FC<{ product: ProductAttr }> = ({
  product,
}) => (
  <Box sx={{ maxWidth: 820, '> div': { mb: 3 } }}>
    <Field label="Produktnavn" name="name" value={product.name} />
    <Field label="URL" name="slug" value={product.slug} />
    <Field label="Pris inkl. MVA" name="price" value={product.price} />
    <Field
      as={Categories}
      label="Kategori"
      name="categories"
      value={product.categories}
    />
    <Field label="Bilder" name="images" value={product.images} />
    <Field
      as={Checkbox}
      label="Vis på forsiden"
      name="showOnFrontpage"
      value={product.showOnFrontpage}
    />
    <Field as={Select} label="Status" name="status" value={product.status}>
      <option>Inaktiv</option>
    </Field>
  </Box>
);

export default ProductBasicOptions;
