import * as types from '../actions/types';

export const userReducer = (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case types.LOGIN_USER_RESOLVED:
      return { ...state };
    case types.LOGIN_USER_REJECTED:
      return { ...state };
    case types.SIGNUP_USER_RESOLVED:
      return { ...state };
    case types.SIGNUP_USER_REJECTED:
      return { ...state };
    default:
      return { ...state };
  }
};
