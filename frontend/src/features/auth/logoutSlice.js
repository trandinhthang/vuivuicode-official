import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: 'pending',
  error: false,
};

export const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem('access-token');
      state.error = false;
      state.loading = 'finish';
    },
  },
});

export const { logout } = logoutSlice.actions;
export const selectLogout = (state) => state.logout;
export default logoutSlice.reducer;
