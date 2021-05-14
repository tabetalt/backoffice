import { Select } from '@theme-ui/components';
import { useField } from 'formik';
import React from 'react';

export const FormSelect: React.FC<any> = ({ options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Select sx={{ width: '100%' }} {...field} {...props}>
        {options.map((option: string, index: number) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </Select>
      {meta.touched && meta.error ? (
        <span className="validate-error">{meta.error}</span>
      ) : null}
    </>
  );
};
