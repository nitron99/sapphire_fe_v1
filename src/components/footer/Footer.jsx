import React, { useState } from 'react';
import useStyles from './styles';
import { Link , useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Logout } from '../../store/actions/AuthAction';
import { Box, Typography, Grid,Avatar, Menu, MenuItem, ListItemIcon} from '@mui/material';
import Divider from '@mui/material/Divider';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Receipt from '@mui/icons-material/ReceiptOutlined';
import Settings from '@mui/icons-material/SettingsOutlined';
import Logouts from '@mui/icons-material/Logout';

const Footer = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(sessionStorage.getItem("user"));


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
                  <Typography fontSize={16} fontWeight={600} mb="20px">
                      MarketPlace
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                      All NFTs
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                      Art
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                      Collectibles
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                      Music
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                      Photography
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                      Sports
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                      Utility
                  </Typography>
                </Box>
                <Box className={classes.footer_contentRight_col2}>
                  <Typography fontSize={16} fontWeight={600} mb="20px">
                    My Account
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                    Profile
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                    Transactions
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                    Favourites
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                    Holdings
                  </Typography>
                  <Typography fontSize={15} mb="20px">
                    Settings
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider sx={{backgroundColor: "white"}}/>
            <Box pt="20px" pl="20px">
              <Typography fontSize={15}>
              © 2022, Developed By QuadCORE
              </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer