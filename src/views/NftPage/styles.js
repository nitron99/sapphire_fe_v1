import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    nftPage_container: {
        width: "100%",
        height: "100%",
        // backgroundColor: "#5e5e5e",
        backgroundColor: "#333333",
    },
    nftPage: {
        paddingTop: "72px",
        width: "80vw",
        height: "100%",
        backgroundColor: "#333333",
        margin: "auto"
    },
    nftPage_content: {
        width: "100%",
        height:"600px",
        marginTop: "20px",
        borderRadius: "20px",
        backgroundColor:"White",
        display:"flex", 
        flexDirection: "row",
        padding: "20px",
    },
    nftPage_content_img: {
        width: "400px",
        overflow: "hidden",
        fontFamily: "Poppins",
        borderRadius: "20px",
    },
    nftImg: {
        width: "800px",
        height: "80%",
        // borderRadius: "20px",
    },
    nftPage_content_data: {
        display: "flex",
        flexDirection: "column",

    }
}))
