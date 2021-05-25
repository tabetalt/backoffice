import { useField } from 'formik';
import { Field } from '@tabetalt/kit';
import React from 'react';
import Error from './Error';

export const FormField: React.FC<any> = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Field label={label} {...field} {...props} />
      {meta.touched && meta.error ? <Error message={meta.error} /> : null}
    </>
  );
};
