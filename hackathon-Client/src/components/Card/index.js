import React, {useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import {  auth } from "../../redux/Actions/Actiontype";
import axios from "axios";
import CustomButton from "../Button";
import { useDispatch,useSelector } from "react-redux";

import useStyles from "./style";
import { Link } from "react-router-dom";
import { baseurl } from "../../utils/baseUrl";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const CustomToast = () => {
  return (
    <div>
      <h4>Please login to view more information.</h4>
    </div>
  );
};
toast.configure();
const Cards = ({ data,type }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(type);
  const user = useSelector((state) => state.user.authData);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${baseurl}/auth/get-user-by-token`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        if (res.data.success) {
          dispatch({ type: auth, data: res.data });
        } else {
          alert(res.data.desc);
        }
      });
  }, []);
      const notify = () => {
        if (user == null) {
          toast.info(<CustomToast />, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        }
      };
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
          {user == null ? (
            <CustomButton
              text="view more"
              fsize="14px"
              onClick={notify}
            ></CustomButton>
          ) : (
            <Link to={`/SingleProduct/${data._id}/${type}`}>
              <CustomButton
                text="view more"
                fsize="14px"
                
              ></CustomButton>
            </Link>
          )}
        </div>
      </CardActions>
    </Card>
  );
};

export default Cards;
