import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: 'pending',
  notification: '',
  error: false,
};

export const postsAllSlice = createSlice({
  name: 'postsAll',
  initialState,
  reducers: {
    postsAll: (state) => {
      state.loading = 'starting';
    },
    postsAllSuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = data;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    postsAllFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
  },
});

export const { postsAll, postsAllSuccess, postsAllFailed } =
  postsAllSlice.actions;
export const selectPostsAll = (state) => state.postsAll;
export default postsAllSlice.reducer;
