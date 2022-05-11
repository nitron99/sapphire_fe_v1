import React,{ useEffect, useState } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import NavBar from "../../../components/navbar/NavBar";


const SettingsPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => (state.user))  
    const [loading, setLoading] = useState(false)

  return (
    <Box className={classes.settings_container}>
      <Box className={classes.settings}>
          <Typography fontSize={30} fontWeight={600} mt="20px">Settings</Typography>
          
      </Box>
    </Box>
  )
}

export default SettingsPage