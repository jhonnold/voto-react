import * as types from './types';

export const getSessions = () => {
  return {
    type: types.SESSIONS_REQUESTED,
  }
}

export const getSessionsSuccess = (response) => {
  return {
    type: types.SESSIONS_RESOLVED,
    payload: response,
  }
}

export const getSessionsFail = (err) => {
  return {
    type: types.SESSIONS_REJECTED,
    payload: err,
  }
}

export const newSession = (className, title, description) => {
  return {
    type: types.NEW_SESSION_REQUESTED,
    payload: {
      className,
      title,
      description,
    }
  }
}

export const newSessionSuccess = (response) => {
  return {
    type: types.NEW_SESSION_RESOLVED,
    payload: response,
  }
}

export const newSessionFail = (err) => {
  return {
    type: types.NEW_SESSION_REJECTED,
    payload: err,
  }
}
