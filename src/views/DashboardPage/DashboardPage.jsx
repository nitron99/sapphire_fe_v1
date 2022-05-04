import React from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Buttons from "../../components/formElements/button/Button";
import { Logout } from "../../store/actions/AuthAction";
import NavBar from "../../components/navbar/NavBar";

const DashboardPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(Logout(navigate));
  }

  return (
    <Box>
      <NavBar />
      <Typography sx={{paddingTop: "100px"}}>This is Dashboard Page / profile Page </Typography>
      {/* <Buttons className={classes.logout_btn} Text="Logout" onClick={onClickHandler}/> */}
    </Box>
  )
}

export default DashboardPage