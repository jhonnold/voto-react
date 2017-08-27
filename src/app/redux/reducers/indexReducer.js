import * as types from "../actions/types.js";

const indexReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
export default indexReducer;
