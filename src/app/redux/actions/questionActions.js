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

export const getQuestionUrl = (filename) => {
  return {
    type: types.QUESTION_URL_REQUESTED,
    payload: {
      imgFileName: filename,
    }
  }
};

export const getQuestionUrlSuccess = (response) => {
  return {
    type: types.QUESTION_URL_RESOLVED,
    payload: response,
  }
};

export const getQuestionUrlFail = (err) => {
  return {
    type: types.QUESTION_URL_REJECTED,
    payload: err,
  }
};

export const onNewImage = (formData) => {
  return {
    type: types.NEW_IMAGE_REQUESTED,
    payload: formData,
  }
};

export const onNewImageSuccess = (response) => {
  return {
    type: types.NEW_IMAGE_RESOLVED,
    payload: response,
  }
};

export const onNewImageFail = (err) => {
  return {
    type: types.NEW_IMAGE_REJECTED,
    payload: err,
  }
};