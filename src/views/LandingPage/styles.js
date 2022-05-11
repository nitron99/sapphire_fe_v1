import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    landingPageContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.white,
    },
    landingPage: {
        paddingTop: "72px",
        width: "1300px",
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
        height: "100%",
        padding: "20px",
        // backgroundColor: "#5e5e5e",
        backgroundColor: theme.palette.background.white,
        margin: "auto"
    },
    landingPage_topContent: {
        backgroundColor: theme.palette.background.white,
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "row",
    },
    landingPage_topContentLeft: {
        width: "45%",
        height: "100%",
        borderRadius: "20px",
        display: "flex",
        flexDirection:"column",
        alignItems:"start",
        justifyContent: "center",
    },
    landingPage_topContentRight: {
        width: "55%",
        height: "100%",
        borderRadius: "20px",
        display: "flex",
        flexDirection:"column",
    },
    landingPage_mainImage: {
        borderRadius: "20px",
        marginTop:"100px",
        boxShadow: "0 10px 15px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    landingPage_solana: {
        backgroundColor: theme.palette.background.lightGrey,
        color: theme.palette.text.white,
        width: "100%",
        height: "120px",
        borderRadius: "30px",
        margin: "30px 0px 30px 0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding:"30px",
    },
    landingPage_text1: {
        fontFamily: "Poppins",
    },
    landingPage_exploreBtn: {
        fontFamily: "Poppins",
        backgroundColor: "#5e5e5e",
        padding: "15px 30px 15px 30px",
        borderRadius: "15px",
        fontSize: "20px",
        color:"white"
    },
    landingPage_link: {
        textDecoration: "none"
    },
    landingPage_bottomContent1: {
        backgroundColor: theme.palette.background.white,
        color: theme.palette.text.main,
        width: "100%",
        height: "600x",
        borderRadius: "30px",
        margin: "30px 0px 30px 0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding:"30px",
    },
    landingPage_bottomContent2: {
        backgroundColor: theme.palette.background.lightGrey,
        color: theme.palette.text.white,
        width: "100%",
        height: "600x",
        borderRadius: "30px",
        margin: "30px 0px 30px 0px",
        display: "flex",
       
        padding:"30px",
    }
}))
