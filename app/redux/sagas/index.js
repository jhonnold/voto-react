import { fork } from 'redux-saga/effects';
import { loginFlow, signupFlow } from './AuthSaga';
import { classesRequestedSaga } from './DataSaga';

export default function* rootSaga() {
  yield [
    fork(loginFlow),
    fork(signupFlow),
    fork(classesRequestedSaga),
  ];
}
