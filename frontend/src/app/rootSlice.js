import loginSlice from '../features/auth/loginSlice';
import logoutSlice from '../features/auth/logoutSlice';
import categorySlice from '../features/category/categorySlice';
import postsCategorySlice from '../features/posts/postsCategorySlice';
import postsSlice from '../features/posts/postsSlice';
import userSlice from '../features/user/userSlice';
import postsCommentSlice from '../features/posts-comment/postsCommentSlice';
import postsSearchSlice from '../features/posts/postsSearchSlice';
import statisticSlice from '../features/statistic/statisticSlice';
import postsAllSlice from '../features/posts/postsAllSlice';

export const rootSlice = {
  login: loginSlice,
  logout: logoutSlice,
  category: categorySlice,
  postsCategory: postsCategorySlice,
  posts: postsSlice,
  user: userSlice,
  postsComment: postsCommentSlice,
  postsSearch: postsSearchSlice,
  statistic: statisticSlice,
  postsAll: postsAllSlice,
};
