import React from 'react';
import useStyles from './styles';
import { useNavigate} from "react-router-dom";
import { Box, Typography} from '@mui/material';
import Divider from '@mui/material/Divider';

const Footer = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const onRedirectHandler1 = (e) => {
      switch(e){
        case 0: navigate("/explore")
          break;
        case 1: navigate("/explore")
          break;
        case 2: navigate("/explore")
          break;
        case 3: navigate("/explore")
          break;
        case 4: navigate("/explore")
          break;
        case 5: navigate("/explore")
          break;
        case 6: navigate("/explore")
          break;
        default:
      }
    }

    const onRedirectHandler2 = (e) => {
      switch(e){
        case 0: navigate("/dashboard")
          break;
        case 1: navigate("/transactions")
          break;
        case 2: navigate("/holdings")
          break;
        case 3: navigate("/favourites")
          break;
        case 4: navigate("/settings")
          break;
        default:
      }
    }

  return (
    <Box className={classes.footer_container}>
        <Box className={classes.footer}>
            <Box className={classes.footer_content}>
              <Box className={classes.footer_contentLeft}>
                  <Typography fontSize={24} fontWeight={600} mb="20px">
                      Sapphire
                  </Typography>
                  <Typography fontSize={16} mb="20px">
                      Digital market place for Non-fungible tokens built using BlockChain technology
                  </Typography>
              </Box>
              <Box className={classes.footer_contentRight}>
                <Box className={classes.footer_contentRight_col1}>
                  <Box>
                    <Typography fontSize={16} fontWeight={600} mb="20px">
                        MarketPlace
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                     onClick={() => onRedirectHandler1(0)}
                     sx={{cursor: "pointer"}}>
                        All NFTs
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                     onClick={() => onRedirectHandler1(1)}
                     sx={{cursor: "pointer"}}>
                        Art
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                     onClick={() => onRedirectHandler1(2)}
                     sx={{cursor: "pointer"}}>
                        Collectibles
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                     onClick={() => onRedirectHandler1(3)}
                     sx={{cursor: "pointer"}}>
                        Music
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                     onClick={() => onRedirectHandler1(4)}
                     sx={{cursor: "pointer"}}>
                        Photography
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                     onClick={() => onRedirectHandler1(5)}
                     sx={{cursor: "pointer"}}>
                        Sports
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                     onClick={() => onRedirectHandler1(6)}
                     sx={{cursor: "pointer"}}>
                        Utility
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.footer_contentRight_col2}>
                  <Box>
                    <Typography fontSize={16} fontWeight={600} mb="20px">
                      My Account
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                      onClick={() => onRedirectHandler2(0)}
                      sx={{cursor: "pointer"}}>
                      Profile
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                      onClick={() => onRedirectHandler2(1)}
                      sx={{cursor: "pointer"}}>
                      Transactions
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                      onClick={() => onRedirectHandler2(2)}
                      sx={{cursor: "pointer"}}>
                      Holdings
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                      onClick={() => onRedirectHandler2(3)}
                      sx={{cursor: "pointer"}}>
                      Favourites
                    </Typography>
                    <Typography fontSize={15} mb="20px"
                      onClick={() => onRedirectHandler2(4)}
                      sx={{cursor: "pointer"}}>
                      Settings
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider sx={{backgroundColor: "white"}}/>
            <Box pt="20px" pl="20px">
              <Typography fontSize={15}>
              © 2022, Developed By Arpan, Hemant, Chirag and Nitin
              </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer