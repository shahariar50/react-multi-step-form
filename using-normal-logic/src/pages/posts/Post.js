import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { deletePost, updatePosts } from "../../store/posts";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  read: {
    cursor: "pointer",
    textDecoration: "underline",
    color: theme.palette.primary.main,
  },
}));

const Post = (props) => {
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.entities.posts.list);

  const handleDelete = async () => {
    const oldPosts = [...posts];
    dispatch(deletePost(post.id));

    await axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + post.id)
      .then()
      .catch((error) => {
        console.log(error.message);
        dispatch(updatePosts(oldPosts));
      });
  };

  const { post } = props;
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography
            component="h5"
            variant="h5"
            title={post.title.length >= 28 ? post.title : ""}
          >
            {post.title.length >= 28
              ? `${post.title.substr(0, 28).trim()}...`
              : post.title}
          </Typography>
          <Typography variant="body1">
            {post.body.length >= 100 && hidden
              ? `${post.body.substr(0, 100)}... `
              : `${post.body} `}
            {post.body.length >= 100 && hidden && (
              <span onClick={() => setHidden(false)} className={classes.read}>
                Read more
              </span>
            )}
            {post.body.length >= 100 && !hidden && (
              <span onClick={() => setHidden(true)} className={classes.read}>
                Read less
              </span>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/edit-post/${post.id}`}>
            <IconButton aria-label="edit post">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton aria-label="delete post" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
