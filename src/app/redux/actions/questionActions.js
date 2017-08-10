import * as types from './types';

export const getSessionQuestions = sessionId => ({
  type: types.SESSION_QUESTIONS_REQUESTED,
  payload: {
    sessionId,
  },
});

export const getSessionQuestionsSuccess = response => ({
  type: types.SESSION_QUESTIONS_RESOLVED,
  payload: response,
});

export const getSessionQuestionsFail = err => ({
  type: types.SESSION_QUESTIONS_REJECTED,
  payload: err,
});

export const getQuestionUrl = filename => ({
  type: types.QUESTION_URL_REQUESTED,
  payload: {
    imgFileName: filename,
  },
});

export const getQuestionUrlSuccess = response => ({
  type: types.QUESTION_URL_RESOLVED,
  payload: response,
});

export const getQuestionUrlFail = err => ({
  type: types.QUESTION_URL_REJECTED,
  payload: err,
});

export const onNewImage = formData => ({
  type: types.NEW_IMAGE_REQUESTED,
  payload: formData,
});

export const onNewImageSuccess = response => ({
  type: types.NEW_IMAGE_RESOLVED,
  payload: response,
});

export const onNewImageFail = err => ({
  type: types.NEW_IMAGE_REJECTED,
  payload: err,
});

export const isPushingNewImage = () => ({
  type: types.IS_PUSHING_NEW_IMAGE,
});

export const deleteImage = (question) => {
  let payload = {
    imgFileName: question.imgFileName,
    id: question.id,
  };

  if (question.questionId) {
    payload = {
      ...payload,
      questionId: question.questionId,
    };
  }

  return {
    type: types.DELETE_QUESTION_REQUESTED,
    payload,
  };
};

export const deleteImageSuccess = (response, id) => ({
  type: types.DELETE_QUESTION_RESOLVED,
  payload: {
    response,
    id,
  },
});

export const deleteImageFail = err => ({
  type: types.DELETE_QUESTION_REJECTED,
  payload: err,
});
