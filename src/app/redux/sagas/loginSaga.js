import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../actions/types";
import AuthApi from "../../shared/api/AuthApi";
import {
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail,
} from "../actions/userActions";

function* loginUser(action) {
  try {
    const response = yield call(AuthApi.loginUser, action.payload);
    yield put(loginSuccess(response));
  } catch (err) {
    yield put(loginFail(err));
  }
}

export function* loginUserSaga() {
  yield takeEvery(types.LOGIN_USER_REQUESTED, loginUser);
}

function* logoutUser() {
  try {
    yield call(AuthApi.logoutUser);
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFail(err));
  }
}

export function* logoutUserSaga() {
  yield takeEvery(types.LOGOUT_REQUESTED, logoutUser);
}
