import * as types from './types';

export const getSessionQuestions = (sessionId) => {
  return {
    type: types.SESSION_QUESTIONS_REQUESTED,
    payload: {
      sessionId,
    }
  }
};

export const getSessionQuestionsSuccess = (response) => {
  return {
    type: types.SESSION_QUESTIONS_RESOLVED,
    payload: response,
  }
};

export const getSessionQuestionsFail = (err) => {
  return {
    type: types.SESSION_QUESTIONS_REJECTED,
    payload: err,
  }
};