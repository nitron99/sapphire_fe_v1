import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        height: "56px",
        width: "100%",
        borderRadius: "10px",
        fontFamily: "Poppins",
        fontSize: "18px",
        marginTop: "20px",
        backgroundColor: "#2d009e",
        boxShadow: "none",
        "& 	.MuiButton-outlined":{
            boxShadow: "none",
        }
    }
}))

export default useStyles