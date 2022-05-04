import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from "../../components/navbar/NavBar";
import { GetNFT } from '../../store/actions/NftAction';

const NftPage = () => {
    const classes = useStyles();
    const params = useParams();
    const { nftData } = useSelector((state) => (state.nft))  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(()=>{
        // console.log(params.id)
        dispatch(GetNFT(params.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
      <Box className={classes.nftPage_container}>
          <NavBar />
          <Box className={classes.nftPage}>
            <Box className={classes.nftPage_content}>
                <Box className={classes.nftPage_content_img}>
                        <img src={`https://sapphire-v3.fra1.digitaloceanspaces.com/collection/${nftData?.data?.data?.imageUrl}.png`} 
                        className={classes.nftImg} alt=""/>
                    <Box display="flex" flexDirection="row" width="100%" justifyContent="space-between" mt="10px">
                        <Typography fontFamily="Poppins" fontSize={20} fontWeight={500}>{nftData?.data?.data?.name}</Typography>
                        <Typography fontFamily="Poppins" fontSize={20} fontWeight={600}>{nftData?.data?.data?.startingPrice}</Typography>
                    </Box>
                </Box>
                <Box className={classes.nftPage_content_data}>
                    <Typography>creator Name - {nftData?.data?.data?.creator?.name}</Typography>
                </Box>
            </Box>
            <Box className={classes.nftPage_content}>
                Graph
            </Box>
            <Box className={classes.nftPage_content}>
                other
                </Box>
          </Box>
      </Box>
    )
}

export default NftPage;