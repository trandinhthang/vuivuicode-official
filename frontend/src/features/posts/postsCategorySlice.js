import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: 'pending',
  notification: '',
  error: false,
};

export const postsCategorySlice = createSlice({
  name: 'postsCategory',
  initialState,
  reducers: {
    postsCategory: (state) => {
      state.loading = 'starting';
    },
    postsCategorySuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = data;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    postsCategoryFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
  },
});

export const { postsCategory, postsCategorySuccess, postsCategoryFailed } =
  postsCategorySlice.actions;
export const selectPostsCategory = (state) => state.postsCategory;
export default postsCategorySlice.reducer;
