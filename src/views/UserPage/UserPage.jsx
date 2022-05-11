import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from "../../components/navbar/NavBar";

const UserPage = () => {
    const classes = useStyles();
    const params = useParams(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

  return (
     <Box className={classes.userPage_container}>
          <Box className={classes.userPage}>
            <Box className={classes.nftPage_content}>
            this is users page
            </Box>
          </Box>
      </Box>
  )
}

export default UserPage