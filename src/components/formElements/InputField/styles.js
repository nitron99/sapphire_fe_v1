import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    input_label:{
        fontFamily: "Poppins",
        color: "#ffffff",
        margin: "10px 0px 5px 0px"
    },
    input: {
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": {
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            color : "#ffffff",
            borderRadius: "10px",
            fontFamily: "Poppins",
        },
        "& .MuiOutlinedInput-border": {
            borderColor: "#4B0767"
        }

    }
}))

export default useStyles