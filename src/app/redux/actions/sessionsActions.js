import * as types from "./types";

export const getSessions = () => ({
  type: types.SESSIONS_REQUESTED,
});

export const getSessionsSuccess = response => ({
  type: types.SESSIONS_RESOLVED,
  payload: response,
});

export const getSessionsFail = err => ({
  type: types.SESSIONS_REJECTED,
  payload: err,
});

export const newSession = (className, title, description) => ({
  type: types.NEW_SESSION_REQUESTED,
  payload: {
    className,
    title,
    description,
  },
});

export const newSessionSuccess = response => ({
  type: types.NEW_SESSION_RESOLVED,
  payload: response,
});

export const newSessionFail = err => ({
  type: types.NEW_SESSION_REJECTED,
  payload: err,
});

export const setSelectedSession = data => ({
  type: types.SESSION_SELECTED,
  payload: data,
});

export const submitSession = (values, session) => {
  // FORMAT ALL THE QUESTIONS
  const formattedQuestions = session.questions.map((question, index) => ({
    ...question,
    orderNum: index,
    sessionId: session.sessionId,
  }));

  return {
    type: types.SUBMIT_SESSION_REQUESTED,
    payload: {
      ...session,
      questions: formattedQuestions,
      className: values.sessionClassName,
      title: values.sessionTitle,
      description: values.sessionDescription,
    },
  };
};

export const submitSessionSuccess = response => ({
  type: types.SUBMIT_SESSION_RESOLVED,
  payload: response,
});

export const submitSessionFail = err => ({
  type: types.SUBMIT_SESSION_REJECTED,
  payload: err,
});
