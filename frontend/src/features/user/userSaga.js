import { takeLatest, call, put } from 'redux-saga/effects';
import { user, userSuccess, userFailed } from './userSlice';
import { getOne } from '../../api/user';

function* userSaga(action) {
  try {
    const user = yield call(getOne, action.payload);
    if (user.status >= 200 && user.status < 400) {
      yield put(userSuccess(user.data));
    } else {
      yield put(userFailed(user.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
export default function* mySaga() {
  yield takeLatest(user, userSaga);
}
