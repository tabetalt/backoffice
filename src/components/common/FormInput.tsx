import { useField } from 'formik';
import React from 'react';
import { Input } from '@theme-ui/components';

export const FormInput: React.FC<any> = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Input {...field} {...props} />
      {/* {meta.touched && meta.error ? (
        <span className="validate-error">{meta.error}</span>
      ) : null} */}
    </>
  );
};
