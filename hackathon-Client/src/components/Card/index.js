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
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import useStyles from "./style";
import { Link } from "react-router-dom";


const Cards = ({ data }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          data.bookimagepath ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      />
      <div className={classes.overlay}>
        <Typography variant="h6" style={{ fontFamily: "Montserrat" }}>
          {data.uploadby}
        </Typography>
        <Typography variant="body2" style={{ fontFamily: "Montserrat" }}>
          9 hours ago{/* {moment(data.createdAt).fromNow()} */}
        </Typography>
      </div>

      <div className={classes.overlay2}>
        <Link to="/Create">
          {" "}
          {/* for editing*/}
          <Button style={{ color: "white" }} size="small">
            <MoreHorizIcon fontSize="default" />
          </Button>
        </Link>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
        style={{ fontFamily: "Montserrat" }}
      >
        {data.bookname}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontFamily: "Montserrat" }}
        >
          {data.bookdesc}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <CustomButton text="view more" fsize="14px"></CustomButton>
       
        <Button size="small" color="primary">
          <DeleteIcon fontSize="small" style={{ color: "#4F46E5" }} /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
