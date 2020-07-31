import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button } from "@material-ui/core";
import UserCard from "../components/cards/UserCard";

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const Users = () => {
  const users = useSelector((store) => store.users.list);
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid container item alignItems="center" className={classes.section}>
          <Grid item xs={6}>
            <Typography component="h2" variant="h2">
              Users
            </Typography>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <Link to="/new-user-form">
              <Button variant="outlined" color="primary">
                New User
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container item spacing={2} className={classes.section}>
          {users.map((user) => (
            <UserCard key={user.id} data={user} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Users;
