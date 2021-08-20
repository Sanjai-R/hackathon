import React from "react";
import { Card } from "@material-ui/core";
import InputCard from "../../components/Input";
import { CardStyles } from "./style.js";
import Button from '../../components/Button';
import { Link } from "react-router-dom";
export default function Signup() {
    const classes = CardStyles();
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.subroot}>
          <h1 style={{fontWeight:"500"}}>Login</h1>
          <InputCard text="UserName" />
          <InputCard text="Password" />
          <Button text="Sign in your Account" width="95%" padding="10px 20px" />
          <hr style={{margin:"15px 50px",width:"80%"}}/>
          <p style={{textAlign:"center",margin:"10px"}}>OR</p>
          <Link to="/Signup" className={classes.txt_btn}>
            Create your free account
          </Link>
        </div>
      </Card>
    </>
  );
}
