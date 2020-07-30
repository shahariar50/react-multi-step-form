import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "posts",
  initialState: { list: [], loading: false, lastFetch: null },
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    updatePosts: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchFailed: (state, action) => {
      console.log(action.payload);
      state.loading = false;
    },
    deletePost: (state, action) => {
      state.list = state.list.filter((post) => post.id !== action.payload);
    },
    addPost: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    updatePost: (state, action) => {
      state.list = state.list.map((post) =>
        post.id !== action.payload.id ? post : action.payload
      );
    },
  },
});

export const {
  updatePosts,
  fetchFailed,
  startLoading,
  deletePost,
  addPost,
  updatePost,
} = slice.actions;
export default slice.reducer;
