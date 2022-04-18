import './App.css';
import Router from "./routes/routes";
import React, { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./assets/theme/theme";
import { useSelector } from 'react-redux';

const App = () => {

  // const contact = useSelector((state) => {
  //   return state.darkMode.darkmode;
  // });

  // const [theme, setTheme] = useState(contact);
  // useEffect(() => {
  //   setTheme(localStorage.getItem("darkmode"));
  // }, [contact]);
  // console.log(theme ? lightTheme : darkTheme);
  // console.log(theme);


  return(
    <ThemeProvider theme={lightTheme}>
      <StyledEngineProvider injectFirst>
        <Router />
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default App