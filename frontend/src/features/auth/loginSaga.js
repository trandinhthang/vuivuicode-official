import { takeLatest, call, put } from 'redux-saga/effects';
import { login, loginSuccess, loginFailed } from './loginSlice';
import loginAPI from '../../api/auth/login';

function* loginSaga(action) {
  try {
    const login = yield call(loginAPI, action.payload);
    if (login.status >= 200 && login.status < 400) {
      yield put(loginSuccess(login.data));
    } else {
      yield put(loginFailed(login.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
export default function* mySaga() {
  yield takeLatest(login, loginSaga);
}
