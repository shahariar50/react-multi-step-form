import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users";

export default combineReducers({ users: userReducer });
