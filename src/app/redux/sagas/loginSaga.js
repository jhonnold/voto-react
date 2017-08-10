import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import AuthApi from '../../shared/api/AuthApi';
import { loginSuccess, loginFail } from '../actions/userActions';

function* loginUser(action) {
  try {
    const response = yield call(AuthApi.loginUser, action.payload);
    yield put(loginSuccess(response));
  } catch (err) {
    yield put(loginFail(err));
  }
}

export default function* loginUserSaga() {
  yield takeEvery(types.LOGIN_USER_REQUESTED, loginUser);
}
