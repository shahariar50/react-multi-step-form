import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  CardActions,
  IconButton,
} from "@material-ui/core";
import ListStructure from "./ListStructure";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const User = ({ user, ...props }) => {
  return (
    <Grid item sm={4}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h4">
            {user.name.length <= 20
              ? user.name
              : `${user.name.substr(0, 19)}...`}
          </Typography>
          <Typography variant="body2">{user.email}</Typography>
          <Typography variant="h6" component="h6">
            Address
          </Typography>
          <List dense={true}>
            <ListStructure name="Suite" value={user.address.suite} />
            <ListStructure name="Street" value={user.address.street} />
            <ListStructure name="City" value={user.address.city} />
            <ListStructure name="Zipcode" value={user.address.zipcode} />
          </List>
          <Typography variant="h6" component="h6">
            Company
          </Typography>
          <List dense={true}>
            <ListStructure name="Name" value={user.company.name} />
            <ListStructure name="Slogan" value={user.company.catchPhrase} />
            <ListStructure name="Type" value={user.company.bs} />
          </List>
        </CardContent>
        <CardActions>
          <IconButton aria-label="edit" color="primary">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" color="secondary">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default User;
