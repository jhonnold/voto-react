import * as types from "../actions/types";

const initialState = {
  isActive: false,
  index: 0,
};

const activeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.RESET_ACTIVE: {
      return initialState;
    }
    case types.SET_ACTIVE_INDEX: {
      return { ...state, index: payload };
    }
    case types.ACTIVATE: {
      return { ...state, isActive: true };
    }
    case types.DEACTIVATE: {
      return { ...state, isActive: false };
    }
    default:
      return state;
  }
};
export default activeReducer;
