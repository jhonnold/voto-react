import * as types from '../actions/types';

export const sessionsReducer = (state = [], action) => {
  const { type, payload } = action;
  let newState = state.slice();

  switch (type) {
    case types.SESSIONS_RESOLVED:
      return payload.data.sessions;
    case types.SESSIONS_REJECTED:
      return state.slice();
    case types.NEW_SESSION_RESOLVED:
      newState.splice(0, 0, payload.data);
      return newState;
    case types.SUBMIT_SESSION_RESOLVED:
      const { sessionId } = payload.data;
      const index = newState.findIndex(session => session.sessionId === sessionId);
      newState[index] = payload.data;
      return newState;
    default:
      return state.slice();
  }
};
