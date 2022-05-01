import React from "react";
import useStyles from "./styles";
import { useNavigate, useHref  } from "react-router-dom";
import { Box, Button as Buttons, Typography } from "@mui/material";
import NavBar from "../../components/navbar/NavBar";
import Button from "../../components/formElements/button/Button";
import AuthPage from "../AuthPage/AuthPage";

const LandingPage = ({props}) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const redirectHandler = (e) =>{
        if(e === 0)
        {
            navigate("/auth")
            props(0)
        }
        if(e === 1)
        {
            navigate("/auth")
            props(1)
        }
    }
    
    return(
        <Box className={classes.landingPageContainer}> 
            <NavBar/>
            <Box className={classes.landingPage}> 
                <Box className={classes.landingPage_topContent}>
                    <Box className={classes.landingPage_topContentLeft}>
                        <Typography mb={10} maxWidth={600} className={classes.landingPage_text1} fontSize={75} fontWeight={700} lineHeight={0.9}>DISCOVER, TRADE & SELL</Typography>
                        <Box  ml={5}>
                            <Button onClick={() => redirectHandler(0)} Text="Login" sx={{color: "red"}} />
                            <Button onClick={() => redirectHandler(1)} Text="Sign up" sx={{}} />
                        </Box>
                    </Box>
                    <Box className={classes.landingPage_topContentRight}>

                    </Box>
                    
                </Box>

                <Box className={classes.landingPage_bottomContent}>
                    <Box>
                        <Typography className={classes.landingPage_text1} fontSize={30} fontWeight={700}>Explore Solana BlockChain</Typography>
                        <Typography className={classes.landingPage_text1} fontSize={18} fontWeight={500}>Built on solana blockchain architecture</Typography>
                    </Box>
                    <a href="https://solana.com/developers" rel="noreferrer" target="_blank" className={classes.landingPage_link}>
                        <Buttons className={classes.landingPage_exploreBtn} onClick={() => redirectHandler(1)}>Explore</Buttons>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage