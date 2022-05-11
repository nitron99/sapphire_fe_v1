import React, { useEffect } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import NavBar from "../../components/navbar/NavBar";
import { GetAllNFT } from "../../store/actions/NftAction";
import NftImage from "../../components/NftImage/NftImage";

const HomePage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { homeNftData } = useSelector((state) => (state.nft))

    useEffect(()=>{
      dispatch(GetAllNFT())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(homeNftData)

    return (
    <Box className={classes.homepage_container}>s
        <Box className={classes.homepage}>
            <Typography mt="20px" mb="10px" fontSize={30} fontWeight={600}>Home</Typography>
            <Box className={classes.homepage_row1}>
                {homeNftData?.data?.map((item, index) => {
                    return(
                        <>
                        <NftImage data={item} key={index}/>
                      
                        </>
                    )
                })}
            </Box>
            <Typography mt="20px" mb="10px" fontSize={30} fontWeight={600}>Trending</Typography>
            <Box className={classes.homepage_row2}>
                {homeNftData?.data?.map((item, index) => {
                    return(
                        <NftImage data={item} key={index}/>
                    )
                })}
            </Box>
            <Typography mt="20px" mb="10px" fontSize={30} fontWeight={600}>Discover</Typography>
            <Box className={classes.homepage_row3}>
                {homeNftData?.data?.map((item, index) => {
                    return(
                        <NftImage data={item} key={index}/>
                    )
                })}
            </Box>
        </Box>
    </Box>
    )
}

export default HomePage;