import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    dashboard_container:{
        width : "100%",
        maxWidth: "100vw",
        height: "100%",
        backgroundColor: theme.palette.background.white
    },
    dashboard: {
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
    dashboard_Img: {
        width: "100%",
        height: "250px",
        borderRadius: "20px",
        marginTop: "30px",
        backgroundColor:"white",
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
        color: theme.palette.text.main
    },
    dashboard_background: {
        width: "100%",
        height: "245px",
        borderRadius: "20px",
        backgroundColor: "#e3e3e3"
    },
    dashboard_profile: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        backgroundColor: "black",
        position: "absolute",
        top: "-80px",

    },
    dashboard_verified: {
        width: "200px",
        marginTop: "100px",
        height: "100px",
        borderRadius: "20px",
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
        color: theme.palette.text.main,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    dashboard_formContainer: {
        width: "900px",
        margin: "auto",
        display: "flex",
        flexDirection: 'row',
        position: "relative",
        marginBottom: "50px"
    },
    dashboard_formContainerLeft: {
        width: "300px",
    },
    dashboard_formContainerRight: {
        width: "600px",
    },
    dashboard_form: {
        color: "#000",
        marginBottom: "20px",
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
    dashboard_label: {
        color: "#000",
        fontSize: "14px",
        fontWeight: "500"
    },
    dashboard_manage: {
        width: "1000px",
        margin: "auto",
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: theme.palette.background.lightGrey,
        color: theme.palette.text.white
    },
    dashboard_manageContainer: {
        display:"flex",
        flexDirection:"row",
        "& :hover": {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
        }
    },   
    dashboard_manageItems: {
        width: "100%",
        height: "100px",
        margin: "20px",
        cursor: "pointer",
        borderRadius: "20px",
        borderWidth:"3px",
        borderColor: theme.palette.background.border,
        borderStyle:"solid" ,
        color: theme.palette.text.white,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
}))

export default useStyles