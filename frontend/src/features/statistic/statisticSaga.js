import { takeLatest, call, put } from 'redux-saga/effects';
import { statistic, statisticSuccess, statisticFailed } from './statisticSlice';
import { get } from '../../api/statistic';

function* statisticSaga(action) {
  try {
    const statistic = yield call(get, action.payload);
    if (statistic.status >= 200 && statistic.status < 400) {
      yield put(statisticSuccess(statistic.data));
    } else {
      yield put(statisticFailed(statistic.data));
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
export default function* mySaga() {
  yield takeLatest(statistic, statisticSaga);
}
