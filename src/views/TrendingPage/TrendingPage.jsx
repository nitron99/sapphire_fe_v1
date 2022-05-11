import React, { useEffect } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import NavBar from "../../components/navbar/NavBar";
import { GetAllNFT } from "../../store/actions/NftAction";
import NftImage from "../../components/NftImage/NftImage";
import InputField from '../../components/formElements/InputField/InputField';

const TrendingPage = () => {
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
    <Box className={classes.trendingpage_container}>
        <Box className={classes.trendingpage}>
            <Typography mt="20px" mb="10px" fontSize={30} fontWeight={600}>Trending NFTs</Typography>
            <Box className={classes.trendingpage_row1}>
                {homeNftData?.data?.map((item, index) => {
                    return(
                        <>
                        <NftImage data={item} key={index}/>
                       
                        </>
                    )
                })}
            </Box>
            <Typography mt="20px" mb="10px" fontSize={30} fontWeight={600}>Category</Typography>
            <Box className={classes.trendingpage_row2}>
                {homeNftData?.data?.map((item, index) => {
                    return(
                        <NftImage data={item} key={index}/>
                    )
                })}
            </Box>
            <Typography mt="20px" mb="10px" fontSize={30} fontWeight={600}>Discover</Typography>
            <Box className={classes.trendingpage_row3}>
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

export default TrendingPage;