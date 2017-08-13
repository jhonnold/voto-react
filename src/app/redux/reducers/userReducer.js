import * as types from "../actions/types";

const userReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_USER_RESOLVED: {
      return { ...state };
    }
    case types.LOGIN_USER_REJECTED: {
      return { ...state };
    }
    case types.SIGNUP_USER_RESOLVED: {
      return { ...state };
    }
    case types.SIGNUP_USER_REJECTED: {
      return { ...state };
    }
    case types.SET_LOGIN_STATE: {
      return {...state, loggedIn: payload};
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;
