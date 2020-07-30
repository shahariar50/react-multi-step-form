import { combineReducers } from "@reduxjs/toolkit";
import entityReducer from "./entities";

export default combineReducers({ entities: entityReducer });
