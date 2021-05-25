import { Select } from '@theme-ui/components';
import { useField } from 'formik';
import React from 'react';
import Error from './Error';

export const FormSelect: React.FC<any> = ({ options, labels, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Select sx={{ width: '100%' }} {...field} {...props}>
        {options.map((option: string, index: number) => (
          <option value={option} key={index}>
            {labels ? labels[index] : option}
          </option>
        ))}
      </Select>
      {meta.touched && meta.error ? <Error message={meta.error} /> : null}
    </>
  );
};
