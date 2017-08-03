import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as types from '../actions/types';
import {
  DataApi
} from '../../shared/api/DataApi';
import {
  getSessionsSuccess,
  getSessionsFail,
  newSessionSuccess,
  newSessionFail,
} from '../actions/sessionsActions';

function* fetchSessions(action) {
  try {
    const response = yield call(DataApi.fetchSessions, action.payload);
    yield put(getSessionsSuccess(response));
  } catch (err) {
    yield put(getSessionsFail(err));
  }
}

export function* fetchSessionsSaga() {
  yield takeEvery(types.SESSIONS_REQUESTED, fetchSessions);
}

function* createSession(action) {
  try {
    const response = yield call(DataApi.createSession, action.payload);
    yield put(newSessionSuccess(response));
  } catch (err) {
    yield put(newSessionFail(err));
  }
}

export function* createSessionSaga() {
  yield takeEvery(types.NEW_SESSION_REQUESTED, createSession);
}
