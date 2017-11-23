import types from './types';

export const login = (userName, password) => ({
  type: types.loginRequested,
  payload: {
    userName,
    password,
  },
});

export const breaker2 = {};
