import * as types from './types';
import {SUBMIT_SESSION_RESOLVED} from './types';
import {SUBMIT_SESSION_REJECTED} from './types';

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

export const setSelectedSession = (data) => {
  return {
    type: types.SESSION_SELECTED,
    payload: data,
  }
};

export const submitSession = (values, session) => {
  return {
    type: types.SUBMIT_SESSION_REQUESTED,
    payload: {
      ...session,
      className: values.sessionClassName,
      title: values.sessionTitle,
      description: values.sessionDescription,
    }
  }
};

export const submitSessionSuccess = (response) => {
  return {
    type: SUBMIT_SESSION_RESOLVED,
    payload: response,
  }
};

export const submitSessionFail = (err) => {
  return {
    type: SUBMIT_SESSION_REJECTED,
    payload: err,
  }
};
