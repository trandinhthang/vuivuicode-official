import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: 'pending',
  notification: '',
  error: false,
};

export const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {
    statistic: (state) => {
      state.loading = 'starting';
    },
    statisticSuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = data;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    statisticFailed: (state, action) => {
      const { message } = action.payload;
      state.data = [];
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
  },
});

export const { statistic, statisticSuccess, statisticFailed } =
  statisticSlice.actions;
export const selectStatistic = (state) => state.statistic;
export default statisticSlice.reducer;
