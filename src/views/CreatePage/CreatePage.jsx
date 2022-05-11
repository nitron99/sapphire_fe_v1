import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography, Checkbox} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NftUploader } from "../../store/actions/NftAction";
import InputField from '../../components/formElements/InputField/InputField';
import Button from "../../components/formElements/button/Button";
import { creatNFTvalidator } from '../../validators/createNFTvalidator';

// const Input = styled('input')({
//     display: 'none',
//   });

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = {image: "", name: "" , startingPrice: ""}

const CreatePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgData = new FormData();
  const [image, setImage] = useState("")
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(data);
  const { nftresponse } = useSelector((state) => (state.nft))
  const [enableCreate, setEnableCreate] = useState(false);
  const [fileName, setFileName] = useState("");

  const onUploadHandler = (e) => {
      console.log(e.target.files[0]);
      setFileName(e.target.files[0].name)
      setImage(e.target.files[0])
    }

  const uploader = () => {
    const { errors, isValid } = creatNFTvalidator(formData);
    setErrors(errors)
    if (isValid) {
      imgData.append("image", image );
      imgData.append("startingPrice", formData.startingPrice)
      imgData.append("name", formData.name )
      console.log(imgData.has("image"))
      dispatch(NftUploader(imgData, navigate))
      setEnableCreate(false);
    }
  }

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setEnableCreate(true);
    setErrors({});
  }

  return (
    <Box className={classes.create_container}>
      <Box className={classes.create}>
        <Box className={classes.create_content}>
          <Box className={classes.create_left}>  
          <label htmlFor="inputTag">
                    <Box className={classes.create_upload_btn}>
                      <Typography fontSize={30} fontWeight={600}>Upload Image</Typography>
                      <input type="file" id="inputTag" onChange={(e) => onUploadHandler(e)} accept="image/*"
                      />
                    </Box>
                    <Typography fontSize={18} fontWeight={600}>{fileName}</Typography>
                  </label>
            
          </Box>
          <Divider orientation='vertical' flexItem />
          <Box className={classes.create_right}  >
          <InputField 
                name="name" 
                label="Name of NFT" 
                value={formData.name} 
                onChange={onChangeHandler} 
                classField={classes.create_form} 
                classLabel={classes.create_label}
                error={errors.name}
                />
              <InputField 
                name="startingPrice" 
                label="Starting Price" 
                value={formData.startingPrice} 
                onChange={onChangeHandler} 
                classField={classes.create_form}  
                classLabel={classes.create_label}
                error={errors.startingPrice}
                />
             
              <Box display="flex" flexDirection="row" maxHeight="42px" alignItems="center">
                {/* <Checkbox {...label} className={classes.create_check} /> */}
                {/* <Typography fontStyle="italic" >accepting the terms and conditions</Typography> */}
              </Box>
              <Button onClick={uploader} Text="Create NFT" disabled={!enableCreate}/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CreatePage