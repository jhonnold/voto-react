import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import * as types from '../actions/types';
import {
  DataApi
} from '../../shared/api/DataApi';
import {
  getSessionQuestionsSuccess,
  getSessionQuestionsFail,
  getQuestionUrlSuccess,
  getQuestionUrlFail,
  onNewImageSuccess,
  onNewImageFail,
  isPushingNewImage, deleteImageSuccess, deleteImageFail,
} from '../actions/questionActions';

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
    yield put(getQuestionUrlSuccess({...response.data, imgFileName: action.payload.imgFileName}));
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