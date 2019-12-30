import React from 'react';
import Button from '@material-ui/core/Button';

const TimeCounterButton = ({label, onClick, color, ...other}) => {
  return (
    <Button variant="contained" color={color} onClick={onClick} {...other}>
      {label}
    </Button>
  )
};

TimeCounterButton.defaultProps = {
  color: "primary"
};

export default TimeCounterButton