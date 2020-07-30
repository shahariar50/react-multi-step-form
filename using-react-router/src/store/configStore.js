import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default () =>
  configureStore({ reducer, middleware: [...getDefaultMiddleware()] });
