import React,{ useEffect, useState } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { GetUser } from '../../../store/actions/UserAction';
import AddMoneyModel from './AddMoneyModel';
import { GetCards } from "../../../store/actions/WalletAction";
import { message as messageToast } from "antd";

const WalletPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => (state.user))  
    const { walletData, cardData} = useSelector((state) => (state.wallet))  
    const [loading, setLoading] = useState(false)
    const [openAddMoney, setOpenAddMoney] = useState(false)

    useEffect(()=>{
        if(user){
            dispatch(GetUser(setLoading))
        }
        dispatch(GetCards())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
     console.log(walletData.status)
     if(walletData.status === "success")
     {
      messageToast.success("Your request has been processed");
     }else{
      messageToast.error(`${walletData.message}`);
     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[walletData])
  return (
    <Box className={classes.wallet_container}>
      <Box className={classes.wallet}>
          <Typography fontSize={30} fontWeight={600} mt="20px">Wallet</Typography>
          <Box className={classes.wallet_content1}>
            <Box className={classes.wallet_balance}>
                <Typography fontSize={22} fontWeight={600}>Balance</Typography>
                <Typography fontSize={40} fontWeight={500}>₹{user?.data?.data?.wallet/100}</Typography>
            </Box>
            <Box className={classes.wallet_addMoney} onClick={() => setOpenAddMoney(true)}>
                <AddBoxOutlinedIcon />
                <Typography ml="20px" fontSize={22} fontWeight={500}> Add Money to Wallet</Typography>
            </Box>
          </Box>
          <AddMoneyModel setOpen={setOpenAddMoney} title="Add Money" open={openAddMoney} cards={cardData}/>
      </Box>
    </Box>
  )
}

export default WalletPage