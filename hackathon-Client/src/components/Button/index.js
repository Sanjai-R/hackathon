import React from 'react'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function CustomButton({text,onClick,width,padding,fsize,height}) {
  const btnStyles = makeStyles((theme) => {
    return {
      btn: {
        backgroundColor: "#16191f",
        color: "#fff",
        borderRadius: "5px",
        padding: `${padding}`,
        height: `${height}`,
        width: `${width}`,
        fontSize: `${fsize?fsize:"18px"}`,
        textTransform: "uppercase",
        fontWeight: 600,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#16191f"
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "14px"
        },
        transition:
          "color 0.15s ease-in-out, background-color 0.15s ease-in-out,border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
      }
    };
  });

    const styles = btnStyles();
    return (
      <Button onClick={onClick} className={styles.btn}  >
        {text}
      </Button>
    );
}
