import * as types from './types';

export const loginUser = (username, password) => {
  return {
    type: types.LOGIN_USER_REQUESTED,
    payload: {
      userName: username,
      password
    },
  }
}

export const loginSuccess = (response) => {
  return {
    type: types.LOGIN_USER_RESOLVED,
    payload: response,
  }
}

export const loginFail = (err) => {
  return {
    type: types.LOGIN_USER_REJECTED,
    payload: err,
  }
}
