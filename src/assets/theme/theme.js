import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette:{
        primary: {
            main: "#00e6ac",
            dark: "#00cc99"
        },
        text: {
            main: "#000000",
            sub: "#4a4a4a",
            dark: "#000",
            white: "#fff",
        },
        background: {
            white: "#ffffff",
            border: "#4a4a4a",
            lightGrey: "#333333",
            // darkGrey: "#262626",
            darkGrey: "#fff",
        },
        white: "#fff",

    },

    breakpoints: {
        values: {
          xs: 300,
          sm: 600,
          md: 800,
          lg: 1000,
          xl: 1299,
          xxl: 1536,
        },
    },


    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    elevation: 0,
                    shadow: "0",
                    textTransform: "none",
                    // background: "linear-gradient(to bottom, #439cee 0%, #0e8bff 0%, #0b75f0 100%)",
                    fontSize: "14px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    boxShadow: "0 0 5px 1px rgba(219, 219, 219, 0.25)",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Poppins"
                },
            },
        },
    }
});

export const darkTheme = createTheme({
    palette:{
        primary: {
            main: "#fff",
        }
    },

    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 800,
          lg: 1400,
          xl: 1536,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    elevation: 0,
                    shadow: "0",
                    textTransform: "none",
                    // background: "linear-gradient(to bottom, #439cee 0%, #0e8bff 0%, #0b75f0 100%)",
                    fontSize: "14px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    boxShadow: "0 0 5px 1px rgba(219, 219, 219, 0.25)",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Poppins"
                },
            },
        },
    }
});