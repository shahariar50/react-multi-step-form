import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";

const App = () => {
  return (
    <Container>
      <Switch>
        <Route path="/new-post" component={NewPost} />
        <Route path="/" component={Posts} />
      </Switch>
    </Container>
  );
};

export default App;
