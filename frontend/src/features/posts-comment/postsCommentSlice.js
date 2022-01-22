import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: 'pending',
  notification: '',
  error: false,
};

export const postsCommentSlice = createSlice({
  name: 'postsComment',
  initialState,
  reducers: {
    postsComment: (state) => {
      state.loading = 'starting';
    },
    postsCommentSuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = data;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    postsCommentFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
    createPostsComment: (state) => {
      state.loading = 'starting';
    },
    createPostsCommentSuccess: (state, action) => {
      const { message, data } = action.payload;
      state.data = [data, ...state.data];
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    createPostsCommentFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
    updatePostsComment: (state) => {
      state.loading = 'starting';
    },
    updatePostsCommentSuccess: (state, action) => {
      const { message, data } = action.payload;
      const index = state.data.findIndex((item) => item._id === data._id);
      state.data[index] = data;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    updatePostsCommentFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
    deletePostsComment: (state) => {
      state.loading = 'starting';
    },
    deletePostsCommentSuccess: (state, action) => {
      const { message, data } = action.payload;
      const newData = state.data.filter((item) => item._id !== data._id);
      state.data = newData;
      state.loading = 'finish';
      state.error = false;
      state.notification = message;
    },
    deletePostsCommentFailed: (state, action) => {
      const { message } = action.payload;
      state.loading = 'finish';
      state.error = true;
      state.notification = message;
    },
  },
});

export const {
  postsComment,
  postsCommentSuccess,
  postsCommentFailed,
  createPostsComment,
  createPostsCommentSuccess,
  createPostsCommentFailed,
  updatePostsComment,
  updatePostsCommentSuccess,
  updatePostsCommentFailed,
  deletePostsComment,
  deletePostsCommentSuccess,
  deletePostsCommentFailed,
} = postsCommentSlice.actions;
export const selectPostsComment = (state) => state.postsComment;
export default postsCommentSlice.reducer;
