import React, { useState } from "react";
import cardsStyle from "./cardStyle.module.css";
import InputCard from "../../../components/Input";
import Button from "../../../components/Button";
import axios from "axios";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { baseurl } from "../../../utils/baseUrl";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

function UploadBooks() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const uploadHandller = () => {
    if (title.length > 0 && desc.length > 0) {
      setLoading(true);
      let data = new FormData();
      if (image != null) {
        data.append("filename", image.name);
        data.append("file", image);
      }
      data.append("title", title);
      data.append("desc", desc);

      console.log(data.getAll("title"));

      axios
        .post(`${baseurl}/admin/upload-book`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.success) {
            alert("Book Upload Successfully. Thanks For Your Contribution.");
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
    } else {
      alert("title and desc is required field");
    }
  };
  return (
    <div className={cardsStyle.root}>
      <h1>Donate Your Book</h1>
      <InputCard
        text="Book Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputCard
        text="Book Description"
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <InputCard
        text="Image"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <Button
        text="Donate Your Book"
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

export default UploadBooks;
