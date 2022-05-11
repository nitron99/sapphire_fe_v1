import React, { useState, useEffect } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from "../../components/navbar/NavBar";
import { GetNFT } from '../../store/actions/NftAction';
import { GetTradeData } from "../../store/actions/TradeAction";
import { GetBidData } from "../../store/actions/TradeAction";
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LineChart from './LineChart';
import { NftData } from './Data';
import Button from "../../components/formElements/button/Button";
import BidModel from './BidModel';
import SellModel from './SellModel';

const NftPage = () => {
    const classes = useStyles();
    const params = useParams();
    const { nftData } = useSelector((state) => (state.nft))
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { tradeData, nftBidData } = useSelector((state) => (state.trade))  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [bidOpen, setBidOpen] = useState(false);
    const [sellOpen, setSellOpen] = useState(false);
    const [owner, setOwner] = useState(false)
    const [enable, setEnable] = useState(false)

  
    useEffect(()=>{
        dispatch(GetNFT(params.id))
        dispatch(GetTradeData(params.id))
        dispatch(GetBidData(params.id))
        if(user?.data?.user?._id === nftData?.data?.data?.current_Owner?._id){
            setOwner(true)
        }
        if(nftData?.data?.data?.currentPrice !== nftData?.data?.data?.startingPrice){
            setEnable(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        if(user?.data?.user?._id === nftData?.data?.data?.current_Owner?._id){
            setOwner(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[nftData])

    console.log(nftBidData)

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
                    <Box display="flex" flexDirection="row" alignItems="center">
                        <Typography fontSize={24} fontWeight={600} mr="30px">{nftData?.data?.data?.name}</Typography>
                        <FavoriteIcon />
                        <Typography fontSize={18} fontWeight={500}>{nftData?.data?.data?.liked}</Typography> 
                    </Box>
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
                    {owner
                    ? 
                    <Button Text="Sell" onClick={() => setSellOpen(true)} disabled={!enable}/>
                       :
                    <Button Text="Bid" onClick={() => setBidOpen(true)}/>
                        }
                </Box>
            </Box>
            {/* <Box className={classes.nftPage_content2}>
                Graph
                <LineChart data={nftChartData}/>
            </Box> */}
            <Box className={classes.nftPage_content3}>
                <Typography fontSize={20} fontWeight={600}>Bid History</Typography>
                {nftBidData?.data?.map((item, index) => 
                    <Box key={index} className={classes.nftPage_content_bids}>
                        <Box mr="50px">
                            Bidder Name <Typography fontSize={20} fontWeight={600}>{item?.user?.name}</Typography>
                        </Box>
                        <Box>
                            Bidding Amount <Typography fontSize={20} fontWeight={600}>{item?.biddingAmount}</Typography>
                        </Box>
                    </Box>
                    )}
            </Box>
          </Box>
          <BidModel setOpen={setBidOpen} title="Place Bid" open={bidOpen} id={nftData?.data?.data?._id}/>
          <SellModel 
            setOpen={setSellOpen} 
            title="Sell NFT" 
            open={sellOpen} 
            id={user?.data?.user?._id}
            artId={nftData?.data?.data?._id}
            amount={nftData?.data?.data?.currentPrice}/>
      </Box>
    )
}

export default NftPage;