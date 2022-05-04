import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    footer_container: {
        position: "relative",
        maxHeight : "600px",
        width: "100%",
        maxWidth: "100vw",
        backgroundColor : theme.palette.primary.dark,
        color: theme.palette.text.white,
    },
    footer: {
        width: "100%",
        height: "100%",
        padding: "30px",
        fontFamily: "Poppins",
    },
    footer_content: {
        width: "80vw",
        height: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
    },
    footer_contentLeft: {
        width: "40%",
        height: "400px",
        paddingRight: "100px",
        paddingTop: "50px",
        
    },
    footer_contentRight: {
        width: "60%",
        height: "400px",
        display: "flex",
        flexDirection: "row",
    },
    footer_contentRight_col1: {
        width: "50%",
        height: "400px",
    },
    footer_contentRight_col2: {
        width: "50%",
        height: "400px",
    }
    
}))
