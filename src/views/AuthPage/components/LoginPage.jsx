import React, { useState } from 'react';
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import InputField from "../../../components/formElements/InputField/InputField";
import Button from "../../../components/formElements/button/Button";

import { Login } from "../../../store/actions/AuthAction.js";

const form = {email : "" , password : ""};

const LoginPage = ({change}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(form);
    const [showPwd, setShowPwd] = useState(true)
    const changeHandler = () => {change(1)}

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value})
    }

    const handleShowPassword = () => setShowPwd((prevShowPassword) => !prevShowPassword);

    const onSubmitHandler = () => {
        console.log(formData)
        dispatch(Login(formData , navigate))
    }

    const redirectHandler = () => {
        change(2)
    }

  return (
    <Box className={classes.Login_container}>
        <Box>
            <Typography className={classes.Login_title}>Welcome Back</Typography>
        </Box>
        <Box className={classes.Login_input}>
            <InputField label="Email" name="email" onChange={onChangeHandler}/>
            <InputField label="Password" name="password" onChange={onChangeHandler} handleShowPassword={handleShowPassword}  type={showPwd ? "text" : "password"}/>
            <Typography className={classes.Login_forget} onClick={redirectHandler}>Forget Password?</Typography>
            <Button Text="Login" className={classes.Login_btn} onClick={onSubmitHandler} />
        </Box>
        <Typography className={classes.Login_register} onClick={changeHandler}>Need an Account - Register</Typography>
    </Box>
  )
}

export default LoginPage