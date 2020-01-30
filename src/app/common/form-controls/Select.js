import React from 'react';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem';

const renderFromHelper = ({ touched, error }) => {
  if ((touched && error)) {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
};

const CustomSelect = ({input, label, meta: {touched, error}, values, ...custom}) => (
  <FormControl error={touched && error}>
    <InputLabel>{label}</InputLabel>
    <Select
      {...input}
      {...custom}
    >
      {values.map(v => (
        <MenuItem value={v.code} key={v.code}>{v.label}</MenuItem>
      ))}
    </Select>
    {renderFromHelper({touched, error})}
  </FormControl>
);

export default CustomSelect;