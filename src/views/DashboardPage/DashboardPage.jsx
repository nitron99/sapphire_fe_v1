import React,{ useEffect, useState } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import Buttons from "../../components/formElements/button/Button";
import { GetUser } from '../../store/actions/UserAction';
import NavBar from "../../components/navbar/NavBar";
import InputField from '../../components/formElements/InputField/InputField';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';


const DashboardPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => (state.user))  
  const [loading, setLoading] = useState(false)
 
  useEffect(() => {
    dispatch(GetUser(setLoading))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const onRedirectHandler = (e) => {
    switch(e){
      case 0: navigate("/transactions")
        break;
      case 1: navigate("/holdings")
        break;
      case 2: navigate("/favourites")
        break;
      case 3: navigate("/wallet")
        break;
      default:
    }
  }

  return (
    <Box className={classes.dashboard_container}>
      <NavBar />
      <Box className={classes.dashboard}>
          <Box className={classes.dashboard_Img}>
            <Box className={classes.dashboard_background}>

            </Box>
            
          </Box>
          <Box className={classes.dashboard_formContainer}>
            <Box className={classes.dashboard_formContainerLeft}>
              <Box className={classes.dashboard_profile}>

              </Box>
              <Box className={classes.dashboard_verified}>
                <CheckOutlinedIcon sx={{color: "#00e6ac"}}/>
                <Typography fontSize={20} ml="20px" fontWeight={600}>Verified</Typography>
              </Box>
            </Box>
            <Box className={classes.dashboard_formContainerRight}>
              <InputField label="Name" 
                classField={classes.dashboard_form}  
                classLabel={classes.dashboard_label}
                value={user?.data?.data?.name}
                />
              <InputField label="Email" 
                classField={classes.dashboard_form}  
                classLabel={classes.dashboard_label}
                value={user?.data?.data?.email}
                />
              <InputField label="Phone Number" 
                classField={classes.dashboard_form}  
                classLabel={classes.dashboard_label}
                value={user?.data?.data?.phonenumber}
                />
              <InputField label="City" 
                classField={classes.dashboard_form}  
                classLabel={classes.dashboard_label}
                value={user?.data?.data?.city}
                />

                <Buttons Text="Save Changes"s/>
            </Box> 
          </Box>
          <Box className={classes.dashboard_manage}>
            <Typography fontSize={30} fontWeight={600}>Manage Account</Typography>
            <Box className={classes.dashboard_manageContainer} >
                <Box className={classes.dashboard_manageItems}
                  onClick={() => onRedirectHandler(0)}>
                  <Typography fontSize={20} fontWeight={600}>Transactions</Typography>
                </Box>
                <Box className={classes.dashboard_manageItems}
                  onClick={() => onRedirectHandler(1)}>
                  <Typography fontSize={20} fontWeight={600}>Holdings</Typography>
                </Box>
                <Box className={classes.dashboard_manageItems}
                  onClick={() => onRedirectHandler(2)}>
                  <Typography fontSize={20} fontWeight={600}>Favourites</Typography>
                </Box >
                <Box className={classes.dashboard_manageItems}
                  onClick={() => onRedirectHandler(3)}>
                  <Typography fontSize={20} fontWeight={600}>Wallet</Typography>
                </Box>
            </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default DashboardPage