import { debounce, call, put } from 'redux-saga/effects';
import {
  postsSearch,
  postsSearchSuccess,
  postsSearchFailed,
} from './postsSearchSlice';
import { search } from '../../api/posts';

function* postsSearchSaga(action) {
  try {
    const posts = yield call(search, action.payload);
    if (posts.status >= 200 && posts.status < 400) {
      yield put(postsSearchSuccess(posts.data));
    } else {
      yield put(postsSearchFailed(posts.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
export default function* mySaga() {
  yield debounce(500, postsSearch, postsSearchSaga);
}
