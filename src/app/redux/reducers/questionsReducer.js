import * as types from '../actions/types';

export const questionsReducer = (state = [], action) => {
  const { type, payload } = action;
  let newState = state.slice();

  switch (type) {
    case types.SESSION_QUESTIONS_RESOLVED:
      return action.payload;
    case types.SESSION_QUESTIONS_REJECTED:
      return newState;
    default:
      return state;
  }
};