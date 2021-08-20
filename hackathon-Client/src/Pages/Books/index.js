import React, { useEffect } from "react";
import Cards from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Grow, Grid ,Container} from "@material-ui/core";
import { getBooks } from "../../redux/Actions/";
import { useLocation } from "react-router-dom";
function Books() {
  const location = useLocation();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, location]);
  return (
    <Container style={{marginTop:"15px"}}>
      {!posts.length ? (
      <CircularProgress />) : (
      <Grow in>
        <Grid container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={7} md={4}>
              <Cards data={post} />
            </Grid>
          ))}
        </Grid>
      </Grow>
      )}
    </Container>
  );
}

export default Books;
