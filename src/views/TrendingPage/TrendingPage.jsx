import React from "react";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { Box, Button , Typography } from "@mui/material";
import NavBar from "../../components/navbar/NavBar";


const TrendingPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();

   
    return(
        <Box> 
            <NavBar />
            <Typography sx={{paddingTop: "100px"}}>This is TrendingPageM</Typography>
        </Box>
    )
}

export default TrendingPage