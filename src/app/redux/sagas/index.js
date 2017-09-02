import { fork } from "redux-saga/effects";
import { loginUserSaga, logoutUserSaga } from "./loginSaga";
import signupUserSaga from "./signupSaga";
import {
  fetchSessionsSaga,
  createSessionSaga,
  updateSessionSaga,
  activeSessionSaga,
  activateSessionSaga,
} from "./sessionsSaga";
import {
  deleteQuestionSaga,
  fetchQuestionsSaga,
  getQuestionUrlSaga,
  newImageUploadSaga,
  activateQuestionSaga,
  deactivateQuestionSaga,
} from "./questionsSaga";

export default function* rootSaga() {
  yield [
    fork(loginUserSaga),
    fork(activateQuestionSaga),
    fork(logoutUserSaga),
    fork(signupUserSaga),
    fork(fetchSessionsSaga),
    fork(createSessionSaga),
    fork(fetchQuestionsSaga),
    fork(updateSessionSaga),
    fork(getQuestionUrlSaga),
    fork(newImageUploadSaga),
    fork(deleteQuestionSaga),
    fork(activeSessionSaga),
    fork(activateSessionSaga),
    fork(deactivateQuestionSaga),
  ];
}
