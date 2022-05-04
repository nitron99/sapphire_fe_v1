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

const NavBar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(sessionStorage.getItem("user"));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const onLogoutHandler = () => { dispatch(Logout(navigate)) }
    const onProfileHandler = () => { navigate('/dashboard') }

  return (
    <Box className={classes.navbar_container}>
        <Box className={classes.navbar}>
            <Typography fontSize={26} fontWeight={700} fontFamily="Poppins">Sapphire</Typography>
            {(user)
            ?
            <Box className={classes.navbar_content}>
              
                <Link to="/home" className={classes.links}><Typography className={classes.navbar_links_item}>Home</Typography></Link>
                <Link to="/explore" className={classes.links}><Typography className={classes.navbar_links_item}>Explore</Typography></Link>
                <Link to="/trending" className={classes.links}><Typography className={classes.navbar_links_item}>Trending</Typography></Link>
                <Link to="/create" className={classes.links}><Typography className={classes.navbar_links_item}>Create</Typography></Link>
                <AccountCircleOutlinedIcon onClick={handleClick} fontSize="large"/>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem
                  onClick={onProfileHandler}>
                    <Avatar /> Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Receipt fontSize="small" />
                    </ListItemIcon>
                    Transactions
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <FavoriteBorderOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    Favourites
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={onLogoutHandler}>
                    <ListItemIcon>
                      <Logouts fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
            </Box>
            : <></>}
        </Box>
        <Divider />
    </Box>
  )
}

export default NavBar