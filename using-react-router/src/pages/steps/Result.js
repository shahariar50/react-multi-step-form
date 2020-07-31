import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button } from "@material-ui/core";
import UserCard from "../../components/cards/UserCard";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  btn: {
    marginTop: theme.spacing(2),
  },
}));

const Result = ({ formData, validated, finalSubmit, ...props }) => {
  const classes = useStyles();
  return (
    <Grid item container justify="center" className={classes.section}>
      <UserCard data={formData} actionButtons={false} />
      <Grid item container xs={12} justify="center">
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className={classes.btn}
            disabled={
              validated?.step1 && validated?.step2 && validated?.step3
                ? false
                : true
            }
            onClick={finalSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Result;
