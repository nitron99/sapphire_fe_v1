import React, { useState } from 'react';
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import InputField from "../../../components/formElements/InputField/InputField";
import Button from "../../../components/formElements/button/Button";

const form = {email : ""};

const ForgotPassword = ({change}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(form);

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value})
    }

    const onSubmitHandler = () => {
        console.log(formData)
        // dispatch(Login(formData , navigate))
    }

    const redirectHandler = () => {
        change(0)
    }

  return (
    <Box className={classes.Forgot_container}>
        <Box>
            <Typography className={classes.Forgot_title}>Forgot Password?</Typography>
        </Box>
        <Box className={classes.Forgot_input}>
            <InputField label="Email" name="email" onChange={onChangeHandler}/>
            <Button Text="Send Link" className={classes.Forgot_btn} onClick={onSubmitHandler} />
        </Box>
        <Typography className={classes.Forgot_back} onClick={redirectHandler}>Back</Typography>
    </Box>
  )
}

export default ForgotPassword