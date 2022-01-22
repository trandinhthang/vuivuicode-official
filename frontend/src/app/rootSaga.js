import { all } from 'redux-saga/effects';
import loginSaga from '../features/auth/loginSaga';
import categorySaga from '../features/category/categorySaga';
import postsCategorySaga from '../features/posts/postsCategorySaga';
import postsSaga from '../features/posts/postsSaga';
import userSaga from '../features/user/userSaga';
import postsCommentSaga from '../features/posts-comment/postsCommentSaga';
import postsSearchSaga from '../features/posts/postsSearchSaga';
import statisticSaga from '../features/statistic/statisticSaga';
import postsAllSaga from '../features/posts/postsAllSaga';

export function* rootSaga() {
  yield all([
    loginSaga(),
    categorySaga(),
    postsCategorySaga(),
    postsSaga(),
    userSaga(),
    postsCommentSaga(),
    postsSearchSaga(),
    statisticSaga(),
    postsAllSaga(),
  ]);
}
