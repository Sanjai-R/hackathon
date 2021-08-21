import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseurl } from "../../utils/baseUrl";
import { Container } from "@material-ui/core";
import styles from "./style.module.css";
import Button from "../../components/Button/"
export default function SingleProduct() {
  const { id } = useParams();
  const { type } = useParams();
  console.log(type)
  const [data, setData] = useState([]);
  
  const fetchSingleBooks = async () => {
    console.log("Fetching");
    const token = localStorage.getItem("token");
    await axios
      .get(`${baseurl}/api/get-book-by-id?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setData(response.data.data);
      });
  };
  const fetchSingleStationary = async () => {
    console.log("Fetching");
    const token = localStorage.getItem("token");
    await axios
      .get(`${baseurl}/api/get-stationary-by-id?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setData(response.data.data);
      });
  };
  useEffect(() => {
    type === "book" ? fetchSingleBooks(id) : fetchSingleStationary(id);
  }, []);
  console.log(data);
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

          <h3 className={styles.subtitle}>Upload by: Ragul</h3>
          <h3 className={styles.subtitle}>Upload date: {data.upload_at}</h3>
          <Button text="Request the book" />
        </div>
        <img
          src={
          type === "book"
            ? data.bookimagepath
            : data.productimagepath 
        }
          alt={data.bookname}
          className={styles.img}
        />
      </div>
    </Container>
  );
}
