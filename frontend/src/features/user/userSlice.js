import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  loading: 'pending',
  notification: '',
  error: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    user: (state) => {
      state.loading = 'starting';
    },
    userSuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = data;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    userFailed: (state, action) => {
      const { message } = action.payload;
      state.data = {};
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
  },
});

export const { user, userSuccess, userFailed } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
