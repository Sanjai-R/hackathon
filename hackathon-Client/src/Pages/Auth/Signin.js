import React, { useState } from "react";
import { Card } from "@material-ui/core";
import InputCard from "../../components/Input";
import { CardStyles } from "./style.js";
import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../utils/baseUrl";
import { logout, auth } from "../../redux/Actions/Actiontype";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const CustomToast = ({ text }) => {
  return (
    <div>
      <h4>{text}</h4>
    </div>
  );
};
toast.configure();
export default function Signup() {
  const classes = CardStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const hisrory = useHistory();
  const loginHandller = () => {
    if (username.length > 0 && password.length > 0) {
      const data = {
        username: username,
        password: password
      };
      axios
        .post(`${baseurl}/auth/login`, data)
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("token", res.data.accesstoken);
            dispatch({ type: auth, data: res.data });
            hisrory.push("/");
          } else {
            notify(res.data.desc);
          }
        })
        .catch((err) => {
          notify("Something went wrong")
        });
    } else {
      notify("All fields are required");
    }
  };
  const notify = (text) => {
    toast.info(<CustomToast text = {text} />, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.subroot}>
          <h1 style={{ fontWeight: "500" }}>Login</h1>
          <InputCard
            text="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputCard
            text="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            text="Sign in your Account"
            width="92%"
            padding="10px 1%"
            margin="20px 4%"
            onClick={loginHandller}
          />
          <hr style={{ width: "100%" }} />
          <p style={{ textAlign: "center", margin: "10px" }}>OR</p>
          <div className={classes.txt_btn}>
            <Link to="/Signup" className={classes.txt_btn}>
              Create your free account
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
}
