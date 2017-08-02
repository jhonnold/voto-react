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

export const signupUser = (params) => {
  return {
    type: types.SIGNUP_USER_REQUESTED,
    payload: params,
  }
}

export const signupSuccess = (response) => {
  return {
    type: types.SIGNUP_USER_RESOLVED,
    payload: response,
  }
}

export const signupFail = (err) => {
  return {
    type: types.SIGNUP_USER_REJECTED,
    payload: err,
  }
}
