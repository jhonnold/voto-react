import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import AuthApi from '../../shared/api/AuthApi';
import { signupSuccess, signupFail } from '../actions/userActions';

function* signupUser(action) {
  try {
    const response = yield call(AuthApi.createUser, action.payload);
    yield put(signupSuccess(response));
  } catch (err) {
    yield put(signupFail(err));
  }
}

export default function* signupUserSaga() {
  yield takeEvery(types.SIGNUP_USER_REQUESTED, signupUser);
}
