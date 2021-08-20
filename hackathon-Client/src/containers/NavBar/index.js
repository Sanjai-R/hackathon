import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../../components/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    height: "80px",
    boxShadow: "rgba(50, 50, 50, 0.204) 0px 1px 10px 0px",
    color: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px 8%",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "10px 10%"
    }
  }
}));

export default function MenuAppBar() {
  
  const classes = useStyles();
  const drawerList = [
    { text: "Home", slug: "/" },
    { text: "Books", slug: "/books" },
    { text: "Stationary", slug: "/stationary" },
    { text: "Chat", slug: "/chat" }
  ];
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <h2>ShoppingCaring</h2>
        <div className={styles.nav_items}>
          {drawerList.map((item, i) => {
            return (
              <Link key={i} to={item.slug} className={styles.link_items}>
                <p>{item.text}</p>
              </Link>
            );
          })}
          <Link to={"/Signin"}>
            <Button text="Login" fsize="16px" padding="3px 20px" />
          </Link>
        </div>
      </AppBar>
    </>
  );
}
