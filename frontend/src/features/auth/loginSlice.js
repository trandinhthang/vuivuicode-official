import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: '',
  loading: 'pending',
  notification: '',
  error: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = 'starting';
    },
    loginSuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = data.accessToken;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
      sessionStorage.setItem('access-token', data.accessToken);
    },
    loginFailed: (state, action) => {
      state.data = '';
      state.loading = 'finish';
      state.error = true;
      state.notification = action.payload.message;
    },
  },
});

export const { login, loginSuccess, loginFailed } = loginSlice.actions;
export const selectLogin = (state) => state.login;
export default loginSlice.reducer;
