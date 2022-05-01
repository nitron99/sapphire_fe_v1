import React from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from "../../components/navbar/NavBar";


const HomePage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    return (
      <Box>
          <NavBar />

        <Typography sx={{paddingTop: "100px"}}>This is Home Page </Typography>
      
  
      </Box>
    )
}

export default HomePage;