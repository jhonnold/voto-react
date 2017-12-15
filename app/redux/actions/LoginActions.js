import types from './types';

export const login = ({ email, password }) => ({
  type: types.loginRequested,
  payload: {
    userName: email,
    password,
  },
});

export const breaker2 = {};
