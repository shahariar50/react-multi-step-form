import React from "react";
import { Typography, Container, Grid, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import User from "./users/User";
import { makeStyles } from "@material-ui/styles";

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
            <Button variant="outlined" color="primary">
              New User
            </Button>
          </Grid>
        </Grid>
        <Grid container item spacing={2} className={classes.section}>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Users;
