import * as types from "../actions/types";

const chartReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_RESPONSE: {
      if (state.map(r => r.userId).includes(payload.userId)) {
        return state.map((r) => {
          if (r.userId === payload.userId) {
            return payload;
          }
          return r;
        });
      }
      return state.concat(payload);
    }
    default: {
      return state;
    }
  }
};

export default chartReducer;
