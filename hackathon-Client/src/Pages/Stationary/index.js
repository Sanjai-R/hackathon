import React, { useEffect } from "react";
import Cards from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Grow, Grid, Container } from "@material-ui/core";
import { getStationary } from "../../redux/Actions/";

function Stationary() {
  
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.stationary);

  useEffect(() => {
    dispatch(getStationary());
  }, [dispatch]);
  return (
    <Container style={{ marginTop: "15px" }}>
      {temp == null ? (
        <CircularProgress />
      ) : (
        <Grow in>
          <Grid container alignItems="stretch" spacing={3}>
            {temp.data.map((post) => (
              <Grid key={post._id} item xs={12} sm={7} md={4}>
                <Cards data={post} type="stationary" />
              </Grid>
            ))}
          </Grid>
        </Grow>
      )}
    </Container>
  );
}

export default Stationary;
