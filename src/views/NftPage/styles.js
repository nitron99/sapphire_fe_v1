import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    nftPage_container: {
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.white,
    },
    nftPage: {
        paddingTop: "72px",
        // width: "80vw",
        // height: "100%",
        backgroundColor: theme.palette.background.white,
        // margin: "auto",
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
    },
    nftPage_content1: {
        width: "100%",
        minHeight:"400px",
        height: "100%",
        marginTop: "20px",
        borderRadius: "20px",
        backgroundColor:"White",
        display:"flex", 
        flexDirection: "row",
        padding: "20px",
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
    },
    nftPage_content_img: {
        maxWidth: "40%",
        maxHeight: "670px",
        minWidth: "35%",
        fontFamily: "Poppins",
        borderRadius: "20px",
    },
    nftImg: {
        width: "100%",
        maxHeight: "670px",
        borderRadius: "10px",
    },
    nftPage_content_data: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0px 20px 20px 20px",

    },
    nftPage_content2:{ 
        width: "100%",
        height:"400px",
        // height: "100%",
        marginTop: "20px",
        borderRadius: "20px",
        backgroundColor:"White",
        display:"flex", 
        flexDirection: "column",
        padding: "20px 20px 40px 20px",
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
    },
    nftPage_content3: {
        width: "100%",
        minHeight:"200px",
        // height: "100%",
        marginTop: "20px",
        borderRadius: "20px",
        backgroundColor:"White",
        display:"flex", 
        flexDirection: "column",
        padding: "20px",
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
    },
    nftPage_form: {
        color: "#000",
        marginBottom: "30px",
        "& .MuiOutlinedInput-root": {
            '& fieldset': {
                borderColor: 'black',
                borderWidth: '2px',
            },
            '&:hover fieldset': {
                borderColor: '#08ffa0',
            },
            color : "#000",
            borderRadius: "10px",
            fontFamily: "Poppins",
        },
        "& .MuiOutlinedInput-border": {
            borderColor: "#4B0767"
        }
    },
    nftPage_label: {
        color: "#000",
        fontSize: "14px",
        fontWeight: "500"
    },
    nftPage_model_btn: {
        color: "#000",
        backgroundColor: theme.palette.primary.main,
        fontFamily: "Poppins",
        fontSize: "18px",
        borderRadius: "10px",
    },
    nftPage_content_bids: {
        width: "100%",
        padding: "15px",
        height: "80px",
        marginBottom: "15px",
        borderRadius: "10px",
        backgroundColor: theme.palette.background.lightGrey,
        color: theme.palette.white,
        display: "flex",
        flexDirection: "row",
    },
///////////////////////////////////////////////////////sell model
    sell_conatiner: {
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-evenly",
        padding: "20px",

    },
    sell_slow: {
        display:"flex",
        flexDirection:"column",
        borderRadius: "20px",
        padding: "20px",
        width:"50%",
        height:"200px",
        backgroundColor: theme.palette.background.lightGrey,
        color: theme.palette.white,
    },
    sell_fast: {
        display:"flex",
        flexDirection:"column",
        borderRadius: "20px",
        padding: "20px",
        width:"50%",
        height:"200px",
        marginRight: "30px",
        cursor: "pointer",
        backgroundColor: theme.palette.background.lightGrey,
        color: theme.palette.white,
        borderWidth: "3px",
        borderColor: theme.palette.background.lightGrey,
        borderStyle: "solid",
    },
    sell_selected: {
        color: theme.palette.primary.main,
        borderWidth: "3px",
        borderColor: theme.palette.primary.main,
        borderStyle: "solid",
    }



}))
