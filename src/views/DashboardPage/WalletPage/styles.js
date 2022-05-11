import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    wallet_container:{
        width : "100%",
        maxWidth: "100vw",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.white
    },
    wallet: {
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
    wallet_content1: {
        width: "100%",
        height: "100%",
        padding: "20px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: theme.palette.background.white,
        color: theme.palette.text.main,
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
    },
    wallet_balance :{
        width: "50%",
        padding: "20px",
        borderRadius: "10px",
        marginRight: "20px",
        backgroundColor: theme.palette.background.lightGrey,
        color: theme.palette.text.white
    },
    wallet_addMoney: {
        width: "50%",
        padding: "20px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.lightGrey,
        color: theme.palette.primary.main,
        cursor: "pointer",
    }
}))

export default useStyles