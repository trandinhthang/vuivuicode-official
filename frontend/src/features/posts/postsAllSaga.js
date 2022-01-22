import { takeLatest, call, put } from 'redux-saga/effects';
import { postsAll, postsAllSuccess, postsAllFailed } from './postsAllSlice';
import { getAll } from '../../api/posts';

function* postsAllSaga(action) {
  try {
    const postsAll = yield call(getAll);
    if (postsAll.status >= 200 && postsAll.status < 400) {
      yield put(postsAllSuccess(postsAll.data));
    } else {
      yield put(postsAllFailed(postsAll.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
export default function* mySaga() {
  yield takeLatest(postsAll, postsAllSaga);
}
