import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  loading: 'pending',
  notification: '',
  error: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    posts: (state) => {
      state.loading = 'starting';
    },
    postsSuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = data;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    postsFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
  },
});

export const { posts, postsSuccess, postsFailed } = postsSlice.actions;
export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
