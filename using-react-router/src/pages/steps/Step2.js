import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
import { Grid, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  groupInput: {
    marginBottom: theme.spacing(1),
  },
}));

const Step2 = ({ formData, doSubmit, formPath, ...props }) => {
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
    let obj = { address: data };
    const valid = { step2: "step2" };
    doSubmit(obj, valid);
    props.history.push(`${formPath}/step3`);
  };

  return (
    <Grid item xs={12} className={classes.section}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} className={classes.groupInput}>
          <Grid item sm={6}>
            {renderTexField(
              "Suite",
              "suite",
              formData?.address?.suite,
              errors?.suite,
              {
                required: "Don't leave as blank.",
              }
            )}
          </Grid>
          <Grid item sm={6}>
            {renderTexField(
              "Street",
              "street",
              formData?.address?.street,
              errors?.street,
              { required: "Don't leave as blank." }
            )}
          </Grid>
          <Grid item sm={6}>
            {renderTexField(
              "City",
              "city",
              formData?.address?.city,
              errors?.city,
              {
                required: "Don't leave as blank.",
              }
            )}
          </Grid>
          <Grid item sm={6}>
            {renderTexField(
              "Zipcode",
              "zipcode",
              formData?.address?.zipcode,
              errors?.zipcode,
              {
                required: "Don't leave as blank.",
                pattern: {
                  value: /^[0-9-]+$/,
                  message: "Code pettern not valid.",
                },
              },
              "number"
            )}
          </Grid>
        </Grid>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default Step2;
