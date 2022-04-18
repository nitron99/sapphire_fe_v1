import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette:{
        primary: {
            main: "#000",
        }
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
    }
});

export const darkTheme = createTheme({
    palette:{
        primary: {
            main: "#fff",
        }
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
    }
});