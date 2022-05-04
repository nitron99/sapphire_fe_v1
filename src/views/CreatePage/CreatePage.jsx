import React, {useState} from 'react';
import useStyles from "./styles";
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography, Checkbox} from '@mui/material';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NftUpload } from "../../store/actions/NftAction";
import NavBar from "../../components/navbar/NavBar";
import InputField from '../../components/formElements/InputField/InputField';
import Button from "../../components/formElements/button/Button";

const Input = styled('input')({
    display: 'none',
  });

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CreatePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgData = new FormData();
  const [formData, setFormData] = useState();

  const onUploadHandler = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
        imgData.append("image", e.target.files[0]);
        imgData.append("startingPrice", "500");
        imgData.append("name", "sample1");
    }
  }

  const uploader = () => {
    console.log("click")
    dispatch(NftUpload(imgData))
  }

  return (
    <Box className={classes.create_container}>
      <NavBar />
      <Box className={classes.create}>
        <Box className={classes.create_content}>
          <Box className={classes.create_left}>
              {/* <label htmlFor="contained-button-file"> */}
                  {/* <Input accept="image/*" id="contained-button-file" multiple onChange={onUploadHandler} type="file" /> */}
                  <input type="file" id="profileImg" onChange={onUploadHandler} accept="image/*" />
                  {/* <Button variant="contained" component="span" onClick={uploader}>
                      Upload
                  </Button> */}
              {/* </label> */}
          </Box>
          <Divider orientation='vertical' flexItem />
          <Box className={classes.create_right}>
              <InputField label="Name of NFT" classField={classes.create_form} classLabel={classes.create_label}/>
              <InputField label="Starting Price" classField={classes.create_form}  classLabel={classes.create_label}/>
              <Checkbox {...label} className={classes.create_check} />
              <Button onClick={uploader} Text="Create NFT"/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CreatePage