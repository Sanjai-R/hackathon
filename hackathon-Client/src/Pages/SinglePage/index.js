import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseurl } from "../../utils/baseUrl";
import { Container } from "@material-ui/core";
import styles from "./style.module.css";
import Button from "../../components/Button/";
export default function SingleProduct() {
  const { id } = useParams();
  const { type } = useParams();
  const [data, setData] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const token = localStorage.getItem("token");

  const fetchSingleBooks = async () => {
    await axios
      .get(`${baseurl}/api/get-book-by-id?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
        setIsDisabled(response.data.data.isasked);
      });
  };
  const fetchSingleStationary = async () => {
    await axios
      .get(`${baseurl}/api/get-stationary-by-id?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
        setIsDisabled(response.data.data.isasked);
      });
  };
  useEffect(() => {
    type === "book" ? fetchSingleBooks(id) : fetchSingleStationary(id);
    // eslint-disable-next-line
  }, []);

  const requestHandller = () => {
    const slug =
      type === "book" ? "api/request-books" : "api/request-stationary";

    axios
      .get(`${baseurl}/${slug}?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          alert("Requested Successfully");
          setIsDisabled(true);
        } else {
          alert(res.data.desc);
        }
      })
      .catch((err) => {
        alert("Something Went Wrong");
      });
  };
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.left_container}>
          <h1>{type === "book" ? data.bookname : data.productname}</h1>
          <div className={styles.desc}>
            <h3 style={{ fontWeight: "400" }} className={styles.desc_cont}>
              {type === "book" ? data.bookdesc : data.productdesc}
            </h3>
          </div>

          <h3 className={styles.subtitle}>
            Upload by: {data.uploadby && data.uploadby.fullname}
          </h3>
          <br />
          <h3 className={styles.subtitle}>
            Mail : {data.uploadby && data.uploadby.email}
          </h3>
          <br />
          <h3 className={styles.subtitle}>Upload date: {data.upload_at}</h3>
          <br />
          <Button
            text={`Request the ${type}`}
            onClick={requestHandller}
            disabled={isDisabled}
          />
        </div>
        <img
          src={type === "book" ? data.bookimagepath : data.productimagepath}
          alt={data.bookname}
          className={styles.img}
        />
      </div>
    </Container>
  );
}
