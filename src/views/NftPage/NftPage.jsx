import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from "../../components/navbar/NavBar";
import { GetNFT } from '../../store/actions/NftAction';
import { GetTradeData } from "../../store/actions/TradeAction";
import { GetBidData } from "../../store/actions/TradeAction";
import LineChart from './LineChart';
import { NftData } from './Data';
import Button from "../../components/formElements/button/Button";
import BidModel from './BidModel';

const NftPage = () => {
    const classes = useStyles();
    const params = useParams();
    const { nftData } = useSelector((state) => (state.nft))
    const { tradeData, nftBidData } = useSelector((state) => (state.trade))  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [bidOpen, setBidOpen] = useState(false);
  
    useEffect(()=>{
        dispatch(GetNFT(params.id))
        dispatch(GetTradeData(params.id))
        dispatch(GetBidData(params.id))
        console.log(nftBidData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const [nftChartData, setNftChartData] = useState({
        labels: NftData.map((data) => data.time),
        datasets: [{
            label: "Price",
            data : NftData.map((data) => data.price),
            backgroundColor: ["#00e6ac"],
            borderColor: "#000",
            borderWidth: 2,
            pointRadius: 0,
        }]
    })

    return (
      <Box className={classes.nftPage_container}>
          <Box className={classes.nftPage}>
            <Box className={classes.nftPage_content1}>
                <Box className={classes.nftPage_content_img}>
                        <img src={`https://sapphire-v3.fra1.digitaloceanspaces.com/collection/${nftData?.data?.data?.imageUrl}.png`} 
                        className={classes.nftImg} alt=""/>
                </Box>
                <Box className={classes.nftPage_content_data}>
                    <Typography fontSize={24} fontWeight={600}>{nftData?.data?.data?.name}</Typography>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" p="30px">
                        <Box display="flex" flexDirection="column">
                            Owner <Typography fontSize={20} fontWeight={600}>{nftData?.data?.data?.current_Owner?.name}</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            Creator <Typography fontSize={20} fontWeight={600}>{nftData?.data?.data?.creator?.name}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" p="30px">
                        <Box display="flex" flexDirection="column">
                            Current Price <Typography fontSize={22} fontWeight={600}> {nftData?.data?.data?.currentPrice}</Typography> 
                        </Box>
                        <Box display="flex" flexDirection="column">
                            Starting Price <Typography fontSize={22} fontWeight={600}> {nftData?.data?.data?.startingPrice}</Typography>
                        </Box>
                    </Box>
                    
                    <Typography fontSize={18} fontWeight={500}>Liked - {nftData?.data?.data?.liked}</Typography> 
                    <Button Text="Bid" onClick={() => setBidOpen(true)}/>
                </Box>
            </Box>
            <Box className={classes.nftPage_content2}>
                Graph
                <LineChart data={nftChartData}/>
            </Box>
            <Box className={classes.nftPage_content3}>
                other
                </Box>
          </Box>
          <BidModel setOpen={setBidOpen} title="Place Bid" open={bidOpen} id={nftData?.data?.data?._id}
          />
      </Box>
    )
}

export default NftPage;