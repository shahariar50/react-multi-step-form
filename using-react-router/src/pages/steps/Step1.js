import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
import { Grid, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

const Step1 = ({ doSubmit, formData, formPath, ...props }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    criteriaMode: "all",
  });

  const renderTexField = (label, name, data = "", error, ref) => (
    <TextField
      error={error ? true : false}
      id={error ? "standard-error-helper-text" : "outlined-basic"}
      label={label}
      name={name}
      defaultValue={data}
      variant="outlined"
      fullWidth
      className={classes.input}
      inputRef={register(ref)}
      helperText={error ? error.message : ""}
    />
  );
  const onSubmit = (data) => {
    const valid = { step1: "step1" };
    doSubmit(data, valid);
    props.history.push(`${formPath}/step2`);
  };

  return (
    <Grid item xs={12} className={classes.section}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderTexField("Full Name", "name", formData?.name, errors?.name, {
          required: "Don't leave as blank.",
        })}
        {renderTexField("Email", "email", formData?.email, errors?.email, {
          required: "Don't leave as blank.",
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email pettern is not valid.",
          },
        })}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default Step1;
