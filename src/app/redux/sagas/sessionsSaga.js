import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../actions/types";
import DataApi from "../../shared/api/DataApi";
import {
  getSessionsSuccess,
  getSessionsFail,
  newSessionSuccess,
  newSessionFail,
  submitSessionSuccess,
  submitSessionFail,
  activeSessionsSuccess,
  activeSessionsFail,
  activateSessionSuccess,
  activateSessionFail,
  deactivateSessionSuccess,
  deactivateSessionFail,
} from "../actions/sessionsActions";

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

function* updateSession(action) {
  try {
    const response = yield call(DataApi.updateSession, action.payload);
    yield put(submitSessionSuccess(response));
    yield call(DataApi.updateQuestions, action.payload.questions);
    yield put({ type: "UPDATE_QUESTIONS_RESOLVED" });
  } catch (err) {
    yield put(submitSessionFail(err));
  }
}

export function* updateSessionSaga() {
  yield takeEvery(types.SUBMIT_SESSION_REQUESTED, updateSession);
}

function* activeSession() {
  try {
    const response = yield call(DataApi.activeSessions);
    yield put(activeSessionsSuccess(response));
  } catch (err) {
    yield put(activeSessionsFail(err));
  }
}

export function* activeSessionSaga() {
  yield takeEvery(types.GET_ACTIVE_REQUESTED, activeSession);
}

function* activateSession(action) {
  try {
    const response = yield call(DataApi.activateSession, action.payload);
    yield put(activateSessionSuccess(response));
  } catch (err) {
    yield put(activateSessionFail(err));
  }
}

export function* activateSessionSaga() {
  yield takeEvery(types.ACTIVATE_SESSION_REQUESTED, activateSession);
}

function* deactivateSession(action) {
  try {
    const response = yield call(DataApi.deactivateSession, action.payload);
    yield put(deactivateSessionSuccess(response));
  } catch (err) {
    yield put(deactivateSessionFail(err));
  }
}

export function* deactivateSessionSaga() {
  yield takeEvery(types.DEACTIVATE_SESSION_REQUESTED, activateSession);
}
