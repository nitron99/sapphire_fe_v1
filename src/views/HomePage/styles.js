import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    homepage_container:{
        width : "100%",
        maxWidth: "100vw",
        height: "100%",
        backgroundColor: theme.palette.background.white
    },
    homepage: {
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
    homepage_row1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        overflow: "auto",
        paddingBottom: '20px'

    },
    homepage_row2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        overflow: "auto",
        paddingBottom: '20px'

    },
    homepage_row3: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        overflow: "auto",
        paddingBottom: '20px'

    },

}))

export default useStyles