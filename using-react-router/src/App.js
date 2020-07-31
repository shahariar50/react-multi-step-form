import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./pages/Users";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/users";
import NewUserForm from "./pages/NewUserForm";
import UserUpdateForm from "./pages/UserUpdateForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser);
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/new-user-form" component={NewUserForm} />
      <Route path="/edit-user/:id" component={UserUpdateForm} />
      <Route path="/" component={Users} />
    </Switch>
  );
}

export default App;
