import { fork } from "redux-saga/effects";
import { loginUserSaga, logoutUserSaga } from "./loginSaga";
import signupUserSaga from "./signupSaga";
import {
  fetchSessionsSaga,
  createSessionSaga,
  updateSessionSaga,
} from "./sessionsSaga";
import {
  deleteQuestionSaga,
  fetchQuestionsSaga,
  getQuestionUrlSaga,
  newImageUploadSaga,
} from "./questionsSaga";

export default function* rootSaga() {
  yield [
    fork(loginUserSaga),
    fork(logoutUserSaga),
    fork(signupUserSaga),
    fork(fetchSessionsSaga),
    fork(createSessionSaga),
    fork(fetchQuestionsSaga),
    fork(updateSessionSaga),
    fork(getQuestionUrlSaga),
    fork(newImageUploadSaga),
    fork(deleteQuestionSaga),
  ];
}
