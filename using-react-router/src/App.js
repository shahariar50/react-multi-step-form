import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./pages/Users";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser);
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/" component={Users} />
    </Switch>
  );
}

export default App;
