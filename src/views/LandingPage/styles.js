import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    landingPageContainer: {
        width: "100%",
        height: "100vh",
        backgroundColor: "#5e5e5e",
    },
    landingPage: {
        paddingTop: "72px",
        width: "80vw",
        height: "100%",
        backgroundColor: "#5e5e5e",
        margin: "auto"
    },
    landingPage_topContent: {
        backgroundColor: "white",
        width: "100%",
        height: "600px",
        borderRadius: "30px",
        padding: "50px",
        margin: "30px 0px 30px 0px",

    },
    landingPage_topContentLeft: {
        width: "60%",
        height: "100%",
        borderRadius: "20px",
        display: "flex",
        flexDirection:"column",
        alignItems:"start",
        justifyContent: "center",
    },
    landingPage_bottomContent: {
        backgroundColor: "white",
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
        fontSize: "20px"
    },
    landingPage_link: {
        textDecoration: "none"
    }
}))
