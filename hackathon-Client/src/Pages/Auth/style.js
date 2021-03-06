import { makeStyles } from "@material-ui/core/styles";
export const CardStyles = makeStyles((theme) => {
  return {
    root: {
      width: "500px",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0px 0px 12px #00000029",
      borderRadius: "10px",
      opacity: 1,
      marginTop: "40px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      [theme.breakpoints.down("sm")]: {
        width: "300px",
        margin: "5% 0px"
      }
    },
    txt_btn: {
      fontWeight: "500",
      fontSize: "24px",
      width: "100%",
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px"
      }
    },
    subroot: {
      margin: "20px"
    },
    title: {
      fontWeight: "600",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px"
      }
    }
  };
});
