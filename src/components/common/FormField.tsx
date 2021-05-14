import { useField } from 'formik';
import { Field } from '@tabetalt/kit';
import React from 'react';

export const FormField: React.FC<any> = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Field label={label} {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="validate-error">{meta.error}</span>
      ) : null}
    </>
  );
};
