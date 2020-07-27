import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Container,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  textInput: {
    marginBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const NewPost = (props) => {
  const [activeStep, setActiveStep] = useState(() => 1);
  const [submitType, setSubmitType] = useState("");
  const [data, setData] = useState();

  const finalSubmit = () => {};

  const onSubmit = (values) => {
    submitType === "next" && setActiveStep(activeStep + 1);
    submitType === "prev" && setActiveStep(activeStep - 1);
    submitType === "submit" && finalSubmit();
    setData({ ...data, ...values });
  };

  const { register, handleSubmit } = useForm({ criteriaMode: "all" });
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
              New Post
            </Typography>
          </Grid>
          <Grid item container xs={6} justify="flex-end">
            <Button
              color="primary"
              variant="contained"
              onClick={() => props.history.goBack()}
            >
              Back
            </Button>
          </Grid>
        </Grid>
        <Grid item container className={classes.section}>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {activeStep === 1 && (
                <TextField
                  id="standard-basic"
                  fullWidth
                  label="Title"
                  name="title"
                  variant="outlined"
                  className={classes.textInput}
                  inputRef={register({ required: true })}
                  defaultValue={data?.title}
                />
              )}
              {activeStep === 2 && (
                <TextField
                  id="standard-basic"
                  fullWidth
                  label="Body"
                  name="body"
                  variant="outlined"
                  className={classes.textInput}
                  multiline={true}
                  rows="4"
                  inputRef={register}
                  defaultValue={data?.body}
                />
              )}
              <Grid container justify="space-between">
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => setActiveStep(activeStep - 1)}
                    disabled={activeStep < 2 ? true : false}
                    type="submit"
                    onClick={() => setSubmitType("prev")}
                  >
                    Previous
                  </Button>
                </Grid>
                <Grid item>
                  {activeStep < 2 && (
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      onClick={() => setSubmitType("next")}
                    >
                      Next
                    </Button>
                  )}
                  {activeStep === 2 && (
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      onClick={() => setSubmitType("submit")}
                    >
                      Submit
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewPost;
