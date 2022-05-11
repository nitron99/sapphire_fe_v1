import { BorderStyle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    create_container:{
        width : "100%",
        maxWidth: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.white
    },
    create: {
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
    },
    create_content: {
        width: "100%",
        height: "450px",
        padding: "40px",
        borderRadius: "20px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "row",
        backgroundColor:"white",
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
        color: theme.palette.text.main
    },
    create_left: {
        width: "50%",
        height: "100%",
        marginRight: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& #inputTag": {
            display: "none"
        },
        "& label": {
            display: "flex",
            flexDirection: "column"
        }
       
    },
    
    create_upload_btn: {
        borderStyle: "dashed",
        borderWidth:"3px",
        borderRadius: "10px",
        borderColor: theme.palette.primary.dark,
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    create_right: {
        width: "50%",
        height: "100%",
        paddingLeft:"40px",
        paddingBottom: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      
    },
    create_form: {
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
    create_check: {
        color: "#000",
        "&.Mui-checked": {
          color: "#08ffa0"
        }
    },
    create_label: {
        color: "#000",
        fontSize: "14px",
        fontWeight: "500"
    }
}))

export default useStyles