import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../../components/Button";
import axios from "axios";
import { logout, auth } from "../../redux/Actions/Actiontype";
import { baseUrl } from "../../utils/baseUrl";
import { useSelector, useDispatch } from "react-redux";
import { IconButton, Drawer, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
      padding: "10px 5%",
    },
  },
}));

export default function MenuAppBar() {
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);
  const user = useSelector((state) => state.user.authData);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${baseUrl}/auth/get-user-by-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          dispatch({ type: auth, data: res.data });
        }
      });
    // eslint-disable-next-line
  }, []);
  const classes = useStyles();
  const drawerList = [
    { text: "Home", slug: "/" },
    { text: "Books", slug: "/books" },
    { text: "Stationary", slug: "/stationary" },
    { text: "Dashboard", slug: "/DashBoard" },
  ];

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <h2>ShoppingCaring</h2>
        <div className={styles.menuIco}>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon style={{ color: "#000" }} />
          </IconButton>
        </div>
        <div className={styles.nav_items}>
          {drawerList.map((item, i) => {
            return (
              <Link key={i} to={item.slug} className={styles.link_items}>
                <p>{item.text}</p>
              </Link>
            );
          })}

          {user != null ? (
            <>
              <Link to={"/Signin"}>
                <Button
                  text="Logout"
                  fsize="16px"
                  padding="3px 20px"
                  onClick={() => {
                    dispatch({ type: logout });
                  }}
                />
              </Link>
              <img
                src={user.avatar}
                alt={user.fullname}
                width="50"
                height="50"
                style={{ borderRadius: "100%" }}
              />
            </>
          ) : (
            <Link to={"/Signin"}>
              <Button text="Login" fsize="16px" padding="3px 20px" />
            </Link>
          )}
        </div>
      </AppBar>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className={styles.drawerRoot}>
          {user != null && (
            <img
              src={user.avatar}
              alt={user.fullname}
              width="50"
              height="50"
              style={{ borderRadius: "100%" }}
            />
          )}
          {drawerList.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <Link
                  key={i}
                  to={item.slug}
                  className={styles.drawer_link_items}
                >
                  <p>{item.text}</p>
                </Link>
                <Divider />
              </React.Fragment>
            );
          })}
          <div className={styles.drawer_btn}>
            {user != null ? (
              <Link to={"/Signin"}>
                <Button
                  text="Logout"
                  fsize="16px"
                  padding="3px 20px"
                  onClick={() => {
                    dispatch({ type: logout });
                  }}
                />
              </Link>
            ) : (
              <Link to={"/Signin"}>
                <Button text="Login" fsize="16px" padding="3px 20px" />
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
}
