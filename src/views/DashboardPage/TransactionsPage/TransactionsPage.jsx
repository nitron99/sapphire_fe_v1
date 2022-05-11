import React,{ useEffect, useState } from 'react';
import useStyles from "./styles";
import { Box, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import NavBar from "../../../components/navbar/NavBar";
import { GetInvoices } from "../../../store/actions/WalletAction"
import Button from "../../../components/formElements/button/Button";

const TransactionsPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => (state.user))  
    const { invoiceData } = useSelector((state) => (state.wallet))  
    const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(GetInvoices())
  },[])



  // useEffect(() => {
  //   console.log(invoiceData)
  // },[invoiceData])


  return (
    <Box className={classes.transactions_container}>
      <Box className={classes.transactions}>
          <Typography fontSize={30} fontWeight={600} mt="20px" mb="10px">Invoices</Typography>
          {invoiceData?.data.map((item, index) =>
              <Box className={classes.transactions_item} key={index}>
                <Typography fontSize={20} fontWeight={600} mr="20px">{index+1}</Typography>
                <Box>
                  <Typography fontSize={16} fontWeight={500}>{item?.bill_to}</Typography>
                  <Typography fontSize={16} fontWeight={500}>Invoice number - {item?.invoice_no}</Typography>
                  <Typography fontSize={18} fontWeight={600}>Amount - {item?.totalAmount}</Typography>
                  <Typography fontSize={16} fontWeight={500}>Message - {item?.product}</Typography>
                </Box>
                <a href={item?.invoice_url} rel="noreferrer" target="_blank" className={classes.landingPage_link}><Button Text="Receipt" className={classes.transactions_receipt} /></a>
              </Box>
          )}
      </Box>
    </Box>
  )
}

export default TransactionsPage