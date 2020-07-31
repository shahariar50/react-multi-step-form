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
    updateUser: (state, actions) => {
      state.list = state.list.map((user) =>
        user.id !== actions.payload.id ? user : actions.payload
      );
    },
    addUser: (state, actions) => {
      state.list = [actions.payload, ...state.list];
    },
    fetchFailed: (state, actions) => {
      state.loading = false;
      console.log(actions.payload);
    },
    deleteUser: (state, actions) => {
      state.list = state.list.filter((user) => user.id !== actions.payload.id);
    },
  },
});

export const {
  startLoading,
  updateUsers,
  fetchFailed,
  updateUser,
  addUser,
  deleteUser,
} = slice.actions;
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
