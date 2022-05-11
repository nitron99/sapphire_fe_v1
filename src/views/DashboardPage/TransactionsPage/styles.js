import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    transactions_container:{
        width : "100%",
        maxWidth: "100vw",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.white
    },
    transactions: {
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
    transactions_item: {
        width: "100%",
        padding: "15px",
        height: "135px",
        marginBottom: "20px",
        borderRadius: "20px",
        backgroundColor: theme.palette.background.white,
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
        color: theme.palette.text.main,
        display: "flex",
        flexDirection: "row",

    },
    transactions_receipt: {
        width: "120px",
        marginLeft: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "20px"
    },
    landingPage_link: {
        textDecoration: "none",
        marginLeft: "auto",
        marginTop: "auto",
        marginBottom: "auto",
    },
}))

export default useStyles