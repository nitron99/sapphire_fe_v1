import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import clsx from "clsx";
import * as actionTypes from "../../store/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent, DialogContentText, IconButton, Box, Typography} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Close from "@mui/icons-material/Close";
import { CreateTrade } from "../../store/actions/TradeAction";

const Data = { bid: ""};

const SellModel = ({open, setOpen, title, id, artId, amount}) => {
  const scroll = "paper";
  const classes = useStyles();
  const dispatch = useDispatch();
  const [enableSave, setEnableSave] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { bidData } = useSelector((state) => (state.trade)) 
  const [formData, setFormData] = useState(Data);
  const [selected, setSelected] = useState(-1);

  const handleClose = () => {
    setOpen(false);
    setSelected(-1)
    setEnableSave(false)
  };

  const descriptionElementRef = React.useRef(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
    setEnableSave(false);
    setLoading(false);
    setErrors({});
  }, [open]);

//   useEffect(() => {
//     if (passwordChange !== null) {
//       if (passwordChange?.success) {
//         setLoading(false);
//       }
//     }
//   }, [passwordChange]);

  const handleSubmit = (e) => {
    if (enableSave) {
        if(selected === 0)
        {
            setTimeout(() => {  
                setLoading(true)
                setFormData({...formData, buyer: id , artId: artId, transaction: amount})
                console.log(formData)
                dispatch(CreateTrade(formData, setLoading))
             }, 2000);
        }else{
            setTimeout(() => {  
                setLoading(true)
                setFormData({...formData, buyer: id , artId: artId, transaction: amount})
                console.log(formData)
                dispatch(CreateTrade(formData, setLoading))
            }, 1000);
            // dispatch(CreateTrade(formData, setLoading))
        }
    }
    setEnableSave(false);
  };

  const onSelectHandler = (e) => {
    setSelected(e)
    setEnableSave(true);
  }

  return (
    <Dialog open={open} fullWidth
    maxWidth="md" onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
      <DialogTitle id="scroll-dialog-title">
        {title}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 12,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers={scroll === "paper"}>
        <DialogContentText sx={{ whiteSpace: "pre-wrap" }} id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
          {/* <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }} className={classes.changepwd_form}> */}
          <Typography fontSize={20} fontWeight={600} color="#000">Select Gas Price</Typography>
           <Box className={classes.sell_conatiner}>
            <Box 
                onClick={() => onSelectHandler(0)}
                className={clsx(classes.sell_fast, {
                    [classes.sell_selected]:selected === 0
                  })}>
                <Typography fontSize={20} fontWeight={600}>Fast</Typography>
                <Typography fontSize={16} fontWeight={500}>{amount}</Typography>
            </Box>
            <Box 
                onClick={() => onSelectHandler(1)}
                className={clsx(classes.sell_fast, {
                    [classes.sell_selected]:selected === 1
                })}>
                <Typography fontSize={20} fontWeight={600}>Slow</Typography>
                <Typography fontSize={16} fontWeight={500}>{amount}</Typography>
            </Box>
           </Box>

              <LoadingButton
                onClick={handleSubmit}
                fullWidth={true}
                type="submit"
                loading={loading}
                disabled={!enableSave}
                variant="contained"
                className={classes.nftPage_model_btn}
              >
                Sell
              </LoadingButton>
            
          {/* </form> */}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default SellModel;
