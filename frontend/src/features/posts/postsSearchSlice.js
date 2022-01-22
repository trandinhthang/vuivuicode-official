import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: 'pending',
  notification: '',
  error: false,
};

export const postsSearchSlice = createSlice({
  name: 'postsSearch',
  initialState,
  reducers: {
    postsSearch: (state) => {
      state.loading = 'starting';
    },
    postsSearchSuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = data;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    postsSearchFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
  },
});

export const { postsSearch, postsSearchSuccess, postsSearchFailed } =
  postsSearchSlice.actions;
export const selectPostsSearch = (state) => state.postsSearch;
export default postsSearchSlice.reducer;
