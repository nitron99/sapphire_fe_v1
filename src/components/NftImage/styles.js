import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    nftImage_container: {
        position: "relative",
        height : "100%",
        width: "375px",
        backgroundColor : theme.palette.background.white,
        color: theme.palette.text.main,
        fontFamily: "Poppins",
        marginRight: "20px",
        borderRadius: "20px",
        padding: "10px",
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
    },
    nft_Image_container: {
        width: "100%",
        height : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    nft_Image : {
        width: "350px",
        maxHeight: "490px",
        borderRadius: "10px"
    },
    nft_content: {
        paddingTop: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    nft_icon_red: {
        color: "red",
    }
}))
