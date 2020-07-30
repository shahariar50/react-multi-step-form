import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import Post from "./posts/Post";

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const Posts = () => {
  const posts = useSelector((state) => state.entities.posts.list);

  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid
          item
          container
          alignItems="center"
          direction="row"
          className={classes.section}
        >
          <Grid item xs={6}>
            <Typography component="h2" variant="h2">
              Posts
            </Typography>
          </Grid>
          <Grid item container xs={6} justify="flex-end">
            <Link to="/new-post">
              <Button color="primary" variant="contained">
                New Post
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid item container spacing={2} className={classes.section}>
          {posts?.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
