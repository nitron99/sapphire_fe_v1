import React from 'react';
import useStyles from './styles';
import { Typography,  InputAdornment, IconButton, Grow , Grid, TextField, FormHelperText } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputField = ({label, placeholder, value, name , onChange , autoFocus , type , classField, classLabel , error , handleShowPassword}) => {
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
            InputProps={
              name === "password" || name === "confirmPassword"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {type === "password" ? <VisibilityIcon sx={{color: "#fff"}}/> : <VisibilityOffIcon sx={{color: "#fff"}}/>}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : null
            }
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