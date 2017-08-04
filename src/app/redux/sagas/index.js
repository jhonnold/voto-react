import {
  loginUserSaga
} from './loginSaga';
import {
  signupUserSaga
} from './signupSaga';
import {
  fetchSessionsSaga,
  createSessionSaga,
} from './sessionsSaga';
import {
  fetchQuestionsSaga
} from './questionsSaga';
import {
fork
} from 'redux-saga/effects';

export default function* rootSaga() {
  yield [
    fork(loginUserSaga),
    fork(signupUserSaga),
    fork(fetchSessionsSaga),
    fork(createSessionSaga),
    fork(fetchQuestionsSaga),
  ]
}
