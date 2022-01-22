import { takeLatest, call, put } from 'redux-saga/effects';
import { category, categorySuccess, categoryFailed } from './categorySlice';
import { getAll } from '../../api/category';

function* categorySaga() {
  try {
    const category = yield call(getAll);
    if (category.status >= 200 && category.status < 400) {
      yield put(categorySuccess(category.data));
    } else {
      yield put(categoryFailed(category.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
export default function* mySaga() {
  yield takeLatest(category, categorySaga);
}
