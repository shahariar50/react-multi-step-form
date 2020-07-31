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

const Step3 = ({ formPath, formData, doSubmit, ...props }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({ criteriaMode: "all" });

  const renderTexField = (
    label,
    name,
    data = "",
    error,
    ref,
    type = "text"
  ) => (
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
    const obj = {
      company: data,
    };
    const valid = { step3: "step3" };
    doSubmit(obj, valid);
    props.history.push(`${formPath}/result`);
  };

  return (
    <Grid item xs={12} className={classes.section}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderTexField(
          "Company Name",
          "name",
          formData?.company?.name,
          errors?.name,
          {
            required: "Don't leave as blank.",
          }
        )}
        {renderTexField(
          "Slogan",
          "catchPhrase",
          formData?.company?.catchPhrase,
          errors?.catchPhrase,
          {
            required: "Don't leave as blank.",
          }
        )}
        {renderTexField("Type", "bs", formData?.company?.bs, errors?.bs, {
          required: "Don't leave as blank.",
        })}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default Step3;
