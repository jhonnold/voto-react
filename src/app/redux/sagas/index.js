import {
  loginUserSaga
} from './loginSaga';
import {
  signupUserSaga
} from './signupSaga';
import {
  fork
} from 'redux-saga/effects';

export default function* rootSaga() {
  yield [
    fork(loginUserSaga),
    fork(signupUserSaga),
  ]
}
