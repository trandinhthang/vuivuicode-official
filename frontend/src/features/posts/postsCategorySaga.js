import { takeLatest, call, put } from 'redux-saga/effects';
import {
  postsCategory,
  postsCategorySuccess,
  postsCategoryFailed,
} from './postsCategorySlice';
import { getToCategory } from '../../api/posts';

function* postsCategorySaga(action) {
  try {
    const postsCategory = yield call(getToCategory, action.payload);
    if (postsCategory.status >= 200 && postsCategory.status < 400) {
      yield put(postsCategorySuccess(postsCategory.data));
    } else {
      yield put(postsCategoryFailed(postsCategory.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
export default function* mySaga() {
  yield takeLatest(postsCategory, postsCategorySaga);
}
