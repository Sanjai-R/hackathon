import React, { useEffect } from "react";
import Cards from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Grow, Grid ,Container} from "@material-ui/core";
import { getBooks } from "../../redux/Actions/";
function Books() {

  const dispatch = useDispatch();
  const temp = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
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
                <Cards data={post} type="book" />
              </Grid>
            ))}
          </Grid>
        </Grow>
      )}
    </Container>
  );
}

export default Books;
