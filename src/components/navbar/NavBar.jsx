import React, { useState } from 'react';
import useStyles from './styles';
import { Link , useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Logout } from '../../store/actions/AuthAction';
import { Box, Typography, Grid,Avatar, IconButton, Menu, MenuItem, ListItemIcon} from '@mui/material';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
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
    const onCreateHandler = () => { navigate('/create') }

  return (
    <Box className={classes.navbar_container}>
        <Box className={classes.navbar}>
            <Typography fontSize={24} fontWeight={600} fontFamily="Poppins">Sapphire</Typography>
            {(user)
            ?
            <Box className={classes.navbar_content}>
              <Grid className={classes.navbar_links}>
                <Link to="/home" className={classes.links}><Typography className={classes.navbar_links_item}>Home</Typography></Link>
                <Link to="/explore" className={classes.links}><Typography className={classes.navbar_links_item}>Explore</Typography></Link>
                <Link to="/trending" className={classes.links}><Typography className={classes.navbar_links_item}>Trending</Typography></Link>
                {/* <Link to="/dashboard" className={classes.links}><Typography className={classes.navbar_links_item}>Dashboard</Typography></Link> */}
              </Grid>
              <IconButton
                onClick={onCreateHandler}
                size="small"
                sx={{ backgroundColor: "#000", marginLeft: "auto", "& .MuiAvatar-root": {
                  backgroundColor: "#000"
                }}}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>+</Avatar>
              </IconButton>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml:"20px", backgroundColor: "#000" , "& .MuiAvatar-root": {
                  backgroundColor: "#000"
                }}}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>N</Avatar>
              </IconButton>
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
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Transactions
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
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
    </Box>
  )
}

export default NavBar