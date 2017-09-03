import * as types from "./types";

export const getSessions = params => ({
  type: types.SESSIONS_REQUESTED,
  payload: params,
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
    orderNumber: index,
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

export const activeSessions = () => ({
  type: types.GET_ACTIVE_REQUESTED,
});

export const activeSessionsSuccess = response => ({
  type: types.GET_ACTIVE_RESOLVED,
  payload: response,
});

export const activeSessionsFail = err => ({
  type: types.GET_ACTIVE_REJECTED,
  payload: err,
});

export const activateSession = sessionId => ({
  type: types.ACTIVATE_SESSION_REQUESTED,
  payload: { sessionId },
});

export const activateSessionSuccess = response => ({
  type: types.ACTIVATE_SESSION_RESOLVED,
  payload: response,
});

export const activateSessionFail = err => ({
  type: types.ACTIVATE_SESSION_REJECTED,
  payload: err,
});

export const deactivateSession = sessionId => ({
  type: types.DEACTIVATE_SESSION_REQUESTED,
  payload: { sessionId },
});

export const deactivateSessionSuccess = response => ({
  type: types.DEACTIVATE_SESSION_RESOLVED,
  payload: response,
});

export const deactivateSessionFail = err => ({
  type: types.DEACTIVATE_SESSION_REJECTED,
  payload: err,
});
