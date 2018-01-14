import types from './types';

export const login = ({ email, password }) => ({
  type: types.loginRequested,
  payload: {
    userName: email,
    password,
  },
});

export const logout = () => ({
  type: types.logout,
});

export const signup = params => ({
  type: types.signupRequested,
  payload: params,
});
