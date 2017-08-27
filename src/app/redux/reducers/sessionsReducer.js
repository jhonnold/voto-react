import * as types from "../actions/types";

const sessionsReducer = (state = [], action) => {
  const { type, payload } = action;
  const newState = state.slice();

  switch (type) {
    case types.SESSIONS_RESOLVED: {
      return payload.data.sessions;
    }
    case types.SESSIONS_REJECTED: {
      return state.slice();
    }
    case types.NEW_SESSION_RESOLVED: {
      newState.splice(0, 0, payload.data[0]);
      return newState;
    }
    case types.SUBMIT_SESSION_RESOLVED: {
      const { sessionId } = payload.data[0];
      const index = newState.findIndex(
        session => session.sessionId === sessionId,
      );
      newState[index] = payload.data[0];
      return newState;
    }
    case types.GET_ACTIVE_RESOLVED: {
      return payload.data;
    }
    default: {
      return state.slice();
    }
  }
};

export default sessionsReducer;
