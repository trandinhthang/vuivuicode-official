// export const SERVER_API = 'https://api-vuivuicode.herokuapp.com';
export const SERVER_API = 'http://localhost:8000';

const LOGIN_API = SERVER_API + '/api/auth/login';
const CATEGORY_ALL_API = SERVER_API + '/api/category/all';
const POSTS_CATEGORY_API = SERVER_API + '/api/posts/c';
const POSTS_API = SERVER_API + '/api/posts';
const USER_API = SERVER_API + '/api/user';
const POSTS_COMMENT_API = SERVER_API + '/api/posts-comment';
const STATISTIC_API = SERVER_API + '/api/statistic';

export {
  LOGIN_API,
  CATEGORY_ALL_API,
  POSTS_CATEGORY_API,
  POSTS_API,
  USER_API,
  POSTS_COMMENT_API,
  STATISTIC_API,
};
