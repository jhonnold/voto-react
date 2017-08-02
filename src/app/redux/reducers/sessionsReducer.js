import * as types from '../actions/types';

export const sessionsReducer = (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case types.SESSIONS_RESOLVED:
      return {...state};
    case types.SESSIONS_REJECTED:
      return {...state};
    default:
      return {...state};
  }
}
