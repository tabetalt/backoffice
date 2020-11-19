/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

export interface ErrorProps {
  message?: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className="error" sx={{ color: 'error', mt: 2 }}>
    {message}
  </div>
);

export default Error;
