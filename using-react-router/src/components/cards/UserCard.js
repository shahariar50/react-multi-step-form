import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUsers } from "../../store/users";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  CardActions,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ListStructure from "./ListStructure";

const User = ({ data, actionButtons = true, ...props }) => {
  const users = useSelector((store) => store.users.list);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const oldUser = users;

    dispatch(deleteUser(data));

    await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${data.id}`)
      .then()
      .catch((error) => {
        console.log(error.message);
        dispatch(updateUsers(oldUser));
      });
  };

  return (
    <Grid item sm={4}>
      {data === undefined ? (
        <Typography variant="h4" company="h4" align="center">
          No Data Found
        </Typography>
      ) : (
        <Card>
          <CardContent>
            {data?.name && (
              <Typography variant="h4" component="h4">
                {data.name.length <= 20
                  ? data.name
                  : `${data.name.substr(0, 19)}...`}
              </Typography>
            )}
            {data?.email && (
              <Typography variant="body2">{data?.email}</Typography>
            )}
            {data?.address && (
              <>
                <Typography variant="h6" component="h6">
                  Address
                </Typography>
                <List dense={true}>
                  <ListStructure name="Suite" value={data?.address.suite} />
                  <ListStructure name="Street" value={data?.address.street} />
                  <ListStructure name="City" value={data?.address.city} />
                  <ListStructure name="Zipcode" value={data?.address.zipcode} />
                </List>
              </>
            )}
            {data?.company && (
              <>
                <Typography variant="h6" component="h6">
                  Company
                </Typography>
                <List dense={true}>
                  <ListStructure name="Name" value={data?.company.name} />
                  <ListStructure
                    name="Slogan"
                    value={data?.company.catchPhrase}
                  />
                  <ListStructure name="Type" value={data?.company.bs} />
                </List>
              </>
            )}
          </CardContent>
          {actionButtons && (
            <CardActions>
              <Link to={`/edit-user/${data.id}`}>
                <IconButton aria-label="edit" color="primary">
                  <EditIcon />
                </IconButton>
              </Link>
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={handleDelete}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          )}
        </Card>
      )}
    </Grid>
  );
};

export default User;
