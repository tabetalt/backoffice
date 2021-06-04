import { useField } from 'formik';
import React from 'react';
import { Input } from '@theme-ui/components';
import Error from './Error';

export const FormInput: React.FC<any> = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <Error message={meta.error} /> : null}
    </>
  );
};
