import React, { useState , useEffect } from 'react';
import useStyles from './styles';
import { Link , useNavigate, useLocation} from "react-router-dom";
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../store/actions/AuthAction';
import { Box, Typography, Grid,Avatar, Menu, MenuItem, ListItemIcon} from '@mui/material';
import Divider from '@mui/material/Divider';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import Receipt from '@mui/icons-material/ReceiptOutlined';
import Settings from '@mui/icons-material/SettingsOutlined';
import Logouts from '@mui/icons-material/Logout';
import { GetFavouriteNFT } from '../../store/actions/NftAction';

const NavBar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { favouriteData } = useSelector((state) => (state.nft))
    const { users } = useSelector((state) => (state.auth))
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const route = location.pathname.split("/");
    console.log(route)
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
      if(!favouriteData){
        dispatch(GetFavouriteNFT())
      }
    },[])

    const onRedirectHandler = (e) => {
      switch(e){
        case 0: navigate("/dashboard")
          break;
        case 1: navigate("/wallet")
          break;
        case 2: navigate("/transactions")
          break;
        case 3: navigate("/holdings")
          break;
        case 4: navigate("/favourites")
          break;
        case 5: navigate("/settings")
          break;
        case 6: dispatch(Logout(navigate)) 
          break;
        default:
      }
    }

  return (
    <Box className={classes.navbar_container}>
        <Box className={classes.navbar}>
            <Typography fontSize={26} fontWeight={700} fontFamily="Poppins">Sapphire</Typography>
            {(user)
            ?
            <Box className={classes.navbar_content}>
              
                <Link to="/home" className={classes.links}>
                  <Typography
                    className={clsx(classes.navbar_links_item, {
                      [classes.navbar_links_itemSelected]: route[1] === "home",
                    })}>
                    Home
                  </Typography>
                </Link>
                <Link to="/explore" className={classes.links}>
                  <Typography
                    className={clsx(classes.navbar_links_item, {
                      [classes.navbar_links_itemSelected]: route[1] === "explore",
                    })}>
                    Explore
                  </Typography>
                </Link>
                <Link to="/trending" className={classes.links}>
                  <Typography 
                    className={clsx(classes.navbar_links_item, {
                      [classes.navbar_links_itemSelected]: route[1] === "trending",
                    })}>
                    Trending
                  </Typography>
                </Link>
                <Link to="/create" className={classes.links}>
                  <Typography 
                    className={clsx(classes.navbar_links_item, {
                      [classes.navbar_links_itemSelected]: route[1] === "create",
                    })}>
                    Create
                  </Typography>
                </Link>
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
                   onClick={() => onRedirectHandler(0)}
                  sx={{color : "#000"}}>
                    <Avatar /> 
                    <Typography >Profile</Typography>
                  </MenuItem>
                  <MenuItem
                   onClick={() => onRedirectHandler(1)}
                  sx={{color : "#000"}}>
                    <Typography fontSize={14} fontWeight={600}>Balance - ₹{users?.data?.user?.wallet/100}</Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => onRedirectHandler(2)}>
                    <ListItemIcon>
                      <Receipt sx={{color : "#000"}} />
                    </ListItemIcon>
                    <Typography sx={{color : "#000"}}>
                      Invoices
                    </Typography>
                  </MenuItem>
                  <MenuItem
                   onClick={() => onRedirectHandler(3)}>
                    <ListItemIcon>
                      <ImageIcon sx={{color : "#000"}}/>
                    </ListItemIcon>
                    <Typography sx={{color : "#000"}}>
                      Holdings
                    </Typography>
                  </MenuItem>
                  <MenuItem
                   onClick={() => onRedirectHandler(4)}>
                    <ListItemIcon>
                      <FavoriteBorderOutlinedIcon sx={{color : "#000"}}/>
                    </ListItemIcon>
                    <Typography sx={{color : "#000"}}>
                      Favourites
                    </Typography>
                  </MenuItem>
                  {/* <MenuItem
                   onClick={() => onRedirectHandler(5)}>
                    <ListItemIcon>
                      <Settings sx={{color : "#000"}}/>
                    </ListItemIcon>
                    <Typography sx={{color : "#000"}}>
                      Settings
                    </Typography>
                  </MenuItem> */}
                  <MenuItem
                    onClick={() => onRedirectHandler(6)}>
                    <ListItemIcon>
                      <Logouts sx={{color : "#000"}} />
                    </ListItemIcon>
                    <Typography sx={{color : "#000"}}>
                      Logout
                    </Typography>
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