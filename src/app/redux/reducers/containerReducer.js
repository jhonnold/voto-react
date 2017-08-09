import * as types from '../actions/types';

export const containerReducer = (state = {}, action) => {

  let { type, payload } = action;

  switch (type) {
    case types.CONTAINER_RESIZE:
      return {...state, width: payload};
    default:
      return state;
  }

};
