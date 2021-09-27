import React, { useState, useEffect } from "react";
import cardsStyle from "./cardStyle.module.css";
import InputCard from "../../../components/Input";
import Button from "../../../components/Button";
import axios from "axios";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { baseUrl } from "../../../utils/baseUrl";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Image from "../../../components/Image";

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

function Settings() {
  const classes = useStyles();
  const [isChat, setIsChat] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  console.log(isChat);

  useEffect(() => {
    (() => {
      axios
        .get(`${baseUrl}/admin/get-settings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            setIsChat(res.data.data.isChat);
            setAvatar(res.data.data.avatar);
          } else {
            alert(res.data.desc);
          }
        })
        .catch((err) => {
          alert("something Went Wrong");
        });
    })();
  });

  const uploadHandller = () => {
    setLoading(true);
    let data = new FormData();
    if (image != null) {
      data.append("filename", image.name);
      data.append("file", image);
    }
    data.append("isChat", isChat);

    axios
      .post(`${baseUrl}/admin/update-settings`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          alert("settings updated successfully");
          setIsChat(res.data.data.isChat);
          setAvatar(res.data.data.avatar);
        } else {
          alert(res.data.desc);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something Went Wrong Try Again");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className={cardsStyle.root}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <h1>Settings</h1>
        <Image
          src={avatar}
          alt="name"
          style={{ width: "50px", height: "50px", borderRadius: "100%" }}
        />
      </div>

      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <h3>isChat Visible to ALL</h3>
        <Switch
          checked={isChat}
          onChange={(e) => setIsChat(e.target.checked)}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div> */}
      <br />
      <h3 style={{ marginLeft: "20px" }}>Change Avatar</h3>
      <InputCard
        text="Image"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <Button
        text="Update Settings"
        width="92%"
        padding="10px 1%"
        margin="20px 4%"
        onClick={uploadHandller}
      />

      <Backdrop open={loading} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Settings;
