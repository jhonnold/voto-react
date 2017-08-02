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
