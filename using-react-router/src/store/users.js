import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    loading: true,
    lastFetch: null,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    updateUsers: (state, actions) => {
      state.loading = false;
      state.list = actions.payload;
    },
    fetchFailed: (state, actions) => {
      state.loading = false;
      console.log(actions);
    },
  },
});

export const { startLoading, updateUsers, fetchFailed } = slice.actions;
export default slice.reducer;

export const fetchUser = async (dispatch) => {
  dispatch(startLoading());

  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      dispatch(updateUsers(response.data));
    })
    .catch((error) => {
      dispatch(fetchFailed(error.message));
    });
};
