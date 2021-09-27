import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import Cards from "../../components/Card";
import { CircularProgress, Grow, Grid, Container } from "@material-ui/core";
export default function Grids({ type }) {
  const [data, setData] = useState([]);
  const fetchbooks = async () => {
    const temp = await axios.get(`${baseUrl}/api/get-books?limit=4`);
    setData(temp.data.data);
  };
  const fetchStationary = async () => {
    const temp = await axios.get(`${baseUrl}/api/get-stationaries?limit=4`);
    setData(temp.data.data);
  };
  useEffect(() => {
    type === "book" ? fetchbooks() : fetchStationary();
    // eslint-disable-next-line
  }, []);
  console.log(data);
  return (
    <Container style={{ marginTop: "15px" }} id="Explore">
      <h1 style={{ margin: "32px 0 32px 0" }}>Recent {type}</h1>
      {data == null ? (
        <CircularProgress />
      ) : (
        <Grow in>
          <Grid container alignItems="stretch" spacing={3}>
            {data.map((item) => (
              <Grid key={item._id} item xs={12} sm={7} md={4}>
                <Cards data={item} type={type} />
              </Grid>
            ))}
          </Grid>
        </Grow>
      )}
    </Container>
  );
}
