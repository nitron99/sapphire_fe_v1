import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    favourites_container:{
        width : "100%",
        maxWidth: "100vw",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.white
    },
    favourites: {
        paddingTop: "72px",
        width : "1300px",
        [theme.breakpoints.down('xl')] : {
            width: "1000px",
        },
        [theme.breakpoints.down('lg')] : {
            width: "800px",
        },
        [theme.breakpoints.down('md')] : {
            width: "600px",
        },
        [theme.breakpoints.down('sm')] : {
            width: "80%",
        },
        padding: "20px",
        height: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
    },
    favourites_content: {
        width: "100%",
        height: "100%",
        padding: "20px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: theme.palette.background.lightGrey,
        color: theme.palette.text.main
    },
    favourites_list_item: {
        width: "100%",
        padding: "10px",
        borderRadius: "20px",
        marginBottom: "40px",
        display: "flex",
        flexDirection: "row",
        backgroundColor:"white",
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
        color: theme.palette.text.main
    },
    favourites_img: {
        maxWidth: "40%",
        maxHeight: "400px",
        overflow: "hidden",
        objectFit: "contain",
    },
    nft_Image : {
        width: "100%",
        maxHeight: "400px",
        height: "100%",
        borderRadius: "10px"
    },
    favourites_item_content: {
        width: "60%",
        height: "100%",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "column"
      
    },
    
}))

export default useStyles