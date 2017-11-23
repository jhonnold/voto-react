import { take, fork, cancel, cancelled, put, call } from 'redux-saga/effects';
import types from '../actions/types';

function* authorize() {
  try {
    const response = yield call(); // TODO
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
