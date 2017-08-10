import * as types from '../actions/types';

const containerReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CONTAINER_RESIZE:
      return { ...state, width: payload };
    default:
      return state;
  }
};

export default containerReducer;
