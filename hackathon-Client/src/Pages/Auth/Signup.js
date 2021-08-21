import React, { useState } from "react";
import { Card } from "@material-ui/core";
import InputCard from "../../components/Input";
import { CardStyles } from "./style.js";
import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../utils/baseUrl";
import { useDispatch } from "react-redux";
import { logout, auth } from "../../redux/Actions/Actiontype";
export default function Signup() {
  const classes = CardStyles();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const registerHandller = () => {
    if (
      username.length > 0 &&
      fullname.length > 0 &&
      email.length > 0 &&
      password.length > 0
    ) {
      const data = {
        username,
        fullname,
        email,
        password,
      };

      axios
        .post(`${baseurl}/auth/register`, data)
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("token", res.data.accesstoken);
            dispatch({ type: auth, data: res.data });
            history.push("/");
          } else {
            alert(res.data.desc);
          }
        })
        .catch((err) => {
          alert("Something Went Wrong! Try Again");
        });
    } else {
      alert("All Fields Are Required");
    }
  };

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.subroot}>

         
          
          <h1 className={classes.title}>Signup</h1>
          <InputCard
            text="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputCard
            text="FullName"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <InputCard
            text="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputCard
            text="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            text="Sign in your Account"
            width="95%"
            padding="15px 5px"
            onClick={registerHandller}
          />

          <hr style={{ margin: "20px", width: "90%" }} />
          <p style={{ textAlign: "center", margin: "10px" }}>OR</p>
          <Link to="/Signin" className={classes.txt_btn}>
            Already have an account
          </Link>
        </div>
      </Card>
    </>
  );
}
