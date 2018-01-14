import { takeLatest, put, call, cancelled } from 'redux-saga/effects';
import api from '../../shared/api';
import types from '../actions/types';

function* classesRequested() {
  try {
    const response = yield call(api.getClasses);
    yield put({ type: types.classesResolved, payload: response.data.classes });
  } catch (err) {
    // TODO
  } finally {
    if (yield cancelled()) {
      // TODO
    }
  }
}

export function* classesRequestedSaga() {
  yield takeLatest(types.classesRequested, classesRequested);
}
