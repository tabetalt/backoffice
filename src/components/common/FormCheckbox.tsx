import { useField } from 'formik';
import React from 'react';
import Error from './Error';
import { Box, Flex, Label } from '@theme-ui/components';
import { Switch } from '@tabetalt/kit';

export const FormCheckbox: React.FC<any> = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Flex sx={{ alignItems: 'center' }}>
        <Label htmlFor="" sx={{ width: 'auto', minWidth: '7.75rem' }}>
          {label}
        </Label>
        <Box sx={{ flex: 5, ml: 3 }}>
          <Switch {...field} {...props} />
        </Box>
      </Flex>
      {meta.touched && meta.error ? <Error message={meta.error} /> : null}
    </>
  );
};
