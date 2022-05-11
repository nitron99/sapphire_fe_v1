import React from 'react';
import useStyles from './styles';
import { Typography, Grid, TextField, FormHelperText } from '@mui/material';

const InputField = ({label, placeholder, value, name , onChange , autoFocus , type , classField, classLabel , error}) => {
    const classes = useStyles();

  return (
    <Grid sx={{position: "relative"}}>
        <FormHelperText htmlFor="component-error" className={`${classLabel} ${classes.input_label}`}>{label}</FormHelperText>
        <TextField 
            fullWidth
            id="component-error"
            className={`${classField} ${classes.input}`}
            variant='outlined'
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            autoFocus={autoFocus}
            type={type}
            value={value}
        />
        <FormHelperText 
          error 
          className={classes.input_error}>
            {error}
          </FormHelperText>
    </Grid>
  )
}

export default InputField