import React,{ useEffect, useState } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import NavBar from "../../../components/navbar/NavBar";
import { GetFavouriteNFT } from '../../../store/actions/NftAction';

const FavouritesPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => (state.user))  
    const { favouriteData } = useSelector((state) => (state.nft))
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        dispatch(GetFavouriteNFT())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        console.log(favouriteData)
    },[favouriteData])

  return (
    <Box className={classes.favourites_container}>
      <Box className={classes.favourites}>
          <Typography fontSize={30} fontWeight={600} mt="20px">Favourites</Typography>
          <Box className={classes.favourites_content}>
            {favouriteData?.data?.map((item, index) => {
                return(
                    <Box className={classes.favourites_list_item} key={index}>
                        <Box className={classes.favourites_img}  onClick={() => navigate(`/collection/${item?.artId?._id}`)}>
                            <img src={`https://sapphire-v3.fra1.digitaloceanspaces.com/collection/${item?.artId?.imageUrl}.png`} alt=''
                              className={classes.nft_Image} />                            
                        </Box>
                        <Box className={classes.favourites_item_content}>
                            <Typography fontSize={24} fontWeight={600}>{item?.artId?.name}</Typography>    
                            <Typography fontSize={18} fontWeight={500}>Creator - {item?.artId?.creator?.name}</Typography>
                            <Typography fontSize={18} fontWeight={500}>Owner - {item?.artId?.current_Owner?.name}</Typography>       
                        </Box>
                    </Box>
                )
            })}
          </Box>
      </Box>
    </Box>
  )
}

export default FavouritesPage