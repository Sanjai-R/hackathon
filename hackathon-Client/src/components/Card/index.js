import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import CustomButton from "../Button";
import { useDispatch } from "react-redux";
import useStyles from "./style";
import { Link } from "react-router-dom";


const Cards = ({ data,type }) => {
  
  const classes = useStyles();
  console.log(type)
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          type === "book"
            ? data.bookimagepath
            : data.productimagepath ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      />
      <div className={classes.overlay}>
        <Typography variant="h6" style={{ fontFamily: "Montserrat" }}>
          {data.uploadby.fullname}
        </Typography>
        <Typography variant="body2" style={{ fontFamily: "Montserrat" }}>
          {data.upload_at}
        </Typography>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
        style={{
          fontFamily: "Montserrat",
          marginBottom: "0px",
          marginTop: "10px"
        }}
      >
        {type === "book" ? data.bookname : data.productname}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontFamily: "Montserrat" }}
        >
          {type === "book" ? data.bookdesc : data.productdesc}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div style={{ margin: "5px 8px" }}>
          <Link to={`/SingleProduct/${data._id}/${type}`}>
            <CustomButton text="view more" fsize="14px"></CustomButton>
          </Link>
        </div>
      </CardActions>
    </Card>
  );
};

export default Cards;
