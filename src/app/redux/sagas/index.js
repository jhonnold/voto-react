import {
  loginUserSaga
} from './loginSaga';
import {
  signupUserSaga
} from './signupSaga';
import {
  fetchSessionsSaga,
  createSessionSaga,
  updateSessionSaga,
} from './sessionsSaga';
import {
  fetchQuestionsSaga,
  getQuestionUrlSaga,
  newImageUploadSaga
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
    fork(updateSessionSaga),
    fork(getQuestionUrlSaga),
    fork(newImageUploadSaga),
  ]
}
