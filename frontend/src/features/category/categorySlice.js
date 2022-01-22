import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: 'pending',
  notification: '',
  error: false,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    category: (state) => {
      state.loading = 'starting';
    },
    categorySuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = data;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    categoryFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
  },
});

export const { category, categorySuccess, categoryFailed } =
  categorySlice.actions;
export const selectCategory = (state) => state.category;
export default categorySlice.reducer;
