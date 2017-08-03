import * as types from '../actions/types';

export const sessionsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SESSIONS_RESOLVED:
      return payload.data.sessions;
    case types.SESSIONS_REJECTED:
      return state.slice();
    default:
      return state.slice();
  }
}
