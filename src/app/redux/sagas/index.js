import {
  loginUserSaga
} from './loginSaga';
import {
  signupUserSaga
} from './signupSaga';
import {
  fetchSessionsSaga
} from './sessionsSaga';
import {
  fork
} from 'redux-saga/effects';

export default function* rootSaga() {
  yield [
    fork(loginUserSaga),
    fork(signupUserSaga),
    fork(fetchSessionsSaga),
  ]
}
