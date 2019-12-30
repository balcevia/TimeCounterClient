import React from 'react';
import TextField from '@material-ui/core/TextField'

const Input = ({label, input, meta: { touched, invalid, error }, ...custom }) => {
  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};

export default Input;