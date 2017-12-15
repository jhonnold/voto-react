import types from './types';

export const login = ({ email, password }) => ({
  type: types.loginRequested,
  payload: {
    userName: email,
    password,
  },
});

export const signup = params => ({
  type: types.signupRequested,
  payload: params,
});
