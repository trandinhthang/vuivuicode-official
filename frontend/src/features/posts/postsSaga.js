import { takeLatest, call, put } from 'redux-saga/effects';
import { posts, postsSuccess, postsFailed } from './postsSlice';
import { getOne } from '../../api/posts';

function* postsSaga(action) {
  try {
    const { id } = action.payload;
    const posts = yield call(getOne, id);
    if (posts.status >= 200 && posts.status < 400) {
      yield put(postsSuccess(posts.data));
    } else {
      yield put(postsFailed(posts.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
export default function* mySaga() {
  yield takeLatest(posts, postsSaga);
}
