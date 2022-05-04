import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    create_container:{
        width : "100%",
        maxWidth: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.whites
    },
    create: {
        paddingTop: "72px",
        width : "80vw",
        height: "100%",
        margin: "auto",
    },
    create_content: {
        width: "100%",
        height: "500px",
        padding: "40px",
        borderRadius: "20px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "row",
        backgroundColor:"White",
    },
    create_left: {
        width: "50%",
        height: "100%",
    },
    create_right: {
        width: "50%",
        height: "100%",
        paddingLeft:"40px",
    },
    create_form: {
        color: "#000",
        "& .MuiOutlinedInput-root": {
            '& fieldset': {
                borderColor: 'black',
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
    create_check: {
        color: "#000",
        "&.Mui-checked": {
          color: "#08ffa0"
        }
    },
    create_label: {
        color: "#000"
    }
}))

export default useStyles