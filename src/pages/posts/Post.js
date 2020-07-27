import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  read: {
    cursor: "pointer",
    textDecoration: "underline",
    color: theme.palette.primary.main,
  },
}));

const Post = (props) => {
  const [hidden, setHidden] = useState(true);

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
            {hidden ? `${post.body.substr(0, 100)}... ` : `${post.body} `}
            {hidden && (
              <span onClick={() => setHidden(false)} className={classes.read}>
                Read more
              </span>
            )}
            {!hidden && (
              <span onClick={() => setHidden(true)} className={classes.read}>
                Read less
              </span>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="edit post">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete post">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
