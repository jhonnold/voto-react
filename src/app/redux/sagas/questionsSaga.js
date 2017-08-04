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