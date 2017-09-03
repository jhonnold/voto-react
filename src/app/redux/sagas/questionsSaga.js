import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../actions/types";
import DataApi from "../../shared/api/DataApi";
import {
  getSessionQuestionsSuccess,
  getSessionQuestionsFail,
  getQuestionUrlSuccess,
  getQuestionUrlFail,
  onNewImageSuccess,
  onNewImageFail,
  isPushingNewImage,
  deleteImageSuccess,
  deleteImageFail,
  activateQuestionSuccess,
  activateQuestionFail,
  deactivateQuestionSuccess,
  deactivateQuestionFail,
  postResponseSuccess,
  postResponseFail,
} from "../actions/questionActions";

function* fetchQuestions(action) {
  try {
    const response = yield call(DataApi.fetchQuestions, action.payload);
    yield put(getSessionQuestionsSuccess(response));
  } catch (err) {
    yield put(getSessionQuestionsFail(err));
  }
}

export function* fetchQuestionsSaga() {
  yield takeEvery(types.SESSION_QUESTIONS_REQUESTED, fetchQuestions);
}

function* getQuestionUrl(action) {
  try {
    const response = yield call(DataApi.getQuestionUrl, action.payload);
    yield put(
      getQuestionUrlSuccess({
        ...response.data,
        imgFileName: action.payload.imgFileName,
      }),
    );
  } catch (err) {
    yield put(getQuestionUrlFail(err));
  }
}

export function* getQuestionUrlSaga() {
  yield takeEvery(types.QUESTION_URL_REQUESTED, getQuestionUrl);
}

function* newImageUpload(action) {
  try {
    yield put(isPushingNewImage());
    const response = yield call(DataApi.newImageUpload, action.payload);
    yield put(onNewImageSuccess(response));
  } catch (err) {
    yield put(onNewImageFail(err));
  }
}

export function* newImageUploadSaga() {
  yield takeEvery(types.NEW_IMAGE_REQUESTED, newImageUpload);
}

function* deleteQuestion(action) {
  try {
    const response = yield call(DataApi.deleteQuestion, action.payload);
    yield put(deleteImageSuccess(response, action.payload.id));
  } catch (err) {
    yield put(deleteImageFail(err));
  }
}

export function* deleteQuestionSaga() {
  yield takeEvery(types.DELETE_QUESTION_REQUESTED, deleteQuestion);
}

function* activateQuestion(action) {
  try {
    const response = yield call(DataApi.activateQuestion, action.payload);
    yield put(activateQuestionSuccess(response));
  } catch (err) {
    yield put(activateQuestionFail(err));
  }
}

export function* activateQuestionSaga() {
  yield takeEvery(types.ACTIVATE_QUESTION_REQUESTED, activateQuestion);
}

function* deactivateQuestion(action) {
  try {
    const response = yield call(DataApi.deactivateQuestion, action.payload);
    yield put(deactivateQuestionSuccess(response));
  } catch (err) {
    yield put(deactivateQuestionFail(err));
  }
}

export function* deactivateQuestionSaga() {
  yield takeEvery(types.DEACTIVATE_QUESTION_REQUESTED, deactivateQuestion);
}

function* postResponse(action) {
  try {
    const response = yield call(DataApi.postResponse, action.payload);
    yield put(postResponseSuccess(response));
  } catch (err) {
    yield put(postResponseFail(err));
  }
}

export function* postResponseSaga() {
  yield takeEvery(types.POST_RESPONSE_REQUESTED, postResponse);
}
