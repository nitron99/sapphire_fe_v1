import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import * as actionTypes from "../../store/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent, DialogContentText, IconButton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Close from "@mui/icons-material/Close";
import InputField from "../../components/formElements/InputField/InputField";
import { CreateBid } from "../../store/actions/TradeAction";

const Data = { artId: "" ,biddingAmount: ""};

const BidModel = ({open, setOpen, title, id}) => {
  const scroll = "paper";
  const classes = useStyles();
  const dispatch = useDispatch();
  const [enableSave, setEnableSave] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { bidData } = useSelector((state) => (state.trade)) 
  const [formData, setFormData] = useState(Data);

  const handleClose = () => {
    setOpen(false);
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
    e.preventDefault();
    if (enableSave) {
    //   console.log(id);
    //   console.log(formData.biddingAmount)
      setErrors(errors);
      setEnableSave(false);
      dispatch(CreateBid({ ...formData, artId: id}))
    }
    setEnableSave(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setEnableSave(true);
    setLoading(false);
  };

  return (
    <Dialog open={open} fullWidth
    maxWidth="xs" onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
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
            <InputField 
                name="biddingAmount" 
                label="Enter Bid Amount" 
                value={formData.biddingAmount} 
                onChange={handleChange} 
                classField={classes.nftPage_form} 
                classLabel={classes.nftPage_label}
                error={errors.biddingAmount}
                />
              <LoadingButton
                onClick={handleSubmit}
                fullWidth={true}
                type="submit"
                loading={loading}
                disabled={!enableSave}
                variant="contained"
                className={classes.nftPage_model_btn}
              >
                Place Bid
              </LoadingButton>
            
          {/* </form> */}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default BidModel;
