import React from "react";
import useStyles from "./styles";
import { useNavigate, useHref  } from "react-router-dom";
import { Box, Button as Buttons, Typography } from "@mui/material";
import NavBar from "../../components/navbar/NavBar";
import Button from "../../components/formElements/button/Button";
import AuthPage from "../AuthPage/AuthPage";
import imge from "../../assets/landing.jpg";

const LandingPage = ({props}) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const redirectHandler = (e) =>{
        if(e === 0){
            navigate("/auth")
            props(0)
        }
        if(e === 1){
            navigate("/auth")
            props(1)
        }
    }
    
    return(
        <Box className={classes.landingPageContainer}> 
            <Box className={classes.landingPage}> 
                <Box className={classes.landingPage_topContent}>
                    <Box className={classes.landingPage_topContentLeft}>
                        <Typography mb={10} maxWidth={600} className={classes.landingPage_text1} fontSize={75} fontWeight={700} lineHeight={0.9}>DISCOVER, TRADE & SELL</Typography>
                        <Box  display="flex" flexDirection="row" gap="30px" minWidth={400}>
                            <Button onClick={() => redirectHandler(0)} Text="Login" />
                            <Button onClick={() => redirectHandler(1)} Text="Sign up" />
                        </Box>
                    </Box>
                    <Box className={classes.landingPage_topContentRight}>
                      
                        <img src={imge} alt="" className={classes.landingPage_mainImage}/>
                    </Box>
                </Box>
                <Box className={classes.landingPage_solana}>
                    <Box>
                        <Typography className={classes.landingPage_text1} fontSize={30} fontWeight={700}>Explore Ethereum BlockChain</Typography>
                        <Typography className={classes.landingPage_text1} fontSize={18} fontWeight={500}>Built on Ethereum blockchain architecture</Typography>
                    </Box>
                    <a href="https://solana.com/developers" rel="noreferrer" target="_blank" className={classes.landingPage_link}>
                        <Buttons className={classes.landingPage_exploreBtn}>Explore</Buttons>
                    </a>
                </Box>

                <Box sx={{minHeight: "500px"}} className={classes.landingPage_bottomContent1}>
                    <Typography fontSize={30} fontWeight={700}>Top Charts</Typography>
                </Box>
                <Box sx={{minHeight: "500px", backgroundColor:"white"}} className={classes.landingPage_bottomContent2}>
                    <Typography fontSize={30} fontWeight={700}>Trending</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage