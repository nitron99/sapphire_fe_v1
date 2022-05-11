import React, { useState , useEffect } from 'react';
import useStyles from './styles';
import { useNavigate, useLocation} from "react-router-dom";
import clsx from 'clsx';
import { useDispatch, useSelector} from 'react-redux';
import { GetNFT } from "../../store/actions/NftAction.js";
import { CreateFavouriteNFT } from '../../store/actions/NftAction.js';
import { Box, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { GetFavouriteNFT } from '../../store/actions/NftAction';

const NftImage = ({data, Key}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { favouriteData } = useSelector((state) => (state.nft))
    const [red , setRed] = useState(false);

    const onClickHandler = () => {
        dispatch(GetNFT(data?._id))
            .then(() => navigate(`/collection/${data?._id}`))
    }

    useEffect(()=>{
        for(let i = 0 ; i < favouriteData?.data?.length ; i++){
            if(favouriteData?.data[i]?.artId?._id === data?._id){
                setRed(true)
            }
        }        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onLikeHandler = () => {
        if(data?._id){
            dispatch(CreateFavouriteNFT({artId: data?._id}))
        }
    }

  return (
    <Box className={classes.nftImage_container} key={Key}>
        <Box className={classes.nft_Image_container} onClick={onClickHandler}>
            <img src={`https://sapphire-v3.fra1.digitaloceanspaces.com/collection/${data?.imageUrl}.png`} alt=''
                className={classes.nft_Image}/> 
        </Box>
        <Box className={classes.nft_content}>
            <Box maxWidth display="flex" flexDirection="column">
                <Typography fontSize={24} fontWeight={600}>{data?.name}</Typography> 
                <Typography fontSize={18} fontWeight={500}>Current Price - {data?.currentPrice}</Typography> 
            </Box>
            <FavoriteIcon fontSize='medium' onClick={onLikeHandler}
             className={clsx({[classes.nft_icon_red]: red === true})} />
        </Box>
    </Box>
  )
}

export default NftImage