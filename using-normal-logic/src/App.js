import React, { useEffect } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";
import PostForm from "./pages/PostForm";
import axios from "axios";
import { startLoading, updatePosts, fetchFailed } from "./store/posts";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(async (dispatch) => {
      dispatch(startLoading());

      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          dispatch(updatePosts(response.data));
        })
        .catch((error) => {
          dispatch(fetchFailed(error.message));
        });
    });
  }, []);

  return (
    <Container>
      <Switch>
        <Route path="/new-post" component={NewPost} />
        <Route path="/edit-post/:id" component={PostForm} />
        <Route path="/" component={Posts} />
      </Switch>
    </Container>
  );
};

export default App;
