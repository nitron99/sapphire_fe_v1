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
}))

export default useStyles