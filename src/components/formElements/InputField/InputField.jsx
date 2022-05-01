import React from 'react';
import useStyles from './styles';
import { Typography, Grid, TextField, FormHelperText } from '@mui/material';

const InputField = ({label, placeholder, value, name , onChange , autoFocus , type , classField, classLabel}) => {
    const classes = useStyles();

  return (
    <Grid>
        <FormHelperText className={`${classLabel} classes.input_label`}>{label}</FormHelperText>
        <TextField 
            fullWidth
            className={`${classField} classes.input`}
            variant='outlined'
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            autoFocus={autoFocus}
            type={type}
            value={value}
        />
    </Grid>
  )
}

export default InputField