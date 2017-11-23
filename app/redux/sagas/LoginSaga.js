import { take, fork, cancel, cancelled, put, call } from 'redux-saga/effects';
import api from '../../shared/api';
import types from '../actions/types';

function* authorize(params) {
  try {
    const response = yield call(api.loginUser, params);
    yield put({ type: types.loginResolved, payload: response });
  } catch (err) {
    yield put({ type: types.loginRejected, payload: err });
  } finally {
    if (yield cancelled()) {
      // TODO
    }
  }
}

export default function* loginFlow() {
  while (true) {
    const { payload } = yield take(types.loginRequested);
    const task = yield fork(authorize, payload);
    const action = yield take([types.loginRejected, types.logoutRequested]);

    if (action.type === types.logoutRequested) {
      yield cancel(task);
    }

    // TODO
  }
}
