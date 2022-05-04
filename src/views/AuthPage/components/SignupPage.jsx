import React, { useState } from 'react';
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import { Signup } from '../../../store/actions/AuthAction';
import InputField from "../../../components/formElements/InputField/InputField";
import Button from "../../../components/formElements/button/Button";

const form = {name: "", email : "" , password : "", phonenumber: ""};

const SignupPage = ({change}) => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [formData, setFormData] = useState(form);
    const changeHandler = () => {
        change(0)
    }

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value})
    }

    const onSubmitHandler = () => {
        console.log({ ...formData,"passwordConfirm": formData.password})
        dispatch(Signup({ ...formData,"passwordConfirm": formData.password} , navigate))
    }

  return (
    <Box className={classes.Signup_container}>
        <Box>
            <Typography className={classes.Signup_title}>Create an Account</Typography>
        </Box>
        <Box className={classes.Signup_input}>
            <InputField label="Name" name="name" onChange={onChangeHandler}/>
            <InputField label="Email" name="email" onChange={onChangeHandler}/>
            <InputField label="Password" name="password" onChange={onChangeHandler}/>
            <InputField label="Phone" name="phonenumber" onChange={onChangeHandler}/>
            <Button Text="Sign Up" className={classes.Signup_btn} onClick={onSubmitHandler} />
        </Box>
        <Typography className={classes.Signup_register} onClick={changeHandler}>Already have an account?</Typography>
    </Box>
  )
}

export default SignupPage