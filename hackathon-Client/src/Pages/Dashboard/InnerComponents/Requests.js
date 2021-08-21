import React, { useEffect, useState } from "react";
import styles from "./listStyle.module.css";
import Button from "../../../components/Button";
import axios from "axios";
import { baseurl } from "../../../utils/baseUrl";

function Requests() {
  const token = localStorage.getItem("token");
  const [books, setBooks] = useState([]);
  const [product, setProduct] = useState([]);

  console.log(books, product);
  useEffect(() => {
    (() => {
      axios
        .get(`${baseurl}/admin/get-uploaded-books`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.success) {
            setBooks(res.data.data);
          }
        })
        .catch((err) => {
          alert("something went wrong");
        });
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    (() => {
      axios
        .get(`${baseurl}/admin/get-uploaded-stationarys`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.success) {
            setProduct(res.data.data);
          }
        })
        .catch((err) => {
          alert("something went wrong");
        });
    })();
    // eslint-disable-next-line
  }, []);

  const approveBook = (id) => {
    axios
      .get(`${baseurl}/admin/approve-book?bookid=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          alert(
            "Book Request Accepted. Send Your Book To The Donee. Thank For Your Contributing"
          );
        }
      })
      .catch((err) => {
        alert("Something Went Wrong Try Again");
      });
  };

  const denyBook = (id) => {
    axios
      .get(`${baseurl}/admin/deny-book-request?bookid=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          alert("Book Request Denied. It Will visible To All");
        }
      })
      .catch((err) => {
        alert("Something Went Wrong Try Again");
      });
  };

  const approveStationary = (id) => {
    axios
      .get(`${baseurl}/admin/approve-stationary?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          alert(
            "Stationary Request Accepted. Send Your Stationary To The Donee. Thank For Your Contributing"
          );
        }
      })
      .catch((err) => {
        alert("Something Went Wrong Try Again");
      });
  };

  const denyStationary = (id) => {
    axios
      .get(`${baseurl}/admin/deny-stationary-request?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          alert("Stationary Request Denied. It Will visible To All");
        }
      })
      .catch((err) => {
        alert("Something Went Wrong Try Again");
      });
  };

  return (
    <div>
      {books.length === 0 && <h1 className={styles.root}>No Book Requests</h1>}
      {books.map((books, index) => {
        return (
          <div className={styles.root} key={index}>
            <h1>{books.bookname}</h1>
            <br />
            <p>Request By : {books.askedby.fullname}</p>
            <br />
            <p>Request User Mail : {books.askedby.email}</p>
            <br />
            <Button text="Approve" onClick={() => approveBook(books._id)} />
            <br />
            <br />
            <Button text="Deny" onClick={() => denyBook(books._id)} />
          </div>
        );
      })}
      {product.length === 0 && (
        <h1 className={styles.root}>No Product Requests</h1>
      )}
      {product.map((product, index) => {
        return (
          <div className={styles.root} key={index}>
            <h1>{product.title}</h1>
            <br />
            <p>Request By : {product.askedby.fullname}</p>
            <br />
            <p>Request User Mail : {product.askedby.email}</p>
            <br />
            <Button
              text="Approve"
              onClick={() => approveStationary(product._id)}
            />
            <br />
            <br />
            <Button text="Deny" onClick={() => denyStationary(product._id)} />
          </div>
        );
      })}
    </div>
  );
}

export default Requests;
