import React from 'react';
import useStyles from "./styles";
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from "../../components/navbar/NavBar";
import InputField from '../../components/formElements/InputField/InputField';

const Input = styled('input')({
    display: 'none',
  });


const CreatePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box className={classes.create_container}>
      <NavBar />
      <Box className={classes.create}>
        <Box className={classes.create_left}>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
        </Box>
        <Divider orientation='vertical' flexItem sx={{backgroundColor: "#000"}}/>
        <Box className={classes.create_right}>
            {/* Form
             - Name
             - Starting Prize (need some popups to address querys) */} 
             <InputField label="Name" classField={classes.create_form} classLabel={classes.create_label}/>
             <InputField label="Starting Price" classField={classes.create_form}  classLabel={classes.create_label}/>

        </Box>
      </Box>
    </Box>
  )
}

export default CreatePage