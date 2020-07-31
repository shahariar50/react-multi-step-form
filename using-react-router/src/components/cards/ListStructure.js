import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const ListStructure = ({ name, value }) => {
  return (
    <ListItem>
      <ListItemText>
        <strong>{name}: </strong> {value}
      </ListItemText>
    </ListItem>
  );
};

export default ListStructure;
