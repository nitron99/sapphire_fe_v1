import React from 'react';
import useStyles from './styles';
import { Button } from '@mui/material';
import clsx from "clsx";

const InputField = ({Text, onClick, className, disabled}) => {
    const classes = useStyles();

  return (
    <Button 
    disableElevation
        variant='contained'
        onClick={onClick} 
        disabled={disabled}
        className={`${className} ${classes.button}`}>
        {Text}
    </Button>
  )
}

export default InputField