import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    create_container:{
        width : "100vw",
        height: "100vh",
    },
    create: {
        paddingTop: "72px",
        width : "80vw",
        height: "600px",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
    },
    create_left: {
        width: "50%",
        height: "100%",
       
    },
    create_right: {
        width: "50%",
        height: "100%",
       
    },
    create_form: {
        color: "#000"
    },
    create_label: {
        color: "#000"
    }
}))

export default useStyles