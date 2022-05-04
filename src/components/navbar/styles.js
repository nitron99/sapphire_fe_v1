import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    navbar_container: {
        position: "absolute",
        height : "72px",
        width: "100%",
        maxWidth: "100vw",
        backgroundColor : theme.palette.background.darkGrey,
        color: theme.palette.text.main,
        fontFamily: "Poppins",
    },
    navbar: {
        width: "100%",
        height : "72px",
        display: "flex",
        paddingLeft: "30px",
        paddingRight: "30px",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Poppins",
    },
    navbar_content: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "30px",
        "& :hover": {
            color: theme.palette.text.main
        }
    },
    links:{
        textDecoration: "none",
        color: "black",
    },
    navbar_links_item: {
        padding: "10px 20px 10px 20px",
        borderRadius: "15px",
        fontWeight: "600",
        fontSize: "18px",
        backgroundColor: theme.palette.white,
        fontFamily: "Poppins",
        color: theme.palette.text.sub
       
    }
}))
