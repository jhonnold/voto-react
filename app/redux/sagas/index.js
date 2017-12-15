import { fork } from 'redux-saga/effects';
import { loginFlow, signupFlow } from './AuthSaga';

export default function* rootSaga() {
  yield [
    fork(loginFlow),
    fork(signupFlow),
  ];
}
