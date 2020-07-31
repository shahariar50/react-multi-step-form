import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Link, useRouteMatch, Redirect } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Container,
  Grid,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { addUser } from "../store/users";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Result from "./steps/Result";

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  toolbar: {
    justifyContent: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  appbar: {
    boxShadow: "none",
  },
  menuBtn: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const NewUserForm = (props) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [data, setData] = useState();
  const [validated, setValidated] = useState();
  const dispatch = useDispatch();

  const handleFinalSubmit = async () => {
    await axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((response) => {
        dispatch(addUser(response.data));
        props.history.push("/");
      });
  };

  const handleSubmit = (value, valid) => {
    setValidated({ ...validated, ...valid });
    setData({ ...data, ...value });
  };
  return (
    <Container>
      <Grid container>
        <Grid container item alignItems="center" className={classes.section}>
          <Grid item xs={6}>
            <Typography component="h2" variant="h2">
              New user form
            </Typography>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => props.history.goBack()}
            >
              Back
            </Button>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <AppBar
              position="static"
              color="transparent"
              className={classes.appbar}
            >
              <Toolbar className={classes.toolbar}>
                <Link to={`${url}/step1`} className={classes.link}>
                  <Button
                    color="primary"
                    variant="outlined"
                    className={classes.menuBtn}
                  >
                    Step 1
                  </Button>
                </Link>
                <Link to={`${url}/step2`} className={classes.link}>
                  <Button
                    color="primary"
                    variant="outlined"
                    className={classes.menuBtn}
                  >
                    Step 2
                  </Button>
                </Link>
                <Link to={`${url}/step3`} className={classes.link}>
                  <Button
                    color="primary"
                    variant="outlined"
                    className={classes.menuBtn}
                  >
                    Step 3
                  </Button>
                </Link>
                <Link to={`${url}/result`} className={classes.link}>
                  <Button
                    color="primary"
                    variant="outlined"
                    className={classes.menuBtn}
                  >
                    Result
                  </Button>
                </Link>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
        <Grid container item>
          <Switch>
            <Route
              path={`${url}/step1`}
              render={(props) => (
                <Step1
                  {...props}
                  formPath={url}
                  doSubmit={handleSubmit}
                  formData={data}
                />
              )}
            />
            <Redirect exact from={`${url}`} to={`${url}/step1`} />
            <Route
              path={`${url}/step2`}
              render={(props) => (
                <Step2
                  {...props}
                  formPath={url}
                  doSubmit={handleSubmit}
                  formData={data}
                />
              )}
            />
            <Route
              path={`${url}/step3`}
              render={(props) => (
                <Step3
                  {...props}
                  formData={data}
                  formPath={url}
                  doSubmit={handleSubmit}
                />
              )}
            />
            <Route
              path={`${url}/result`}
              render={(props) => (
                <Result
                  {...props}
                  formData={data}
                  validated={validated}
                  finalSubmit={handleFinalSubmit}
                />
              )}
            />
          </Switch>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewUserForm;
