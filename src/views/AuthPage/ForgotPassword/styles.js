import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    Forgot_container:{
        minWidth : "100px",
        width: "400px",
        maxHeight: "600px",
        height: "350px",
        backgroundColor: "#262626",
        padding: "20px",
        color: "#ffffff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    Forgot_title: {
        fontFamily: "Poppins",
        fontSize: "28px",
        fontWeight: "500",
        padding: "10px 0px 20px 0px",
    },
    Forgot_input: {
        width: "100%"
    },
    Forgot_btn: {
        width : "100%",
        fontFamily: "Poppins",
        marginTop: "20px"
    },
    Forgot_back: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "400",
        padding: "10px 0px 20px 0px",
        cursor: "pointer"
    },

}))

export default useStyles