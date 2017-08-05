import * as types from '../actions/types';

export const sessionsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SESSIONS_RESOLVED:
      return payload.data.sessions;
    case types.SESSIONS_REJECTED:
      return state.slice();
    case types.NEW_SESSION_RESOLVED:
      let newState = state.slice();
      newState.splice(0, 0, payload.data);
      return newState;
    default:
      return state.slice();
  }
}
