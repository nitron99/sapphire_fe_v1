import React,{ useEffect, useState } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import NavBar from "../../../components/navbar/NavBar";
import { GetMyNFT } from '../../../store/actions/NftAction';


const HoldingsPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => (state.user))  
    const { myNftData } = useSelector((state) => (state.nft))
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        dispatch(GetMyNFT())
    },[])

    useEffect(()=>{
        console.log(myNftData)
    },[myNftData])

  return (
    <Box className={classes.holdings_container}>
      <Box className={classes.holdings}>
          <Typography fontSize={30} fontWeight={600} mt="20px">My NFT</Typography>
          <Box className={classes.holdings_content}>
            {myNftData?.data?.map((item, index) => {
                return(
                    <Box className={classes.holdings_list_item} key={index}>
                        <Box className={classes.holdings_img}>
                            <img src={`https://sapphire-v3.fra1.digitaloceanspaces.com/collection/${item.imageUrl}.png`} alt=''
                                className={classes.nft_Image} />                            
                        </Box>
                        <Box className={classes.holdings_item_content}>
                            <Typography fontSize={24} fontWeight={600}>{item?.name}</Typography>    
                            <Typography fontSize={18} fontWeight={500}>Starting Price - {item?.startingPrice}</Typography> 
                            <Typography fontSize={18} fontWeight={500}>Current Price - {item?.currentPrice}</Typography> 
                            <Typography fontSize={18} fontWeight={500}>Creator - {item?.creator?.name}</Typography>
                            <Typography fontSize={18} fontWeight={500}>Owner - {item?.current_Owner?.name}</Typography> 
                            <Typography fontSize={18} fontWeight={500}>Wish - {item?.wish}</Typography>                      
                        </Box>
                    </Box>
                )
            })}
          </Box>
      </Box>
    </Box>
  )
}

export default HoldingsPage