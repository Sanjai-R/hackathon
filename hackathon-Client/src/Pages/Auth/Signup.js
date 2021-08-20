import React from "react";
import { Card } from "@material-ui/core";
import InputCard from "../../components/Input";
import { CardStyles } from "./style.js";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
export default function Signup() {
  const classes = CardStyles();
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.subroot}>
          <h1 className={classes.title}>Signup</h1>
          <InputCard text="UserName" />
          <InputCard text="FullName" />
          <InputCard text="Email Address" />
          <InputCard text="Password" />
          <Button text="Sign in your Account" width="95%" padding="15px 10px" />
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
