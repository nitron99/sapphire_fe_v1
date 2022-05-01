import React from 'react';
import useStyles from './styles';
import { Button } from '@mui/material';
import clsx from "clsx";

const InputField = ({Text, onClick, className}) => {
    const classes = useStyles();

  return (
    <Button 
    disableElevation
        variant='contained'
        onClick={onClick} 
        className={`${className} ${classes.button}`}>
        {Text}
    </Button>
  )
}

export default InputField