import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    navbar_container: {
        position: "absolute",
        height : "72px",
        width: "100%",
        backgroundColor : "#262626",
        color: "#ffffff",
        fontFamily: "Poppins",
    },
    navbar: {
        width: "80vw",
        height : "72px",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Poppins",
    },
    navbar_content: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    links:{
        textDecoration: "none",
        color: "black",
    },
    navbar_links:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "0px 50px 0px 50px",
        gap: "10px",
        "& :hover": {
            backgroundColor: "#fff",
            borderRadius: "10px",
        }
       
    },
    navbar_links_item: {
        padding: "10px 20px 10px 20px",
        borderRadius: "15px",
        backgroundColor: "#353b37",
        fontFamily: "Poppins"
       
    }
}))
