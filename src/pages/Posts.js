import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import Post from "./posts/Post";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
}));

const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    })();
  }, []);

  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item container alignItems="center" direction="row">
          <Grid item xs={6}>
            <Typography component="h2" variant="h2">
              Posts
            </Typography>
          </Grid>
          <Grid item container xs={6} justify="flex-end">
            <Button color="primary" variant="contained">
              New Post
            </Button>
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          {posts?.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
