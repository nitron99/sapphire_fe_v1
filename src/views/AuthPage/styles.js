import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    AuthPage_container:{
        width : "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}))

export default useStyles