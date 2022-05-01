import React, { useState } from 'react';
import useStyles from "./styles";
import { Box } from "@mui/material"
import Login from './components/LoginPage';
import Signup from './components/SignupPage';
import ForgotPassword from './ForgotPassword/ForgotPassword';

const AuthPage = ({props}) => {
  const classes = useStyles();
  const [login, setLogin] = useState(props || 0);

  return(
    <Box maxWidth className={classes.AuthPage_container}>
      {(login === 0)
      ?
        <Login change={setLogin}/>
      : (login === 1)
      ?
        <Signup change={setLogin} />
      : (login === 2)
      ?
        <ForgotPassword change={setLogin} />
        :
        <ForgotPassword change={setLogin} />
      }

      
    </Box>
  
  )
}

export default AuthPage