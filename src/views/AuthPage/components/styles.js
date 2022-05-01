import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    Login_container:{
        minWidth : "100px",
        width: "400px",
        maxHeight: "600px",
        height: "470px",
        backgroundColor: "#262626",
        padding: "20px",
        color: "#ffffff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    Login_title: {
        fontFamily: "Poppins",
        fontSize: "28px",
        fontWeight: "500",
        padding: "10px 0px 20px 0px",
    },
    Login_input: {
        width: "100%"
    },
    Login_forget: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "italic",
        fontWeight: "400",
        padding: "10px 0px 20px 0px",
        cursor: "pointer",
    },
    Login_btn: {
        width : "100%",
        fontFamily: "Poppins",
        marginTop: "20px"
    },
    Login_register: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "400",
        padding: "20px 0px 20px 0px",
        cursor: "pointer"
    }

    ,
    Signup_container:{
        minWidth : "100px",
        width: "400px",
        maxHeight: "600px",
        height: "600px",
        backgroundColor: "#262626",
        padding: "20px",
        color: "#ffffff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    Signup_title: {
        fontFamily: "Poppins",
        fontSize: "28px",
        fontWeight: "500",
        padding: "10px 0px 20px 0px",
    },
    Signup_input: {
        width: "100%"
    },
    Signup_forget: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "400",
        padding: "10px 0px 20px 0px",
        cursor: "pointer"
    },
    Signup_btn: {
        width : "100%",
        fontFamily: "Poppins",
        marginTop: "20px"
    },
    Signup_register: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "400",
        padding: "20px 0px 20px 0px",
        cursor: "pointer"
    }

}))

export default useStyles