// const LayoutStyles = (theme) => ({
//     mainContainer: {
//       display: "flex",
//       height: "100vh",
//       backgroundColor: "#F5F5F5",
//     },
//     drawerPaper: {
//       width: 240,
//       boxSizing: "border-box",
//       backgroundColor: "#2A2927",
//       color: "white",
//     },
//     drawerHeader: {
//       borderBottom: "2px solid #3D3D4E",
//       textAlign: "center",
//       paddingY: 2,
//       backgroundColor: "#2A2927",
//     },
//     mainMenu: {
//       color: "#FFFFFFB3",
//       paddingY: 2,
//       "&:hover": { backgroundColor: "#FFFFFF33" },
//     },
//     appBar: {
//       backgroundColor: "#DCDCDC",
//       height: "50px",
//       boxShadow: "none",
//       borderBottom: "1px solid #CCCCCC",
//     },
//     toolbar: {
//       minHeight: "50px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     },
//     pageContent: {
//       flexGrow: 1,
//       transition: "filter 0.3s",
//       padding: 2,
//       overflowY: "auto",
//     },
//     blurred: {
//       filter: "blur(5px)",
//     },
//   });

//   export default LayoutStyles;


const LayoutTheme = (theme) => ({
    mainContainer: {
        marginLeft: "240px",
        display: "flex",
        height: "100vh",
        backgroundColor: "#F5F5F5",
    },
    drawerPaper: {
        "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#2A2927",
            color: "white",
        },
    },
    drawerHeader: {
        borderBottom: "2px solid #3D3D4E",
        textAlign: "center",
        padding: "16px 0",
        backgroundColor: "#2A2927",
    },
    appBar: {
        backgroundColor: "#DCDCDC",
        height: "50px",
        boxShadow: "none",
        borderBottom: "1px solid #CCCCCC",
    },
    toolbar: {
        minHeight: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconButton: {
        color: "black",
    },
    pageContent: {
        flexGrow: 1,
        transition: "filter 0.3s",
        padding: 2,
        overflowY: "auto",
    },
    blurred: {
        filter: "blur(5px)",
    },
});

export default LayoutTheme;
