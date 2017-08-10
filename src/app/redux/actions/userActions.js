import * as types from './types';

export const loginUser = (username, password) => ({
  type: types.LOGIN_USER_REQUESTED,
  payload: {
    userName: username,
    password,
  },
});

export const loginSuccess = response => ({
  type: types.LOGIN_USER_RESOLVED,
  payload: response,
});

export const loginFail = err => ({
  type: types.LOGIN_USER_REJECTED,
  payload: err,
});

export const signupUser = params => ({
  type: types.SIGNUP_USER_REQUESTED,
  payload: params,
});

export const signupSuccess = response => ({
  type: types.SIGNUP_USER_RESOLVED,
  payload: response,
});

export const signupFail = err => ({
  type: types.SIGNUP_USER_REJECTED,
  payload: err,
});
